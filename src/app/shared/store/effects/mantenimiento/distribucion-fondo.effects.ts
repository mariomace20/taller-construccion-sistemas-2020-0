import { Injectable } from '@angular/core';
import { DistribucionFondoService } from '../../../../mantenimiento/services';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as fromDistribucionFondo from '../../actions/mantenimiento/distribucion-fondo.actions';
import { switchMap, map, catchError, withLatestFrom } from 'rxjs/operators';
import { of } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import { GlobalMessages } from '../../reducers/global.reducer';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class DistribucionFondoEffects {

  constructor(
    private actions$: Actions,
    private store$: Store<AppState>,
    private DistribucionFondoService: DistribucionFondoService
  ) { }

  @Effect()
  GetAll$ = this.actions$
    .pipe(
      ofType(fromDistribucionFondo.actions.GET_ALL),
      switchMap(() => {
        return this.DistribucionFondoService.buscarTodos()
          .pipe(
            map(res => {
              return new fromDistribucionFondo.GetAllDistribucionFondoSuccess(res);
            }),
            catchError((err) => {
              return of(new fromDistribucionFondo.GetAllDistribucionFondoFail(err));
            })
          )
      })
    );

  @Effect()
  AddDistribucionFondo$ = this.actions$
    .pipe(
      ofType(fromDistribucionFondo.actions.ADD),
      withLatestFrom(this.store$.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromDistribucionFondo.AddDistribucionFondo, GlobalMessages]) => {
        return this.DistribucionFondoService.registrar(action.payload)
          .pipe(
            map(res => {
              return new fromDistribucionFondo.AddDistribucionFondoSuccess({ data: res, message: messages.ADD_SUCCESS });
            }),
            catchError((err: HttpErrorResponse) => {
              return of(new fromDistribucionFondo.AddDistribucionFondoFail(err))
            })
          )
      })
    );

  @Effect()
  UpdateDistribucionFondo$ = this.actions$
    .pipe(
      ofType(fromDistribucionFondo.actions.UPDATE),
      withLatestFrom(this.store$.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromDistribucionFondo.UpdateDistribucionFondo, GlobalMessages]) => {
        return this.DistribucionFondoService.actualizar(action.payload)
          .pipe(
            map(res => {
              return new fromDistribucionFondo.UpdateDistribucionFondoSuccess({ data: res, message: messages.UPDATE_SUCCESS });
            }),
            catchError((err: HttpErrorResponse) => {
              return of(new fromDistribucionFondo.UpdateDistribucionFondoFail(err))
            })
          )
      })
    );

  @Effect()
  DeleteDistribucionFondo$ = this.actions$
    .pipe(
      ofType(fromDistribucionFondo.actions.DELETE),
      withLatestFrom(this.store$.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromDistribucionFondo.DeleteDistribucionFondo, GlobalMessages]) => {
        return this.DistribucionFondoService.eliminar(action.payload)
          .pipe(
            map(res => {
              return new fromDistribucionFondo.DeleteDistribucionFondoSuccess({ message: messages.DELETE_SUCCESS });
            }),
            catchError((err: HttpErrorResponse) => {
              return of(new fromDistribucionFondo.DeleteDistribucionFondoFail(err))
            })
          )
      })
    );

  @Effect()
  Export$ = this.actions$
    .pipe(
      ofType(fromDistribucionFondo.actions.DOWNLOAD),
      withLatestFrom(this.store$.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromDistribucionFondo.DownloadDistribucionFondo, GlobalMessages]) => {
        return this.DistribucionFondoService.exportar()
          .pipe(
            map(res => new fromDistribucionFondo.DownloadDistribucionFondoSuccess({ message: messages.DOWNLOAD_SUCCESS })),
            catchError((err: HttpErrorResponse) => of(new fromDistribucionFondo.DownloadDistribucionFondoFail(err)))
          )
      })
    );

}