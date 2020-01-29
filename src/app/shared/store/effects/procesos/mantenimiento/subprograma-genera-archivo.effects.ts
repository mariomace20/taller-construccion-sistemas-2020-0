import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { SubProgramaGeneraArchivoService } from '../../../../../procesos/services';
import * as fromSubProgramaGeneraArchivo from '../../../actions/procesos/mantenimiento/subprograma-genera-archivo.actions';
import { catchError, map, switchMap, withLatestFrom } from "rxjs/operators";
import { of } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../../app.reducers';
import { GlobalMessages } from '../../../reducers/global.reducer';

@Injectable()
export class SubProgramaGeneraArchivoEffects {
  constructor(private actions$: Actions, private store$: Store<AppState>,
    private subProgramaGeneraArchivoService: SubProgramaGeneraArchivoService) { }

  @Effect()
  GetAll$ = this.actions$.pipe(ofType(fromSubProgramaGeneraArchivo.actions.GET_ALL), switchMap(() => {
    return this.subProgramaGeneraArchivoService.buscarTodos().pipe(
      map(res => {
        return new fromSubProgramaGeneraArchivo.GetAllSubProgramaGeneraArchivoSuccess(res);
      }),
      catchError((err) => {
        return of(new fromSubProgramaGeneraArchivo.GetAllSubProgramaGeneraArchivoFail(err));
      }));
  }));

  @Effect()
  AddSubProgramaGeneraArchivo$ = this.actions$.pipe(ofType(fromSubProgramaGeneraArchivo.actions.ADD),
    withLatestFrom(this.store$.select('globalData', 'messages')),
    switchMap(
      ([action, messages]: [fromSubProgramaGeneraArchivo.AddSubProgramaGeneraArchivo, GlobalMessages]) => {
        return this.subProgramaGeneraArchivoService.registrar(action.payload).pipe(
          map(res => {
            return new fromSubProgramaGeneraArchivo.AddSubProgramaGeneraArchivoSuccess(
              { data: res, message: messages.ADD_SUCCESS });
          }),
          catchError((err) => of(new fromSubProgramaGeneraArchivo.AddSubProgramaGeneraArchivoFail(err)))
        );
      }));

  @Effect()
  UpdateSubProgramaGeneraArchivo$ = this.actions$.pipe(ofType(fromSubProgramaGeneraArchivo.actions.UPDATE),
    withLatestFrom(this.store$.select('globalData', 'messages')),
    switchMap(
      ([action, messages]: [fromSubProgramaGeneraArchivo.UpdateSubProgramaGeneraArchivo, GlobalMessages]) => {
        return this.subProgramaGeneraArchivoService.actualizar(
          action.payload).pipe(
            map(res => {
              return new fromSubProgramaGeneraArchivo.UpdateSubProgramaGeneraArchivoSuccess(
                { data: res, message: messages.UPDATE_SUCCESS });
            }),
            catchError((err) => of(new fromSubProgramaGeneraArchivo.UpdateSubProgramaGeneraArchivoFail(err)))
          );
      }));

  @Effect()
  DeleteSubProgramaGeneraArchivo$ = this.actions$.pipe(ofType(fromSubProgramaGeneraArchivo.actions.DELETE),
    withLatestFrom(this.store$.select('globalData', 'messages')),
    switchMap(
      ([action, messages]: [fromSubProgramaGeneraArchivo.DeleteSubProgramaGeneraArchivo, GlobalMessages]) => {
        return this.subProgramaGeneraArchivoService.eliminar(action.payload).pipe(
          map(res => {
            return new fromSubProgramaGeneraArchivo.DeleteSubProgramaGeneraArchivoSuccess(
              { message: messages.DELETE_SUCCESS });
          }),
          catchError((err) => of(new fromSubProgramaGeneraArchivo.DeleteSubProgramaGeneraArchivoFail(err)))
        );
      }));
}
