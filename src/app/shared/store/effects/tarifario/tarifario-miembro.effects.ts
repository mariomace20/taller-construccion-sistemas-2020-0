import { Injectable } from '@angular/core';
import { TarifarioMiembroService } from '../../../../tarifario/services/tarifario-miembro.service';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as fromTarifarioMiembro from '../../actions/tarifario/tarifario-miembro.actions';
import { switchMap, map, catchError, withLatestFrom } from 'rxjs/operators';
import { of } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import { GlobalMessages } from '../../reducers/global.reducer';
import { HttpErrorResponse } from '@angular/common/http';
import {addLabelToObjsArr, sortByAttr} from '../../../utils';

@Injectable()
export class TarifarioMiembroEffects {

  constructor(
    private actions$: Actions,
    private store$: Store<AppState>,
    private tarifarioMiembroService: TarifarioMiembroService
  ) { }

  @Effect()
  GetAll$ = this.actions$
    .pipe(
      ofType(fromTarifarioMiembro.actions.GET_ALL),
      switchMap(() => {
        return this.tarifarioMiembroService.buscarTodos()
          .pipe(
            map(res => {
              sortByAttr(res, 'idTarifarioMiembro');
              addLabelToObjsArr(
                res,
                'label',
                false,
                'idTarifarioMiembro',
                'idMembresia: string',
                'descripcionMembresia',
                'idProducto',
                'descripcionProducto',
                'idInstitucionEmisora',
                'descripcionInstitucionEmisora',
                'idInstitucionReceptora',
                'descripcionInstitucionReceptora',
                'idClaseTransaccion',
                'idCodigoTransaccion',
                'descripcionTransaccion',
                'esAtmPropio',
                'esTransaccionAprobada',
                'tarifaPorcentaje',
                'idMoneda',
                'descripcionMoneda',
                'tarifaFlat'
              );
              return new fromTarifarioMiembro.GetAllTarifarioMiembroSuccess(res);
            }),
            catchError((err) => {
              return of(new fromTarifarioMiembro.GetAllTarifarioMiembroFail(err));
            })
          )
      })
    );

  @Effect()
  AddTarifarioMiembro$ = this.actions$
    .pipe(
      ofType(fromTarifarioMiembro.actions.ADD),
      withLatestFrom(this.store$.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromTarifarioMiembro.AddTarifarioMiembro, GlobalMessages]) => {
        return this.tarifarioMiembroService.registrar(action.payload)
          .pipe(
            map(res => {
              return new fromTarifarioMiembro.AddTarifarioMiembroSuccess({ data: res, message: messages.ADD_SUCCESS });
            }),
            catchError((err: HttpErrorResponse) => {
              return of(new fromTarifarioMiembro.AddTarifarioMiembroFail(err))
            })
          );
      })
    );

  @Effect()
  UpdateTarifarioMiembro$ = this.actions$
    .pipe(
      ofType(fromTarifarioMiembro.actions.UPDATE),
      withLatestFrom(this.store$.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromTarifarioMiembro.UpdateTarifarioMiembro, GlobalMessages]) => {
        return this.tarifarioMiembroService.actualizar(action.payload)
          .pipe(
            map(res => {
              return new fromTarifarioMiembro.UpdateTarifarioMiembroSuccess({ data: res, message: messages.UPDATE_SUCCESS });
            }),
            catchError((err: HttpErrorResponse) => {
              return of(new fromTarifarioMiembro.UpdateTarifarioMiembroFail(err))
            })
          );
      })
    );

  @Effect()
  DeleteTarifarioMiembro$ = this.actions$
    .pipe(
      ofType(fromTarifarioMiembro.actions.DELETE),
      withLatestFrom(this.store$.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromTarifarioMiembro.DeleteTarifarioMiembro, GlobalMessages]) => {
        return this.tarifarioMiembroService.eliminar(action.payload)
          .pipe(
            map(res => {
              return new fromTarifarioMiembro.DeleteTarifarioMiembroSuccess({ message: messages.DELETE_SUCCESS });
            }),
            catchError((err: HttpErrorResponse) => {
              return of(new fromTarifarioMiembro.DeleteTarifarioMiembroFail(err))
            })
          );
      })
    );

  @Effect()
  Export$ = this.actions$
    .pipe(
      ofType(fromTarifarioMiembro.actions.DOWNLOAD),
      withLatestFrom(this.store$.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromTarifarioMiembro.DownloadTarifarioMiembro, GlobalMessages]) => {
        return this.tarifarioMiembroService.exportar()
          .pipe(
            map(res => new fromTarifarioMiembro.DownloadTarifarioMiembroSuccess({ message: messages.DOWNLOAD_SUCCESS })),
            catchError((err: HttpErrorResponse) => of(new fromTarifarioMiembro.DownloadTarifarioMiembroFail(err)))
          );
      })
    );

}
