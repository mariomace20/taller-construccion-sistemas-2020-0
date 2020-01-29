import { getCommonCrudActions } from '../../common-actions';
import { Action } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';
import { SubProgramaCargaArchivo } from '../../../../../procesos/models';

export const actions = {
  ...getCommonCrudActions('SubProgramaCargaArchivo')
}

export class GetAllSubProgramaCargaArchivo implements Action {
  readonly type = actions.GET_ALL;
  constructor(public payload = null) { }
}
export class GetAllSubProgramaCargaArchivoSuccess implements Action {
  readonly type = actions.GET_ALL_SUCCESS;
  constructor(public payload: SubProgramaCargaArchivo[]) { }
}
export class GetAllSubProgramaCargaArchivoFail implements Action {
  readonly type = actions.GET_ALL_FAIL;
  constructor(public payload: HttpErrorResponse) { }
}

export class AddSubProgramaCargaArchivo implements Action {
  readonly type = actions.ADD;
  constructor(public payload: SubProgramaCargaArchivo) {
  }
}
export class AddSubProgramaCargaArchivoSuccess implements Action {
  readonly type = actions.ADD_SUCCESS;
  constructor(public payload: any) {
  }
}
export class AddSubProgramaCargaArchivoFail implements Action {
  readonly type = actions.ADD_FAIL;
  constructor(public payload: any) {
  }
}

export class UpdateSubProgramaCargaArchivo implements Action {
  readonly type = actions.UPDATE;
  constructor(public payload: SubProgramaCargaArchivo) {
  }
}
export class UpdateSubProgramaCargaArchivoSuccess implements Action {
  readonly type = actions.UPDATE_SUCCESS;
  constructor(public payload: any) {
  }
}
export class UpdateSubProgramaCargaArchivoFail implements Action {
  readonly type = actions.UPDATE_FAIL;
  constructor(public payload: any) {
  }
}

export class DeleteSubProgramaCargaArchivo implements Action {
  readonly type = actions.DELETE;
  constructor(public payload: SubProgramaCargaArchivo) {
  }
}
export class DeleteSubProgramaCargaArchivoSuccess implements Action {
  readonly type = actions.DELETE_SUCCESS;
  constructor(public payload: any) {
  }
}
export class DeleteSubProgramaCargaArchivoFail implements Action {
  readonly type = actions.DELETE_FAIL;
  constructor(public payload: any) {
  }
}

export class ResetSubProgramaCargaArchivo implements Action {
  readonly type = actions.RESET;
  constructor(public payload = null) { }
}

export type SubProgramaCargaArchivoActions
  = GetAllSubProgramaCargaArchivo
  | GetAllSubProgramaCargaArchivoSuccess
  | GetAllSubProgramaCargaArchivoFail
  | AddSubProgramaCargaArchivo
  | AddSubProgramaCargaArchivoSuccess
  | AddSubProgramaCargaArchivoFail
  | UpdateSubProgramaCargaArchivo
  | UpdateSubProgramaCargaArchivoSuccess
  | UpdateSubProgramaCargaArchivoFail
  | DeleteSubProgramaCargaArchivo
  | DeleteSubProgramaCargaArchivoSuccess
  | DeleteSubProgramaCargaArchivoFail
  | ResetSubProgramaCargaArchivo
