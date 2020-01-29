import { Action } from '@ngrx/store';
import { EjecucionPrograma, EjecucionSubprograma } from '../../../../procesos/models';
import { HttpErrorResponse } from '@angular/common/http';

export const actions = {
  GET: '[EjecucionManual] Obtener procesos',
  GET_SUCCESS: '[EjecucionManual] Obtener procesos correcto',
  GET_FAIL: '[EjecucionManual] Error obtener procesos',
  GET_SUBPROGRAMAS: '[EjecucionManual] Obtener subprogramas',
  GET_SUBPROGRAMAS_SUCCESS: '[EjecucionManual] Obtener subprogramas correcto',
  GET_SUBPROGRAMAS_FAIL: '[EjecucionManual] Error al obtener subprogramas',
  EJECUTAR_PROGRAMA: '[EjecucionManual] Ejecuctar programa',
  EJECUTAR_PROGRAMA_SUCCESS: '[EjecucionManual] Ejecuctar programa correcto',
  EJECUTAR_PROGRAMA_FAIL: '[EjecucionManual] Error ejecuctar programa',
  EJECUTAR_SUBPROGRAMA: '[EjecucionManual] Ejecuctar Subprograma',
  EJECUTAR_SUBPROGRAMA_SUCCESS: '[EjecucionManual] Ejecuctar Subprograma correcto',
  EJECUTAR_SUBPROGRAMA_FAIL: '[EjecucionManual] Error ejecuctar Subprograma',
}

export class GetAllProcesosEjecucionManual implements Action {
  readonly type = actions.GET;
  constructor(public payload: any = null) { }
}
export class GetAllProcesosEjecucionManualSuccess implements Action {
  readonly type = actions.GET_SUCCESS;
  constructor(public payload: any) { }
}
export class GetAllProcesosEjecucionManualFail implements Action {
  readonly type = actions.GET_FAIL;
  constructor(public payload: any) { }
}

export class EjecutarPrograma implements Action {
  readonly type = actions.EJECUTAR_PROGRAMA;
  constructor(public payload: EjecucionPrograma) { }
}
export class EjecutarProgramaSuccess implements Action {
  readonly type = actions.EJECUTAR_PROGRAMA_SUCCESS;
  constructor(public payload: { data: EjecucionPrograma, message: string }) { }
}
export class EjecutarProgramaFail implements Action {
  readonly type = actions.EJECUTAR_PROGRAMA_FAIL;
  constructor(public payload: { data: EjecucionPrograma, error: HttpErrorResponse }) { }
}

export class EjecutarSubprograma implements Action {
  readonly type = actions.EJECUTAR_SUBPROGRAMA;
  constructor(public payload: EjecucionSubprograma) { }
}
export class EjecutarSubprogramaSuccess implements Action {
  readonly type = actions.EJECUTAR_SUBPROGRAMA_SUCCESS;
  constructor(public payload: { data: EjecucionSubprograma, message: string }) { }
}
export class EjecutarSubprogramaFail implements Action {
  readonly type = actions.EJECUTAR_SUBPROGRAMA_FAIL;
  constructor(public payload: { data: EjecucionSubprograma, error: HttpErrorResponse }) { }
}

export class GetSubprogramasEjecucionManual implements Action {
  readonly type = actions.GET_SUBPROGRAMAS;
  constructor(public payload: EjecucionPrograma) { }
}
export class GetSubprogramasEjecucionManualSuccess implements Action {
  readonly type = actions.GET_SUBPROGRAMAS_SUCCESS;
  constructor(public payload: any) { }
}
export class GetSubprogramasEjecucionManualFail implements Action {
  readonly type = actions.GET_SUBPROGRAMAS_FAIL;
  constructor(public payload: any) { }
}

export type EjecucionManualActions
  = GetAllProcesosEjecucionManual
  | GetAllProcesosEjecucionManualSuccess
  | GetAllProcesosEjecucionManualFail
  | EjecutarPrograma
  | EjecutarProgramaSuccess
  | EjecutarProgramaFail
  | EjecutarSubprograma
  | EjecutarSubprogramaSuccess
  | EjecutarSubprogramaFail
  | GetSubprogramasEjecucionManual
  | GetSubprogramasEjecucionManualSuccess
  | GetSubprogramasEjecucionManualFail;