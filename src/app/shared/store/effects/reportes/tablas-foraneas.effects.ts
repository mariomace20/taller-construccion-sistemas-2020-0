import { Injectable } from '@angular/core';
import { TablasForaneasService } from '../../../../reportes/user/services/tablas-foraneas.service';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as fromTablasForaneas from '../../actions/reportes/tablas-foraneas.actions';
import { switchMap, map, catchError, withLatestFrom } from 'rxjs/operators';
import { of } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import { GlobalMessages } from '../../reducers/global.reducer';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class TablasForaneasEffects {

  constructor(
    private actions$: Actions,
    private store$: Store<AppState>,
    private tablasForaneasService: TablasForaneasService
  ) { }

  @Effect()
  GetAll$ = this.actions$
    .pipe(
      ofType(fromTablasForaneas.actions.GET_ALL),
      switchMap(() => {
        return this.tablasForaneasService.buscarTodos()
          .pipe(
            map(res => {
              return new fromTablasForaneas.GetAllTablasForaneasSuccess(res);
            }),
            catchError((err) => {
              return of(new fromTablasForaneas.GetAllTablasForaneasFail(err));
            })
          )
      })
    );

    @Effect()
    GetCriterio$ = this.actions$
      .pipe(
        ofType(fromTablasForaneas.actions.GET_CRITERIO),
        switchMap((action: fromTablasForaneas.GetCriterioTablasForaneas) => {
          return this.tablasForaneasService.buscarPorCriterios(action.payload)
            .pipe(
              map(res => {
                return new fromTablasForaneas.GetCriterioTablasForaneasSuccess(res);
              }),
              catchError((err) => of(new fromTablasForaneas.GetCriterioTablasForaneasFail(err)))
            )
        })
      );

      @Effect()
      AddTablasForaneas$ = this.actions$
        .pipe(
          ofType(fromTablasForaneas.actions.ADD),
          withLatestFrom(this.store$.select('globalData', 'messages')),
          switchMap(([action, messages]: [fromTablasForaneas.AddTablasForaneas, GlobalMessages]) => {
            return this.tablasForaneasService.registrar(action.payload)
              .pipe(
                map(res => {
                  return new fromTablasForaneas.AddTablasForaneasSuccess({ data: res, message: messages.ADD_SUCCESS });
                }),
                catchError((err: HttpErrorResponse) => {
                  return of(new fromTablasForaneas.AddTablasForaneasFail(err))
                })
              )
          })
        );

      @Effect()
      UpdateTablasForaneas$ = this.actions$
        .pipe(
          ofType(fromTablasForaneas.actions.UPDATE),
          withLatestFrom(this.store$.select('globalData', 'messages')),
          switchMap(([action, messages]: [fromTablasForaneas.UpdateTablasForaneas, GlobalMessages]) => {
            return this.tablasForaneasService.actualizar(action.payload)
              .pipe(
                map(res => {
                  return new fromTablasForaneas.UpdateTablasForaneasSuccess({ data: res, message: messages.UPDATE_SUCCESS });
                }),
                catchError((err: HttpErrorResponse) => {
                  return of(new fromTablasForaneas.UpdateTablasForaneasFail(err))
                })
              )
          })
        );

      @Effect()
      DeleteTablasForaneas$ = this.actions$
        .pipe(
          ofType(fromTablasForaneas.actions.DELETE),
          withLatestFrom(this.store$.select('globalData', 'messages')),
          switchMap(([action, messages]: [fromTablasForaneas.DeleteTablasForaneas, GlobalMessages]) => {
            return this.tablasForaneasService.eliminar(action.payload)
              .pipe(
                map(res => {
                  return new fromTablasForaneas.DeleteTablasForaneasSuccess({ message: messages.DELETE_SUCCESS });
                }),
                catchError((err: HttpErrorResponse) => {
                  return of(new fromTablasForaneas.DeleteTablasForaneasFail(err))
                })
              )
          })
        );

}
