import { Injectable } from '@angular/core';
import { TarifarioSurchargeService } from '../../../../tarifario/services/tarifario-surcharge.service';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as fromTarifarioSurcharge from '../../actions/tarifario/tarifario-surcharge.actions';
import { switchMap, map, catchError, withLatestFrom } from 'rxjs/operators';
import { of } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import { GlobalMessages } from '../../reducers/global.reducer';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class TarifarioSurchargeEffects {

  constructor(
    private actions$: Actions,
    private store$: Store<AppState>,
    private tarifarioSurchargeService: TarifarioSurchargeService
  ) { }

  @Effect()
  GetAll$ = this.actions$
    .pipe(
      ofType(fromTarifarioSurcharge.actions.GET_ALL),
      switchMap(() => {
        return this.tarifarioSurchargeService.buscarTodos()
          .pipe(
            map(res => {
              return new fromTarifarioSurcharge.GetAllTarifarioSurchargeSuccess(res);
            }),
            catchError((err) => {
              return of(new fromTarifarioSurcharge.GetAllTarifarioSurchargeFail(err));
            })
          )
      })
    );

  @Effect()
  AddTarifarioSurcharge$ = this.actions$
    .pipe(
      ofType(fromTarifarioSurcharge.actions.ADD),
      withLatestFrom(this.store$.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromTarifarioSurcharge.AddTarifarioSurcharge, GlobalMessages]) => {
        return this.tarifarioSurchargeService.registrar(action.payload)
          .pipe(
            map(res => {
              return new fromTarifarioSurcharge.AddTarifarioSurchargeSuccess({ data: res, message: messages.ADD_SUCCESS });
            }),
            catchError((err: HttpErrorResponse) => {
              return of(new fromTarifarioSurcharge.AddTarifarioSurchargeFail(err))
            })
          )
      })
    );

  @Effect()
  UpdateTarifarioSurcharge$ = this.actions$
    .pipe(
      ofType(fromTarifarioSurcharge.actions.UPDATE),
      withLatestFrom(this.store$.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromTarifarioSurcharge.UpdateTarifarioSurcharge, GlobalMessages]) => {
        return this.tarifarioSurchargeService.actualizar(action.payload)
          .pipe(
            map(res => {
              return new fromTarifarioSurcharge.UpdateTarifarioSurchargeSuccess({ data: res, message: messages.UPDATE_SUCCESS });
            }),
            catchError((err: HttpErrorResponse) => {
              return of(new fromTarifarioSurcharge.UpdateTarifarioSurchargeFail(err))
            })
          )
      })
    );

  @Effect()
  DeleteTarifarioSurcharge$ = this.actions$
    .pipe(
      ofType(fromTarifarioSurcharge.actions.DELETE),
      withLatestFrom(this.store$.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromTarifarioSurcharge.DeleteTarifarioSurcharge, GlobalMessages]) => {
        return this.tarifarioSurchargeService.eliminar(action.payload)
          .pipe(
            map(res => {
              return new fromTarifarioSurcharge.DeleteTarifarioSurchargeSuccess({ message: messages.DELETE_SUCCESS });
            }),
            catchError((err: HttpErrorResponse) => {
              return of(new fromTarifarioSurcharge.DeleteTarifarioSurchargeFail(err))
            })
          )
      })
    );
    
  @Effect()
  Export$ = this.actions$
    .pipe(
      ofType(fromTarifarioSurcharge.actions.DOWNLOAD),
      withLatestFrom(this.store$.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromTarifarioSurcharge.DownloadTarifarioSurcharge, GlobalMessages]) => {
        return this.tarifarioSurchargeService.exportar()
          .pipe(
            map(res => new fromTarifarioSurcharge.DownloadTarifarioSurchargeSuccess({ message: messages.DOWNLOAD_SUCCESS })),
            catchError((err: HttpErrorResponse) => of(new fromTarifarioSurcharge.DownloadTarifarioSurchargeFail(err)))
          )
      })
    );

}
