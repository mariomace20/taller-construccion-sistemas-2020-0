import { Action } from '@ngrx/store';
import { TablasForaneas } from '../../../../reportes/user/models';
import { getCommonCrudActions } from '../common-actions';

export const actions = {
  ...getCommonCrudActions('TablasForaneas')
}

/* Acción para buscarTodos */
export class GetAllTablasForaneas implements Action {
  readonly type = actions.GET_ALL;
  constructor(public payload = null) {}
}
export class GetAllTablasForaneasSuccess implements Action {
  readonly type = actions.GET_ALL_SUCCESS;
  constructor(public payload: TablasForaneas[]) {}
}
export class GetAllTablasForaneasFail implements Action {
  readonly type = actions.GET_ALL_FAIL;
  constructor(public payload: any) {}
}

/* Acción para buscarPorCriterios */
export class GetCriterioTablasForaneas implements Action {
  readonly type = actions.GET_CRITERIO;
  constructor(public payload: any) {}
}
export class GetCriterioTablasForaneasSuccess implements Action {
  readonly type = actions.GET_CRITERIO_SUCCESS;
  constructor(public payload: TablasForaneas[]) {}
}
export class GetCriterioTablasForaneasFail implements Action {
  readonly type = actions.GET_CRITERIO_FAIL;
  constructor(public payload: any) {}
}
export class AddTablasForaneas implements Action {
  readonly type = actions.ADD;
  constructor(public payload: any) {}
}
export class AddTablasForaneasSuccess implements Action {
  readonly type = actions.ADD_SUCCESS;
  constructor(public payload: any) {}
}
export class AddTablasForaneasFail implements Action {
  readonly type = actions.ADD_FAIL;
  constructor(public payload: any) {}
}

export class UpdateTablasForaneas implements Action {
  readonly type = actions.UPDATE;
  constructor(public payload: any) {}
}
export class UpdateTablasForaneasSuccess implements Action {
  readonly type = actions.UPDATE_SUCCESS;
  constructor(public payload: any) {}
}
export class UpdateTablasForaneasFail implements Action {
  readonly type = actions.UPDATE_FAIL;
  constructor(public payload: any) {}
}

export class DeleteTablasForaneas implements Action {
  readonly type = actions.DELETE;
  constructor(public payload: any) {}
}
export class DeleteTablasForaneasSuccess implements Action {
  readonly type = actions.DELETE_SUCCESS;
  constructor(public payload: any) {}
}
export class DeleteTablasForaneasFail implements Action {
  readonly type = actions.DELETE_FAIL;
  constructor(public payload: any) {}
}
export type TablasForaneasActions
  =  GetAllTablasForaneas
  | GetAllTablasForaneasSuccess
  | GetAllTablasForaneasFail
  | GetCriterioTablasForaneas
  | GetCriterioTablasForaneasSuccess
  | GetCriterioTablasForaneasFail
  | AddTablasForaneas
  | AddTablasForaneasSuccess
  | AddTablasForaneasFail
  | UpdateTablasForaneas
  | UpdateTablasForaneasSuccess
  | UpdateTablasForaneasFail
  | DeleteTablasForaneas
  | DeleteTablasForaneasSuccess
  | DeleteTablasForaneasFail
