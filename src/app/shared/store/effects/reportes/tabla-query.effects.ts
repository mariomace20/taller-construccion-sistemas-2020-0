import { Injectable } from '@angular/core';
import { TablaQueryService } from '../../../../reportes/user/services/tabla-query.service';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as fromTablaQuery from '../../actions/reportes/tablas-query.actions';
import { switchMap, map, catchError, withLatestFrom } from 'rxjs/operators';
import { of } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import { GlobalMessages } from '../../reducers/global.reducer';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class TablaQueryEffects {

  constructor(
    private actions$: Actions,
    private store$: Store<AppState>,
    private tablaQueryService: TablaQueryService
  ) { }

  @Effect()
  GetAll$ = this.actions$
    .pipe(
      ofType(fromTablaQuery.actions.GET_ALL),
      switchMap(() => {
        return this.tablaQueryService.buscarTodos()
          .pipe(
            map(res => {
              //console.log(res);
              return new fromTablaQuery.GetAllTablasQuerySuccess(res);
            }),
            catchError((err) => {
              //console.log(err);
              return of(new fromTablaQuery.GetAllTablasQueryFail(err));
            })
          )
      })
    );

    @Effect()
    GetCriterio$ = this.actions$
      .pipe(
        ofType(fromTablaQuery.actions.GET_CRITERIO),
        switchMap((action: fromTablaQuery.GetCriterioTablasQuery) => {
          return this.tablaQueryService.buscarPorCriterios(action.payload)
            .pipe(
              map(res => {
                //console.log(res)
                return new fromTablaQuery.GetCriterioTablasQuerySuccess(res);
              }),
              catchError((err) => of(new fromTablaQuery.GetCriterioTablasQueryFail(err)))
            )
        })
      );

  @Effect()
  AddTablaQuery$ = this.actions$
    .pipe(
      ofType(fromTablaQuery.actions.ADD),
      withLatestFrom(this.store$.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromTablaQuery.AddTablaQuery, GlobalMessages]) => {
        return this.tablaQueryService.registrar(action.payload)
          .pipe(
            map(res => {
              return new fromTablaQuery.AddTablaQuerySuccess({ data: res, message: messages.ADD_SUCCESS });
            }),
            catchError((err: HttpErrorResponse) => {
              return of(new fromTablaQuery.AddTablaQueryFail(err))
            })
          )
      })
    );

  @Effect()
  UpdateTablaQuery$ = this.actions$
    .pipe(
      ofType(fromTablaQuery.actions.UPDATE),
      withLatestFrom(this.store$.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromTablaQuery.UpdateTablaQuery, GlobalMessages]) => {
        return this.tablaQueryService.actualizar(action.payload)
          .pipe(
            map(res => {
              return new fromTablaQuery.UpdateTablaQuerySuccess({ data: res, message: messages.UPDATE_SUCCESS });
            }),
            catchError((err: HttpErrorResponse) => {
              return of(new fromTablaQuery.UpdateTablaQueryFail(err))
            })
          )
      })
    );

  @Effect()
  DeleteTablaQuery$ = this.actions$
    .pipe(
      ofType(fromTablaQuery.actions.DELETE),
      withLatestFrom(this.store$.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromTablaQuery.DeleteTablaQuery, GlobalMessages]) => {
        return this.tablaQueryService.eliminar(action.payload)
          .pipe(
            map(res => {
              return new fromTablaQuery.DeleteTablaQuerySuccess({ message: messages.DELETE_SUCCESS });
            }),
            catchError((err: HttpErrorResponse) => {
              return of(new fromTablaQuery.DeleteTablaQueryFail(err))
            })
          )
      })
    );



}
