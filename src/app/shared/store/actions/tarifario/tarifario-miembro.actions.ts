import { Action } from '@ngrx/store';
import { TarifarioMiembro } from '../../../../tarifario/models';
import { getCommonCrudActions } from '../common-actions';

export const actions = {
  ...getCommonCrudActions('TarifarioMiembro')
};

export class ResetTarifarioMiembro implements Action {
  readonly type = actions.RESET;
  constructor(public payload: any = null) {}
}

export class AddTarifarioMiembro implements Action {
  readonly type = actions.ADD;

  constructor(public payload: any) {}
}

export class AddTarifarioMiembroSuccess implements Action {
  readonly type = actions.ADD_SUCCESS;
  constructor(public payload: any) {}
}

export class AddTarifarioMiembroFail implements Action {
  readonly type = actions.ADD_FAIL;
  constructor(public payload: any) {}
}

export class UpdateTarifarioMiembro implements Action {
  readonly type = actions.UPDATE;
  constructor(public payload: any) {}
}
export class UpdateTarifarioMiembroSuccess implements Action {
  readonly type = actions.UPDATE_SUCCESS;
  constructor(public payload: any) {}
}
export class UpdateTarifarioMiembroFail implements Action {
  readonly type = actions.UPDATE_FAIL;
  constructor(public payload: any) {}
}

export class DeleteTarifarioMiembro implements Action {
  readonly type = actions.DELETE;
  constructor(public payload: any) {}
}
export class DeleteTarifarioMiembroSuccess implements Action {
  readonly type = actions.DELETE_SUCCESS;
  constructor(public payload: any) {}
}
export class DeleteTarifarioMiembroFail implements Action {
  readonly type = actions.DELETE_FAIL;
  constructor(public payload: any) {}
}

export class GetAllTarifarioMiembro implements Action {
  readonly type = actions.GET_ALL;
  constructor(public payload = null) {}
}
export class GetAllTarifarioMiembroSuccess implements Action {
  readonly type = actions.GET_ALL_SUCCESS;
  constructor(public payload: TarifarioMiembro[]) {}
}
export class GetAllTarifarioMiembroFail implements Action {
  readonly type = actions.GET_ALL_FAIL;
  constructor(public payload: any) {}
}

export class DownloadTarifarioMiembro implements Action {
  readonly type = actions.DOWNLOAD;
  constructor(public payload: any = null) { }
}
export class DownloadTarifarioMiembroSuccess implements Action {
  readonly type = actions.DOWNLOAD_SUCCESS;
  constructor(public payload: any) { }
}
export class DownloadTarifarioMiembroFail implements Action {
  readonly type = actions.DOWNLOAD_FAIL;
  constructor(public payload: any) { }
}

export type TarifarioMiembroActions
  = AddTarifarioMiembro
  | AddTarifarioMiembroSuccess
  | AddTarifarioMiembroFail
  | UpdateTarifarioMiembro
  | UpdateTarifarioMiembroSuccess
  | UpdateTarifarioMiembroFail
  | DeleteTarifarioMiembro
  | DeleteTarifarioMiembroSuccess
  | DeleteTarifarioMiembroFail
  | GetAllTarifarioMiembro
  | GetAllTarifarioMiembroSuccess
  | GetAllTarifarioMiembroFail
  | DownloadTarifarioMiembro
  | DownloadTarifarioMiembroSuccess
  | DownloadTarifarioMiembroFail
  | ResetTarifarioMiembro;
