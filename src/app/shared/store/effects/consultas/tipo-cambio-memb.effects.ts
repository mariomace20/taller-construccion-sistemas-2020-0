import { Injectable } from '@angular/core';
import { TipoCambioMembService } from '../../../../consultas/service/tipo-cambio-memb.service';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as fromTipoCambioMemb from '../../actions/consultas/tipo-cambio-memb.actions';
import { switchMap, map, catchError, withLatestFrom } from 'rxjs/operators';
import { of } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import { GlobalMessages } from '../../reducers/global.reducer';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class TipoCambioMembEffects {

  constructor(
    private actions$: Actions,
    private store$: Store<AppState>,
    private tipoCambioMembService: TipoCambioMembService
  ) { }

  @Effect()
  GetAll$ = this.actions$
    .pipe(
      ofType(fromTipoCambioMemb.actions.GET_ALL),
      switchMap(() => {
        return this.tipoCambioMembService.buscarTodos()
          .pipe(
            map(res => {
              return new fromTipoCambioMemb.GetAllTipoCambioMembSuccess(res);
            }),
            catchError((err) => {

              return of(new fromTipoCambioMemb.GetAllTipoCambioMembFail(err));
            })
          )
      })
    );

  @Effect()
  AddTipoCambioMemb$ = this.actions$
    .pipe(
      ofType(fromTipoCambioMemb.actions.ADD),
      withLatestFrom(this.store$.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromTipoCambioMemb.AddTipoCambioMemb, GlobalMessages]) => {
        return this.tipoCambioMembService.registrar(action.payload)
          .pipe(
            map(res => {
              return new fromTipoCambioMemb.AddTipoCambioMembSuccess({ data: res, message: messages.ADD_SUCCESS });
            }),
            catchError((err: HttpErrorResponse) => {
              return of(new fromTipoCambioMemb.AddTipoCambioMembFail(err))
            })
          )
      })
    );

  @Effect()
  UpdateTipoCambioMemb$ = this.actions$
    .pipe(
      ofType(fromTipoCambioMemb.actions.UPDATE),
      withLatestFrom(this.store$.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromTipoCambioMemb.UpdateTipoCambioMemb, GlobalMessages]) => {
        return this.tipoCambioMembService.actualizar(action.payload)
          .pipe(
            map(res => {
              return new fromTipoCambioMemb.UpdateTipoCambioMembSuccess({ data: res, message: messages.UPDATE_SUCCESS });
            }),
            catchError((err: HttpErrorResponse) => {
              return of(new fromTipoCambioMemb.UpdateTipoCambioMembFail(err))
            })
          )
      })
    );

  @Effect()
  DeleteTipoCambioMemb$ = this.actions$
    .pipe(
      ofType(fromTipoCambioMemb.actions.DELETE),
      withLatestFrom(this.store$.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromTipoCambioMemb.DeleteTipoCambioMemb, GlobalMessages]) => {
        return this.tipoCambioMembService.eliminar(action.payload)
          .pipe(
            map(res => {
              return new fromTipoCambioMemb.DeleteTipoCambioMembSuccess({ message: messages.DELETE_SUCCESS });
            }),
            catchError((err: HttpErrorResponse) => {
              return of(new fromTipoCambioMemb.DeleteTipoCambioMembFail(err))
            })
          )
      })
    );

}
