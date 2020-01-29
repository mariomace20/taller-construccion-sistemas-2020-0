import { Injectable } from '@angular/core';
import { CodigoRazonCobroVisaService } from '../../../../mantenimiento/services/codigo-razon-cobro-visa.service';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as fromCodigoRazonCobroVisa from '../../actions/mantenimiento/codigo-razon-cobro-visa.actions';
import { switchMap, map, catchError, withLatestFrom } from 'rxjs/operators';
import { of } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import { GlobalMessages } from '../../reducers/global.reducer';
import { HttpErrorResponse } from '@angular/common/http';
import {addLabelToObjsArr, sortByAttr} from '../../../utils';

@Injectable()
export class CodigoRazonCobroVisaEffects {

  constructor(
    private actions$: Actions,
    private store$: Store<AppState>,
    private codigoRazonCobroVisaService: CodigoRazonCobroVisaService
  ) { }

  @Effect()
  GetAll$ = this.actions$
    .pipe(
      ofType(fromCodigoRazonCobroVisa.actions.GET_ALL),
      switchMap(() => {
        return this.codigoRazonCobroVisaService.buscarTodos()
          .pipe(
            map(res => {
              sortByAttr(res, 'idCodigoRazon');
              addLabelToObjsArr(res,'label',false,'idCodigoRazon', 'descripcionCodigoRazon');
              return new fromCodigoRazonCobroVisa.GetAllCodigoRazonCobroVisaSuccess(res);
            }),
            catchError((err) => {
              return of(new fromCodigoRazonCobroVisa.GetAllCodigoRazonCobroVisaFail(err));
            })
          )
      })
    );

  @Effect()
  AddCodigoRazonCobroVisa$ = this.actions$
    .pipe(
      ofType(fromCodigoRazonCobroVisa.actions.ADD),
      withLatestFrom(this.store$.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromCodigoRazonCobroVisa.AddCodigoRazonCobroVisa, GlobalMessages]) => {
        return this.codigoRazonCobroVisaService.registrar(action.payload)
          .pipe(
            map(res => {
              return new fromCodigoRazonCobroVisa.AddCodigoRazonCobroVisaSuccess({ data: res, message: messages.ADD_SUCCESS });
            }),
            catchError((err: HttpErrorResponse) => {
              return of(new fromCodigoRazonCobroVisa.AddCodigoRazonCobroVisaFail(err));
            })
          );
      })
    );

  @Effect()
  UpdateCodigoRazonCobroVisa$ = this.actions$
    .pipe(
      ofType(fromCodigoRazonCobroVisa.actions.UPDATE),
      withLatestFrom(this.store$.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromCodigoRazonCobroVisa.UpdateCodigoRazonCobroVisa, GlobalMessages]) => {
        return this.codigoRazonCobroVisaService.actualizar(action.payload)
          .pipe(
            map(res => {
              return new fromCodigoRazonCobroVisa.UpdateCodigoRazonCobroVisaSuccess({ data: res, message: messages.UPDATE_SUCCESS });
            }),
            catchError((err: HttpErrorResponse) => {
              return of(new fromCodigoRazonCobroVisa.UpdateCodigoRazonCobroVisaFail(err));
            })
          );
      })
    );

  @Effect()
  DeleteCodigoRazonCobroVisa$ = this.actions$
    .pipe(
      ofType(fromCodigoRazonCobroVisa.actions.DELETE),
      withLatestFrom(this.store$.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromCodigoRazonCobroVisa.DeleteCodigoRazonCobroVisa, GlobalMessages]) => {
        return this.codigoRazonCobroVisaService.eliminar(action.payload)
          .pipe(
            map(res => {
              return new fromCodigoRazonCobroVisa.DeleteCodigoRazonCobroVisaSuccess({ message: messages.DELETE_SUCCESS });
            }),
            catchError((err: HttpErrorResponse) => {
              return of(new fromCodigoRazonCobroVisa.DeleteCodigoRazonCobroVisaFail(err));
            })
          );
      })
    );

  @Effect()
  Export$ = this.actions$
    .pipe(
      ofType(fromCodigoRazonCobroVisa.actions.DOWNLOAD),
      withLatestFrom(this.store$.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromCodigoRazonCobroVisa.DownloadCodigoRazonCobroVisa, GlobalMessages]) => {
        return this.codigoRazonCobroVisaService.exportar()
          .pipe(
            map(res => new fromCodigoRazonCobroVisa.DownloadCodigoRazonCobroVisaSuccess({ message: messages.DOWNLOAD_SUCCESS })),
            catchError((err: HttpErrorResponse) => of(new fromCodigoRazonCobroVisa.DownloadCodigoRazonCobroVisaFail(err)))
          );
      })
    );

}
