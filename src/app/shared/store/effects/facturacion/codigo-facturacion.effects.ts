import { Injectable } from '@angular/core';
import { CodigoFacturacionService } from '../../../../facturacion/services/codigo-facturacion.service';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as fromCodigoFacturacion from '../../actions/facturacion/codigo-facturacion.actions';
import { switchMap, map, catchError, withLatestFrom } from 'rxjs/operators';
import { of } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import { GlobalMessages } from '../../reducers/global.reducer';
import { HttpErrorResponse } from '@angular/common/http';
import { addLabelToObjsArr, sortByAttr } from '../../../utils';

@Injectable()
export class CodigoFacturacionEffects {

  constructor(
    private actions$: Actions,
    private store$: Store<AppState>,
    private codigoFacturacionService: CodigoFacturacionService
  ) { }

  @Effect()
  GetAll$ = this.actions$
    .pipe(
      ofType(fromCodigoFacturacion.actions.GET_ALL),
      switchMap(() => {
        return this.codigoFacturacionService.buscarTodos()
          .pipe(
            map(res => {
            sortByAttr(res,'idCodigoFacturacion')
              addLabelToObjsArr(res, 'label', false, 'idCodigoFacturacion', 'descripcionCodigoFacturacion');
              return new fromCodigoFacturacion.GetAllCodigoFacturacionSuccess(res);
            }),
            catchError((err) => {
              //console.log(err);
              return of(new fromCodigoFacturacion.GetAllCodigoFacturacionFail(err));
            })
          )
      })
    );

  @Effect()
  AddCodigoFacturacion$ = this.actions$
    .pipe(
      ofType(fromCodigoFacturacion.actions.ADD),
      withLatestFrom(this.store$.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromCodigoFacturacion.AddCodigoFacturacion, GlobalMessages]) => {
        return this.codigoFacturacionService.registrar(action.payload)
          .pipe(
            map(res => {
              return new fromCodigoFacturacion.AddCodigoFacturacionSuccess({ data: res, message: messages.ADD_SUCCESS });
            }),
            catchError((err: HttpErrorResponse) => {
              return of(new fromCodigoFacturacion.AddCodigoFacturacionFail(err))
            })
          )
      })
    );

  @Effect()
  UpdateCodigoFacturacion$ = this.actions$
    .pipe(
      ofType(fromCodigoFacturacion.actions.UPDATE),
      withLatestFrom(this.store$.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromCodigoFacturacion.UpdateCodigoFacturacion, GlobalMessages]) => {
        return this.codigoFacturacionService.actualizar(action.payload)
          .pipe(
            map(res => {
              return new fromCodigoFacturacion.UpdateCodigoFacturacionSuccess({ data: res, message: messages.UPDATE_SUCCESS });
            }),
            catchError((err: HttpErrorResponse) => {
              return of(new fromCodigoFacturacion.UpdateCodigoFacturacionFail(err))
            })
          )
      })
    );

  @Effect()
  DeleteCodigoFacturacion$ = this.actions$
    .pipe(
      ofType(fromCodigoFacturacion.actions.DELETE),
      withLatestFrom(this.store$.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromCodigoFacturacion.DeleteCodigoFacturacion, GlobalMessages]) => {
        return this.codigoFacturacionService.eliminar(action.payload)
          .pipe(
            map(res => {
              return new fromCodigoFacturacion.DeleteCodigoFacturacionSuccess({ message: messages.DELETE_SUCCESS });
            }),
            catchError((err: HttpErrorResponse) => {
              return of(new fromCodigoFacturacion.DeleteCodigoFacturacionFail(err))
            })
          )
      })
    );

    @Effect()
  Export$ = this.actions$
    .pipe(
      ofType(fromCodigoFacturacion.actions.DOWNLOAD),
      withLatestFrom(this.store$.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromCodigoFacturacion.DownloadCodigoFacturacion, GlobalMessages]) => {
        return this.codigoFacturacionService.exportar()
          .pipe(
            map(res => new fromCodigoFacturacion.DownloadCodigoFacturacionSuccess({ message: messages.DOWNLOAD_SUCCESS })),
            catchError((err: HttpErrorResponse) => of(new fromCodigoFacturacion.DownloadCodigoFacturacionFail(err)))
          )
      })
    );

}
