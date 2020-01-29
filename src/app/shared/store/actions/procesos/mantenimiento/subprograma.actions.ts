import { getCommonCrudActions } from '../../common-actions';
import { Action } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';
import { Subprograma } from '../../../../../procesos/models';

export const actions = {
  ...getCommonCrudActions('Subprograma'),
  GET_BY_PROGRAMA: '[Subprograma] Obtener por programa',
  GET_BY_PROGRAMA_SUCCESS: '[Subprograma] Obtener por programa correcto',
  GET_BY_PROGRAMA_FAIL: '[Subprograma] Error al obtener por programa',
}

export class GetAllSubprograma implements Action {
  readonly type = actions.GET_ALL;
  constructor(public payload = null) { }
}
export class GetAllSubprogramaSuccess implements Action {
  readonly type = actions.GET_ALL_SUCCESS;
  constructor(public payload: Subprograma[]) { }
}
export class GetAllSubprogramaFail implements Action {
  readonly type = actions.GET_ALL_FAIL;
  constructor(public payload: HttpErrorResponse) { }
}

export class AddSubprograma implements Action {
  readonly type = actions.ADD;
  constructor(public payload: Subprograma) {
  }
}
export class AddSubprogramaSuccess implements Action {
  readonly type = actions.ADD_SUCCESS;
  constructor(public payload: any) {
  }
}
export class AddSubprogramaFail implements Action {
  readonly type = actions.ADD_FAIL;
  constructor(public payload: any) {
  }
}

export class UpdateSubprograma implements Action {
  readonly type = actions.UPDATE;
  constructor(public payload: Subprograma) {
  }
}
export class UpdateSubprogramaSuccess implements Action {
  readonly type = actions.UPDATE_SUCCESS;
  constructor(public payload: any) {
  }
}
export class UpdateSubprogramaFail implements Action {
  readonly type = actions.UPDATE_FAIL;
  constructor(public payload: any) {
  }
}

export class DeleteSubprograma implements Action {
  readonly type = actions.DELETE;
  constructor(public payload: Subprograma) {
  }
}
export class DeleteSubprogramaSuccess implements Action {
  readonly type = actions.DELETE_SUCCESS;
  constructor(public payload: any) {
  }
}
export class DeleteSubprogramaFail implements Action {
  readonly type = actions.DELETE_FAIL;
  constructor(public payload: any) {
  }
}

export class ResetSubprograma implements Action {
  readonly type = actions.RESET;
  constructor(public payload = null) { }
}

export class GetSubprogramasByPrograma implements Action {
  readonly type = actions.GET_BY_PROGRAMA;
  constructor(public payload: { idProceso: number, idPrograma: number }) { }
}
export class GetSubprogramasByProgramaSuccess implements Action {
  readonly type = actions.GET_BY_PROGRAMA_SUCCESS;
  constructor(public payload: Subprograma[]) { }
}
export class GetSubprogramasByProgramaFail implements Action {
  readonly type = actions.GET_BY_PROGRAMA_FAIL;
  constructor(public payload: HttpErrorResponse) { }
}

export type SubprogramaActions
  = GetAllSubprograma
  | GetAllSubprogramaSuccess
  | GetAllSubprogramaFail
  | AddSubprograma
  | AddSubprogramaSuccess
  | AddSubprogramaFail
  | UpdateSubprograma
  | UpdateSubprogramaSuccess
  | UpdateSubprogramaFail
  | DeleteSubprograma
  | DeleteSubprogramaSuccess
  | DeleteSubprogramaFail
  | ResetSubprograma
  | GetSubprogramasByPrograma
  | GetSubprogramasByProgramaSuccess
  | GetSubprogramasByProgramaFail;
