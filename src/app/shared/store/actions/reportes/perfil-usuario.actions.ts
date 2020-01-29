import { Action } from '@ngrx/store';
import { PerfilUsuario } from '../../../../reportes/admin/models';
import { getCommonCrudActions } from '../common-actions';
import { ParametrosUpdateAllCamposPerfil } from '../../../../reportes/admin/models';

export const actions = {
  ...getCommonCrudActions('PerfilUsuario'),
  UPDATE_ALL: `[${'PerfilUsuario'}] Actualizar por Lote`,
  UPDATE_ALL_SUCCESS: `[${'PerfilUsuario'}] Actualización por lote correcta`,
  UPDATE_ALL_FAIL: `[${'PerfilUsuario'}] Error en actualización por lote`,
}
export class AddPerfilUsuario implements Action {
  readonly type = actions.ADD;
  constructor(public payload: any) {}
}
export class AddPerfilUsuarioSuccess implements Action {
  readonly type = actions.ADD_SUCCESS;
  constructor(public payload: any) {}
}
export class AddPerfilUsuarioFail implements Action {
  readonly type = actions.ADD_FAIL;
  constructor(public payload: any) {}
}

export class UpdatePerfilUsuario implements Action {
  readonly type = actions.UPDATE;
  constructor(public payload: any) {}
}
export class UpdatePerfilUsuarioSuccess implements Action {
  readonly type = actions.UPDATE_SUCCESS;
  constructor(public payload: any) {}
}
export class UpdatePerfilUsuarioFail implements Action {
  readonly type = actions.UPDATE_FAIL;
  constructor(public payload: any) {}
}

export class DeletePerfilUsuario implements Action {
  readonly type = actions.DELETE;
  constructor(public payload: any) {}
}
export class DeletePerfilUsuarioSuccess implements Action {
  readonly type = actions.DELETE_SUCCESS;
  constructor(public payload: any) {}
}
export class DeletePerfilUsuarioFail implements Action {
  readonly type = actions.DELETE_FAIL;
  constructor(public payload: any) {}
}
/* Acción para buscarTodos */
export class GetAllPerfilUsuario implements Action {
  readonly type = actions.GET_ALL;
  constructor(public payload = null) {}
}
export class GetAllPerfilUsuarioSuccess implements Action {
  readonly type = actions.GET_ALL_SUCCESS;
  constructor(public payload: PerfilUsuario[]) {}
}
export class GetAllPerfilUsuarioFail implements Action {
  readonly type = actions.GET_ALL_FAIL;
  constructor(public payload: any) {}
}

/* Acción para buscarPorCriterios */
export class GetCriterioPerfilUsuario implements Action {
  readonly type = actions.GET_CRITERIO;
  constructor(public payload: any) {}
}
export class GetCriterioPerfilUsuarioSuccess implements Action {
  readonly type = actions.GET_CRITERIO_SUCCESS;
  constructor(public payload: any) {}
}
export class GetCriterioPerfilUsuarioFail implements Action {
  readonly type = actions.GET_CRITERIO_FAIL;
  constructor(public payload: any) {}
}
export class UpdateAllPerfilUsuario implements Action {
  readonly type = actions.UPDATE_ALL;
  constructor(public payload : {parametro:ParametrosUpdateAllCamposPerfil, modificaciones: any}) {}
}
export class UpdateAllPerfilUsuarioSuccess implements Action {
  readonly type = actions.UPDATE_ALL_SUCCESS;
  constructor(public payload: any) {}
}
export class UpdateAllPerfilUsuarioFail implements Action {
  readonly type = actions.UPDATE_ALL_FAIL;
  constructor(public payload: any) {}
}



export type PerfilUsuarioActions
  =  AddPerfilUsuario
  | AddPerfilUsuarioSuccess
  | AddPerfilUsuarioFail
  | UpdatePerfilUsuario
  | UpdatePerfilUsuarioSuccess
  | UpdatePerfilUsuarioFail
  | DeletePerfilUsuario
  | DeletePerfilUsuarioSuccess
  | DeletePerfilUsuarioFail
  | GetAllPerfilUsuario
  | GetAllPerfilUsuarioSuccess
  | GetAllPerfilUsuarioFail
  | GetCriterioPerfilUsuario
  | GetCriterioPerfilUsuarioSuccess
  | GetCriterioPerfilUsuarioFail
  | UpdateAllPerfilUsuario
  | UpdateAllPerfilUsuarioSuccess
  | UpdateAllPerfilUsuarioFail;
  
