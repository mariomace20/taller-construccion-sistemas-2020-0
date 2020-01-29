import { Injectable } from '@angular/core';
import { TarifarioAdquirenteService } from '../../../../tarifario/services/tarifario-adquirente.service';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as fromTarifarioAdquirente from '../../actions/tarifario/tarifario-adquirente.actions';
import { switchMap, map, catchError, withLatestFrom } from 'rxjs/operators';
import { of } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import { GlobalMessages } from '../../reducers/global.reducer';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class TarifarioAdquirenteEffects {

  constructor(
    private actions$: Actions,
    private store$: Store<AppState>,
    private tarifarioAdquirenteService: TarifarioAdquirenteService
  ) { }

  @Effect()
  GetAll$ = this.actions$
    .pipe(
      ofType(fromTarifarioAdquirente.actions.GET_ALL),
      switchMap(() => {
        return this.tarifarioAdquirenteService.buscarTodos()
          .pipe(
            map(res => {
              return new fromTarifarioAdquirente.GetAllTarifarioAdquirenteSuccess(res);
            }),
            catchError((err) => {
              return of(new fromTarifarioAdquirente.GetAllTarifarioAdquirenteFail(err));
            })
          )
      })
    );

  @Effect()
  AddTarifarioAdquirente$ = this.actions$
    .pipe(
      ofType(fromTarifarioAdquirente.actions.ADD),
      withLatestFrom(this.store$.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromTarifarioAdquirente.AddTarifarioAdquirente, GlobalMessages]) => {
        return this.tarifarioAdquirenteService.registrar(action.payload)
          .pipe(
            map(res => {
              return new fromTarifarioAdquirente.AddTarifarioAdquirenteSuccess({ data: res, message: messages.ADD_SUCCESS });
            }),
            catchError((err: HttpErrorResponse) => {
              return of(new fromTarifarioAdquirente.AddTarifarioAdquirenteFail(err))
            })
          )
      })
    );

  @Effect()
  UpdateTarifarioAdquirente$ = this.actions$
    .pipe(
      ofType(fromTarifarioAdquirente.actions.UPDATE),
      withLatestFrom(this.store$.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromTarifarioAdquirente.UpdateTarifarioAdquirente, GlobalMessages]) => {
        return this.tarifarioAdquirenteService.actualizar(action.payload)
          .pipe(
            map(res => {
              return new fromTarifarioAdquirente.UpdateTarifarioAdquirenteSuccess({ data: res, message: messages.UPDATE_SUCCESS });
            }),
            catchError((err: HttpErrorResponse) => {
              return of(new fromTarifarioAdquirente.UpdateTarifarioAdquirenteFail(err))
            })
          )
      })
    );

  @Effect()
  DeleteTarifarioAdquirente$ = this.actions$
    .pipe(
      ofType(fromTarifarioAdquirente.actions.DELETE),
      withLatestFrom(this.store$.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromTarifarioAdquirente.DeleteTarifarioAdquirente, GlobalMessages]) => {
        return this.tarifarioAdquirenteService.eliminar(action.payload)
          .pipe(
            map(res => {
              return new fromTarifarioAdquirente.DeleteTarifarioAdquirenteSuccess({ message: messages.DELETE_SUCCESS });
            }),
            catchError((err: HttpErrorResponse) => {
              return of(new fromTarifarioAdquirente.DeleteTarifarioAdquirenteFail(err))
            })
          )
      })
    );
    
  @Effect()
  Export$ = this.actions$
    .pipe(
      ofType(fromTarifarioAdquirente.actions.DOWNLOAD),
      withLatestFrom(this.store$.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromTarifarioAdquirente.DownloadTarifarioAdquirente, GlobalMessages]) => {
        return this.tarifarioAdquirenteService.exportar()
          .pipe(
            map(res => new fromTarifarioAdquirente.DownloadTarifarioAdquirenteSuccess({ message: messages.DOWNLOAD_SUCCESS })),
            catchError((err: HttpErrorResponse) => of(new fromTarifarioAdquirente.DownloadTarifarioAdquirenteFail(err)))
          )
      })
    );

}
