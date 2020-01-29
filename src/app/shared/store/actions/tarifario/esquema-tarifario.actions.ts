import { Action } from '@ngrx/store';
import {EsquemaTarifario} from '../../../../tarifario/models';
import { getCommonCrudActions } from '../common-actions';

export const actions = {
  ...getCommonCrudActions('EsquemaTarifario')
}
export class AddEsquemaTarifario implements Action {
  readonly type = actions.ADD;
  constructor(public payload: any) {}
}
export class AddEsquemaTarifarioSuccess implements Action {
  readonly type = actions.ADD_SUCCESS;
  constructor(public payload: any) {}
}
export class AddEsquemaTarifarioFail implements Action {
  readonly type = actions.ADD_FAIL;
  constructor(public payload: any) {}
}

export class UpdateEsquemaTarifario implements Action {
  readonly type = actions.UPDATE;
  constructor(public payload: any) {}
}
export class UpdateEsquemaTarifarioSuccess implements Action {
  readonly type = actions.UPDATE_SUCCESS;
  constructor(public payload: any) {}
}
export class UpdateEsquemaTarifarioFail implements Action {
  readonly type = actions.UPDATE_FAIL;
  constructor(public payload: any) {}
}

export class DeleteEsquemaTarifario implements Action {
  readonly type = actions.DELETE;
  constructor(public payload: any) {}
}
export class DeleteEsquemaTarifarioSuccess implements Action {
  readonly type = actions.DELETE_SUCCESS;
  constructor(public payload: any) {}
}
export class DeleteEsquemaTarifarioFail implements Action {
  readonly type = actions.DELETE_FAIL;
  constructor(public payload: any) {}
}

export class GetAllEsquemaTarifario implements Action {
  readonly type = actions.GET_ALL;
  constructor(public payload = null) {}
}
export class GetAllEsquemaTarifarioSuccess implements Action {
  readonly type = actions.GET_ALL_SUCCESS;
  constructor(public payload: EsquemaTarifario[]) {}
}
export class GetAllEsquemaTarifarioFail implements Action {
  readonly type = actions.GET_ALL_FAIL;
  constructor(public payload: any) {}
}

export class ResetEsquemaTarifario implements Action {
  readonly type = actions.RESET;
  constructor(public payload: any = null) {};
}

export type EsquemaTarifarioActions
  = AddEsquemaTarifario
  | AddEsquemaTarifarioSuccess
  | AddEsquemaTarifarioFail
  | UpdateEsquemaTarifario
  | UpdateEsquemaTarifarioSuccess
  | UpdateEsquemaTarifarioFail
  | DeleteEsquemaTarifario
  | DeleteEsquemaTarifarioSuccess
  | DeleteEsquemaTarifarioFail
  | GetAllEsquemaTarifario
  | GetAllEsquemaTarifarioSuccess
  | GetAllEsquemaTarifarioFail
  | ResetEsquemaTarifario;
