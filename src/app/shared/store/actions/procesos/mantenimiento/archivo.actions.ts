import { Action } from '@ngrx/store';
import { Archivo } from '../../../../../procesos/models';
import { getCommonCrudActions } from '../../common-actions';

export const actions = {
  ...getCommonCrudActions('Archivo')
}

export class AddArchivo implements Action {
  readonly type = actions.ADD;
  constructor(public payload: any) {}
}
export class AddArchivoSuccess implements Action {
  readonly type = actions.ADD_SUCCESS;
  constructor(public payload: any) {}
}
export class AddArchivoFail implements Action {
  readonly type = actions.ADD_FAIL;
  constructor(public payload: any) {}
}

export class UpdateArchivo implements Action {
  readonly type = actions.UPDATE;
  constructor(public payload: any) {}
}
export class UpdateArchivoSuccess implements Action {
  readonly type = actions.UPDATE_SUCCESS;
  constructor(public payload: any) {}
}
export class UpdateArchivoFail implements Action {
  readonly type = actions.UPDATE_FAIL;
  constructor(public payload: any) {}
}

export class DeleteArchivo implements Action {
  readonly type = actions.DELETE;
  constructor(public payload: any) {}
}
export class DeleteArchivoSuccess implements Action {
  readonly type = actions.DELETE_SUCCESS;
  constructor(public payload: any) {}
}
export class DeleteArchivoFail implements Action {
  readonly type = actions.DELETE_FAIL;
  constructor(public payload: any) {}
}

export class GetAllArchivo implements Action {
  readonly type = actions.GET_ALL;
  constructor(public payload = null) {}
}
export class GetAllArchivoSuccess implements Action {
  readonly type = actions.GET_ALL_SUCCESS;
  constructor(public payload: Archivo[]) {}
}
export class GetAllArchivoFail implements Action {
  readonly type = actions.GET_ALL_FAIL;
  constructor(public payload: any) {}
}

export type ArchivoActions
  = AddArchivo
  | AddArchivoSuccess
  | AddArchivoFail
  | UpdateArchivo
  | UpdateArchivoSuccess
  | UpdateArchivoFail
  | DeleteArchivo
  | DeleteArchivoSuccess
  | DeleteArchivoFail
  | GetAllArchivo
  | GetAllArchivoSuccess
  | GetAllArchivoFail;
