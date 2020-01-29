import { Action } from '@ngrx/store';
import {EscenarioContable} from '../../../../tarifario/models';
import { getCommonCrudActions } from '../common-actions';

export const actions = {
  ...getCommonCrudActions('EscenarioContable')
}
export class AddEscenarioContable implements Action {
  readonly type = actions.ADD;
  constructor(public payload: any) {}
}
export class AddEscenarioContableSuccess implements Action {
  readonly type = actions.ADD_SUCCESS;
  constructor(public payload: any) {}
}
export class AddEscenarioContableFail implements Action {
  readonly type = actions.ADD_FAIL;
  constructor(public payload: any) {}
}

export class UpdateEscenarioContable implements Action {
  readonly type = actions.UPDATE;
  constructor(public payload: any) {}
}
export class UpdateEscenarioContableSuccess implements Action {
  readonly type = actions.UPDATE_SUCCESS;
  constructor(public payload: any) {}
}
export class UpdateEscenarioContableFail implements Action {
  readonly type = actions.UPDATE_FAIL;
  constructor(public payload: any) {}
}

export class DeleteEscenarioContable implements Action {
  readonly type = actions.DELETE;
  constructor(public payload: any) {}
}
export class DeleteEscenarioContableSuccess implements Action {
  readonly type = actions.DELETE_SUCCESS;
  constructor(public payload: any) {}
}
export class DeleteEscenarioContableFail implements Action {
  readonly type = actions.DELETE_FAIL;
  constructor(public payload: any) {}
}

export class GetAllEscenarioContable implements Action {
  readonly type = actions.GET_ALL;
  constructor(public payload = null) {}
}
export class GetAllEscenarioContableSuccess implements Action {
  readonly type = actions.GET_ALL_SUCCESS;
  constructor(public payload: EscenarioContable[]) {}
}
export class GetAllEscenarioContableFail implements Action {
  readonly type = actions.GET_ALL_FAIL;
  constructor(public payload: any) {}
}

export class DownloadEscenarioContable implements Action {
  readonly type = actions.DOWNLOAD;
  constructor(public payload: any = null) { }
}
export class DownloadEscenarioContableSuccess implements Action {
  readonly type = actions.DOWNLOAD_SUCCESS;
  constructor(public payload: any) { }
}
export class DownloadEscenarioContableFail implements Action {
  readonly type = actions.DOWNLOAD_FAIL;
  constructor(public payload: any) { }
}

export class ResetEscenarioContable implements Action {
  readonly type = actions.RESET;
  constructor(public payload: any = null) {};
}

export type EscenarioContableActions
  = AddEscenarioContable
  | AddEscenarioContableSuccess
  | AddEscenarioContableFail
  | UpdateEscenarioContable
  | UpdateEscenarioContableSuccess
  | UpdateEscenarioContableFail
  | DeleteEscenarioContable
  | DeleteEscenarioContableSuccess
  | DeleteEscenarioContableFail
  | GetAllEscenarioContable
  | GetAllEscenarioContableSuccess
  | GetAllEscenarioContableFail
  | DownloadEscenarioContable
  | DownloadEscenarioContableSuccess
  | DownloadEscenarioContableFail
  | ResetEscenarioContable;
