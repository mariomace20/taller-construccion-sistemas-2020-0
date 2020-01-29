import { Injectable } from '@angular/core';
import { CodigoProcesoSwitchService } from '../../../../mantenimiento/services/codigo-proceso-switch.service';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as fromCodigoProcesoSwitch from '../../actions/mantenimiento/codigo-proceso-switch.actions';
import { switchMap, map, catchError, withLatestFrom } from 'rxjs/operators';
import { of } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import { GlobalMessages } from '../../reducers/global.reducer';
import { HttpErrorResponse } from '@angular/common/http';
import { addLabelToObjsArr, sortByAttr } from '../../../utils';

@Injectable()
export class CodigoProcesoSwitchEffects {

  constructor(
    private actions$: Actions,
    private store$: Store<AppState>,
    private codigoProcesoSwitchService: CodigoProcesoSwitchService
  ) { }

  @Effect()
  GetAll$ = this.actions$
    .pipe(
      ofType(fromCodigoProcesoSwitch.actions.GET_ALL),
      switchMap(() => {
        return this.codigoProcesoSwitchService.buscarTodos()
          .pipe(
            map(res => {
              sortByAttr(res,"idCodigoProcesoSwitch" );
              addLabelToObjsArr(res, 'label', false, 'idCodigoProcesoSwitch', 'descripcionCodProcesoSwitch');
              return new fromCodigoProcesoSwitch.GetAllCodigoProcesoSwitchSuccess(res);
            }),
            catchError((err) => {
              return of(new fromCodigoProcesoSwitch.GetAllCodigoProcesoSwitchFail(err));
            })
          )
      })
    );

  @Effect()
  AddCodigoProcesoSwitch$ = this.actions$
    .pipe(
      ofType(fromCodigoProcesoSwitch.actions.ADD),
      withLatestFrom(this.store$.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromCodigoProcesoSwitch.AddCodigoProcesoSwitch, GlobalMessages]) => {
        return this.codigoProcesoSwitchService.registrar(action.payload)
          .pipe(
            map(res => {
              return new fromCodigoProcesoSwitch.AddCodigoProcesoSwitchSuccess({ data: res, message: messages.ADD_SUCCESS });
            }),
            catchError((err: HttpErrorResponse) => {
              return of(new fromCodigoProcesoSwitch.AddCodigoProcesoSwitchFail(err))
            })
          )
      })
    );

  @Effect()
  UpdateCodigoProcesoSwitch$ = this.actions$
    .pipe(
      ofType(fromCodigoProcesoSwitch.actions.UPDATE),
      withLatestFrom(this.store$.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromCodigoProcesoSwitch.UpdateCodigoProcesoSwitch, GlobalMessages]) => {
        return this.codigoProcesoSwitchService.actualizar(action.payload)
          .pipe(
            map(res => {
              return new fromCodigoProcesoSwitch.UpdateCodigoProcesoSwitchSuccess({ data: res, message: messages.UPDATE_SUCCESS });
            }),
            catchError((err: HttpErrorResponse) => {
              return of(new fromCodigoProcesoSwitch.UpdateCodigoProcesoSwitchFail(err))
            })
          )
      })
    );

  @Effect()
  DeleteCodigoProcesoSwitch$ = this.actions$
    .pipe(
      ofType(fromCodigoProcesoSwitch.actions.DELETE),
      withLatestFrom(this.store$.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromCodigoProcesoSwitch.DeleteCodigoProcesoSwitch, GlobalMessages]) => {
        return this.codigoProcesoSwitchService.eliminar(action.payload)
          .pipe(
            map(res => {
              return new fromCodigoProcesoSwitch.DeleteCodigoProcesoSwitchSuccess({ message: messages.DELETE_SUCCESS });
            }),
            catchError((err: HttpErrorResponse) => {
              return of(new fromCodigoProcesoSwitch.DeleteCodigoProcesoSwitchFail(err))
            })
          )
      })
    );

  @Effect()
  Export$ = this.actions$
    .pipe(
      ofType(fromCodigoProcesoSwitch.actions.DOWNLOAD),
      withLatestFrom(this.store$.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromCodigoProcesoSwitch.DownloadCodigoProcesoSwitch, GlobalMessages]) => {
        return this.codigoProcesoSwitchService.exportar()
          .pipe(
            map(res => new fromCodigoProcesoSwitch.DownloadCodigoProcesoSwitchSuccess({ message: messages.DOWNLOAD_SUCCESS })),
            catchError((err: HttpErrorResponse) => of(new fromCodigoProcesoSwitch.DownloadCodigoProcesoSwitchFail(err)))
          )
      })
    );

}
