import { Action } from '@ngrx/store';
import {TarifarioEmisor} from '../../../../tarifario/models';
import { getCommonCrudActions } from '../common-actions';

export const actions = {
  ...getCommonCrudActions('TarifarioEmisor')
};

export class ResetTarifarioEmisor implements Action {
  readonly type = actions.RESET;
  constructor(public payload: any = null) {}
}

export class AddTarifarioEmisor implements Action {
  readonly type = actions.ADD;
  constructor(public payload: any) {}
}
export class AddTarifarioEmisorSuccess implements Action {
  readonly type = actions.ADD_SUCCESS;
  constructor(public payload: any) {}
}
export class AddTarifarioEmisorFail implements Action {
  readonly type = actions.ADD_FAIL;
  constructor(public payload: any) {}
}

export class UpdateTarifarioEmisor implements Action {
  readonly type = actions.UPDATE;
  constructor(public payload: any) {}
}
export class UpdateTarifarioEmisorSuccess implements Action {
  readonly type = actions.UPDATE_SUCCESS;
  constructor(public payload: any) {}
}
export class UpdateTarifarioEmisorFail implements Action {
  readonly type = actions.UPDATE_FAIL;
  constructor(public payload: any) {}
}

export class DeleteTarifarioEmisor implements Action {
  readonly type = actions.DELETE;
  constructor(public payload: any) {}
}
export class DeleteTarifarioEmisorSuccess implements Action {
  readonly type = actions.DELETE_SUCCESS;
  constructor(public payload: any) {}
}
export class DeleteTarifarioEmisorFail implements Action {
  readonly type = actions.DELETE_FAIL;
  constructor(public payload: any) {}
}

export class GetAllTarifarioEmisor implements Action {
  readonly type = actions.GET_ALL;
  constructor(public payload = null) {}
}
export class GetAllTarifarioEmisorSuccess implements Action {
  readonly type = actions.GET_ALL_SUCCESS;
  constructor(public payload: TarifarioEmisor[]) {}
}
export class GetAllTarifarioEmisorFail implements Action {
  readonly type = actions.GET_ALL_FAIL;
  constructor(public payload: any) {}
}
export class DownloadTarifarioEmisor implements Action {
  readonly type = actions.DOWNLOAD;
  constructor(public payload: any = null) { }
}
export class DownloadTarifarioEmisorSuccess implements Action {
  readonly type = actions.DOWNLOAD_SUCCESS;
  constructor(public payload: any) { }
}
export class DownloadTarifarioEmisorFail implements Action {
  readonly type = actions.DOWNLOAD_FAIL;
  constructor(public payload: any) { }
}

export type TarifarioEmisorActions
  = AddTarifarioEmisor
  | AddTarifarioEmisorSuccess
  | AddTarifarioEmisorFail
  | UpdateTarifarioEmisor
  | UpdateTarifarioEmisorSuccess
  | UpdateTarifarioEmisorFail
  | DeleteTarifarioEmisor
  | DeleteTarifarioEmisorSuccess
  | DeleteTarifarioEmisorFail
  | GetAllTarifarioEmisor
  | GetAllTarifarioEmisorSuccess
  | GetAllTarifarioEmisorFail
  | DownloadTarifarioEmisor
  | DownloadTarifarioEmisorSuccess
  | DownloadTarifarioEmisorFail
  | ResetTarifarioEmisor;
