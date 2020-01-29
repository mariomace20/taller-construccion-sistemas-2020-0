import { Injectable } from '@angular/core';
import { PortafolioService } from '../../../../facturacion/services/portafolio.service';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as fromPortafolio from '../../actions/facturacion/portafolio.actions';
import { switchMap, map, catchError, withLatestFrom } from 'rxjs/operators';
import { of } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import { GlobalMessages } from '../../reducers/global.reducer';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class PortafolioEffects {

  constructor(
    private actions$: Actions,
    private store$: Store<AppState>,
    private portafolioService: PortafolioService
  ) { }

  @Effect()
  GetAll$ = this.actions$
    .pipe(
      ofType(fromPortafolio.actions.GET_ALL),
      switchMap(() => {
        return this.portafolioService.buscarTodos()
          .pipe(
            map(res => {
              //console.log(res);
              return new fromPortafolio.GetAllPortafolioSuccess(res);
            }),
            catchError((err) => of(new fromPortafolio.GetAllPortafolioFail(err)))
          )
      })
    );

  @Effect()
  AddPortafolio$ = this.actions$
    .pipe(
      ofType(fromPortafolio.actions.ADD),
      withLatestFrom(this.store$.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromPortafolio.AddPortafolio, GlobalMessages]) => {
        return this.portafolioService.registrar(action.payload)
          .pipe(
            map(res => {
              return new fromPortafolio.AddPortafolioSuccess({ data: res, message: messages.ADD_SUCCESS });
            }),
            catchError((err: HttpErrorResponse) => of(new fromPortafolio.AddPortafolioFail(err)))
          )
      })
    );

  @Effect()
  UpdatePortafolio$ = this.actions$
    .pipe(
      ofType(fromPortafolio.actions.UPDATE),
      withLatestFrom(this.store$.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromPortafolio.UpdatePortafolio, GlobalMessages]) => {
        return this.portafolioService.actualizar(action.payload)
          .pipe(
            map(res => new fromPortafolio.UpdatePortafolioSuccess({ data: res, message: messages.UPDATE_SUCCESS })),
            catchError((err: HttpErrorResponse) => of(new fromPortafolio.UpdatePortafolioFail(err)))
          )
      })
    );

  @Effect()
  DeletePortafolio$ = this.actions$
    .pipe(
      ofType(fromPortafolio.actions.DELETE),
      withLatestFrom(this.store$.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromPortafolio.DeletePortafolio, GlobalMessages]) => {
        return this.portafolioService.eliminar(action.payload)
          .pipe(
            map(res => new fromPortafolio.DeletePortafolioSuccess({ message: messages.DELETE_SUCCESS })),
            catchError((err: HttpErrorResponse) => of(new fromPortafolio.DeletePortafolioFail(err)))
          )
      })
    );

  @Effect()
  Export$ = this.actions$
    .pipe(
      ofType(fromPortafolio.actions.DOWNLOAD),
      withLatestFrom(this.store$.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromPortafolio.DownloadPortafolio, GlobalMessages]) => {
        return this.portafolioService.exportar()
          .pipe(
            map(res => new fromPortafolio.DownloadPortafolioSuccess({ message: messages.DOWNLOAD_SUCCESS })),
            catchError((err: HttpErrorResponse) => of(new fromPortafolio.DownloadPortafolioFail(err)))
          )
      })
    );

}
