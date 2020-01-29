import { Action } from '@ngrx/store';
import { TipoCambioMemb } from '../../../../consultas/models';
import { getCommonCrudActions } from '../common-actions';

export const actions = {
  ...getCommonCrudActions('TipoCambioMemb')
}

export class AddTipoCambioMemb implements Action {
  readonly type = actions.ADD;
  constructor(public payload: any) {}
}
export class AddTipoCambioMembSuccess implements Action {
  readonly type = actions.ADD_SUCCESS;
  constructor(public payload: any) {}
}
export class AddTipoCambioMembFail implements Action {
  readonly type = actions.ADD_FAIL;
  constructor(public payload: any) {}
}

export class UpdateTipoCambioMemb implements Action {
  readonly type = actions.UPDATE;
  constructor(public payload: any) {}
}
export class UpdateTipoCambioMembSuccess implements Action {
  readonly type = actions.UPDATE_SUCCESS;
  constructor(public payload: any) {}
}
export class UpdateTipoCambioMembFail implements Action {
  readonly type = actions.UPDATE_FAIL;
  constructor(public payload: any) {}
}

export class DeleteTipoCambioMemb implements Action {
  readonly type = actions.DELETE;
  constructor(public payload: any) {}
}
export class DeleteTipoCambioMembSuccess implements Action {
  readonly type = actions.DELETE_SUCCESS;
  constructor(public payload: any) {}
}
export class DeleteTipoCambioMembFail implements Action {
  readonly type = actions.DELETE_FAIL;
  constructor(public payload: any) {}
}

export class GetAllTipoCambioMemb implements Action {
  readonly type = actions.GET_ALL;
  constructor(public payload = null) {}
}
export class GetAllTipoCambioMembSuccess implements Action {
  readonly type = actions.GET_ALL_SUCCESS;
  constructor(public payload: TipoCambioMemb[]) {}
}
export class GetAllTipoCambioMembFail implements Action {
  readonly type = actions.GET_ALL_FAIL;
  constructor(public payload: any) {}
}

export class ResetTipoCambioMemb implements Action {
  readonly type = actions.RESET;
  constructor(public payload: any = null) {}
}

export type TipoCambioMembActions
  = AddTipoCambioMemb
  | AddTipoCambioMembSuccess
  | AddTipoCambioMembFail
  | UpdateTipoCambioMemb
  | UpdateTipoCambioMembSuccess
  | UpdateTipoCambioMembFail
  | DeleteTipoCambioMemb
  | DeleteTipoCambioMembSuccess
  | DeleteTipoCambioMembFail
  | GetAllTipoCambioMemb
  | GetAllTipoCambioMembSuccess
  | GetAllTipoCambioMembFail
  | ResetTipoCambioMemb;
