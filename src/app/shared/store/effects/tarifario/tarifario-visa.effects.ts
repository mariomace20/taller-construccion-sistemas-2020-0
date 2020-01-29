import { Injectable } from '@angular/core';
import { TarifarioVISAService } from '../../../../tarifario/services/tarifario-visa.service';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as fromTarifarioVISA from '../../actions/tarifario/tarifario-visa.actions';
import { switchMap, map, catchError, withLatestFrom } from 'rxjs/operators';
import { of } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import { GlobalMessages } from '../../reducers/global.reducer';
import { HttpErrorResponse } from '@angular/common/http';
import {addLabelToObjsArr, sortByAttr} from '../../../utils';

@Injectable()
export class TarifarioVISAEffects {

  constructor(
    private actions$: Actions,
    private store$: Store<AppState>,
    private tarifarioVISAService: TarifarioVISAService
  ) { }

  @Effect()
  GetAll$ = this.actions$
    .pipe(
      ofType(fromTarifarioVISA.actions.GET_ALL),
      switchMap(() => {
        return this.tarifarioVISAService.buscarTodos()
          .pipe(
            map(res => {
              sortByAttr(res, 'idTarifarioVisa');
              addLabelToObjsArr(
                res,
                'label',
                false,
                'idTarifarioVisa',
                'descripcionProgramaComision'
              );
              return new fromTarifarioVISA.GetAllTarifarioVISASuccess(res);
            }),
            catchError((err) => {
              return of(new fromTarifarioVISA.GetAllTarifarioVISAFail(err));
            })
          );
      })
    );

  @Effect()
  AddTarifarioVISA$ = this.actions$
    .pipe(
      ofType(fromTarifarioVISA.actions.ADD),
      withLatestFrom(this.store$.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromTarifarioVISA.AddTarifarioVISA, GlobalMessages]) => {
        return this.tarifarioVISAService.registrar(action.payload)
          .pipe(
            map(res => {
              return new fromTarifarioVISA.AddTarifarioVISASuccess({ data: res, message: messages.ADD_SUCCESS });
            }),
            catchError((err: HttpErrorResponse) => {
              return of(new fromTarifarioVISA.AddTarifarioVISAFail(err))
            })
          );
      })
    );

  @Effect()
  UpdateTarifarioVISA$ = this.actions$
    .pipe(
      ofType(fromTarifarioVISA.actions.UPDATE),
      withLatestFrom(this.store$.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromTarifarioVISA.UpdateTarifarioVISA, GlobalMessages]) => {
        return this.tarifarioVISAService.actualizar(action.payload)
          .pipe(
            map(res => {
              return new fromTarifarioVISA.UpdateTarifarioVISASuccess({ data: res, message: messages.UPDATE_SUCCESS });
            }),
            catchError((err: HttpErrorResponse) => {
              return of(new fromTarifarioVISA.UpdateTarifarioVISAFail(err))
            })
          )
      })
    );

  @Effect()
  DeleteTarifarioVISA$ = this.actions$
    .pipe(
      ofType(fromTarifarioVISA.actions.DELETE),
      withLatestFrom(this.store$.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromTarifarioVISA.DeleteTarifarioVISA, GlobalMessages]) => {
        return this.tarifarioVISAService.eliminar(action.payload)
          .pipe(
            map(res => {
              return new fromTarifarioVISA.DeleteTarifarioVISASuccess({ message: messages.DELETE_SUCCESS });
            }),
            catchError((err: HttpErrorResponse) => {
              return of(new fromTarifarioVISA.DeleteTarifarioVISAFail(err))
            })
          )
      })
    );

  @Effect()
  Export$ = this.actions$
    .pipe(
      ofType(fromTarifarioVISA.actions.DOWNLOAD),
      withLatestFrom(this.store$.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromTarifarioVISA.DownloadTarifarioVISA, GlobalMessages]) => {
        return this.tarifarioVISAService.exportar()
          .pipe(
            map(res => new fromTarifarioVISA.DownloadTarifarioVISASuccess({ message: messages.DOWNLOAD_SUCCESS })),
            catchError((err: HttpErrorResponse) => of(new fromTarifarioVISA.DownloadTarifarioVISAFail(err)))
          )
      })
    );

}
