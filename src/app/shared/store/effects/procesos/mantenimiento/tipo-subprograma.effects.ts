import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { TipoSubprogramaService } from '../../../../../procesos/services';
import * as fromTipoSubprograma from '../../../actions/procesos/mantenimiento/tipo-subprograma.actions';
import { catchError, map, switchMap, withLatestFrom } from "rxjs/operators";
import { of } from 'rxjs';
import { addLabelToObjsArr } from "../../../../utils";
import { Store } from '@ngrx/store';
import { AppState } from '../../../app.reducers';
import { GlobalMessages } from '../../../reducers/global.reducer';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class TipoSubprogramaEffects {
  constructor(private actions$: Actions, private store$: Store<AppState>,
    private tipoSubprogramaService: TipoSubprogramaService) { }

  @Effect()
  GetAll$ = this.actions$.pipe(ofType(fromTipoSubprograma.actions.GET_ALL), switchMap(() => {
    return this.tipoSubprogramaService.buscarTodos().pipe(
      map(res => {
        addLabelToObjsArr(res, 'label', false, 'idSubProgramaTipo', 'descripcionSubProgramaTipo');
        return new fromTipoSubprograma.GetAllTipoSubprogramaSuccess(res);
      }),
      catchError((err) => {
        return of(new fromTipoSubprograma.GetAllTipoSubprogramaFail(err));
      }));
  }));

  @Effect()
  AddTipoSubprograma$ = this.actions$.pipe(ofType(fromTipoSubprograma.actions.ADD),
    withLatestFrom(this.store$.select('globalData', 'messages')),
    switchMap(
      ([action, messages]: [fromTipoSubprograma.AddTipoSubprograma, GlobalMessages]) => {
        return this.tipoSubprogramaService.registrar(action.payload).pipe(
          map(res => {
            return new fromTipoSubprograma.AddTipoSubprogramaSuccess(
              { data: res, message: messages.ADD_SUCCESS });
          }),
          catchError((err: HttpErrorResponse) => {
            return of(new fromTipoSubprograma.AddTipoSubprogramaFail(err))
          })
        );
      }));

  @Effect()
  UpdateTipoSubprograma$ = this.actions$.pipe(ofType(fromTipoSubprograma.actions.UPDATE),
    withLatestFrom(this.store$.select('globalData', 'messages')),
    switchMap(
      ([action, messages]: [fromTipoSubprograma.UpdateTipoSubprograma, GlobalMessages]) => {
        return this.tipoSubprogramaService.actualizar(
          action.payload).pipe(
            map(res => {
              return new fromTipoSubprograma.UpdateTipoSubprogramaSuccess(
                { data: res, message: messages.UPDATE_SUCCESS });
            }),
            catchError((err: HttpErrorResponse) => {
              return of(
                new fromTipoSubprograma.UpdateTipoSubprogramaFail(err))
            })
          );
      }));

  @Effect()
  DeleteTipoSubprograma$ = this.actions$.pipe(ofType(fromTipoSubprograma.actions.DELETE),
    withLatestFrom(this.store$.select('globalData', 'messages')),
    switchMap(
      ([action, messages]: [fromTipoSubprograma.DeleteTipoSubprograma, GlobalMessages]) => {
        return this.tipoSubprogramaService.eliminar(action.payload).pipe(
          map(res => {
            return new fromTipoSubprograma.DeleteTipoSubprogramaSuccess(
              { message: messages.DELETE_SUCCESS });
          }),
          catchError((err: HttpErrorResponse) => {
            return of(
              new fromTipoSubprograma.DeleteTipoSubprogramaFail(err))
          })
        );
      }));

}