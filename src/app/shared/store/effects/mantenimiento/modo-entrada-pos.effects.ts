import { Injectable } from '@angular/core';
import { ModoEntradaPosService } from '../../../../mantenimiento/services/modo-entrada-pos.service';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as fromModoEntradaPos from '../../actions/mantenimiento/modo-entrada-pos.actions';
import { switchMap, map, catchError, withLatestFrom } from 'rxjs/operators';
import { of } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import { GlobalMessages } from '../../reducers/global.reducer';
import { MembresiaService } from '../../../../mantenimiento/services';
import { addLabelToObjsArr, sortByAttr } from '../../../utils';

@Injectable()
export class ModoEntradaPosEffects {

  constructor(
    private actions$: Actions,
    private store$: Store<AppState>,
    private modoEntradaPosService: ModoEntradaPosService,
    private membresiaService: MembresiaService
  ) { }

  @Effect()
  GetAll$ = this.actions$
    .pipe(
      ofType(fromModoEntradaPos.actions.GET_ALL),
      switchMap(() => {
        return this.modoEntradaPosService.buscarTodos()
          .pipe(
            map(res => {
              sortByAttr(res, 'idModoEntradaPOS')
              addLabelToObjsArr(res, 'label', false, 'idModoEntradaPOS', 'descripcionModoEntradaPOS');
              return new fromModoEntradaPos.GetAllModoEntradaPosSuccess(res);
            }),
            catchError((err) => {
              return of(new fromModoEntradaPos.GetAllModoEntradaPosFail(err));
          })
      )
    })
  );

    @Effect()
    GetXMembresia$ = this.actions$
      .pipe(
        ofType(fromModoEntradaPos.actions.GET_X_MEMBRESIA),
        switchMap((action: fromModoEntradaPos.GetModoEntradaPosXMembresia) =>{
          return this.modoEntradaPosService.buscarPorMembresias(action.payload)
          .pipe(
              map(res => {
                sortByAttr(res, 'idModoEntradaPOS')
                addLabelToObjsArr(res, 'label', false, 'idModoEntradaPOS', 'descripcionModoEntradaPOS');
                return new fromModoEntradaPos.GetModoEntradaPosXMembresiaSuccess(res);
              }),
              catchError((err) => {
                return of(new fromModoEntradaPos.GetModoEntradaPosXMembresiaFail(err));
              })
            )
        })
      );

  @Effect()
  AddModoEntradaPos$ = this.actions$
    .pipe(
      ofType(fromModoEntradaPos.actions.ADD),
      withLatestFrom(this.store$.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromModoEntradaPos.AddModoEntradaPos, GlobalMessages]) => {
        return this.modoEntradaPosService.registrar(action.payload)
          .pipe(
            map(res => {
              return new fromModoEntradaPos.AddModoEntradaPosSuccess
              ({ data: res, message: messages.ADD_SUCCESS });
            }),
            catchError(err => {return of(new fromModoEntradaPos.AddModoEntradaPosFail(err))
            })
          )
      })
    );

  @Effect()
  UpdateModoEntradaPos$ = this.actions$
    .pipe(
      ofType(fromModoEntradaPos.actions.UPDATE),
      withLatestFrom(this.store$.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromModoEntradaPos.UpdateModoEntradaPos, GlobalMessages]) => {
        return this.modoEntradaPosService.actualizar(action.payload)
          .pipe(
            map(res => {
              return new fromModoEntradaPos.UpdateModoEntradaPosSuccess({ data: res, message: messages.UPDATE_SUCCESS });
            }),
            catchError(err => of(new fromModoEntradaPos.UpdateModoEntradaPosFail(err)))
          )
      })
    );

  @Effect()
  DeleteModoEntradaPos$ = this.actions$
    .pipe(
      ofType(fromModoEntradaPos.actions.DELETE),
      withLatestFrom(this.store$.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromModoEntradaPos.DeleteModoEntradaPos, GlobalMessages]) => {
        return this.modoEntradaPosService.eliminar(action.payload)
          .pipe(
            map(res => {
              return new fromModoEntradaPos.DeleteModoEntradaPosSuccess({ message: messages.DELETE_SUCCESS });
            }),
            catchError(err => of(new fromModoEntradaPos.DeleteModoEntradaPosFail(err)))
          )
      })
    );

  @Effect()
  Export$ = this.actions$
    .pipe(
      ofType(fromModoEntradaPos.actions.DOWNLOAD),
      withLatestFrom(this.store$.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromModoEntradaPos.DownloadModoEntradaPos, GlobalMessages]) => {
        return this.modoEntradaPosService.exportar()
          .pipe(
            map(res => new fromModoEntradaPos.DownloadModoEntradaPosSuccess({ message: messages.DOWNLOAD_SUCCESS })),
            catchError((err) => of(new fromModoEntradaPos.DownloadModoEntradaPosFail(err)))
          )
      })
    );

}
