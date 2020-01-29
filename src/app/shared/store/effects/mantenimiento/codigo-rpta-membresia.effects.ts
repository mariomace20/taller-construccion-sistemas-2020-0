import { Injectable } from '@angular/core';
import { CodigoRptaMembresiaService } from '../../../../mantenimiento/services/codigo-rpta-membresia.service';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as fromCodigoRptaMembresia from '../../actions/mantenimiento/codigo-rpta-membresia.actions';
import { switchMap, map, catchError, withLatestFrom } from 'rxjs/operators';
import { of } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import { GlobalMessages } from '../../reducers/global.reducer';
import { HttpErrorResponse } from '@angular/common/http';
import { addLabelToObjsArr, sortByAttr } from '../../../utils';


@Injectable()
export class CodigoRptaMembresiaEffects {

  constructor(
    private actions$: Actions,
    private store$: Store<AppState>,
    private codigoRptaMembresiaService:CodigoRptaMembresiaService
  ) { }

  @Effect()
  GetAll$ = this.actions$
    .pipe(
      ofType(fromCodigoRptaMembresia.actions.GET_ALL),
      switchMap(() => {
        return this.codigoRptaMembresiaService.buscarTodos()
          .pipe(
            map(res => {
              return new fromCodigoRptaMembresia.GetAllCodigoRptaMembresiaSuccess(res);
            }),
            catchError((err) => {

              return of(new fromCodigoRptaMembresia.GetAllCodigoRptaMembresiaFail(err));
            })
          )
      })
    );

  @Effect()
  GetCriterio$ = this.actions$
    .pipe(
      ofType(fromCodigoRptaMembresia.actions.GET_CRITERIO),
      switchMap((action: fromCodigoRptaMembresia.GetCriterioCodigoRptaMembresia) => {
        return this.codigoRptaMembresiaService.buscarPorCriterios(action.payload)
          .pipe(
            map(res => {
              sortByAttr(res,"idMembresia")
              addLabelToObjsArr(res, 'label', false, 'idRespuesta', 'descripcionRespuesta');
              return new fromCodigoRptaMembresia.GetCriterioCodigoRptaMembresiaSuccess(res);
            }),
            catchError((err) => of(new fromCodigoRptaMembresia.GetCriterioCodigoRptaMembresiaFail(err)))
          )
      })
    );

  @Effect()
  AddCodigoRptaMembresia$ = this.actions$
    .pipe(
      ofType(fromCodigoRptaMembresia.actions.ADD),
      withLatestFrom(this.store$.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromCodigoRptaMembresia.AddCodigoRptaMembresia, GlobalMessages]) => {
        return this.codigoRptaMembresiaService.registrar(action.payload)
          .pipe(
            map(res => {
              return new fromCodigoRptaMembresia.AddCodigoRptaMembresiaSuccess({ data: res, message: messages.ADD_SUCCESS });
            }),
            catchError((err: HttpErrorResponse) => {
              return of(new fromCodigoRptaMembresia.AddCodigoRptaMembresiaFail(err))
            })
          )
      })
    );

  @Effect()
  UpdateCodigoRptaMembresia$ = this.actions$
    .pipe(
      ofType(fromCodigoRptaMembresia.actions.UPDATE),
      withLatestFrom(this.store$.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromCodigoRptaMembresia.UpdateCodigoRptaMembresia, GlobalMessages]) => {
        return this.codigoRptaMembresiaService.actualizar(action.payload)
          .pipe(
            map(res => {
              return new fromCodigoRptaMembresia.UpdateCodigoRptaMembresiaSuccess({ data: res, message: messages.UPDATE_SUCCESS });
            }),
            catchError((err: HttpErrorResponse) => {
              return of(new fromCodigoRptaMembresia.UpdateCodigoRptaMembresiaFail(err))
            })
          )
      })
    );

  @Effect()
  DeleteCodigoRptaMembresia$ = this.actions$
    .pipe(
      ofType(fromCodigoRptaMembresia.actions.DELETE),
      withLatestFrom(this.store$.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromCodigoRptaMembresia.DeleteCodigoRptaMembresia, GlobalMessages]) => {
        return this.codigoRptaMembresiaService.eliminar(action.payload)
          .pipe(
            map(res => {
              return new fromCodigoRptaMembresia.DeleteCodigoRptaMembresiaSuccess({ message: messages.DELETE_SUCCESS });
            }),
            catchError((err: HttpErrorResponse) => {
              return of(new fromCodigoRptaMembresia.DeleteCodigoRptaMembresiaFail(err))
            })
          )
      })
    );
    @Effect()
    Export$ = this.actions$
      .pipe(
        ofType(fromCodigoRptaMembresia.actions.DOWNLOAD),
        withLatestFrom(this.store$.select('globalData', 'messages')),
        switchMap(([action, messages]: [fromCodigoRptaMembresia.DownloadCodigoRptaMembresia, GlobalMessages]) => {
          return this.codigoRptaMembresiaService.exportar()
            .pipe(
              map(res => new fromCodigoRptaMembresia.DownloadCodigoRptaMembresiaSuccess({ message: messages.DOWNLOAD_SUCCESS })),
              catchError((err: HttpErrorResponse) => of(new fromCodigoRptaMembresia.DownloadCodigoRptaMembresiaFail(err)))
            )
        })
      );

}
