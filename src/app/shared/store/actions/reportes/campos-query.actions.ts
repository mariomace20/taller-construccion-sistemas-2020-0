import { Action } from '@ngrx/store';
import { CampoQuery } from '../../../../reportes/user/models';
import { getCommonCrudActions } from '../common-actions';

export const actions = {
  ...getCommonCrudActions('CampoQuery')
}

/* Acción para buscarTodos */
export class GetAllCampoQuery implements Action {
  readonly type = actions.GET_ALL;
  constructor(public payload = null) {}
}
export class GetAllCampoQuerySuccess implements Action {
  readonly type = actions.GET_ALL_SUCCESS;
  constructor(public payload: CampoQuery[]) {}
}
export class GetAllCampoQueryFail implements Action {
  readonly type = actions.GET_ALL_FAIL;
  constructor(public payload: any) {}
}

/* Acción para buscarPorCriterios */
export class GetCriterioCampoQuery implements Action {
  readonly type = actions.GET_CRITERIO;
  constructor(public payload: any) {}
}
export class GetCriterioCampoQuerySuccess implements Action {
  readonly type = actions.GET_CRITERIO_SUCCESS;
  constructor(public payload: CampoQuery[]) {}
}
export class GetCriterioCampoQueryFail implements Action {
  readonly type = actions.GET_CRITERIO_FAIL;
  constructor(public payload: any) {}
}
export class AddCampoQuery implements Action {
  readonly type = actions.ADD;
  constructor(public payload: any) {}
}
export class AddCampoQuerySuccess implements Action {
  readonly type = actions.ADD_SUCCESS;
  constructor(public payload: any) {}
}
export class AddCampoQueryFail implements Action {
  readonly type = actions.ADD_FAIL;
  constructor(public payload: any) {}
}

export class UpdateCampoQuery implements Action {
  readonly type = actions.UPDATE;
  constructor(public payload: any) {}
}
export class UpdateCampoQuerySuccess implements Action {
  readonly type = actions.UPDATE_SUCCESS;
  constructor(public payload: any) {}
}
export class UpdateCampoQueryFail implements Action {
  readonly type = actions.UPDATE_FAIL;
  constructor(public payload: any) {}
}

export class DeleteCampoQuery implements Action {
  readonly type = actions.DELETE;
  constructor(public payload: any) {}
}
export class DeleteCampoQuerySuccess implements Action {
  readonly type = actions.DELETE_SUCCESS;
  constructor(public payload: any) {}
}
export class DeleteCampoQueryFail implements Action {
  readonly type = actions.DELETE_FAIL;
  constructor(public payload: any) {}
}
export type CampoQueryActions
  =  GetAllCampoQuery
  | GetAllCampoQuerySuccess
  | GetAllCampoQueryFail
  | GetCriterioCampoQuery
  | GetCriterioCampoQuerySuccess
  | GetCriterioCampoQueryFail
  | AddCampoQuery
  | AddCampoQuerySuccess
  | AddCampoQueryFail
  | UpdateCampoQuery
  | UpdateCampoQuerySuccess
  | UpdateCampoQueryFail
  | DeleteCampoQuery
  | DeleteCampoQuerySuccess
  | DeleteCampoQueryFail
