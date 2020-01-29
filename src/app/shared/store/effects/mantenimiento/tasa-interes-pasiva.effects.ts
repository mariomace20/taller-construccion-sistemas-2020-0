import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import {TasaInteresPasivaService} from '../../../../mantenimiento/services/tasa-interes-pasiva.service';
import * as fromTasaInteresPasiva from '../../actions/mantenimiento/tasa-interes-pasiva.actions';
import { switchMap, map, catchError, withLatestFrom } from 'rxjs/operators';
import { of } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import { GlobalMessages } from '../../reducers/global.reducer';
import { HttpErrorResponse } from '@angular/common/http';
import {addLabelToObjsArr, sortByAttr} from '../../../utils';

@Injectable()
export class TasaInteresPasivaEffects {

  constructor(
    private actions$: Actions,
    private store$: Store<AppState>,
    private tasaInteresPasivaService: TasaInteresPasivaService
  ) { }

  @Effect()
  GetAll$ = this.actions$
    .pipe(
      ofType(fromTasaInteresPasiva.actions.GET_ALL),
      switchMap(() => {
        return this.tasaInteresPasivaService.buscarTodos()
          .pipe(

            map(res => {
              sortByAttr(res, 'fechaProceso');
              addLabelToObjsArr(
                res,
                'label',
                false,
                'fechaProceso',
                'fechaAfectMonedaBase',
                'fechaAfectMonedaAlterna',
                'tasaInteresMonedaBase',
                'tasaInteresMonedaAlterna',
                'factorDiarioMonedaBase',
                'factorDiarioMonedaAlterna'
              );
              return new fromTasaInteresPasiva.GetAllTasaInteresPasivaSuccess(res);
            }),

            catchError((err) => {
              return of(new fromTasaInteresPasiva.GetAllTasaInteresPasivaFail(err));
            })

          );
      })
    );

  @Effect()
  AddTasaInteresPasiva$ = this.actions$
    .pipe(
      ofType(fromTasaInteresPasiva.actions.ADD),
      withLatestFrom(this.store$.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromTasaInteresPasiva.AddTasaInteresPasiva, GlobalMessages]) => {
        return this.tasaInteresPasivaService.registrar(action.payload)
          .pipe(
            map(res => {
              return new fromTasaInteresPasiva.AddTasaInteresPasivaSuccess({ data: res, message: messages.ADD_SUCCESS });
            }),
            catchError((err: HttpErrorResponse) => {
              return of(new fromTasaInteresPasiva.AddTasaInteresPasivaFail(err));
            })
          );
      })
    );

  @Effect()
  UpdateTasaInteresPasiva$ = this.actions$
    .pipe(
      ofType(fromTasaInteresPasiva.actions.UPDATE),
      withLatestFrom(this.store$.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromTasaInteresPasiva.UpdateTasaInteresPasiva, GlobalMessages]) => {
        return this.tasaInteresPasivaService.actualizar(action.payload)
          .pipe(
            map(res => {
              return new fromTasaInteresPasiva.UpdateTasaInteresPasivaSuccess({ data: res, message: messages.UPDATE_SUCCESS });
            }),
            catchError((err: HttpErrorResponse) => {
              return of(new fromTasaInteresPasiva.UpdateTasaInteresPasivaFail(err));
            })
          );
      })
    );

  @Effect()
  DeleteTasaInteresPasiva$ = this.actions$
    .pipe(
      ofType(fromTasaInteresPasiva.actions.DELETE),
      withLatestFrom(this.store$.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromTasaInteresPasiva.DeleteTasaInteresPasiva, GlobalMessages]) => {
        return this.tasaInteresPasivaService.eliminar(action.payload)
          .pipe(
            map(res => {
              return new fromTasaInteresPasiva.DeleteTasaInteresPasivaSuccess({ message: messages.DELETE_SUCCESS });
            }),
            catchError((err: HttpErrorResponse) => {
              return of(new fromTasaInteresPasiva.DeleteTasaInteresPasivaFail(err));
            })
          );
      })
    );

  @Effect()
  Export$ = this.actions$
    .pipe(
      ofType(fromTasaInteresPasiva.actions.DOWNLOAD),
      withLatestFrom(this.store$.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromTasaInteresPasiva.DownloadTasaInteresPasiva, GlobalMessages]) => {
        return this.tasaInteresPasivaService.exportar()
          .pipe(
            map(res => new fromTasaInteresPasiva.DownloadTasaInteresPasivaSuccess({ message: messages.DOWNLOAD_SUCCESS })),
            catchError((err: HttpErrorResponse) => of(new fromTasaInteresPasiva.DownloadTasaInteresPasivaFail(err)))
          );
      })
  );
}
