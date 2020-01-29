import { Injectable } from '@angular/core';
import { CodigoRptaSwitchService } from '../../../../mantenimiento/services/codigo-rpta-switch.service';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as fromCodigoRptaSwitch from '../../actions/mantenimiento/codigo-rpta-switch.actions';
import { switchMap, map, catchError, withLatestFrom } from 'rxjs/operators';
import { of } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import { GlobalMessages } from '../../reducers/global.reducer';
import { HttpErrorResponse } from '@angular/common/http';
import { addLabelToObjsArr, sortByAttr } from '../../../utils';

@Injectable()
export class CodigoRptaSwitchEffects {

  constructor(
    private actions$: Actions,
    private store$: Store<AppState>,
    private codigoRptaSwitchService: CodigoRptaSwitchService
  ) { }

  @Effect()
  GetAll$ = this.actions$
    .pipe(
      ofType(fromCodigoRptaSwitch.actions.GET_ALL),
      switchMap(() => {
        return this.codigoRptaSwitchService.buscarTodos()
          .pipe(
            map(res => {
              sortByAttr(res, "idCodigoRespuestaSwitch")
              addLabelToObjsArr(res, 'label', false, 'idCodigoRespuestaSwitch', 'descripcionCodigoRptaSwitch')
              return new fromCodigoRptaSwitch.GetAllCodigoRptaSwitchSuccess(res);
            }),
            catchError((err) => {
              return of(new fromCodigoRptaSwitch.GetAllCodigoRptaSwitchFail(err));
            })
          )
      })
    );

  @Effect()
  AddCodigoRptaSwitch$ = this.actions$
    .pipe(
      ofType(fromCodigoRptaSwitch.actions.ADD),
      withLatestFrom(this.store$.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromCodigoRptaSwitch.AddCodigoRptaSwitch, GlobalMessages]) => {
        return this.codigoRptaSwitchService.registrar(action.payload)
          .pipe(
            map(res => {
              return new fromCodigoRptaSwitch.AddCodigoRptaSwitchSuccess({ data: res, message: messages.ADD_SUCCESS });
            }),
            catchError((err: HttpErrorResponse) => {
              return of(new fromCodigoRptaSwitch.AddCodigoRptaSwitchFail(err))
            })
          )
      })
    );

  @Effect()
  UpdateCodigoRptaSwitch$ = this.actions$
    .pipe(
      ofType(fromCodigoRptaSwitch.actions.UPDATE),
      withLatestFrom(this.store$.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromCodigoRptaSwitch.UpdateCodigoRptaSwitch, GlobalMessages]) => {
        return this.codigoRptaSwitchService.actualizar(action.payload)
          .pipe(
            map(res => {
              return new fromCodigoRptaSwitch.UpdateCodigoRptaSwitchSuccess({ data: res, message: messages.UPDATE_SUCCESS });
            }),
            catchError((err: HttpErrorResponse) => {
              return of(new fromCodigoRptaSwitch.UpdateCodigoRptaSwitchFail(err))
            })
          )
      })
    );

  @Effect()
  DeleteCodigoRptaSwitch$ = this.actions$
    .pipe(
      ofType(fromCodigoRptaSwitch.actions.DELETE),
      withLatestFrom(this.store$.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromCodigoRptaSwitch.DeleteCodigoRptaSwitch, GlobalMessages]) => {
        return this.codigoRptaSwitchService.eliminar(action.payload)
          .pipe(
            map(res => {
              return new fromCodigoRptaSwitch.DeleteCodigoRptaSwitchSuccess({ message: messages.DELETE_SUCCESS });
            }),
            catchError((err: HttpErrorResponse) => {
              return of(new fromCodigoRptaSwitch.DeleteCodigoRptaSwitchFail(err))
            })
          )
      })
    );

  @Effect()
  Export$ = this.actions$
    .pipe(
      ofType(fromCodigoRptaSwitch.actions.DOWNLOAD),
      withLatestFrom(this.store$.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromCodigoRptaSwitch.DownloadCodigoRptaSwitch, GlobalMessages]) => {
        return this.codigoRptaSwitchService.exportar()
          .pipe(
            map(res => new fromCodigoRptaSwitch.DownloadCodigoRptaSwitchSuccess({ message: messages.DOWNLOAD_SUCCESS })),
            catchError((err: HttpErrorResponse) => of(new fromCodigoRptaSwitch.DownloadCodigoRptaSwitchFail(err)))
          )
      })
    );

}
