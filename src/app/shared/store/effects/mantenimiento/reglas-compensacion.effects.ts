import { Injectable } from '@angular/core';
import { ReglasCompensacionService } from '../../../../mantenimiento/services';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as fromReglasCompensacion from '../../actions/mantenimiento/reglas-compensacion.actions';
import { switchMap, map, catchError, withLatestFrom } from 'rxjs/operators';
import { of } from 'rxjs';
import { Store } from '@ngrx/store';
import { GlobalMessages } from '../../reducers/global.reducer';
import { HttpErrorResponse } from '@angular/common/http';
import { AppState } from '../../app.reducers';

@Injectable()
export class ReglasCompensacionEffects {

  constructor(
    private actions$: Actions,
    private store$: Store<AppState>,
    private reglasCompensacionService: ReglasCompensacionService
  ) { }

  @Effect()
  GetAll$ = this.actions$
    .pipe(
      ofType(fromReglasCompensacion.actions.GET_ALL),
      switchMap(() => {
        return this.reglasCompensacionService.buscarTodos()
          .pipe(
            map(res => {
              return new fromReglasCompensacion.GetAllReglasCompensacionSuccess(res);
            }),
            catchError((err) => {
              return of(new fromReglasCompensacion.GetAllReglasCompensacionFail(err));
            })
          )
      })
    );

    @Effect()
    Add$ = this.actions$
      .pipe(
        ofType(fromReglasCompensacion.actions.ADD),
        withLatestFrom(this.store$.select('globalData', 'messages')),
        switchMap(([action, messages]: [fromReglasCompensacion.AddReglasCompensacion, GlobalMessages]) => {
          return this.reglasCompensacionService.registrar(action.payload)
            .pipe(
              map(res => {
                return new fromReglasCompensacion.AddReglasCompensacionSuccess({ data: res, message: messages.ADD_SUCCESS });
              }),
              catchError((err: HttpErrorResponse) => {
                return of(new fromReglasCompensacion.AddReglasCompensacionFail(err))
              })
            )
        })
      );


    @Effect()
    Update$ = this.actions$
      .pipe(
        ofType(fromReglasCompensacion.actions.UPDATE),
        withLatestFrom(this.store$.select('globalData', 'messages')),
        switchMap(([action, messages]: [fromReglasCompensacion.UpdateReglasCompensacion, GlobalMessages]) => {
          return this.reglasCompensacionService.actualizar(action.payload)
            .pipe(
              map(res => {
                return new fromReglasCompensacion.UpdateReglasCompensacionSuccess({ data: res, message: messages.UPDATE_SUCCESS });
              }),
              catchError((err: HttpErrorResponse) => {
                return of(new fromReglasCompensacion.UpdateReglasCompensacionFail(err))
              })
            )
        })
      );

    @Effect()
    Delete$ = this.actions$
      .pipe(
        ofType(fromReglasCompensacion.actions.DELETE),
        withLatestFrom(this.store$.select('globalData', 'messages')),
        switchMap(([action, messages]: [fromReglasCompensacion.DeleteReglasCompensacion, GlobalMessages]) => {
          return this.reglasCompensacionService.eliminar(action.payload)
            .pipe(
              map(res => {
                return new fromReglasCompensacion.DeleteReglasCompensacionSuccess({ message: messages.DELETE_SUCCESS });
              }),
              catchError((err: HttpErrorResponse) => {
                return of(new fromReglasCompensacion.DeleteReglasCompensacionFail(err))
              })
            )
        })
      );

}
