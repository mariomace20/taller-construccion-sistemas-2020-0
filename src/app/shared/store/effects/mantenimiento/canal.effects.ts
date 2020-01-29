import { Injectable } from '@angular/core';
import { CanalService } from '../../../../mantenimiento/services/canal.service';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as fromCanal from '../../actions/mantenimiento/canal.actions';
import { switchMap, map, catchError, withLatestFrom } from 'rxjs/operators';
import { of } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import { GlobalMessages } from '../../reducers/global.reducer';
import { HttpErrorResponse } from '@angular/common/http';
import {addLabelToObjsArr, sortByAttr} from "../../../utils";

@Injectable()
export class CanalEffects {

  constructor(
    private actions$: Actions,
    private store$: Store<AppState>,
    private canalService: CanalService
  ) { }

  @Effect()
  GetAll$ = this.actions$
    .pipe(
      ofType(fromCanal.actions.GET_ALL),
      switchMap(() => {
        return this.canalService.buscarTodos()
          .pipe(
            
            map(res => { 
              sortByAttr(res,'idCanal')
              addLabelToObjsArr(res, 'label', false, 'idCanal', 'descripcionCanal');

              return new fromCanal.GetAllCanalSuccess(res);
            }),
            catchError((err) => {

              return of(new fromCanal.GetAllCanalFail(err));
            })
          )
      })
    );

  @Effect()
  AddCanal$ = this.actions$
    .pipe(
      ofType(fromCanal.actions.ADD),
      withLatestFrom(this.store$.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromCanal.AddCanal, GlobalMessages]) => {
        return this.canalService.registrar(action.payload)
          .pipe(
            map(res => {
              return new fromCanal.AddCanalSuccess({ data: res, message: messages.ADD_SUCCESS });
            }),
            catchError((err: HttpErrorResponse) => {
              return of(new fromCanal.AddCanalFail(err))
            })
          )
      })
    );

  @Effect()
  UpdateCanal$ = this.actions$
    .pipe(
      ofType(fromCanal.actions.UPDATE),
      withLatestFrom(this.store$.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromCanal.UpdateCanal, GlobalMessages]) => {
        return this.canalService.actualizar(action.payload)
          .pipe(
            map(res => {
              return new fromCanal.UpdateCanalSuccess({ data: res, message: messages.UPDATE_SUCCESS });
            }),
            catchError((err: HttpErrorResponse) => {
              return of(new fromCanal.UpdateCanalFail(err))
            })
          )
      })
    );

  @Effect()
  DeleteCanal$ = this.actions$
    .pipe(
      ofType(fromCanal.actions.DELETE),
      withLatestFrom(this.store$.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromCanal.DeleteCanal, GlobalMessages]) => {
        return this.canalService.eliminar(action.payload)
          .pipe(
            map(res => {
              return new fromCanal.DeleteCanalSuccess({ message: messages.DELETE_SUCCESS });
            }),
            catchError((err: HttpErrorResponse) => {
              return of(new fromCanal.DeleteCanalFail(err))
            })
          )
      })
    );

  @Effect()
  Export$ = this.actions$
    .pipe(
      ofType(fromCanal.actions.DOWNLOAD),
      withLatestFrom(this.store$.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromCanal.DownloadCanal, GlobalMessages]) => {
        return this.canalService.exportar()
          .pipe(
            map(res => new fromCanal.DownloadCanalSuccess({ message: messages.DOWNLOAD_SUCCESS })),
            catchError((err: HttpErrorResponse) => of(new fromCanal.DownloadCanalFail(err)))
          )
      })
    );

}
