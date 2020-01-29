import { Injectable } from '@angular/core';
import { CampoService } from '../../../../reportes/admin/services/campo.service';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as fromCampo from '../../actions/reportes/campo.actions';
import { switchMap, map, catchError, withLatestFrom } from 'rxjs/operators';
import { of } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import { GlobalMessages } from '../../reducers/global.reducer';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class CampoEffects {

  constructor(
    private actions$: Actions,
    private store$: Store<AppState>,
    private campoService: CampoService
  ) { }

  @Effect()
  GetAll$ = this.actions$
    .pipe(
      ofType(fromCampo.actions.GET_ALL),
      switchMap(() => {
        return this.campoService.buscarTodos()
          .pipe(
            map(res => {
              return new fromCampo.GetAllCamposSuccess(res);
            }),
            catchError((err) => {
              //console.log(err);
              return of(new fromCampo.GetAllCamposFail(err));
            })
          )
      })
    );

  @Effect()
  GetCriterio$ = this.actions$
    .pipe(
      ofType(fromCampo.actions.GET_CRITERIO),
      switchMap((action: fromCampo.GetCriterioCampo) => {
        return this.campoService.buscarPorCriterios(action.payload)
          .pipe(
            map(res => {
              //console.log(res)
              return new fromCampo.GetCriterioCampoSuccess(res);
            }),
            catchError((err) => of(new fromCampo.GetCriterioCampoFail(err)))
          )
      })
    );

  @Effect()
  GetCamposPorUsuarioActivo$ = this.actions$
    .pipe(
      ofType(fromCampo.actions.GET_PERMITED),
      switchMap(() => {
        return this.campoService.buscarCamposPorUsuarioActivo()
          .pipe(
            map(res => {
              return new fromCampo.GetCamposPorUsuarioActivoSuccess(res);
            }),
            catchError((err) => {
              //console.log(err);
              return of(new fromCampo.GetCamposPorUsuarioActivoFail(err));
            })
          )
      })
    );

  @Effect()
  UpdateCampo$ = this.actions$
    .pipe(
      ofType(fromCampo.actions.UPDATE),
      withLatestFrom(this.store$.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromCampo.UpdateCampo, GlobalMessages]) => {
        return this.campoService.actualizar(action.payload)
          .pipe(
            map(res => {
              return new fromCampo.UpdateCampoSuccess({ data: res, message: messages.UPDATE_SUCCESS });
            }),
            catchError((err: HttpErrorResponse) => {
              return of(new fromCampo.UpdateCampoFail(err))
            })
          )
      })
    );
  /*
  @Effect()
  GetById$ = this.actions$
    .pipe(
      ofType(fromCampo.actions.GET_CRITERIO),
      switchMap(() => {
        return this.campoService.buscarTodos()
          .pipe(
            map(res => {
              return new fromCampo.GetByCampoSuccess(res);
            }),
            catchError((err) => {
              //console.log(err);
              return of(new fromCampo.GetByCampoFail(err));
            })
          )
      })
    );
      */
}
