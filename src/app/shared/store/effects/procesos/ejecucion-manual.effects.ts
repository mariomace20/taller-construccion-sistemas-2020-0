import { Injectable } from '@angular/core';
import { EjecucionManualService } from '../../../../procesos/services';
import { Effect, Actions, ofType } from '@ngrx/effects';
import * as fromEjecucionManual from '../../actions/procesos/ejecucion-manual.actions';
import { switchMap, map, catchError, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { EJEC_MANUAL_MSG } from '../../../../procesos/models';

@Injectable()
export class EjecucionManualEffects {
  constructor(private actions$: Actions, private ejecucionManualService: EjecucionManualService) { }

  @Effect()
  GetProcesos$ = this.actions$
    .pipe(
      ofType(fromEjecucionManual.actions.GET),
      switchMap(() => {
        return this.ejecucionManualService.obtenerProcesos()
          .pipe(
            map(res => {
              return new fromEjecucionManual.GetAllProcesosEjecucionManualSuccess(res);
            }),
            catchError(err => of(new fromEjecucionManual.GetAllProcesosEjecucionManualFail(err)))
          )
      }));

  @Effect()
  GetSubprogramas$ = this.actions$
    .pipe(
      ofType(fromEjecucionManual.actions.GET_SUBPROGRAMAS),
      mergeMap((action: fromEjecucionManual.GetSubprogramasEjecucionManual) => {
        return this.ejecucionManualService.obtenerEjecucionSubprogramas(action.payload.idProceso, action.payload.idPrograma)
          .pipe(
            map(res => {
              return new fromEjecucionManual.GetSubprogramasEjecucionManualSuccess(res)
            }),
            catchError(err => of(new fromEjecucionManual.GetSubprogramasEjecucionManualFail(err)))
          )
      }));

  @Effect()
  EjecutarPrograma$ = this.actions$
    .pipe(
      ofType(fromEjecucionManual.actions.EJECUTAR_PROGRAMA),
      mergeMap((action: fromEjecucionManual.EjecutarPrograma) => {
        const ejecucionPrograma = action.payload;
        return this.ejecucionManualService.ejecutarPrograma(ejecucionPrograma)
          .pipe(
            map(res => {
              return new fromEjecucionManual.EjecutarProgramaSuccess({ data: ejecucionPrograma, message: res.mensajeEjecucion })
            }),
            catchError(err => of(new fromEjecucionManual.EjecutarProgramaFail({ data: ejecucionPrograma, error: err })))
          )
      }));

  @Effect()
  EjecutarSubprograma$ = this.actions$
    .pipe(
      ofType(fromEjecucionManual.actions.EJECUTAR_SUBPROGRAMA),
      mergeMap((action: fromEjecucionManual.EjecutarSubprograma) => {
        const ejecucionSubprograma = action.payload;
        return this.ejecucionManualService.ejecutarSubprograma(ejecucionSubprograma)
          .pipe(
            map(res => {
              return new fromEjecucionManual.EjecutarSubprogramaSuccess({
                data: ejecucionSubprograma,
                message: res.mensajeEjecucion
              })
            }),
            catchError(err => of(new fromEjecucionManual.EjecutarSubprogramaFail({ data: ejecucionSubprograma, error: err })))
          )
      }));

}