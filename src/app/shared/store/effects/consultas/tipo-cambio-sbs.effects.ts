import { Injectable } from '@angular/core';
import { TipoCambioSBSService } from '../../../../consultas/service/tipo-cambio-sbs.service';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as fromTipoCambioSBS from '../../actions/consultas/tipo-cambio-sbs.actions';
import { switchMap, map, catchError, withLatestFrom } from 'rxjs/operators';
import { of } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import { GlobalMessages } from '../../reducers/global.reducer';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class TipoCambioSBSEffects {

  constructor(
    private actions$: Actions,
    private store$: Store<AppState>,
    private tipoCambioSBSService: TipoCambioSBSService
  ) { }

  @Effect()
  GetAll$ = this.actions$
    .pipe(
      ofType(fromTipoCambioSBS.actions.GET_ALL),
      switchMap(() => {
        return this.tipoCambioSBSService.buscarTodos()
          .pipe(
            map(res => {
              return new fromTipoCambioSBS.GetAllTipoCambioSBSSuccess(res);
            }),
            catchError((err) => {

              return of(new fromTipoCambioSBS.GetAllTipoCambioSBSFail(err));
            })
          )
      })
    );

  @Effect()
  AddTipoCambioSBS$ = this.actions$
    .pipe(
      ofType(fromTipoCambioSBS.actions.ADD),
      withLatestFrom(this.store$.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromTipoCambioSBS.AddTipoCambioSBS, GlobalMessages]) => {
        return this.tipoCambioSBSService.registrar(action.payload)
          .pipe(
            map(res => {
              return new fromTipoCambioSBS.AddTipoCambioSBSSuccess({ data: res, message: messages.ADD_SUCCESS });
            }),
            catchError((err: HttpErrorResponse) => {
              return of(new fromTipoCambioSBS.AddTipoCambioSBSFail(err))
            })
          )
      })
    );

  @Effect()
  UpdateTipoCambioSBS$ = this.actions$
    .pipe(
      ofType(fromTipoCambioSBS.actions.UPDATE),
      withLatestFrom(this.store$.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromTipoCambioSBS.UpdateTipoCambioSBS, GlobalMessages]) => {
        return this.tipoCambioSBSService.actualizar(action.payload)
          .pipe(
            map(res => {
              return new fromTipoCambioSBS.UpdateTipoCambioSBSSuccess({ data: res, message: messages.UPDATE_SUCCESS });
            }),
            catchError((err: HttpErrorResponse) => {
              return of(new fromTipoCambioSBS.UpdateTipoCambioSBSFail(err))
            })
          )
      })
    );

  @Effect()
  DeleteTipoCambioSBS$ = this.actions$
    .pipe(
      ofType(fromTipoCambioSBS.actions.DELETE),
      withLatestFrom(this.store$.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromTipoCambioSBS.DeleteTipoCambioSBS, GlobalMessages]) => {
        return this.tipoCambioSBSService.eliminar(action.payload)
          .pipe(
            map(res => {
              return new fromTipoCambioSBS.DeleteTipoCambioSBSSuccess({ message: messages.DELETE_SUCCESS });
            }),
            catchError((err: HttpErrorResponse) => {
              return of(new fromTipoCambioSBS.DeleteTipoCambioSBSFail(err))
            })
          )
      })
    );

}
