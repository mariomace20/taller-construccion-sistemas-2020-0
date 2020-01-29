import { Action } from '@ngrx/store';
import { ArchivoCampo } from '../../../../../procesos/models';
import { getCommonCrudActions } from '../../common-actions';

export const actions = {
  ...getCommonCrudActions('ArchivoCampo'), 
  GET_BY_ARCHIVO: '[ArchivoCampo] Obtener por archivo',
  GET_BY_ARCHIVO_SUCCESS: '[ArchivoCampo] Obtener por archivo correcto',
  GET_BY_ARCHIVO_FAIL: '[ArchivoCampo] Error al obtener por archivo'
}

export class AddArchivoCampo implements Action {
  readonly type = actions.ADD;
  constructor(public payload: any) {}
}
export class AddArchivoCampoSuccess implements Action {
  readonly type = actions.ADD_SUCCESS;
  constructor(public payload: any) {}
}
export class AddArchivoCampoFail implements Action {
  readonly type = actions.ADD_FAIL;
  constructor(public payload: any) {}
}

export class UpdateArchivoCampo implements Action {
  readonly type = actions.UPDATE;
  constructor(public payload: any) {}
}
export class UpdateArchivoCampoSuccess implements Action {
  readonly type = actions.UPDATE_SUCCESS;
  constructor(public payload: any) {}
}
export class UpdateArchivoCampoFail implements Action {
  readonly type = actions.UPDATE_FAIL;
  constructor(public payload: any) {}
}

export class DeleteArchivoCampo implements Action {
  readonly type = actions.DELETE;
  constructor(public payload: any) {}
}
export class DeleteArchivoCampoSuccess implements Action {
  readonly type = actions.DELETE_SUCCESS;
  constructor(public payload: any) {}
}
export class DeleteArchivoCampoFail implements Action {
  readonly type = actions.DELETE_FAIL;
  constructor(public payload: any) {}
}

export class GetAllArchivoCampo implements Action {
  readonly type = actions.GET_ALL;
  constructor(public payload = null) {}
}
export class GetAllArchivoCampoSuccess implements Action {
  readonly type = actions.GET_ALL_SUCCESS;
  constructor(public payload: ArchivoCampo[]) {}
}
export class GetAllArchivoCampoFail implements Action {
  readonly type = actions.GET_ALL_FAIL;
  constructor(public payload: any) {}
}

export class GetByArchivo implements Action {
  readonly type = actions.GET_BY_ARCHIVO;
  constructor(public payload: any) {}
}
export class GetByArchivoSuccess implements Action {
  readonly type = actions.GET_BY_ARCHIVO_SUCCESS;
  constructor(public payload: ArchivoCampo[]) {}
}
export class GetByArchivoFail implements Action {
  readonly type = actions.GET_BY_ARCHIVO_FAIL;
  constructor(public payload: any) {}
}

export class ResetArchivoCampo implements Action {
  readonly type = actions.RESET;
  constructor(public payload: any = null) {}
}

export type ArchivoCampoActions
  = AddArchivoCampo
  | AddArchivoCampoSuccess
  | AddArchivoCampoFail
  | UpdateArchivoCampo
  | UpdateArchivoCampoSuccess
  | UpdateArchivoCampoFail
  | DeleteArchivoCampo
  | DeleteArchivoCampoSuccess
  | DeleteArchivoCampoFail
  | GetAllArchivoCampo
  | GetAllArchivoCampoSuccess
  | GetAllArchivoCampoFail
  | GetByArchivo
  | GetByArchivoSuccess
  | GetByArchivoFail
  | ResetArchivoCampo;
