import { Injectable } from '@angular/core';
import { AtmRedAsociadaService } from '../../../../mantenimiento/services/atm-red-asociada.service';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as fromAtmRedAsociada from '../../actions/mantenimiento/atm-red-asociada.actions';
import { switchMap, map, catchError, withLatestFrom } from 'rxjs/operators';
import { of } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import { GlobalMessages } from '../../reducers/global.reducer';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class AtmRedAsociadaEffects {

  constructor(
    private actions$: Actions,
    private store$: Store<AppState>,
    private atmRedAsociadaService: AtmRedAsociadaService
  ) { }

  @Effect()
  GetAll$ = this.actions$
    .pipe(
      ofType(fromAtmRedAsociada.actions.GET_ALL),
      switchMap(() => {
        return this.atmRedAsociadaService.buscarTodos()
          .pipe(
            map(res => {

              return new fromAtmRedAsociada.GetAllAtmRedAsociadaSuccess(res);
            }),
            catchError((err) => {

              return of(new fromAtmRedAsociada.GetAllAtmRedAsociadaFail(err));
            })
          )
      })
    );

  @Effect()
  AddAtmRedAsociada$ = this.actions$
    .pipe(
      ofType(fromAtmRedAsociada.actions.ADD),
      withLatestFrom(this.store$.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromAtmRedAsociada.AddAtmRedAsociada, GlobalMessages]) => {
        return this.atmRedAsociadaService.registrar(action.payload)
          .pipe(
            map(res => {
              return new fromAtmRedAsociada.AddAtmRedAsociadaSuccess({ data: res, message: messages.ADD_SUCCESS });
            }),
            catchError((err: HttpErrorResponse) => {
              return of(new fromAtmRedAsociada.AddAtmRedAsociadaFail(err))
            })
          )
      })
    );

  @Effect()
  UpdateAtmRedAsociada$ = this.actions$
    .pipe(
      ofType(fromAtmRedAsociada.actions.UPDATE),
      withLatestFrom(this.store$.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromAtmRedAsociada.UpdateAtmRedAsociada, GlobalMessages]) => {
        return this.atmRedAsociadaService.actualizar(action.payload)
          .pipe(
            map(res => {
              return new fromAtmRedAsociada.UpdateAtmRedAsociadaSuccess({ data: res, message: messages.UPDATE_SUCCESS });
            }),
            catchError((err: HttpErrorResponse) => {
              return of(new fromAtmRedAsociada.UpdateAtmRedAsociadaFail(err))
            })
          )
      })
    );

  @Effect()
  DeleteAtmRedAsociada$ = this.actions$
    .pipe(
      ofType(fromAtmRedAsociada.actions.DELETE),
      withLatestFrom(this.store$.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromAtmRedAsociada.DeleteAtmRedAsociada, GlobalMessages]) => {
        return this.atmRedAsociadaService.eliminar(action.payload)
          .pipe(
            map(res => {
              return new fromAtmRedAsociada.DeleteAtmRedAsociadaSuccess({ data: res, message: messages.DELETE_SUCCESS });
            }),
            catchError((err: HttpErrorResponse) => {
              return of(new fromAtmRedAsociada.DeleteAtmRedAsociadaFail(err))
            })
          )
      })
    );

    @Effect()
  Export$ = this.actions$
    .pipe(
      ofType(fromAtmRedAsociada.actions.DOWNLOAD),
      withLatestFrom(this.store$.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromAtmRedAsociada.DownloadAtmRedAsociada, GlobalMessages]) => {
        return this.atmRedAsociadaService.exportar()
          .pipe(
            map(res => new fromAtmRedAsociada.DownloadAtmRedAsociadaSuccess({ message: messages.DOWNLOAD_SUCCESS })),
            catchError((err: HttpErrorResponse) => of(new fromAtmRedAsociada.DownloadAtmRedAsociadaFail(err)))
          )
      })
    );

}
