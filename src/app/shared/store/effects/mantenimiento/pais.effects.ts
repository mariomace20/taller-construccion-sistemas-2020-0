import { Injectable } from '@angular/core';
import { PaisService } from '../../../../mantenimiento/services/pais.service';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as fromPais from '../../actions/mantenimiento/pais.actions';
import { switchMap, map, catchError, withLatestFrom } from 'rxjs/operators';
import { of } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import { GlobalMessages } from '../../reducers/global.reducer';
import { HttpErrorResponse } from '@angular/common/http';
import { addLabelToObjsArr, sortByAttr } from '../../../utils';

@Injectable()
export class PaisEffects {

  constructor(
    private actions$: Actions,
    private store$: Store<AppState>,
    private paisService: PaisService
  ) { }

  @Effect()
  GetAll$ = this.actions$
    .pipe(
      ofType(fromPais.actions.GET_ALL),
      switchMap(() => {

        return this.paisService.buscarTodos()
          .pipe(
            map(res => {
              sortByAttr(res,'nombre')
              addLabelToObjsArr(res, 'label', false, 'idPais', 'nombre');
              return new fromPais.GetAllPaisSuccess(res);
            }),
            catchError((err) => {
              return of(new fromPais.GetAllPaisFail(err));
            })
          )
      })
    );

  @Effect()
  AddPais$ = this.actions$
    .pipe(
      ofType(fromPais.actions.ADD),
      withLatestFrom(this.store$.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromPais.AddPais, GlobalMessages]) => {
        return this.paisService.registrar(action.payload)
          .pipe(
            map(res => {
              return new fromPais.AddPaisSuccess({ data: res, message: messages.ADD_SUCCESS });
            }),
            catchError((err: HttpErrorResponse) => {
              return of(new fromPais.AddPaisFail(err))
            })
          )
      })
    );

  @Effect()
  UpdatePais$ = this.actions$
    .pipe(
      ofType(fromPais.actions.UPDATE),
      withLatestFrom(this.store$.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromPais.UpdatePais, GlobalMessages]) => {
        return this.paisService.actualizar(action.payload)
          .pipe(
            map(res => {
              return new fromPais.UpdatePaisSuccess({ data: res, message: messages.UPDATE_SUCCESS });
            }),
            catchError((err: HttpErrorResponse) => {
              return of(new fromPais.UpdatePaisFail(err))
            })
          )
      })
    );

  @Effect()
  DeletePais$ = this.actions$
    .pipe(
      ofType(fromPais.actions.DELETE),
      withLatestFrom(this.store$.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromPais.DeletePais, GlobalMessages]) => {
        return this.paisService.eliminar(action.payload)
          .pipe(
            map(res => {
              return new fromPais.DeletePaisSuccess({ message: messages.DELETE_SUCCESS });
            }),
            catchError((err: HttpErrorResponse) => {
              return of(new fromPais.DeletePaisFail(err))
            })
          )
      })
    );

  @Effect()
  Export$ = this.actions$
    .pipe(
      ofType(fromPais.actions.DOWNLOAD),
      withLatestFrom(this.store$.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromPais.DownloadPais, GlobalMessages]) => {
        return this.paisService.exportar()
          .pipe(
            map(res => new fromPais.DownloadPaisSuccess({ message: messages.DOWNLOAD_SUCCESS })),
            catchError((err: HttpErrorResponse) => of(new fromPais.DownloadPaisFail(err)))
          )
      })
    );

}
