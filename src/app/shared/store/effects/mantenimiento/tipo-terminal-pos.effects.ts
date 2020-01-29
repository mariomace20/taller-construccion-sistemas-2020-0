import { Injectable } from '@angular/core';
import { TipoTerminalPosService } from '../../../../mantenimiento/services';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as fromTipoTerminalPos from '../../actions/mantenimiento/tipo-terminal-pos.actions';
import { switchMap, map, catchError, withLatestFrom } from 'rxjs/operators';
import { of } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import { GlobalMessages } from '../../reducers/global.reducer';
import { addLabelToObjsArr, sortByAttr } from '../../../utils';
import { MembresiaService } from '../../../../mantenimiento/services';

@Injectable()
export class TipoTerminalPosEffects {

  constructor(
    private actions$: Actions,
    private store$: Store<AppState>,
    private TipoTerminalPosService: TipoTerminalPosService,
    private membresiaService: MembresiaService
  ) { }

  @Effect()
  GetAll$ = this.actions$
    .pipe(
      ofType(fromTipoTerminalPos.actions.GET_ALL),
      switchMap(() => {
        return this.TipoTerminalPosService.buscarTodos()
          .pipe(
            map(res => {
              addLabelToObjsArr(res, 'label', false, 'idTerminalPOS', 'descripcionTerminalPOS');
              return new fromTipoTerminalPos.GetAllTipoTerminalPosSuccess(res);
            }),
            catchError((err) => of(new fromTipoTerminalPos.GetAllTipoTerminalPosFail(err)))
          )
      })
    );

@Effect()
GetXMembresia$ = this.actions$
  .pipe(
    ofType(fromTipoTerminalPos.actions.GET_X_MEMBRESIA),
    switchMap( (action: fromTipoTerminalPos.GetTipoTerminalPosXMembresia) =>{
      return this.TipoTerminalPosService.buscarPorMembresias(action.payload)
    .pipe(
          map(res => {
            sortByAttr(res,'idTerminalPOS')
            addLabelToObjsArr(res, 'label', false, 'idTerminalPOS', 'descripcionTerminalPOS');
            return new fromTipoTerminalPos.GetTipoTerminalPosXMembresiaSuccess(res);
          }),
          catchError((err) => {
            return of(new fromTipoTerminalPos.GetTipoTerminalPosXMembresiaFail(err));
        })
    )
  })
);

  @Effect()
  AddInstiticion$ = this.actions$
    .pipe(
      ofType(fromTipoTerminalPos.actions.ADD),
      withLatestFrom(this.store$.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromTipoTerminalPos.AddTipoTerminalPos, GlobalMessages]) => {
        return this.TipoTerminalPosService.registrar(action.payload)
          .pipe(
            map(res => {
              return new fromTipoTerminalPos.AddTipoTerminalPosSuccess({ data: res, message: messages.ADD_SUCCESS });
            }),
            catchError(err => of(new fromTipoTerminalPos.AddTipoTerminalPosFail(err)))
          )
      })
    );

  @Effect()
  UpdateTipoTerminalPos$ = this.actions$
    .pipe(
      ofType(fromTipoTerminalPos.actions.UPDATE),
      withLatestFrom(this.store$.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromTipoTerminalPos.UpdateTipoTerminalPos, GlobalMessages]) => {
        return this.TipoTerminalPosService.actualizar(action.payload)
          .pipe(
            map(res => {
              return new fromTipoTerminalPos.UpdateTipoTerminalPosSuccess({ data: res, message: messages.UPDATE_SUCCESS });
            }),
            catchError(err => of(new fromTipoTerminalPos.UpdateTipoTerminalPosFail(err)))
          )
      })
    );

  @Effect()
  DeleteTipoTerminalPos$ = this.actions$
    .pipe(
      ofType(fromTipoTerminalPos.actions.DELETE),
      withLatestFrom(this.store$.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromTipoTerminalPos.DeleteTipoTerminalPos, GlobalMessages]) => {
        return this.TipoTerminalPosService.eliminar(action.payload)
          .pipe(
            map(res => {
              return new fromTipoTerminalPos.DeleteTipoTerminalPosSuccess({ message: messages.DELETE_SUCCESS });
            }),
            catchError(err => of(new fromTipoTerminalPos.DeleteTipoTerminalPosFail(err)))
          )
      })
    );

  @Effect()
  Export$ = this.actions$
    .pipe(
      ofType(fromTipoTerminalPos.actions.DOWNLOAD),
      withLatestFrom(this.store$.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromTipoTerminalPos.DownloadTipoTerminalPos, GlobalMessages]) => {
        return this.TipoTerminalPosService.exportar()
          .pipe(
            map(res => new fromTipoTerminalPos.DownloadTipoTerminalPosSuccess({ message: messages.DOWNLOAD_SUCCESS })),
            catchError(err => of(new fromTipoTerminalPos.DownloadTipoTerminalPosFail(err)))
          )
      })
    );

}
