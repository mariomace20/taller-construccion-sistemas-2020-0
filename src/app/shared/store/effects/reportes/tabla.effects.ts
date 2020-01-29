import { Injectable } from '@angular/core';
import { TablaService } from '../../../../reportes/user/services/tabla.service';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as fromTabla from '../../actions/reportes/tabla.actions';
import { switchMap, map, catchError, withLatestFrom } from 'rxjs/operators';
import { of } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import { GlobalMessages } from '../../reducers/global.reducer';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class TablaEffects {

  constructor(
    private actions$: Actions,
    private store$: Store<AppState>,
    private TablaService: TablaService
  ) {
   }

  @Effect()
  GetAll$ = this.actions$
    .pipe(
      ofType(fromTabla.actions.GET_ALL),
      switchMap(() => {
        return this.TablaService.buscarTodos()
          .pipe(
            map(res => {
              //console.log(res);
              return new fromTabla.GetAllTablaSuccess(res);
            }),
            catchError((err) => {
              //console.log(err);
              return of(new fromTabla.GetAllTablaFail(err));
            })
          )
      })
    );

    GetAllPermitidasTabla$ = this.actions$
    .pipe(
      ofType(fromTabla.actions.GET_PERMITED),
      switchMap(() => {
        return this.TablaService.buscarPermitidos()
          .pipe(
            map(res => {
              //console.log(res);
              return new fromTabla.GetAllPermitidasTablaSuccess(res);
            }),
            catchError((err) => {
              //console.log(err);
              return of(new fromTabla.GetAllPermitidasTablaFail(err));
            })
          )
      })
    );

    @Effect()
    UpdateTabla$ = this.actions$
      .pipe(
        ofType(fromTabla.actions.UPDATE),
        withLatestFrom(this.store$.select('globalData', 'messages')),
        switchMap(([action, messages]: [fromTabla.UpdateTabla, GlobalMessages]) => {
          return this.TablaService.actualizar(action.payload)
            .pipe(
              map(res => {
                return new fromTabla.UpdateTablaSuccess({ data: res, message: messages.UPDATE_SUCCESS });
              }),
              catchError((err: HttpErrorResponse) => {
                return of(new fromTabla.UpdateTablaFail(err))
              })
            )
        })
      );
}
