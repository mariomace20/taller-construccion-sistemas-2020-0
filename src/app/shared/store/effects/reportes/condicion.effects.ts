import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as fromCondicionQuery from '../../actions/reportes/condicion.actions';
import { switchMap, map, catchError, withLatestFrom } from 'rxjs/operators';
import { of } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import { GlobalMessages } from '../../reducers/global.reducer';
import { HttpErrorResponse } from '@angular/common/http';
import { CondicionQueryService } from '../../../../reportes/user/services/condicion.service';

@Injectable()
export class CondicionQueryEffects {

  constructor(
    private actions$: Actions,
    private store$: Store<AppState>,
    private condicionQueryService: CondicionQueryService
  ) { }

  @Effect()
  GetAll$ = this.actions$
    .pipe(
      ofType(fromCondicionQuery.actions.GET_ALL),
      switchMap(() => {
        return this.condicionQueryService.buscarTodos()
          .pipe(
            map(res => {
              //console.log(res);
              return new fromCondicionQuery.GetAllCondicionQuerySuccess(res);
            }),
            catchError((err) => {
              //console.log(err);
              return of(new fromCondicionQuery.GetAllCondicionQueryFail(err));
            })
          )
      })
    );

    @Effect()
    GetCriterio$ = this.actions$
      .pipe(
        ofType(fromCondicionQuery.actions.GET_CRITERIO),
        switchMap((action: fromCondicionQuery.GetCriterioCondicionQuery) => {
          return this.condicionQueryService.buscarPorCriterios(action.payload)
            .pipe(
              map(res => {
                //console.log(res)
                return new fromCondicionQuery.GetCriterioCondicionQuerySuccess(res);
              }),
              catchError((err) => of(new fromCondicionQuery.GetCriterioCondicionQueryFail(err)))
            )
        })
      );

  @Effect()
  AddCampoQuery$ = this.actions$
    .pipe(
      ofType(fromCondicionQuery.actions.ADD),
      withLatestFrom(this.store$.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromCondicionQuery.AddCondicionQuery, GlobalMessages]) => {
        return this.condicionQueryService.registrar(action.payload)
          .pipe(
            map(res => {
              return new fromCondicionQuery.AddCondicionQuerySuccess({ data: res, message: messages.ADD_SUCCESS });
            }),
            catchError((err: HttpErrorResponse) => {
              return of(new fromCondicionQuery.AddCondicionQueryFail(err))
            })
          )
      })
    );

  @Effect()
  UpdateCampoQuery$ = this.actions$
    .pipe(
      ofType(fromCondicionQuery.actions.UPDATE),
      withLatestFrom(this.store$.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromCondicionQuery.UpdateCondicionQuery, GlobalMessages]) => {
        return this.condicionQueryService.actualizar(action.payload)
          .pipe(
            map(res => {
              return new fromCondicionQuery.UpdateCondicionQuerySuccess({ data: res, message: messages.UPDATE_SUCCESS });
            }),
            catchError((err: HttpErrorResponse) => {
              return of(new fromCondicionQuery.UpdateCondicionQueryFail(err))
            })
          )
      })
    );

  @Effect()
  DeleteCampoQuery$ = this.actions$
    .pipe(
      ofType(fromCondicionQuery.actions.DELETE),
      withLatestFrom(this.store$.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromCondicionQuery.DeleteCondicionQuery, GlobalMessages]) => {
        return this.condicionQueryService.eliminar(action.payload)
          .pipe(
            map(res => {
              return new fromCondicionQuery.DeleteCondicionQuerySuccess({ message: messages.DELETE_SUCCESS });
            }),
            catchError((err: HttpErrorResponse) => {
              return of(new fromCondicionQuery.DeleteCondicionQueryFail(err))
            })
          )
      })
    );



}
