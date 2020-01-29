import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { SubProgramaCargaArchivoService } from '../../../../../procesos/services';
import * as fromSubProgramaCargaArchivo from '../../../actions/procesos/mantenimiento/subprograma-carga-archivo.actions';
import { catchError, map, switchMap, withLatestFrom } from "rxjs/operators";
import { of } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../../app.reducers';
import { GlobalMessages } from '../../../reducers/global.reducer';

@Injectable()
export class SubProgramaCargaArchivoEffects {
  constructor(private actions$: Actions, private store$: Store<AppState>,
    private subProgramaCargaArchivoService: SubProgramaCargaArchivoService) { }

  @Effect()
  GetAll$ = this.actions$.pipe(ofType(fromSubProgramaCargaArchivo.actions.GET_ALL), switchMap(() => {
    return this.subProgramaCargaArchivoService.buscarTodos().pipe(
      map(res => {
        return new fromSubProgramaCargaArchivo.GetAllSubProgramaCargaArchivoSuccess(res);
      }),
      catchError((err) => {
        return of(new fromSubProgramaCargaArchivo.GetAllSubProgramaCargaArchivoFail(err));
      }));
  }));

  @Effect()
  AddSubProgramaCargaArchivo$ = this.actions$.pipe(ofType(fromSubProgramaCargaArchivo.actions.ADD),
    withLatestFrom(this.store$.select('globalData', 'messages')),
    switchMap(
      ([action, messages]: [fromSubProgramaCargaArchivo.AddSubProgramaCargaArchivo, GlobalMessages]) => {
        return this.subProgramaCargaArchivoService.registrar(action.payload).pipe(
          map(res => {
            return new fromSubProgramaCargaArchivo.AddSubProgramaCargaArchivoSuccess(
              { data: res, message: messages.ADD_SUCCESS });
          }),
          catchError((err) => of(new fromSubProgramaCargaArchivo.AddSubProgramaCargaArchivoFail(err)))
        );
      }));

  @Effect()
  UpdateSubProgramaCargaArchivo$ = this.actions$.pipe(ofType(fromSubProgramaCargaArchivo.actions.UPDATE),
    withLatestFrom(this.store$.select('globalData', 'messages')),
    switchMap(
      ([action, messages]: [fromSubProgramaCargaArchivo.UpdateSubProgramaCargaArchivo, GlobalMessages]) => {
        return this.subProgramaCargaArchivoService.actualizar(
          action.payload).pipe(
            map(res => {
              return new fromSubProgramaCargaArchivo.UpdateSubProgramaCargaArchivoSuccess(
                { data: res, message: messages.UPDATE_SUCCESS });
            }),
            catchError((err) => of(new fromSubProgramaCargaArchivo.UpdateSubProgramaCargaArchivoFail(err)))
          );
      }));

  @Effect()
  DeleteSubProgramaCargaArchivo$ = this.actions$.pipe(ofType(fromSubProgramaCargaArchivo.actions.DELETE),
    withLatestFrom(this.store$.select('globalData', 'messages')),
    switchMap(
      ([action, messages]: [fromSubProgramaCargaArchivo.DeleteSubProgramaCargaArchivo, GlobalMessages]) => {
        return this.subProgramaCargaArchivoService.eliminar(action.payload).pipe(
          map(res => {
            return new fromSubProgramaCargaArchivo.DeleteSubProgramaCargaArchivoSuccess(
              { message: messages.DELETE_SUCCESS });
          }),
          catchError((err) => of(new fromSubProgramaCargaArchivo.DeleteSubProgramaCargaArchivoFail(err)))
        );
      }));
}
