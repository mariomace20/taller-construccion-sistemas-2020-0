import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { ProgramaService } from '../../../../../procesos/services';
import * as fromPrograma from '../../../actions/procesos/mantenimiento/programa.actions';
import { catchError, map, switchMap, withLatestFrom } from "rxjs/operators";
import { of } from 'rxjs';
import { Store } from "@ngrx/store";
import { AppState } from "../../../app.reducers";
import { HttpErrorResponse } from "@angular/common/http";
import { GlobalMessages } from "../../../reducers/global.reducer";
import { addLabelToObjsArr } from "../../../../utils";

@Injectable()
export class ProgramaEffects {
  constructor(private actions$: Actions, private store$: Store<AppState>,
    private programaService: ProgramaService) { }

  @Effect()
  GetAll$ = this.actions$.pipe(ofType(fromPrograma.actions.GET_ALL), switchMap(() => {
    return this.programaService.buscarTodos().pipe(
      map(res => {
        addLabelToObjsArr(res, 'label', false, 'idPrograma', 'descripcionPrograma');
        return new fromPrograma.GetAllProgramaSuccess(res);
      }),
      catchError((err) => {
        return of(new fromPrograma.GetAllProgramaFail(err));
      }));
  }));

  @Effect()
  GetByProceso$ = this.actions$.pipe(ofType(fromPrograma.actions.GET_BY_PROCESO), switchMap((action: fromPrograma.GetProgramasByProceso) => {
    return this.programaService.buscarPorProceso(action.payload).pipe(
      map(res => {
        addLabelToObjsArr(res, 'label', false, 'idPrograma', 'descripcionPrograma');
        return new fromPrograma.GetProgramasByProcesoSuccess(res);
      }),
      catchError((err) => {
        return of(new fromPrograma.GetProgramasByPorcesoFail(err));
      }));
  }));

  @Effect()
  AddPrograma$ = this.actions$.pipe(ofType(fromPrograma.actions.ADD),
    withLatestFrom(this.store$.select('globalData', 'messages')),
    switchMap(
      ([action, messages]: [fromPrograma.AddPrograma, GlobalMessages]) => {
        return this.programaService.registrar(action.payload).pipe(
          map(res => {
            return new fromPrograma.AddProgramaSuccess(
              { data: res, message: messages.ADD_SUCCESS });
          }),
          catchError((err: HttpErrorResponse) => {
            return of(new fromPrograma.AddProgramaFail(err))
          })
        );
      }));

  @Effect()
  UpdatePrograma$ = this.actions$.pipe(ofType(fromPrograma.actions.UPDATE),
    withLatestFrom(this.store$.select('globalData', 'messages')),
    switchMap(
      ([action, messages]: [fromPrograma.UpdatePrograma, GlobalMessages]) => {
        return this.programaService.actualizar(
          action.payload).pipe(
            map(res => {
              return new fromPrograma.UpdateProgramaSuccess(
                { data: res, message: messages.UPDATE_SUCCESS });
            }),
            catchError((err: HttpErrorResponse) => {
              return of(
                new fromPrograma.UpdateProgramaFail(err))
            })
          );
      }));

  @Effect()
  DeletePrograma$ = this.actions$.pipe(ofType(fromPrograma.actions.DELETE),
    withLatestFrom(this.store$.select('globalData', 'messages')),
    switchMap(
      ([action, messages]: [fromPrograma.DeletePrograma, GlobalMessages]) => {
        return this.programaService.eliminar(action.payload).pipe(
          map(res => {
            return new fromPrograma.DeleteProgramaSuccess(
              { message: messages.DELETE_SUCCESS });
          }),
          catchError((err: HttpErrorResponse) => {
            return of(
              new fromPrograma.DeleteProgramaFail(err))
          })
        );
      }));

}