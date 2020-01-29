import { Action } from '@ngrx/store';
import { Campo } from '../../../../reportes/admin/models/campo.model';
import { getCommonCrudActions } from '../common-actions';

export const actions = {
  ...getCommonCrudActions('Campo'),
  GET_PERMITED: `Campo Obtener todos`,
  GET_PERMITED_SUCCESS: `CampoObtener todos correcto`,
  GET_PERMITED_FAIL: `Campo Error obtener todos`,
}
/* Acción para buscarTodos */
export class GetAllCampos implements Action {
  readonly type = actions.GET_ALL;
  constructor(public payload= null) {}
}
export class GetAllCamposSuccess implements Action {
  readonly type = actions.GET_ALL_SUCCESS;
  constructor(public payload : Campo[]) {}
}
export class GetAllCamposFail implements Action {
  readonly type = actions.GET_ALL_FAIL;
  constructor(public payload: any) {}
}
export class GetCamposPorUsuarioActivo implements Action {
  readonly type = actions.GET_PERMITED;
  constructor(public payload= null) {}
}
export class GetCamposPorUsuarioActivoSuccess implements Action {
  readonly type = actions.GET_PERMITED_SUCCESS;
  constructor(public payload : Campo[]) {}
}
export class GetCamposPorUsuarioActivoFail implements Action {
  readonly type = actions.GET_PERMITED_FAIL;
  constructor(public payload: any) {}
}
/* Acción para buscarTodos */
export class GetByCampo implements Action {
  readonly type = actions.GET_CRITERIO;
  constructor(public payload= null) {}
}
export class GetByCampoSuccess implements Action {
  readonly type = actions.GET_CRITERIO_SUCCESS;
  constructor(public payload : Campo[]) {}
}
export class GetByCampoFail implements Action {
  readonly type = actions.GET_CRITERIO_FAIL;
  constructor(public payload: any) {}
}

export class UpdateCampo implements Action {
  readonly type = actions.UPDATE;
  constructor(public payload: any) {}
}
export class UpdateCampoSuccess implements Action {
  readonly type = actions.UPDATE_SUCCESS;
  constructor(public payload: any) {}
}
export class UpdateCampoFail implements Action {
  readonly type = actions.UPDATE_FAIL;
  constructor(public payload: any) {}
}
export class GetCriterioCampo implements Action {
  readonly type = actions.GET_CRITERIO;
  constructor(public payload: any) {}
}
export class GetCriterioCampoSuccess implements Action {
  readonly type = actions.GET_CRITERIO_SUCCESS;
  constructor(public payload: Campo[]) {}
}
export class GetCriterioCampoFail implements Action {
  readonly type = actions.GET_CRITERIO_FAIL;
  constructor(public payload: any) {}
}


export type CampoActions
  =  GetAllCampos
  | GetAllCamposSuccess
  | GetAllCamposFail
  | UpdateCampo
  | UpdateCampoSuccess
  | UpdateCampoFail
  | GetByCampo
  | GetByCampoSuccess
  | GetByCampoFail
  | GetCriterioCampo
  | GetCriterioCampoSuccess
  | GetCriterioCampoFail
  | GetCamposPorUsuarioActivo
  | GetCamposPorUsuarioActivoSuccess
  | GetCamposPorUsuarioActivoFail
  