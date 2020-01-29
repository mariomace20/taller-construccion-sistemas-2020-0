import { Injectable } from '@angular/core';
import { PerfilRepService } from '../../../../reportes/admin/services/perfil-rep.service';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as fromPerfilRep from '../../actions/reportes/perfil-rep.actions';
import { switchMap, map, catchError, withLatestFrom } from 'rxjs/operators';
import { of } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import { GlobalMessages } from '../../reducers/global.reducer';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class PerfilRepEffects {

  constructor(
    private actions$: Actions,
    private store$: Store<AppState>,
    private PerfilRepService: PerfilRepService
  ) { }

  @Effect()
  GetAll$ = this.actions$
    .pipe(
      ofType(fromPerfilRep.actions.GET_ALL),
      switchMap(() => {
        return this.PerfilRepService.buscarTodos()
          .pipe(
            map(res => {
              //console.log(res);
              return new fromPerfilRep.GetAllPerfilRepSuccess(res);
            }),
            catchError((err) => {
              //console.log(err);
              return of(new fromPerfilRep.GetAllPerfilRepFail(err));
            })
          )
      })
    );

  @Effect()
  AddPerfilRep$ = this.actions$
    .pipe(
      ofType(fromPerfilRep.actions.ADD),
      withLatestFrom(this.store$.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromPerfilRep.AddPerfilRep, GlobalMessages]) => {
        return this.PerfilRepService.registrar(action.payload)
          .pipe(
            map(res => {
              return new fromPerfilRep.AddPerfilRepSuccess({ data: res, message: messages.ADD_SUCCESS });
            }),
            catchError((err: HttpErrorResponse) => {
              return of(new fromPerfilRep.AddPerfilRepFail(err))
            })
          )
      })
    );

  @Effect()
  UpdatePerfilRep$ = this.actions$
    .pipe(
      ofType(fromPerfilRep.actions.UPDATE),
      withLatestFrom(this.store$.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromPerfilRep.UpdatePerfilRep, GlobalMessages]) => {
        return this.PerfilRepService.actualizar(action.payload)
          .pipe(
            map(res => {
              return new fromPerfilRep.UpdatePerfilRepSuccess({ data: res, message: messages.UPDATE_SUCCESS });
            }),
            catchError((err: HttpErrorResponse) => {
              return of(new fromPerfilRep.UpdatePerfilRepFail(err))
            })
          )
      })
    );

  @Effect()
  DeletePerfilRep$ = this.actions$
    .pipe(
      ofType(fromPerfilRep.actions.DELETE),
      withLatestFrom(this.store$.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromPerfilRep.DeletePerfilRep, GlobalMessages]) => {
        return this.PerfilRepService.eliminar(action.payload)
          .pipe(
            map(res => {
              return new fromPerfilRep.DeletePerfilRepSuccess({ message: messages.DELETE_SUCCESS });
            }),
            catchError((err: HttpErrorResponse) => {
              return of(new fromPerfilRep.DeletePerfilRepFail(err))
            })
          )
      })
    );

  @Effect()
  Export$ = this.actions$
    .pipe(
      ofType(fromPerfilRep.actions.DOWNLOAD),
      withLatestFrom(this.store$.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromPerfilRep.DownloadPerfilRep, GlobalMessages]) => {
        return this.PerfilRepService.exportar()
          .pipe(
            map(res => new fromPerfilRep.DownloadPerfilRepSuccess({ message: messages.DOWNLOAD_SUCCESS })),
            catchError((err: HttpErrorResponse) => of(new fromPerfilRep.DownloadPerfilRepFail(err)))
          )
      })
    );

}
