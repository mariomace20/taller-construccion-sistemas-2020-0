import { Injectable } from '@angular/core';
import { LiberacionMarcaService } from '../../../../mantenimiento/services/liberacion-marca.service';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as fromLiberacionMarca from '../../actions/mantenimiento/liberacion-marca.actions';
import { switchMap, map, catchError, withLatestFrom } from 'rxjs/operators';
import { of } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import { GlobalMessages } from '../../reducers/global.reducer';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class LiberacionMarcaEffects {

  constructor(
    private actions$: Actions,
    private store$: Store<AppState>,
    private liberacionMarcaService: LiberacionMarcaService
  ) { }

  @Effect()
  GetAll$ = this.actions$
    .pipe(
      ofType(fromLiberacionMarca.actions.GET_ALL),
      switchMap(() => {
        return this.liberacionMarcaService.buscarTodos()
          .pipe(
            map(res => {
              return new fromLiberacionMarca.GetAllLiberacionMarcaSuccess(res);
            }),
            catchError((err) => {
              return of(new fromLiberacionMarca.GetAllLiberacionMarcaFail(err));
            })
          )
      })
    );

  @Effect()
  GetByMembresia = this.actions$
    .pipe(
      ofType(fromLiberacionMarca.actions.GET_BY_MEMBRESIA),
      map((action: fromLiberacionMarca.GetByMembresia) => action.payload),
      switchMap(payload => {
        return this.liberacionMarcaService.buscarPorMembresia(payload)
          .pipe(
            map(res => {
              return new fromLiberacionMarca.GetByMembresiaSuccess(res);
            }),
            catchError((err: HttpErrorResponse) => {
              return of(new fromLiberacionMarca.GetByMembresiaFail(err));
            })
          )
      })
    )

  @Effect()
  AddLiberacionMarca$ = this.actions$
    .pipe(
      ofType(fromLiberacionMarca.actions.ADD),
      withLatestFrom(this.store$.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromLiberacionMarca.AddLiberacionMarca, GlobalMessages]) => {
        return this.liberacionMarcaService.registrar(action.payload)
          .pipe(
            map(res => {
              return new fromLiberacionMarca.AddLiberacionMarcaSuccess({ data: res, message: messages.ADD_SUCCESS });
            }),
            catchError((err: HttpErrorResponse) => {
              return of(new fromLiberacionMarca.AddLiberacionMarcaFail(err))
            })
          )
      })
    );

  @Effect()
  UpdateLiberacionMarca$ = this.actions$
    .pipe(
      ofType(fromLiberacionMarca.actions.UPDATE),
      withLatestFrom(this.store$.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromLiberacionMarca.UpdateLiberacionMarca, GlobalMessages]) => {
        return this.liberacionMarcaService.actualizar(action.payload)
          .pipe(
            map(res => {
              return new fromLiberacionMarca.UpdateLiberacionMarcaSuccess({ data: res, message: messages.UPDATE_SUCCESS });
            }),
            catchError((err: HttpErrorResponse) => {
              return of(new fromLiberacionMarca.UpdateLiberacionMarcaFail(err))
            })
          )
      })
    );

  @Effect()
  DeleteLiberacionMarca$ = this.actions$
    .pipe(
      ofType(fromLiberacionMarca.actions.DELETE),
      withLatestFrom(this.store$.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromLiberacionMarca.DeleteLiberacionMarca, GlobalMessages]) => {
        return this.liberacionMarcaService.eliminar(action.payload)
          .pipe(
            map(res => {
              return new fromLiberacionMarca.DeleteLiberacionMarcaSuccess({ message: messages.DELETE_SUCCESS });
            }),
            catchError((err: HttpErrorResponse) => {
              return of(new fromLiberacionMarca.DeleteLiberacionMarcaFail(err))
            })
          )
      })
    );
}
