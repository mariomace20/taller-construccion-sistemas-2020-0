import { Injectable } from '@angular/core';
import { TipoTarifaService } from '../../../../tarifario/services/tipo-tarifa.service';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as fromTipoTarifa from '../../actions/tarifario/tipo-tarifa.actions';
import { switchMap, map, catchError, withLatestFrom } from 'rxjs/operators';
import { of } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import { GlobalMessages } from '../../reducers/global.reducer';
import { HttpErrorResponse } from '@angular/common/http';
import { addLabelToObjsArr } from '../../../utils';

@Injectable()
export class TipoTarifaEffects {

  constructor(
    private actions$: Actions,
    private store$: Store<AppState>,
    private tipoTarifaService: TipoTarifaService
  ) { }

  @Effect()
  GetAll$ = this.actions$
    .pipe(
      ofType(fromTipoTarifa.actions.GET_ALL),
      switchMap(() => {
        return this.tipoTarifaService.buscarTodos()
          .pipe(
            map(res => {
              addLabelToObjsArr(res, 'label', false, 'idTarifa', 'descripcionTipoTarifa');
              return new fromTipoTarifa.GetAllTipoTarifaSuccess(res);
            }),
            catchError((err) => {
              return of(new fromTipoTarifa.GetAllTipoTarifaFail(err));
            })
          )
      })
    );

  @Effect()
  AddTipoTarifa$ = this.actions$
    .pipe(
      ofType(fromTipoTarifa.actions.ADD),
      withLatestFrom(this.store$.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromTipoTarifa.AddTipoTarifa, GlobalMessages]) => {
        return this.tipoTarifaService.registrar(action.payload)
          .pipe(
            map(res => {
              return new fromTipoTarifa.AddTipoTarifaSuccess({ data: res, message: messages.ADD_SUCCESS });
            }),
            catchError((err: HttpErrorResponse) => {
              return of(new fromTipoTarifa.AddTipoTarifaFail(err))
            })
          )
      })
    );

  @Effect()
  UpdateTipoTarifa$ = this.actions$
    .pipe(
      ofType(fromTipoTarifa.actions.UPDATE),
      withLatestFrom(this.store$.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromTipoTarifa.UpdateTipoTarifa, GlobalMessages]) => {
        return this.tipoTarifaService.actualizar(action.payload)
          .pipe(
            map(res => {
              return new fromTipoTarifa.UpdateTipoTarifaSuccess({ data: res, message: messages.UPDATE_SUCCESS });
            }),
            catchError((err: HttpErrorResponse) => {
              return of(new fromTipoTarifa.UpdateTipoTarifaFail(err))
            })
          )
      })
    );

  @Effect()
  DeleteTipoTarifa$ = this.actions$
    .pipe(
      ofType(fromTipoTarifa.actions.DELETE),
      withLatestFrom(this.store$.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromTipoTarifa.DeleteTipoTarifa, GlobalMessages]) => {
        return this.tipoTarifaService.eliminar(action.payload)
          .pipe(
            map(res => {
              return new fromTipoTarifa.DeleteTipoTarifaSuccess({ message: messages.DELETE_SUCCESS });
            }),
            catchError((err: HttpErrorResponse) => {
              return of(new fromTipoTarifa.DeleteTipoTarifaFail(err))
            })
          )
      })
    );
    @Effect()
    Export$ = this.actions$
      .pipe(
        ofType(fromTipoTarifa.actions.DOWNLOAD),
        withLatestFrom(this.store$.select('globalData', 'messages')),
        switchMap(([action, messages]: [fromTipoTarifa.DownloadTipoTarifa, GlobalMessages]) => {
          return this.tipoTarifaService.exportar()
            .pipe(
              map(res => new fromTipoTarifa.DownloadTipoTarifaSuccess({ message: messages.DOWNLOAD_SUCCESS })),
              catchError((err: HttpErrorResponse) => of(new fromTipoTarifa.DownloadTipoTarifaFail(err)))
            )
        })
      );

}
