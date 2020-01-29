import { getCommonCrudActions } from '../../common-actions';
import { Action } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';
import { SubProgramaGeneraArchivo } from '../../../../../procesos/models';

export const actions = {
  ...getCommonCrudActions('SubProgramaGeneraArchivo')
}

export class GetAllSubProgramaGeneraArchivo implements Action {
  readonly type = actions.GET_ALL;
  constructor(public payload = null) { }
}
export class GetAllSubProgramaGeneraArchivoSuccess implements Action {
  readonly type = actions.GET_ALL_SUCCESS;
  constructor(public payload: SubProgramaGeneraArchivo[]) { }
}
export class GetAllSubProgramaGeneraArchivoFail implements Action {
  readonly type = actions.GET_ALL_FAIL;
  constructor(public payload: HttpErrorResponse) { }
}

export class AddSubProgramaGeneraArchivo implements Action {
  readonly type = actions.ADD;
  constructor(public payload: SubProgramaGeneraArchivo) {
  }
}
export class AddSubProgramaGeneraArchivoSuccess implements Action {
  readonly type = actions.ADD_SUCCESS;
  constructor(public payload: any) {
  }
}
export class AddSubProgramaGeneraArchivoFail implements Action {
  readonly type = actions.ADD_FAIL;
  constructor(public payload: any) {
  }
}

export class UpdateSubProgramaGeneraArchivo implements Action {
  readonly type = actions.UPDATE;
  constructor(public payload: SubProgramaGeneraArchivo) {
  }
}
export class UpdateSubProgramaGeneraArchivoSuccess implements Action {
  readonly type = actions.UPDATE_SUCCESS;
  constructor(public payload: any) {
  }
}
export class UpdateSubProgramaGeneraArchivoFail implements Action {
  readonly type = actions.UPDATE_FAIL;
  constructor(public payload: any) {
  }
}

export class DeleteSubProgramaGeneraArchivo implements Action {
  readonly type = actions.DELETE;
  constructor(public payload: SubProgramaGeneraArchivo) {
  }
}
export class DeleteSubProgramaGeneraArchivoSuccess implements Action {
  readonly type = actions.DELETE_SUCCESS;
  constructor(public payload: any) {
  }
}
export class DeleteSubProgramaGeneraArchivoFail implements Action {
  readonly type = actions.DELETE_FAIL;
  constructor(public payload: any) {
  }
}

export class ResetSubProgramaGeneraArchivo implements Action {
  readonly type = actions.RESET;
  constructor(public payload = null) { }
}

export type SubProgramaGeneraArchivoActions
  = GetAllSubProgramaGeneraArchivo
  | GetAllSubProgramaGeneraArchivoSuccess
  | GetAllSubProgramaGeneraArchivoFail
  | AddSubProgramaGeneraArchivo
  | AddSubProgramaGeneraArchivoSuccess
  | AddSubProgramaGeneraArchivoFail
  | UpdateSubProgramaGeneraArchivo
  | UpdateSubProgramaGeneraArchivoSuccess
  | UpdateSubProgramaGeneraArchivoFail
  | DeleteSubProgramaGeneraArchivo
  | DeleteSubProgramaGeneraArchivoSuccess
  | DeleteSubProgramaGeneraArchivoFail
  | ResetSubProgramaGeneraArchivo
