import { Action } from '@ngrx/store';
import { TablaQuery } from '../../../../reportes/user/models';
import { getCommonCrudActions } from '../common-actions';

export const actions = {
  ...getCommonCrudActions('TablaQuery')
}

/* Acción para buscarTodos */
export class GetAllTablasQuery implements Action {
  readonly type = actions.GET_ALL;
  constructor(public payload = null) {}
}
export class GetAllTablasQuerySuccess implements Action {
  readonly type = actions.GET_ALL_SUCCESS;
  constructor(public payload: TablaQuery[]) {}
}
export class GetAllTablasQueryFail implements Action {
  readonly type = actions.GET_ALL_FAIL;
  constructor(public payload: any) {}
}

/* Acción para buscarPorCriterios */
export class GetCriterioTablasQuery implements Action {
  readonly type = actions.GET_CRITERIO;
  constructor(public payload: any) {}
}
export class GetCriterioTablasQuerySuccess implements Action {
  readonly type = actions.GET_CRITERIO_SUCCESS;
  constructor(public payload: TablaQuery[]) {}
}
export class GetCriterioTablasQueryFail implements Action {
  readonly type = actions.GET_CRITERIO_FAIL;
  constructor(public payload: any) {}
}
export class AddTablaQuery implements Action {
  readonly type = actions.ADD;
  constructor(public payload: any) {}
}
export class AddTablaQuerySuccess implements Action {
  readonly type = actions.ADD_SUCCESS;
  constructor(public payload: any) {}
}
export class AddTablaQueryFail implements Action {
  readonly type = actions.ADD_FAIL;
  constructor(public payload: any) {}
}

export class UpdateTablaQuery implements Action {
  readonly type = actions.UPDATE;
  constructor(public payload: any) {}
}
export class UpdateTablaQuerySuccess implements Action {
  readonly type = actions.UPDATE_SUCCESS;
  constructor(public payload: any) {}
}
export class UpdateTablaQueryFail implements Action {
  readonly type = actions.UPDATE_FAIL;
  constructor(public payload: any) {}
}

export class DeleteTablaQuery implements Action {
  readonly type = actions.DELETE;
  constructor(public payload: any) {}
}
export class DeleteTablaQuerySuccess implements Action {
  readonly type = actions.DELETE_SUCCESS;
  constructor(public payload: any) {}
}
export class DeleteTablaQueryFail implements Action {
  readonly type = actions.DELETE_FAIL;
  constructor(public payload: any) {}
}
export type TablaQueryActions
  =  GetAllTablasQuery
  | GetAllTablasQuerySuccess
  | GetAllTablasQueryFail
  | GetCriterioTablasQuery
  | GetCriterioTablasQuerySuccess
  | GetCriterioTablasQueryFail
  | AddTablaQuery
  | AddTablaQuerySuccess
  | AddTablaQueryFail
  | UpdateTablaQuery
  | UpdateTablaQuerySuccess
  | UpdateTablaQueryFail
  | DeleteTablaQuery
  | DeleteTablaQuerySuccess
  | DeleteTablaQueryFail
