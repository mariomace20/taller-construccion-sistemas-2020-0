import { Injectable } from '@angular/core';
import { TarifarioEmisorService } from '../../../../tarifario/services/tarifario-emisor.service';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as fromTarifarioEmisor from '../../actions/tarifario/tarifario-emisor.actions';
import { switchMap, map, catchError, withLatestFrom } from 'rxjs/operators';
import { of } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import { GlobalMessages } from '../../reducers/global.reducer';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class TarifarioEmisorEffects {

  constructor(
    private actions$: Actions,
    private store$: Store<AppState>,
    private tarifarioEmisorService: TarifarioEmisorService
  ) { }

  @Effect()
  GetAll$ = this.actions$
    .pipe(
      ofType(fromTarifarioEmisor.actions.GET_ALL),
      switchMap(() => {
        return this.tarifarioEmisorService.buscarTodos()
          .pipe(
            map(res => {
              return new fromTarifarioEmisor.GetAllTarifarioEmisorSuccess(res);
            }),
            catchError((err) => {
              return of(new fromTarifarioEmisor.GetAllTarifarioEmisorFail(err));
            })
          )
      })
    );

  @Effect()
  AddTarifarioEmisor$ = this.actions$
    .pipe(
      ofType(fromTarifarioEmisor.actions.ADD),
      withLatestFrom(this.store$.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromTarifarioEmisor.AddTarifarioEmisor, GlobalMessages]) => {
        return this.tarifarioEmisorService.registrar(action.payload)
          .pipe(
            map(res => {
              return new fromTarifarioEmisor.AddTarifarioEmisorSuccess({ data: res, message: messages.ADD_SUCCESS });
            }),
            catchError((err: HttpErrorResponse) => {
              return of(new fromTarifarioEmisor.AddTarifarioEmisorFail(err))
            })
          )
      })
    );

  @Effect()
  UpdateTarifarioEmisor$ = this.actions$
    .pipe(
      ofType(fromTarifarioEmisor.actions.UPDATE),
      withLatestFrom(this.store$.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromTarifarioEmisor.UpdateTarifarioEmisor, GlobalMessages]) => {
        return this.tarifarioEmisorService.actualizar(action.payload)
          .pipe(
            map(res => {
              return new fromTarifarioEmisor.UpdateTarifarioEmisorSuccess({ data: res, message: messages.UPDATE_SUCCESS });
            }),
            catchError((err: HttpErrorResponse) => {
              return of(new fromTarifarioEmisor.UpdateTarifarioEmisorFail(err))
            })
          )
      })
    );

  @Effect()
  DeleteTarifarioEmisor$ = this.actions$
    .pipe(
      ofType(fromTarifarioEmisor.actions.DELETE),
      withLatestFrom(this.store$.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromTarifarioEmisor.DeleteTarifarioEmisor, GlobalMessages]) => {
        return this.tarifarioEmisorService.eliminar(action.payload)
          .pipe(
            map(res => {
              return new fromTarifarioEmisor.DeleteTarifarioEmisorSuccess({ message: messages.DELETE_SUCCESS });
            }),
            catchError((err: HttpErrorResponse) => {
              return of(new fromTarifarioEmisor.DeleteTarifarioEmisorFail(err))
            })
          )
      })
    );
    @Effect()
    Export$ = this.actions$
      .pipe(
        ofType(fromTarifarioEmisor.actions.DOWNLOAD),
        withLatestFrom(this.store$.select('globalData', 'messages')),
        switchMap(([action, messages]: [fromTarifarioEmisor.DownloadTarifarioEmisor, GlobalMessages]) => {
          return this.tarifarioEmisorService.exportar()
            .pipe(
              map(res => new fromTarifarioEmisor.DownloadTarifarioEmisorSuccess({ message: messages.DOWNLOAD_SUCCESS })),
              catchError((err: HttpErrorResponse) => of(new fromTarifarioEmisor.DownloadTarifarioEmisorFail(err)))
            )
        })
      );

}
