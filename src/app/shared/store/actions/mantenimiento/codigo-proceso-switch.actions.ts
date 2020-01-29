import { Action } from '@ngrx/store';
import { CodigoProcesoSwitch } from '../../../../mantenimiento/models';
import { getCommonCrudActions } from '../common-actions';

export const actions = {
  ...getCommonCrudActions('CodigoProcesoSwitch')
}

export class AddCodigoProcesoSwitch implements Action {
  readonly type = actions.ADD;
  constructor(public payload: any) {}
}
export class AddCodigoProcesoSwitchSuccess implements Action {
  readonly type = actions.ADD_SUCCESS;
  constructor(public payload: any) {}
}
export class AddCodigoProcesoSwitchFail implements Action {
  readonly type = actions.ADD_FAIL;
  constructor(public payload: any) {}
}

export class UpdateCodigoProcesoSwitch implements Action {
  readonly type = actions.UPDATE;
  constructor(public payload: any) {}
}
export class UpdateCodigoProcesoSwitchSuccess implements Action {
  readonly type = actions.UPDATE_SUCCESS;
  constructor(public payload: any) {}
}
export class UpdateCodigoProcesoSwitchFail implements Action {
  readonly type = actions.UPDATE_FAIL;
  constructor(public payload: any) {}
}

export class DeleteCodigoProcesoSwitch implements Action {
  readonly type = actions.DELETE;
  constructor(public payload: any) {}
}
export class DeleteCodigoProcesoSwitchSuccess implements Action {
  readonly type = actions.DELETE_SUCCESS;
  constructor(public payload: any) {}
}
export class DeleteCodigoProcesoSwitchFail implements Action {
  readonly type = actions.DELETE_FAIL;
  constructor(public payload: any) {}
}

export class GetAllCodigoProcesoSwitch implements Action {
  readonly type = actions.GET_ALL;
  constructor(public payload = null) {}
}
export class GetAllCodigoProcesoSwitchSuccess implements Action {
  readonly type = actions.GET_ALL_SUCCESS;
  constructor(public payload: CodigoProcesoSwitch[]) {}
}
export class GetAllCodigoProcesoSwitchFail implements Action {
  readonly type = actions.GET_ALL_FAIL;
  constructor(public payload: any) {}
}

export class DownloadCodigoProcesoSwitch implements Action {
  readonly type = actions.DOWNLOAD;
  constructor(public payload: any = null) { }
}
export class DownloadCodigoProcesoSwitchSuccess implements Action {
  readonly type = actions.DOWNLOAD_SUCCESS;
  constructor(public payload: any) { }
}
export class DownloadCodigoProcesoSwitchFail implements Action {
  readonly type = actions.DOWNLOAD_FAIL;
  constructor(public payload: any) { }
}
export class ResetCodigoProcesoSwitch implements Action {
  readonly type = actions.RESET;
  constructor(public payload: any = null) {};
}

export type CodigoProcesoSwitchActions
  = AddCodigoProcesoSwitch
  | AddCodigoProcesoSwitchSuccess
  | AddCodigoProcesoSwitchFail
  | UpdateCodigoProcesoSwitch
  | UpdateCodigoProcesoSwitchSuccess
  | UpdateCodigoProcesoSwitchFail
  | DeleteCodigoProcesoSwitch
  | DeleteCodigoProcesoSwitchSuccess
  | DeleteCodigoProcesoSwitchFail
  | GetAllCodigoProcesoSwitch
  | GetAllCodigoProcesoSwitchSuccess
  | GetAllCodigoProcesoSwitchFail
  | DownloadCodigoProcesoSwitch
  | DownloadCodigoProcesoSwitchSuccess
  | DownloadCodigoProcesoSwitchFail
  | ResetCodigoProcesoSwitch;
