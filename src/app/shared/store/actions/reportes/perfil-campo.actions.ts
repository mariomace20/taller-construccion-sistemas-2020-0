import { Action } from '@ngrx/store';
import { PerfilCampo } from '../../../../reportes/admin/models/perfil-campo.model';
import { getCommonCrudActions } from '../common-actions';
import { ParametrosUpdateAllCamposPerfil } from '../../../../reportes/admin/models';

export const actions = {
  ...getCommonCrudActions('PerfilCampo')
}
export class AddPerfilCampo implements Action {
  readonly type = actions.ADD;
  constructor(public payload: any) {}
}
export class AddPerfilCampoSuccess implements Action {
  readonly type = actions.ADD_SUCCESS;
  constructor(public payload: any) {}
}
export class AddPerfilCampoFail implements Action {
  readonly type = actions.ADD_FAIL;
  constructor(public payload: any) {}
}
/* Acción para buscarTodos */
export class GetAllPerfilCampo implements Action {
  readonly type = actions.GET_ALL;
  constructor(public payload = null) {}
}
export class GetAllPerfilCampoSuccess implements Action {
  readonly type = actions.GET_ALL_SUCCESS;
  constructor(public payload: PerfilCampo[]) {}
}
export class GetAllPerfilCampoFail implements Action {
  readonly type = actions.GET_ALL_FAIL;
  constructor(public payload: any) {}
}

/* Acción para buscarPorCriterios */
export class GetCriterioPerfilCampo implements Action {
  readonly type = actions.GET_CRITERIO;
  constructor(public payload: any) {}
}
export class GetCriterioPerfilCampoSuccess implements Action {
  readonly type = actions.GET_CRITERIO_SUCCESS;
  constructor(public payload: any) {}
}
export class GetCriterioPerfilCampoFail implements Action {
  readonly type = actions.GET_CRITERIO_FAIL;
  constructor(public payload: any) {}
}

export class UpdateAllCamposPerfil implements Action {
  readonly type = actions.UPDATE;
  constructor(public payload : {parametro: ParametrosUpdateAllCamposPerfil, modificaciones: any}) {}
}
export class UpdateAllCamposPerfilSuccess implements Action {
  readonly type = actions.UPDATE_SUCCESS;
  constructor(public payload: any) {}
}
export class UpdateAllCamposPerfilFail implements Action {
  readonly type = actions.UPDATE_FAIL;
  constructor(public payload: any) {}
}
export type PerfilCampoActions
  =  AddPerfilCampo
  | AddPerfilCampoSuccess
  | AddPerfilCampoFail
  | GetAllPerfilCampo
  | GetAllPerfilCampoSuccess
  | GetAllPerfilCampoFail
  | GetCriterioPerfilCampo
  | GetCriterioPerfilCampoSuccess
  | GetCriterioPerfilCampoFail
  | UpdateAllCamposPerfil
  | UpdateAllCamposPerfilSuccess
  | UpdateAllCamposPerfilFail
