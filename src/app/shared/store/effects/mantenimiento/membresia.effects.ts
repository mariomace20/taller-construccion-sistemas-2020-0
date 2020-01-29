import { Injectable } from '@angular/core';
import { MembresiaService } from '../../../../mantenimiento/services/membresia.service';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as fromMembresia from '../../actions/mantenimiento/membresia.actions';
import { switchMap, map, catchError, withLatestFrom } from 'rxjs/operators';
import { of } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import { GlobalMessages } from '../../reducers/global.reducer';
import { HttpErrorResponse } from '@angular/common/http';
import { addLabelToObjsArr, sortByAttr } from '../../../utils';

@Injectable()
export class MembresiaEffects {

  constructor(
    private actions$: Actions,
    private store$: Store<AppState>,
    private membresiaService: MembresiaService
  ) { }

  @Effect()
  GetAll$ = this.actions$
    .pipe(
      ofType(fromMembresia.actions.GET_ALL),
      switchMap(() => {
        return this.membresiaService.buscarTodos()
          .pipe(
            map(res => {
              sortByAttr(res,"idMembresia")
              addLabelToObjsArr(res, 'label', false, 'idMembresia', 'descripcionMembresia');
              return new fromMembresia.GetAllMembresiaSuccess(res);
            }),
            catchError((err) => {
              return of(new fromMembresia.GetAllMembresiaFail(err));
            })
          )
      })
    );

  @Effect()
  AddMembresia$ = this.actions$
    .pipe(
      ofType(fromMembresia.actions.ADD),
      withLatestFrom(this.store$.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromMembresia.AddMembresia, GlobalMessages]) => {
        return this.membresiaService.registrar(action.payload)
          .pipe(
            map(res => {
              return new fromMembresia.AddMembresiaSuccess({ data: res, message: messages.ADD_SUCCESS });
            }),
            catchError((err: HttpErrorResponse) => {
              return of(new fromMembresia.AddMembresiaFail(err))
            })
          )
      })
    );

  @Effect()
  UpdateMembresia$ = this.actions$
    .pipe(
      ofType(fromMembresia.actions.UPDATE),
      withLatestFrom(this.store$.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromMembresia.UpdateMembresia, GlobalMessages]) => {
        return this.membresiaService.actualizar(action.payload)
          .pipe(
            map(res => {
              return new fromMembresia.UpdateMembresiaSuccess({ data: res, message: messages.UPDATE_SUCCESS });
            }),
            catchError((err: HttpErrorResponse) => {
              return of(new fromMembresia.UpdateMembresiaFail(err))
            })
          )
      })
    );

  @Effect()
  DeleteMembresia$ = this.actions$
    .pipe(
      ofType(fromMembresia.actions.DELETE),
      withLatestFrom(this.store$.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromMembresia.DeleteMembresia, GlobalMessages]) => {
        return this.membresiaService.eliminar(action.payload)
          .pipe(
            map(res => {
              return new fromMembresia.DeleteMembresiaSuccess({ message: messages.DELETE_SUCCESS });
            }),
            catchError((err: HttpErrorResponse) => {
              return of(new fromMembresia.DeleteMembresiaFail(err))
            })
          )
      })
    );

  @Effect()
  Export$ = this.actions$
    .pipe(
      ofType(fromMembresia.actions.DOWNLOAD),
      withLatestFrom(this.store$.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromMembresia.DownloadMembresia, GlobalMessages]) => {
        return this.membresiaService.exportar()
          .pipe(
            map(res => new fromMembresia.DownloadMembresiaSuccess({ message: messages.DOWNLOAD_SUCCESS })),
            catchError((err: HttpErrorResponse) => of(new fromMembresia.DownloadMembresiaFail(err)))
          )
      })
    );

}
