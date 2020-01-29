import { Action } from '@ngrx/store';
import {TarifarioAdquirente} from '../../../../tarifario/models';
import { getCommonCrudActions } from '../common-actions';

export const actions = {
  ...getCommonCrudActions('TarifarioAdquirente')
}

export class AddTarifarioAdquirente implements Action {
  readonly type = actions.ADD;
  constructor(public payload: any) {}
}
export class AddTarifarioAdquirenteSuccess implements Action {
  readonly type = actions.ADD_SUCCESS;
  constructor(public payload: any) {}
}
export class AddTarifarioAdquirenteFail implements Action {
  readonly type = actions.ADD_FAIL;
  constructor(public payload: any) {}
}

export class UpdateTarifarioAdquirente implements Action {
  readonly type = actions.UPDATE;
  constructor(public payload: any) {}
}
export class UpdateTarifarioAdquirenteSuccess implements Action {
  readonly type = actions.UPDATE_SUCCESS;
  constructor(public payload: any) {}
}
export class UpdateTarifarioAdquirenteFail implements Action {
  readonly type = actions.UPDATE_FAIL;
  constructor(public payload: any) {}
}

export class DeleteTarifarioAdquirente implements Action {
  readonly type = actions.DELETE;
  constructor(public payload: any) {}
}
export class DeleteTarifarioAdquirenteSuccess implements Action {
  readonly type = actions.DELETE_SUCCESS;
  constructor(public payload: any) {}
}
export class DeleteTarifarioAdquirenteFail implements Action {
  readonly type = actions.DELETE_FAIL;
  constructor(public payload: any) {}
}

export class GetAllTarifarioAdquirente implements Action {
  readonly type = actions.GET_ALL;
  constructor(public payload = null) {}
}
export class GetAllTarifarioAdquirenteSuccess implements Action {
  readonly type = actions.GET_ALL_SUCCESS;
  constructor(public payload: TarifarioAdquirente[]) {}
}
export class GetAllTarifarioAdquirenteFail implements Action {
  readonly type = actions.GET_ALL_FAIL;
  constructor(public payload: any) {}
}
export class DownloadTarifarioAdquirente implements Action {
  readonly type = actions.DOWNLOAD;
  constructor(public payload: any = null) { }
}
export class DownloadTarifarioAdquirenteSuccess implements Action {
  readonly type = actions.DOWNLOAD_SUCCESS;
  constructor(public payload: any) { }
}
export class DownloadTarifarioAdquirenteFail implements Action {
  readonly type = actions.DOWNLOAD_FAIL;
  constructor(public payload: any) { }
}

export class ResetTarifarioAdquirente implements Action {
  readonly type = actions.RESET;
  constructor(public payload: any = null) {};
}

export type TarifarioAdquirenteActions
  = AddTarifarioAdquirente
  | AddTarifarioAdquirenteSuccess
  | AddTarifarioAdquirenteFail
  | UpdateTarifarioAdquirente
  | UpdateTarifarioAdquirenteSuccess
  | UpdateTarifarioAdquirenteFail
  | DeleteTarifarioAdquirente
  | DeleteTarifarioAdquirenteSuccess
  | DeleteTarifarioAdquirenteFail
  | GetAllTarifarioAdquirente
  | GetAllTarifarioAdquirenteSuccess
  | GetAllTarifarioAdquirenteFail
  | DownloadTarifarioAdquirente
  | DownloadTarifarioAdquirenteSuccess
  | DownloadTarifarioAdquirenteFail
  | ResetTarifarioAdquirente;
