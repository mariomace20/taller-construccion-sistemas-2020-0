import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { SubProgramaProcedimientoSqlService } from '../../../../../procesos/services';
import * as fromSubProgramaProcedimientoSql from '../../../actions/procesos/mantenimiento/subprograma-procedimiento-sql.actions';
import { catchError, map, switchMap, withLatestFrom } from "rxjs/operators";
import { of } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../../app.reducers';
import { GlobalMessages } from '../../../reducers/global.reducer';

@Injectable()
export class SubProgramaProcedimientoSqlEffects {
  constructor(private actions$: Actions, private store$: Store<AppState>,
    private subProgramaProcedimientoSqlService: SubProgramaProcedimientoSqlService) { }

  @Effect()
  GetAll$ = this.actions$.pipe(ofType(fromSubProgramaProcedimientoSql.actions.GET_ALL), switchMap(() => {
    return this.subProgramaProcedimientoSqlService.buscarTodos().pipe(
      map(res => {
        return new fromSubProgramaProcedimientoSql.GetAllSubProgramaProcedimientoSqlSuccess(res);
      }),
      catchError((err) => {
        return of(new fromSubProgramaProcedimientoSql.GetAllSubProgramaProcedimientoSqlFail(err));
      }));
  }));

  @Effect()
  AddSubProgramaProcedimientoSql$ = this.actions$.pipe(ofType(fromSubProgramaProcedimientoSql.actions.ADD),
    withLatestFrom(this.store$.select('globalData', 'messages')),
    switchMap(
      ([action, messages]: [fromSubProgramaProcedimientoSql.AddSubProgramaProcedimientoSql, GlobalMessages]) => {
        return this.subProgramaProcedimientoSqlService.registrar(action.payload).pipe(
          map(res => {
            return new fromSubProgramaProcedimientoSql.AddSubProgramaProcedimientoSqlSuccess(
              { data: res, message: messages.ADD_SUCCESS });
          }),
          catchError((err) => of(new fromSubProgramaProcedimientoSql.AddSubProgramaProcedimientoSqlFail(err)))
        );
      }));

  @Effect()
  UpdateSubProgramaProcedimientoSql$ = this.actions$.pipe(ofType(fromSubProgramaProcedimientoSql.actions.UPDATE),
    withLatestFrom(this.store$.select('globalData', 'messages')),
    switchMap(
      ([action, messages]: [fromSubProgramaProcedimientoSql.UpdateSubProgramaProcedimientoSql, GlobalMessages]) => {
        return this.subProgramaProcedimientoSqlService.actualizar(
          action.payload).pipe(
            map(res => {
              return new fromSubProgramaProcedimientoSql.UpdateSubProgramaProcedimientoSqlSuccess(
                { data: res, message: messages.UPDATE_SUCCESS });
            }),
            catchError((err) => of(new fromSubProgramaProcedimientoSql.UpdateSubProgramaProcedimientoSqlFail(err)))
          );
      }));

  @Effect()
  DeleteSubProgramaProcedimientoSql$ = this.actions$.pipe(ofType(fromSubProgramaProcedimientoSql.actions.DELETE),
    withLatestFrom(this.store$.select('globalData', 'messages')),
    switchMap(
      ([action, messages]: [fromSubProgramaProcedimientoSql.DeleteSubProgramaProcedimientoSql, GlobalMessages]) => {
        return this.subProgramaProcedimientoSqlService.eliminar(action.payload).pipe(
          map(res => {
            return new fromSubProgramaProcedimientoSql.DeleteSubProgramaProcedimientoSqlSuccess(
              { message: messages.DELETE_SUCCESS });
          }),
          catchError((err) => of(new fromSubProgramaProcedimientoSql.DeleteSubProgramaProcedimientoSqlFail(err)))
        );
      }));
}
