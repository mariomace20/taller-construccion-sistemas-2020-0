import { Action } from '@ngrx/store';
import { getCommonCrudActions } from '../common-actions';
import { CondicionQuery } from '../../../../reportes/user/models/condicion.model';

export const actions = {
  ...getCommonCrudActions('CondicionQuery')
}

/* Acción para buscarTodos */
export class GetAllCondicionQuery implements Action {
  readonly type = actions.GET_ALL;
  constructor(public payload = null) {}
}
export class GetAllCondicionQuerySuccess implements Action {
  readonly type = actions.GET_ALL_SUCCESS;
  constructor(public payload: CondicionQuery[]) {}
}
export class GetAllCondicionQueryFail implements Action {
  readonly type = actions.GET_ALL_FAIL;
  constructor(public payload: any) {}
}

/* Acción para buscarPorCriterios */
export class GetCriterioCondicionQuery implements Action {
  readonly type = actions.GET_CRITERIO;
  constructor(public payload: any) {}
}
export class GetCriterioCondicionQuerySuccess implements Action {
  readonly type = actions.GET_CRITERIO_SUCCESS;
  constructor(public payload: CondicionQuery[]) {}
}
export class GetCriterioCondicionQueryFail implements Action {
  readonly type = actions.GET_CRITERIO_FAIL;
  constructor(public payload: any) {}
}
export class AddCondicionQuery implements Action {
  readonly type = actions.ADD;
  constructor(public payload: any) {}
}
export class AddCondicionQuerySuccess implements Action {
  readonly type = actions.ADD_SUCCESS;
  constructor(public payload: any) {}
}
export class AddCondicionQueryFail implements Action {
  readonly type = actions.ADD_FAIL;
  constructor(public payload: any) {}
}

export class UpdateCondicionQuery implements Action {
  readonly type = actions.UPDATE;
  constructor(public payload: any) {}
}
export class UpdateCondicionQuerySuccess implements Action {
  readonly type = actions.UPDATE_SUCCESS;
  constructor(public payload: any) {}
}
export class UpdateCondicionQueryFail implements Action {
  readonly type = actions.UPDATE_FAIL;
  constructor(public payload: any) {}
}

export class DeleteCondicionQuery implements Action {
  readonly type = actions.DELETE;
  constructor(public payload: any) {}
}
export class DeleteCondicionQuerySuccess implements Action {
  readonly type = actions.DELETE_SUCCESS;
  constructor(public payload: any) {}
}
export class DeleteCondicionQueryFail implements Action {
  readonly type = actions.DELETE_FAIL;
  constructor(public payload: any) {}
}
export type CondicionQueryActions
  =  GetAllCondicionQuery
  | GetAllCondicionQuerySuccess
  | GetAllCondicionQueryFail
  | GetCriterioCondicionQuery
  | GetCriterioCondicionQuerySuccess
  | GetCriterioCondicionQueryFail
  | AddCondicionQuery
  | AddCondicionQuerySuccess
  | AddCondicionQueryFail
  | UpdateCondicionQuery
  | UpdateCondicionQuerySuccess
  | UpdateCondicionQueryFail
  | DeleteCondicionQuery
  | DeleteCondicionQuerySuccess
  | DeleteCondicionQueryFail