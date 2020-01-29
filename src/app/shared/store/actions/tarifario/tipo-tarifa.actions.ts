import { Action } from '@ngrx/store';
import {TipoTarifa} from '../../../../tarifario/models';
import { getCommonCrudActions } from '../common-actions';

export const actions = {
  ...getCommonCrudActions('TipoTarifa'),
  RESET: '[TipoTarifa] Reset',
}
export class ResetTipoTarifa implements Action {
  readonly type = actions.RESET;
  constructor(public payload: any = null) {}
}
export class AddTipoTarifa implements Action {
  readonly type = actions.ADD;
  constructor(public payload: any) {}
}
export class AddTipoTarifaSuccess implements Action {
  readonly type = actions.ADD_SUCCESS;
  constructor(public payload: any) {}
}
export class AddTipoTarifaFail implements Action {
  readonly type = actions.ADD_FAIL;
  constructor(public payload: any) {}
}

export class UpdateTipoTarifa implements Action {
  readonly type = actions.UPDATE;
  constructor(public payload: any) {}
}
export class UpdateTipoTarifaSuccess implements Action {
  readonly type = actions.UPDATE_SUCCESS;
  constructor(public payload: any) {}
}
export class UpdateTipoTarifaFail implements Action {
  readonly type = actions.UPDATE_FAIL;
  constructor(public payload: any) {}
}

export class DeleteTipoTarifa implements Action {
  readonly type = actions.DELETE;
  constructor(public payload: any) {}
}
export class DeleteTipoTarifaSuccess implements Action {
  readonly type = actions.DELETE_SUCCESS;
  constructor(public payload: any) {}
}
export class DeleteTipoTarifaFail implements Action {
  readonly type = actions.DELETE_FAIL;
  constructor(public payload: any) {}
}

export class GetAllTipoTarifa implements Action {
  readonly type = actions.GET_ALL;
  constructor(public payload = null) {}
}
export class GetAllTipoTarifaSuccess implements Action {
  readonly type = actions.GET_ALL_SUCCESS;
  constructor(public payload: TipoTarifa[]) {}
}
export class GetAllTipoTarifaFail implements Action {
  readonly type = actions.GET_ALL_FAIL;
  constructor(public payload: any) {}
}
export class DownloadTipoTarifa implements Action {
  readonly type = actions.DOWNLOAD;
  constructor(public payload: any = null) { }
}
export class DownloadTipoTarifaSuccess implements Action {
  readonly type = actions.DOWNLOAD_SUCCESS;
  constructor(public payload: any) { }
}
export class DownloadTipoTarifaFail implements Action {
  readonly type = actions.DOWNLOAD_FAIL;
  constructor(public payload: any) { }
}


export type TipoTarifaActions
  = AddTipoTarifa
  | AddTipoTarifaSuccess
  | AddTipoTarifaFail
  | UpdateTipoTarifa
  | UpdateTipoTarifaSuccess
  | UpdateTipoTarifaFail
  | DeleteTipoTarifa
  | DeleteTipoTarifaSuccess
  | DeleteTipoTarifaFail
  | GetAllTipoTarifa
  | GetAllTipoTarifaSuccess
  | GetAllTipoTarifaFail
  | DownloadTipoTarifaSuccess
  | DownloadTipoTarifaFail
    DownloadTipoTarifa  ;
