import { Injectable } from '@angular/core';
import { EscenarioContableService } from '../../../../tarifario/services/escenario-contable.service';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as fromEscenarioContable from '../../actions/tarifario/escenario-contable.actions';
import { switchMap, map, catchError, withLatestFrom } from 'rxjs/operators';
import { of } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import { GlobalMessages } from '../../reducers/global.reducer';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class EscenarioContableEffects {

  constructor(
    private actions$: Actions,
    private store$: Store<AppState>,
    private tipoTarifaService: EscenarioContableService
  ) { }

  @Effect()
  GetAll$ = this.actions$
    .pipe(
      ofType(fromEscenarioContable.actions.GET_ALL),
      switchMap(() => {
        return this.tipoTarifaService.buscarTodos()
          .pipe(
            map(res => {
              return new fromEscenarioContable.GetAllEscenarioContableSuccess(res);
            }),
            catchError((err) => {
              return of(new fromEscenarioContable.GetAllEscenarioContableFail(err));
            })
          )
      })
    );

  @Effect()
  AddEscenarioContable$ = this.actions$
    .pipe(
      ofType(fromEscenarioContable.actions.ADD),
      withLatestFrom(this.store$.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromEscenarioContable.AddEscenarioContable, GlobalMessages]) => {
        return this.tipoTarifaService.registrar(action.payload)
          .pipe(
            map(res => {
              return new fromEscenarioContable.AddEscenarioContableSuccess({ data: res, message: messages.ADD_SUCCESS });
            }),
            catchError((err: HttpErrorResponse) => {
              return of(new fromEscenarioContable.AddEscenarioContableFail(err))
            })
          )
      })
    );

  @Effect()
  UpdateEscenarioContable$ = this.actions$
    .pipe(
      ofType(fromEscenarioContable.actions.UPDATE),
      withLatestFrom(this.store$.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromEscenarioContable.UpdateEscenarioContable, GlobalMessages]) => {
        return this.tipoTarifaService.actualizar(action.payload)
          .pipe(
            map(res => {
              return new fromEscenarioContable.UpdateEscenarioContableSuccess({ data: res, message: messages.UPDATE_SUCCESS });
            }),
            catchError((err: HttpErrorResponse) => {
              return of(new fromEscenarioContable.UpdateEscenarioContableFail(err))
            })
          )
      })
    );

  @Effect()
  DeleteEscenarioContable$ = this.actions$
    .pipe(
      ofType(fromEscenarioContable.actions.DELETE),
      withLatestFrom(this.store$.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromEscenarioContable.DeleteEscenarioContable, GlobalMessages]) => {
        return this.tipoTarifaService.eliminar(action.payload)
          .pipe(
            map(res => {
              return new fromEscenarioContable.DeleteEscenarioContableSuccess({ message: messages.DELETE_SUCCESS });
            }),
            catchError((err: HttpErrorResponse) => {
              return of(new fromEscenarioContable.DeleteEscenarioContableFail(err))
            })
          )
      })
    );
    @Effect()
    Export$ = this.actions$
      .pipe(
        ofType(fromEscenarioContable.actions.DOWNLOAD),
        withLatestFrom(this.store$.select('globalData', 'messages')),
        switchMap(([action, messages]: [fromEscenarioContable.DownloadEscenarioContable, GlobalMessages]) => {
          return this.tipoTarifaService.exportar()
            .pipe(
              map(res => new fromEscenarioContable.DownloadEscenarioContableSuccess({ message: messages.DOWNLOAD_SUCCESS })),
              catchError((err: HttpErrorResponse) => of(new fromEscenarioContable.DownloadEscenarioContableFail(err)))
            )
        })
      );


}
