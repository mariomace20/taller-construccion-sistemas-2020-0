import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { ProcesoService } from '../../../../../procesos/services';
import * as fromProceso from '../../../actions/procesos/mantenimiento/proceso.actions';
import { catchError, map, switchMap, withLatestFrom } from "rxjs/operators";
import { of } from 'rxjs';
import { Store } from "@ngrx/store";
import { AppState } from "../../../app.reducers";
import { HttpErrorResponse } from "@angular/common/http";
import { GlobalMessages } from "../../../reducers/global.reducer";
import { addLabelToObjsArr } from "../../../../utils";

@Injectable()
export class ProcesoEffects {
  constructor(private actions$: Actions, private store$: Store<AppState>,
    private procesoService: ProcesoService) { }

  @Effect()
  GetAll$ = this.actions$.pipe(ofType(fromProceso.actions.GET_ALL), switchMap(() => {
    return this.procesoService.buscarTodos().pipe(
      map(res => {
        addLabelToObjsArr(res, 'label', false, 'idProceso', 'descripcionProceso');
        return new fromProceso.GetAllProcesoSuccess(res);
      }),
      catchError((err) => {
        return of(new fromProceso.GetAllProcesoFail(err));
      }));
  }));
  @Effect()
  AddProceso$ = this.actions$.pipe(ofType(fromProceso.actions.ADD),
    withLatestFrom(this.store$.select('globalData', 'messages')),
    switchMap(
      ([action, messages]: [fromProceso.AddProceso, GlobalMessages]) => {
        return this.procesoService.registrar(action.payload).pipe(
          map(res => {
            return new fromProceso.AddProcesoSuccess(
              { data: res, message: messages.ADD_SUCCESS });
          }),
          catchError((err: HttpErrorResponse) => {
            return of(new fromProceso.AddProcesoFail(err))
          })
        );
      }));

  @Effect()
  UpdateProceso$ = this.actions$.pipe(ofType(fromProceso.actions.UPDATE),
    withLatestFrom(this.store$.select('globalData', 'messages')),
    switchMap(
      ([action, messages]: [fromProceso.UpdateProceso, GlobalMessages]) => {
        return this.procesoService.actualizar(
          action.payload).pipe(
            map(res => {
              return new fromProceso.UpdateProcesoSuccess(
                { data: res, message: messages.UPDATE_SUCCESS });
            }),
            catchError((err: HttpErrorResponse) => {
              return of(
                new fromProceso.UpdateProcesoFail(err))
            })
          );
      }));

  @Effect()
  DeleteProceso$ = this.actions$.pipe(ofType(fromProceso.actions.DELETE),
    withLatestFrom(this.store$.select('globalData', 'messages')),
    switchMap(
      ([action, messages]: [fromProceso.DeleteProceso, GlobalMessages]) => {
        return this.procesoService.eliminar(action.payload).pipe(
          map(res => {
            return new fromProceso.DeleteProcesoSuccess(
              { message: messages.DELETE_SUCCESS });
          }),
          catchError((err: HttpErrorResponse) => {
            return of(
              new fromProceso.DeleteProcesoFail(err))
          })
        );
      }));

}