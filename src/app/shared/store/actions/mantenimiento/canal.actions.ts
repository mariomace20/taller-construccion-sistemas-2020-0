import { Action } from '@ngrx/store';
import { Canal } from '../../../../mantenimiento/models';
import { getCommonCrudActions } from '../common-actions';

export const actions = {
  ...getCommonCrudActions('Canal')
}

export class AddCanal implements Action {
  readonly type = actions.ADD;
  constructor(public payload: any) {}
}
export class AddCanalSuccess implements Action {
  readonly type = actions.ADD_SUCCESS;
  constructor(public payload: any) {}
}
export class AddCanalFail implements Action {
  readonly type = actions.ADD_FAIL;
  constructor(public payload: any) {}
}

export class UpdateCanal implements Action {
  readonly type = actions.UPDATE;
  constructor(public payload: any) {}
}
export class UpdateCanalSuccess implements Action {
  readonly type = actions.UPDATE_SUCCESS;
  constructor(public payload: any) {}
}
export class UpdateCanalFail implements Action {
  readonly type = actions.UPDATE_FAIL;
  constructor(public payload: any) {}
}

export class DeleteCanal implements Action {
  readonly type = actions.DELETE;
  constructor(public payload: any) {}
}
export class DeleteCanalSuccess implements Action {
  readonly type = actions.DELETE_SUCCESS;
  constructor(public payload: any) {}
}
export class DeleteCanalFail implements Action {
  readonly type = actions.DELETE_FAIL;
  constructor(public payload: any) {}
}

export class GetAllCanal implements Action {
  readonly type = actions.GET_ALL;
  constructor(public payload = null) {}
}
export class GetAllCanalSuccess implements Action {
  readonly type = actions.GET_ALL_SUCCESS;
  constructor(public payload: Canal[]) {}
}
export class GetAllCanalFail implements Action {
  readonly type = actions.GET_ALL_FAIL;
  constructor(public payload: any) {}
}

export class DownloadCanal implements Action {
  readonly type = actions.DOWNLOAD;
  constructor(public payload: any = null) { }
}
export class DownloadCanalSuccess implements Action {
  readonly type = actions.DOWNLOAD_SUCCESS;
  constructor(public payload: any) { }
}
export class DownloadCanalFail implements Action {
  readonly type = actions.DOWNLOAD_FAIL;
  constructor(public payload: any) { }
}

export class ResetCanal implements Action {
  readonly type = actions.RESET;
  constructor(public payload: any = null) {};
}

export type CanalActions
  = AddCanal
  | AddCanalSuccess
  | AddCanalFail
  | UpdateCanal
  | UpdateCanalSuccess
  | UpdateCanalFail
  | DeleteCanal
  | DeleteCanalSuccess
  | DeleteCanalFail
  | GetAllCanal
  | GetAllCanalSuccess
  | GetAllCanalFail
  | DownloadCanal
  | DownloadCanalSuccess
  | DownloadCanalFail
  | ResetCanal;
