import { Injectable } from '@angular/core';
import { AtmRedUnicardService } from '../../../../mantenimiento/services';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as fromAtmRedUnicard from '../../actions/mantenimiento/atm-red-unicard.actions';
import { switchMap, map, catchError, withLatestFrom } from 'rxjs/operators';
import { of } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import { GlobalMessages } from '../../reducers/global.reducer';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class AtmRedUnicardEffects {

  constructor(
    private actions$: Actions,
    private store$: Store<AppState>,
    private atmRedUnicardService: AtmRedUnicardService
  ) { }

  @Effect()
  GetAll$ = this.actions$
    .pipe(
      ofType(fromAtmRedUnicard.actions.GET_ALL),
      switchMap(() => {
        return this.atmRedUnicardService.buscarTodos()
          .pipe(
            map(res => {

              return new fromAtmRedUnicard.GetAllAtmRedUnicardSuccess(res);
            }),
            catchError((err) => {

              return of(new fromAtmRedUnicard.GetAllAtmRedUnicardFail(err));
            })
          )
      })
    );

  @Effect()
  AddAtmRedUnicard$ = this.actions$
    .pipe(
      ofType(fromAtmRedUnicard.actions.ADD),
      withLatestFrom(this.store$.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromAtmRedUnicard.AddAtmRedUnicard, GlobalMessages]) => {
        return this.atmRedUnicardService.registrar(action.payload)
          .pipe(
            map(res => {
              return new fromAtmRedUnicard.AddAtmRedUnicardSuccess({ data: res, message: messages.ADD_SUCCESS });
            }),
            catchError((err: HttpErrorResponse) => {
              return of(new fromAtmRedUnicard.AddAtmRedUnicardFail(err))
            })
          )
      })
    );

  @Effect()
  UpdateAtmRedUnicard$ = this.actions$
    .pipe(
      ofType(fromAtmRedUnicard.actions.UPDATE),
      withLatestFrom(this.store$.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromAtmRedUnicard.UpdateAtmRedUnicard, GlobalMessages]) => {
        return this.atmRedUnicardService.actualizar(action.payload)
          .pipe(
            map(res => {
              return new fromAtmRedUnicard.UpdateAtmRedUnicardSuccess({ data: res, message: messages.UPDATE_SUCCESS });
            }),
            catchError((err: HttpErrorResponse) => {
              return of(new fromAtmRedUnicard.UpdateAtmRedUnicardFail(err))
            })
          )
      })
    );

  @Effect()
  DeleteAtmRedUnicard$ = this.actions$
    .pipe(
      ofType(fromAtmRedUnicard.actions.DELETE),
      withLatestFrom(this.store$.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromAtmRedUnicard.DeleteAtmRedUnicard, GlobalMessages]) => {
        return this.atmRedUnicardService.eliminar(action.payload)
          .pipe(
            map(res => {
              return new fromAtmRedUnicard.DeleteAtmRedUnicardSuccess({ message: messages.DELETE_SUCCESS });
            }),
            catchError((err: HttpErrorResponse) => {
              return of(new fromAtmRedUnicard.DeleteAtmRedUnicardFail(err))
            })
          )
      })
    );

    @Effect()
  Export$ = this.actions$
    .pipe(
      ofType(fromAtmRedUnicard.actions.DOWNLOAD),
      withLatestFrom(this.store$.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromAtmRedUnicard.DownloadAtmRedUnicard, GlobalMessages]) => {
        return this.atmRedUnicardService.exportar()
          .pipe(
            map(res => new fromAtmRedUnicard.DownloadAtmRedUnicardSuccess({ message: messages.DOWNLOAD_SUCCESS })),
            catchError((err: HttpErrorResponse) => of(new fromAtmRedUnicard.DownloadAtmRedUnicardFail(err)))
          )
      })
    );

}
