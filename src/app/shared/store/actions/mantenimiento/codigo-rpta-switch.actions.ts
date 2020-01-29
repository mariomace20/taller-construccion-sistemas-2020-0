import { Action } from '@ngrx/store';
import { CodigoRptaSwitch } from '../../../../mantenimiento/models';
import { getCommonCrudActions } from '../common-actions';

export const actions = {
  ...getCommonCrudActions('CodigoRptaSwitch')
}

export class AddCodigoRptaSwitch implements Action {
  readonly type = actions.ADD;
  constructor(public payload: any) {}
}
export class AddCodigoRptaSwitchSuccess implements Action {
  readonly type = actions.ADD_SUCCESS;
  constructor(public payload: any) {}
}
export class AddCodigoRptaSwitchFail implements Action {
  readonly type = actions.ADD_FAIL;
  constructor(public payload: any) {}
}

export class UpdateCodigoRptaSwitch implements Action {
  readonly type = actions.UPDATE;
  constructor(public payload: any) {}
}
export class UpdateCodigoRptaSwitchSuccess implements Action {
  readonly type = actions.UPDATE_SUCCESS;
  constructor(public payload: any) {}
}
export class UpdateCodigoRptaSwitchFail implements Action {
  readonly type = actions.UPDATE_FAIL;
  constructor(public payload: any) {}
}

export class DeleteCodigoRptaSwitch implements Action {
  readonly type = actions.DELETE;
  constructor(public payload: any) {}
}
export class DeleteCodigoRptaSwitchSuccess implements Action {
  readonly type = actions.DELETE_SUCCESS;
  constructor(public payload: any) {}
}
export class DeleteCodigoRptaSwitchFail implements Action {
  readonly type = actions.DELETE_FAIL;
  constructor(public payload: any) {}
}

export class GetAllCodigoRptaSwitch implements Action {
  readonly type = actions.GET_ALL;
  constructor(public payload = null) {}
}
export class GetAllCodigoRptaSwitchSuccess implements Action {
  readonly type = actions.GET_ALL_SUCCESS;
  constructor(public payload: CodigoRptaSwitch[]) {}
}
export class GetAllCodigoRptaSwitchFail implements Action {
  readonly type = actions.GET_ALL_FAIL;
  constructor(public payload: any) {}
}

export class DownloadCodigoRptaSwitch implements Action {
  readonly type = actions.DOWNLOAD;
  constructor(public payload: any = null) { }
}
export class DownloadCodigoRptaSwitchSuccess implements Action {
  readonly type = actions.DOWNLOAD_SUCCESS;
  constructor(public payload: any) { }
}
export class DownloadCodigoRptaSwitchFail implements Action {
  readonly type = actions.DOWNLOAD_FAIL;
  constructor(public payload: any) { }
}

export class ResetCodigoRptaSwitch implements Action {
  readonly type = actions.RESET;
  constructor(public payload: any = null) {}
}

export type CodigoRptaSwitchActions
  = AddCodigoRptaSwitch
  | AddCodigoRptaSwitchSuccess
  | AddCodigoRptaSwitchFail
  | UpdateCodigoRptaSwitch
  | UpdateCodigoRptaSwitchSuccess
  | UpdateCodigoRptaSwitchFail
  | DeleteCodigoRptaSwitch
  | DeleteCodigoRptaSwitchSuccess
  | DeleteCodigoRptaSwitchFail
  | GetAllCodigoRptaSwitch
  | GetAllCodigoRptaSwitchSuccess
  | GetAllCodigoRptaSwitchFail
  | DownloadCodigoRptaSwitch
  | DownloadCodigoRptaSwitchSuccess
  | DownloadCodigoRptaSwitchFail
  | ResetCodigoRptaSwitch;
