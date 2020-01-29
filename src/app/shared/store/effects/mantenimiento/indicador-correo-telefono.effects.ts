import { Injectable } from '@angular/core';
import { IndicadorCorreoTelefonoService } from '../../../../mantenimiento/services';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as fromIndicadorCorreoTelefono from '../../actions/mantenimiento/indicador-correo-telefono.actions';
import { switchMap, map, catchError, withLatestFrom } from 'rxjs/operators';
import { of } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import { GlobalMessages } from '../../reducers/global.reducer';
import { addLabelToObjsArr } from '../../../utils';
@Injectable()
export class IndicadorCorreoTelefonoEffects {

  constructor(
    private actions$: Actions,
    private store$: Store<AppState>,
    private indicadorCorreoTelefonoService: IndicadorCorreoTelefonoService
  ) { }

  @Effect()
  GetAll$ = this.actions$
    .pipe(
      ofType(fromIndicadorCorreoTelefono.actions.GET_ALL),
      switchMap(() => {
        return this.indicadorCorreoTelefonoService.buscarTodos()
          .pipe(
            map(res => {
              
              return new fromIndicadorCorreoTelefono.GetAllIndicadorCorreoTelefonoSuccess(res);
            }),
            catchError((err) => of(new fromIndicadorCorreoTelefono.GetAllIndicadorCorreoTelefonoFail(err)))
          )
      })
    );
    GetXMembresia$ = this.actions$
      .pipe(
        ofType(fromIndicadorCorreoTelefono.actions.GET_X_MEMBRESIA),
        switchMap( (action: fromIndicadorCorreoTelefono.GetIndicadorCorreoTelefonoXMembresia) =>{
          return this.indicadorCorreoTelefonoService.buscarPorMembresias(action.payload)
        .pipe(
              map(res => {
                addLabelToObjsArr(res, 'label', false, 'idCorreoTelefono', 'descripcionIndCorreoTel');
                return new fromIndicadorCorreoTelefono.GetIndicadorCorreoTelefonoXMembresiaSuccess(res);
              }),
              catchError((err) => {
                return of(new fromIndicadorCorreoTelefono.GetIndicadorCorreoTelefonoXMembresiaFail(err));
            })
        )
      })
    );
  @Effect()
  AddInstiticion$ = this.actions$
    .pipe(
      ofType(fromIndicadorCorreoTelefono.actions.ADD),
      withLatestFrom(this.store$.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromIndicadorCorreoTelefono.AddIndicadorCorreoTelefono, GlobalMessages]) => {
        return this.indicadorCorreoTelefonoService.registrar(action.payload)
          .pipe(
            map(res => {
              return new fromIndicadorCorreoTelefono.AddIndicadorCorreoTelefonoSuccess({ data: res, message: messages.ADD_SUCCESS });
            }),
            catchError(err => of(new fromIndicadorCorreoTelefono.AddIndicadorCorreoTelefonoFail(err)))
          )
      })
    );

  @Effect()
  UpdateIndicadorCorreoTelefono$ = this.actions$
    .pipe(
      ofType(fromIndicadorCorreoTelefono.actions.UPDATE),
      withLatestFrom(this.store$.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromIndicadorCorreoTelefono.UpdateIndicadorCorreoTelefono, GlobalMessages]) => {
        return this.indicadorCorreoTelefonoService.actualizar(action.payload)
          .pipe(
            map(res => {
              return new fromIndicadorCorreoTelefono.UpdateIndicadorCorreoTelefonoSuccess({ data: res, message: messages.UPDATE_SUCCESS });
            }),
            catchError(err => of(new fromIndicadorCorreoTelefono.UpdateIndicadorCorreoTelefonoFail(err)))
          )
      })
    );

  @Effect()
  DeleteIndicadorCorreoTelefono$ = this.actions$
    .pipe(
      ofType(fromIndicadorCorreoTelefono.actions.DELETE),
      withLatestFrom(this.store$.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromIndicadorCorreoTelefono.DeleteIndicadorCorreoTelefono, GlobalMessages]) => {
        return this.indicadorCorreoTelefonoService.eliminar(action.payload)
          .pipe(
            map(res => {
              return new fromIndicadorCorreoTelefono.DeleteIndicadorCorreoTelefonoSuccess({ message: messages.DELETE_SUCCESS });
            }),
            catchError(err => of(new fromIndicadorCorreoTelefono.DeleteIndicadorCorreoTelefonoFail(err)))
          )
      })
    );

  @Effect()
  Export$ = this.actions$
    .pipe(
      ofType(fromIndicadorCorreoTelefono.actions.DOWNLOAD),
      withLatestFrom(this.store$.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromIndicadorCorreoTelefono.DownloadIndicadorCorreoTelefono, GlobalMessages]) => {
        return this.indicadorCorreoTelefonoService.exportar()
          .pipe(
            map(res => new fromIndicadorCorreoTelefono.DownloadIndicadorCorreoTelefonoSuccess({ message: messages.DOWNLOAD_SUCCESS })),
            catchError(err => of(new fromIndicadorCorreoTelefono.DownloadIndicadorCorreoTelefonoFail(err)))
          )
      })
    );

}
