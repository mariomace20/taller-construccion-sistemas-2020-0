import { Injectable } from '@angular/core';
import { DistribucionComisionService } from '../../../../mantenimiento/services';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as fromDistribucionComision from '../../actions/mantenimiento/distribucion-comision.actions';
import { switchMap, map, catchError, withLatestFrom } from 'rxjs/operators';
import { of } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import { GlobalMessages } from '../../reducers/global.reducer';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class DistribucionComisionEffects {

  constructor(
    private actions$: Actions,
    private store$: Store<AppState>,
    private DistribucionComisionService: DistribucionComisionService
  ) { }

  @Effect()
  GetAll$ = this.actions$
    .pipe(
      ofType(fromDistribucionComision.actions.GET_ALL),
      switchMap(() => {
        return this.DistribucionComisionService.buscarTodos()
          .pipe(
            map(res => {
              return new fromDistribucionComision.GetAllDistribucionComisionSuccess(res);
            }),
            catchError((err) => {
              return of(new fromDistribucionComision.GetAllDistribucionComisionFail(err));
            })
          )
      })
    );

  @Effect()
  AddDistribucionComision$ = this.actions$
    .pipe(
      ofType(fromDistribucionComision.actions.ADD),
      withLatestFrom(this.store$.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromDistribucionComision.AddDistribucionComision, GlobalMessages]) => {
        return this.DistribucionComisionService.registrar(action.payload)
          .pipe(
            map(res => {
              return new fromDistribucionComision.AddDistribucionComisionSuccess({ data: res, message: messages.ADD_SUCCESS });
            }),
            catchError((err: HttpErrorResponse) => {
              return of(new fromDistribucionComision.AddDistribucionComisionFail(err))
            })
          )
      })
    );

  @Effect()
  UpdateDistribucionComision$ = this.actions$
    .pipe(
      ofType(fromDistribucionComision.actions.UPDATE),
      withLatestFrom(this.store$.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromDistribucionComision.UpdateDistribucionComision, GlobalMessages]) => {
        return this.DistribucionComisionService.actualizar(action.payload)
          .pipe(
            map(res => {
              return new fromDistribucionComision.UpdateDistribucionComisionSuccess({ data: res, message: messages.UPDATE_SUCCESS });
            }),
            catchError((err: HttpErrorResponse) => {
              return of(new fromDistribucionComision.UpdateDistribucionComisionFail(err))
            })
          )
      })
    );

  @Effect()
  DeleteDistribucionComision$ = this.actions$
    .pipe(
      ofType(fromDistribucionComision.actions.DELETE),
      withLatestFrom(this.store$.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromDistribucionComision.DeleteDistribucionComision, GlobalMessages]) => {
        return this.DistribucionComisionService.eliminar(action.payload)
          .pipe(
            map(res => {
              return new fromDistribucionComision.DeleteDistribucionComisionSuccess({ message: messages.DELETE_SUCCESS });
            }),
            catchError((err: HttpErrorResponse) => {
              return of(new fromDistribucionComision.DeleteDistribucionComisionFail(err))
            })
          )
      })
    );

  @Effect()
  Export$ = this.actions$
    .pipe(
      ofType(fromDistribucionComision.actions.DOWNLOAD),
      withLatestFrom(this.store$.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromDistribucionComision.DownloadDistribucionComision, GlobalMessages]) => {
        return this.DistribucionComisionService.exportar()
          .pipe(
            map(res => new fromDistribucionComision.DownloadDistribucionComisionSuccess({ message: messages.DOWNLOAD_SUCCESS })),
            catchError((err: HttpErrorResponse) => of(new fromDistribucionComision.DownloadDistribucionComisionFail(err)))
          )
      })
    );

}