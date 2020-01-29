import { getCommonCrudActions } from '../../common-actions';
import { Action } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';
import { Programa } from '../../../../../procesos/models';

export const actions = {
  ...getCommonCrudActions('Programa'),
  GET_BY_PROCESO: '[Programa] Obtener por proceso',
  GET_BY_PROCESO_SUCCESS: '[Programa] Obtener por proceso correcto',
  GET_BY_PROCESO_FAIL: '[Programa] Error al obtener por proceso',
}

export class ResetPrograma implements Action {
  readonly type = actions.RESET;
  constructor(public payload = null) { }
}

export class GetAllPrograma implements Action {
  readonly type = actions.GET_ALL;
  constructor(public payload = null) { }
}
export class GetAllProgramaSuccess implements Action {
  readonly type = actions.GET_ALL_SUCCESS;
  constructor(public payload: Programa[]) { }
}
export class GetAllProgramaFail implements Action {
  readonly type = actions.GET_ALL_FAIL;
  constructor(public payload: HttpErrorResponse) { }
}

export class GetProgramasByProceso implements Action {
  readonly type = actions.GET_BY_PROCESO;
  constructor(public payload: any) { }
}
export class GetProgramasByProcesoSuccess implements Action {
  readonly type = actions.GET_BY_PROCESO_SUCCESS;
  constructor(public payload: Programa[]) { }
}
export class GetProgramasByPorcesoFail implements Action {
  readonly type = actions.GET_BY_PROCESO_FAIL;
  constructor(public payload: HttpErrorResponse) { }
}

export class AddPrograma implements Action {
  readonly type = actions.ADD;
  constructor(public payload: Programa) {
  }
}
export class AddProgramaSuccess implements Action {
  readonly type = actions.ADD_SUCCESS;
  constructor(public payload: any) {
  }
}
export class AddProgramaFail implements Action {
  readonly type = actions.ADD_FAIL;
  constructor(public payload: any) {
  }
}

export class UpdatePrograma implements Action {
  readonly type = actions.UPDATE;
  constructor(public payload: Programa) {
  }
}
export class UpdateProgramaSuccess implements Action {
  readonly type = actions.UPDATE_SUCCESS;
  constructor(public payload: any) {
  }
}
export class UpdateProgramaFail implements Action {
  readonly type = actions.UPDATE_FAIL;
  constructor(public payload: any) {
  }
}

export class DeletePrograma implements Action {
  readonly type = actions.DELETE;
  constructor(public payload: Programa) {
  }
}
export class DeleteProgramaSuccess implements Action {
  readonly type = actions.DELETE_SUCCESS;
  constructor(public payload: any) {
  }
}
export class DeleteProgramaFail implements Action {
  readonly type = actions.DELETE_FAIL;
  constructor(public payload: any) {
  }
}

export type ProgramaActions
  = GetAllPrograma
  | GetAllProgramaSuccess
  | GetAllProgramaFail
  | AddPrograma
  | AddProgramaSuccess
  | AddProgramaFail
  | UpdatePrograma
  | UpdateProgramaSuccess
  | UpdateProgramaFail
  | DeletePrograma
  | DeleteProgramaSuccess
  | DeleteProgramaFail
  | GetProgramasByProceso
  | GetProgramasByProcesoSuccess
  | GetProgramasByPorcesoFail
  | ResetPrograma;
