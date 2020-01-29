import { Injectable } from '@angular/core';
import { GrupoBinTarifaService } from '../../../../tarifario/services';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as fromGrupoBinTarifa from '../../actions/tarifario/grupo-bin-tarifa.actions';
import { switchMap, map, catchError, withLatestFrom } from 'rxjs/operators';
import { of } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import { GlobalMessages } from '../../reducers/global.reducer';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class GrupoBinTarifaEffects {

  constructor(
    private actions$: Actions,
    private store$: Store<AppState>,
    private grupoBinTarifaService: GrupoBinTarifaService
  ) { }

  @Effect()
  GetAll$ = this.actions$
    .pipe(
      ofType(fromGrupoBinTarifa.actions.GET_ALL),
      switchMap(() => {
        return this.grupoBinTarifaService.buscarTodos()
          .pipe(
            map(res => {
              return new fromGrupoBinTarifa.GetAllGrupoBinTarifaSuccess(res);
            }),
            catchError((err) => {
              return of(new fromGrupoBinTarifa.GetAllGrupoBinTarifaFail(err));
            })
          )
      })
    );

  @Effect()
  GetAllGrouping$ = this.actions$
    .pipe(
      ofType(fromGrupoBinTarifa.actions.GET_ALL_GROUPING),
      switchMap(() => {
        return this.grupoBinTarifaService.buscarTodosAgrupado()
          .pipe(
            map(res => {
              return new fromGrupoBinTarifa.GetAllGrupoBinTarifaAgrupadoSuccess(res);
            }),
            catchError((err) => {
              return of(new fromGrupoBinTarifa.GetAllGrupoBinTarifaAgrupadoFail(err));
            })
          )
      })
    );

  @Effect()
  AddGrupoBinTarifa$ = this.actions$
    .pipe(
      ofType(fromGrupoBinTarifa.actions.ADD),
      withLatestFrom(this.store$.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromGrupoBinTarifa.AddGrupoBinTarifa, GlobalMessages]) => {
        return this.grupoBinTarifaService.registrar(action.payload)
          .pipe(
            map(res => {
              return new fromGrupoBinTarifa.AddGrupoBinTarifaSuccess({ data: res, message: messages.ADD_SUCCESS });
            }),
            catchError((err: HttpErrorResponse) => {
              return of(new fromGrupoBinTarifa.AddGrupoBinTarifaFail(err))
            })
          )
      })
    );

  @Effect()
  UpdateGrupoBinTarifa$ = this.actions$
    .pipe(
      ofType(fromGrupoBinTarifa.actions.UPDATE),
      withLatestFrom(this.store$.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromGrupoBinTarifa.UpdateGrupoBinTarifa, GlobalMessages]) => {
        return this.grupoBinTarifaService.actualizar(action.payload)
          .pipe(
            map(res => {
              return new fromGrupoBinTarifa.UpdateGrupoBinTarifaSuccess({ data: res, message: messages.UPDATE_SUCCESS });
            }),
            catchError((err: HttpErrorResponse) => {
              return of(new fromGrupoBinTarifa.UpdateGrupoBinTarifaFail(err))
            })
          )
      })
    );

  @Effect()
  DeleteGrupoBinTarifa$ = this.actions$
    .pipe(
      ofType(fromGrupoBinTarifa.actions.DELETE),
      withLatestFrom(this.store$.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromGrupoBinTarifa.DeleteGrupoBinTarifa, GlobalMessages]) => {
        return this.grupoBinTarifaService.eliminar(action.payload)
          .pipe(
            map(res => {
              return new fromGrupoBinTarifa.DeleteGrupoBinTarifaSuccess({ message: messages.DELETE_SUCCESS });
            }),
            catchError((err: HttpErrorResponse) => {
              return of(new fromGrupoBinTarifa.DeleteGrupoBinTarifaFail(err))
            })
          )
      })
    );

  @Effect()
  Export$ = this.actions$
    .pipe(
      ofType(fromGrupoBinTarifa.actions.DOWNLOAD),
      withLatestFrom(this.store$.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromGrupoBinTarifa.DownloadGrupoBinTarifa, GlobalMessages]) => {
        return this.grupoBinTarifaService.exportar()
          .pipe(
            map(res => new fromGrupoBinTarifa.DownloadGrupoBinTarifaSuccess({ message: messages.DOWNLOAD_SUCCESS })),
            catchError((err: HttpErrorResponse) => of(new fromGrupoBinTarifa.DownloadGrupoBinTarifaFail(err)))
          )
      })
    );


}
