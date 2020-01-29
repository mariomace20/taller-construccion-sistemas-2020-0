import { Injectable } from '@angular/core';
import { Actions, ofType, Effect } from '@ngrx/effects';
import { PaqueteService } from '../../../../conciliacion/services';
import { AppState } from '../../app.reducers';
import { Store } from '@ngrx/store';
import * as fromPaquete from '../../actions/conciliacion/paquete.actions';
import { switchMap, map, catchError, withLatestFrom } from 'rxjs/operators';
import { of } from 'rxjs';
import { GlobalMessages } from '../../reducers/global.reducer';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class PaqueteEffects {

  constructor(
    private actions$: Actions,
    private store: Store<AppState>,
    private paqueteService: PaqueteService
  ) { }

  @Effect()
  GetAll$ = this.actions$
    .pipe(
      ofType(fromPaquete.actions.GET_ALL),
      switchMap(() => {
        return this.paqueteService.buscarTodos()
          .pipe(
            map(res => {
              return new fromPaquete.GetAllPaqueteSuccess(res);
            }),
            catchError(err => {
              return of(new fromPaquete.GetAllPaqueteFail(err));
            })
          )
      })
    );

  @Effect()
  AddPaquete$ = this.actions$
    .pipe(
      ofType(fromPaquete.actions.ADD),
      withLatestFrom(this.store.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromPaquete.AddPaquete, GlobalMessages]) => {
        return this.paqueteService.registrar(action.payload)
          .pipe(
            map(res => {
              return new fromPaquete.AddPaqueteSuccess({ data: res, message: messages.ADD_SUCCESS });
            }),
            catchError((err: HttpErrorResponse) => {
              return of(new fromPaquete.AddPaqueteFail(err));
            })
          )
      })
    );

  @Effect()
  UpdatePaquete$ = this.actions$
    .pipe(
      ofType(fromPaquete.actions.UPDATE),
      withLatestFrom(this.store.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromPaquete.UpdatePaquete, GlobalMessages]) => {
        return this.paqueteService.actualizar(action.payload)
          .pipe(
            map(res => {
              return new fromPaquete.UpdatePaqueteSuccess({ data: res, message: messages.UPDATE_SUCCESS });
            }),
            catchError((err: HttpErrorResponse) => of(new fromPaquete.UpdatePaqueteFail(err)))
          )
      })
    );

  @Effect()
  DeletePaquete = this.actions$
    .pipe(
      ofType(fromPaquete.actions.DELETE),
      withLatestFrom(this.store.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromPaquete.UpdatePaquete, GlobalMessages]) => {
        return this.paqueteService.eliminar(action.payload)
          .pipe(
            map(res => new fromPaquete.DeletePaqueteSuccess({ message: messages.DELETE_SUCCESS })),
            catchError((err: HttpErrorResponse) => of(new fromPaquete.DeletePaqueteFail(err)))
          )
      })
    );

}
