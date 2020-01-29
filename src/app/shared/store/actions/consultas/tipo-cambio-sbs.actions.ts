import { Action } from '@ngrx/store';
import { TipoCambioSBS } from '../../../../consultas/models';
import { getCommonCrudActions } from '../common-actions';

export const actions = {
  ...getCommonCrudActions('TipoCambioSBS')
}

export class AddTipoCambioSBS implements Action {
  readonly type = actions.ADD;
  constructor(public payload: any) {}
}
export class AddTipoCambioSBSSuccess implements Action {
  readonly type = actions.ADD_SUCCESS;
  constructor(public payload: any) {}
}
export class AddTipoCambioSBSFail implements Action {
  readonly type = actions.ADD_FAIL;
  constructor(public payload: any) {}
}

export class UpdateTipoCambioSBS implements Action {
  readonly type = actions.UPDATE;
  constructor(public payload: any) {}
}
export class UpdateTipoCambioSBSSuccess implements Action {
  readonly type = actions.UPDATE_SUCCESS;
  constructor(public payload: any) {}
}
export class UpdateTipoCambioSBSFail implements Action {
  readonly type = actions.UPDATE_FAIL;
  constructor(public payload: any) {}
}

export class DeleteTipoCambioSBS implements Action {
  readonly type = actions.DELETE;
  constructor(public payload: any) {}
}
export class DeleteTipoCambioSBSSuccess implements Action {
  readonly type = actions.DELETE_SUCCESS;
  constructor(public payload: any) {}
}
export class DeleteTipoCambioSBSFail implements Action {
  readonly type = actions.DELETE_FAIL;
  constructor(public payload: any) {}
}

export class GetAllTipoCambioSBS implements Action {
  readonly type = actions.GET_ALL;
  constructor(public payload = null) {}
}
export class GetAllTipoCambioSBSSuccess implements Action {
  readonly type = actions.GET_ALL_SUCCESS;
  constructor(public payload: TipoCambioSBS[]) {}
}
export class GetAllTipoCambioSBSFail implements Action {
  readonly type = actions.GET_ALL_FAIL;
  constructor(public payload: any) {}
}

export class ResetTipoCambioSBS implements Action {
  readonly type = actions.RESET;
  constructor(public payload: any = null) {}
}


export type TipoCambioSBSActions
  = AddTipoCambioSBS
  | AddTipoCambioSBSSuccess
  | AddTipoCambioSBSFail
  | UpdateTipoCambioSBS
  | UpdateTipoCambioSBSSuccess
  | UpdateTipoCambioSBSFail
  | DeleteTipoCambioSBS
  | DeleteTipoCambioSBSSuccess
  | DeleteTipoCambioSBSFail
  | GetAllTipoCambioSBS
  | GetAllTipoCambioSBSSuccess
  | GetAllTipoCambioSBSFail
  | ResetTipoCambioSBS;
