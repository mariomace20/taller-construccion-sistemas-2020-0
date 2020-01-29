import { Action } from '@ngrx/store';
import {TarifarioSurcharge} from '../../../../tarifario/models';
import { getCommonCrudActions } from '../common-actions';

export const actions = {
  ...getCommonCrudActions('TarifarioSurcharge')
}
export class AddTarifarioSurcharge implements Action {
  readonly type = actions.ADD;
  constructor(public payload: any) {}
}
export class AddTarifarioSurchargeSuccess implements Action {
  readonly type = actions.ADD_SUCCESS;
  constructor(public payload: any) {}
}
export class AddTarifarioSurchargeFail implements Action {
  readonly type = actions.ADD_FAIL;
  constructor(public payload: any) {}
}

export class UpdateTarifarioSurcharge implements Action {
  readonly type = actions.UPDATE;
  constructor(public payload: any) {}
}
export class UpdateTarifarioSurchargeSuccess implements Action {
  readonly type = actions.UPDATE_SUCCESS;
  constructor(public payload: any) {}
}
export class UpdateTarifarioSurchargeFail implements Action {
  readonly type = actions.UPDATE_FAIL;
  constructor(public payload: any) {}
}

export class DeleteTarifarioSurcharge implements Action {
  readonly type = actions.DELETE;
  constructor(public payload: any) {}
}
export class DeleteTarifarioSurchargeSuccess implements Action {
  readonly type = actions.DELETE_SUCCESS;
  constructor(public payload: any) {}
}
export class DeleteTarifarioSurchargeFail implements Action {
  readonly type = actions.DELETE_FAIL;
  constructor(public payload: any) {}
}

export class GetAllTarifarioSurcharge implements Action {
  readonly type = actions.GET_ALL;
  constructor(public payload = null) {}
}
export class GetAllTarifarioSurchargeSuccess implements Action {
  readonly type = actions.GET_ALL_SUCCESS;
  constructor(public payload: TarifarioSurcharge[]) {}
}
export class GetAllTarifarioSurchargeFail implements Action {
  readonly type = actions.GET_ALL_FAIL;
  constructor(public payload: any) {}
}
export class DownloadTarifarioSurcharge implements Action {
  readonly type = actions.DOWNLOAD;
  constructor(public payload: any = null) { }
}
export class DownloadTarifarioSurchargeSuccess implements Action {
  readonly type = actions.DOWNLOAD_SUCCESS;
  constructor(public payload: any) { }
}
export class DownloadTarifarioSurchargeFail implements Action {
  readonly type = actions.DOWNLOAD_FAIL;
  constructor(public payload: any) { }
}

export class ResetTarifarioSurcharge implements Action {
  readonly type = actions.RESET;
  constructor(public payload: any = null) { }
}

export type TarifarioSurchargeActions
  = AddTarifarioSurcharge
  | AddTarifarioSurchargeSuccess
  | AddTarifarioSurchargeFail
  | UpdateTarifarioSurcharge
  | UpdateTarifarioSurchargeSuccess
  | UpdateTarifarioSurchargeFail
  | DeleteTarifarioSurcharge
  | DeleteTarifarioSurchargeSuccess
  | DeleteTarifarioSurchargeFail
  | GetAllTarifarioSurcharge
  | GetAllTarifarioSurchargeSuccess
  | GetAllTarifarioSurchargeFail
  | DownloadTarifarioSurcharge
  | DownloadTarifarioSurchargeSuccess
  | DownloadTarifarioSurchargeFail
  | ResetTarifarioSurcharge;
