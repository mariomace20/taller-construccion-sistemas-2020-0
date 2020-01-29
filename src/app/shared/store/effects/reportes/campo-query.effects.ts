import { Injectable } from '@angular/core';
import { CampoQueryService } from '../../../../reportes/user/services/campo-query.service';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as fromCampoQuery from '../../actions/reportes/campos-query.actions';
import { switchMap, map, catchError, withLatestFrom } from 'rxjs/operators';
import { of } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import { GlobalMessages } from '../../reducers/global.reducer';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class CampoQueryEffects {

  constructor(
    private actions$: Actions,
    private store$: Store<AppState>,
    private campoQueryService: CampoQueryService
  ) { }

  @Effect()
  GetAll$ = this.actions$
    .pipe(
      ofType(fromCampoQuery.actions.GET_ALL),
      switchMap(() => {
        return this.campoQueryService.buscarTodos()
          .pipe(
            map(res => {
              //console.log(res);
              return new fromCampoQuery.GetAllCampoQuerySuccess(res);
            }),
            catchError((err) => {
              //console.log(err);
              return of(new fromCampoQuery.GetAllCampoQueryFail(err));
            })
          )
      })
    );

    @Effect()
    GetCriterio$ = this.actions$
      .pipe(
        ofType(fromCampoQuery.actions.GET_CRITERIO),
        switchMap((action: fromCampoQuery.GetCriterioCampoQuery) => {
          return this.campoQueryService.buscarPorCriterios(action.payload)
            .pipe(
              map(res => {
                //console.log(res)
                return new fromCampoQuery.GetCriterioCampoQuerySuccess(res);
              }),
              catchError((err) => of(new fromCampoQuery.GetCriterioCampoQueryFail(err)))
            )
        })
      );

  @Effect()
  AddCampoQuery$ = this.actions$
    .pipe(
      ofType(fromCampoQuery.actions.ADD),
      withLatestFrom(this.store$.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromCampoQuery.AddCampoQuery, GlobalMessages]) => {
        return this.campoQueryService.registrar(action.payload)
          .pipe(
            map(res => {
              return new fromCampoQuery.AddCampoQuerySuccess({ data: res, message: messages.ADD_SUCCESS });
            }),
            catchError((err: HttpErrorResponse) => {
              return of(new fromCampoQuery.AddCampoQueryFail(err))
            })
          )
      })
    );

  @Effect()
  UpdateCampoQuery$ = this.actions$
    .pipe(
      ofType(fromCampoQuery.actions.UPDATE),
      withLatestFrom(this.store$.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromCampoQuery.UpdateCampoQuery, GlobalMessages]) => {
        return this.campoQueryService.actualizar(action.payload)
          .pipe(
            map(res => {
              return new fromCampoQuery.UpdateCampoQuerySuccess({ data: res, message: messages.UPDATE_SUCCESS });
            }),
            catchError((err: HttpErrorResponse) => {
              return of(new fromCampoQuery.UpdateCampoQueryFail(err))
            })
          )
      })
    );

  @Effect()
  DeleteCampoQuery$ = this.actions$
    .pipe(
      ofType(fromCampoQuery.actions.DELETE),
      withLatestFrom(this.store$.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromCampoQuery.DeleteCampoQuery, GlobalMessages]) => {
        return this.campoQueryService.eliminar(action.payload)
          .pipe(
            map(res => {
              return new fromCampoQuery.DeleteCampoQuerySuccess({ message: messages.DELETE_SUCCESS });
            }),
            catchError((err: HttpErrorResponse) => {
              return of(new fromCampoQuery.DeleteCampoQueryFail(err))
            })
          )
      })
    );



}
