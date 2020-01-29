import { Action } from '@ngrx/store';

import { getCommonCrudActions } from '../common-actions';
import { PerfilRep } from '../../../../reportes/admin/models/perfil-rep.model';

export const actions = {
  ...getCommonCrudActions('PerfilRep'),
  RESET: '[PerfilRep] Reset', 
}
export class ResetPerfilRep implements Action {
  readonly type = actions.RESET;
  constructor(public payload: any = null) {}
}
export class AddPerfilRep implements Action {
  readonly type = actions.ADD;
  constructor(public payload: any) {}
}
export class AddPerfilRepSuccess implements Action {
  readonly type = actions.ADD_SUCCESS;
  constructor(public payload: any) {}
}
export class AddPerfilRepFail implements Action {
  readonly type = actions.ADD_FAIL;
  constructor(public payload: any) {}
}

export class UpdatePerfilRep implements Action {
  readonly type = actions.UPDATE;
  constructor(public payload: any) {}
}
export class UpdatePerfilRepSuccess implements Action {
  readonly type = actions.UPDATE_SUCCESS;
  constructor(public payload: any) {}
}
export class UpdatePerfilRepFail implements Action {
  readonly type = actions.UPDATE_FAIL;
  constructor(public payload: any) {}
}

export class DeletePerfilRep implements Action {
  readonly type = actions.DELETE;
  constructor(public payload: any) {}
}
export class DeletePerfilRepSuccess implements Action {
  readonly type = actions.DELETE_SUCCESS;
  constructor(public payload: any) {}
}
export class DeletePerfilRepFail implements Action {
  readonly type = actions.DELETE_FAIL;
  constructor(public payload: any) {}
}

export class GetAllPerfilRep implements Action {
  readonly type = actions.GET_ALL;
  constructor(public payload = null) {}
}
export class GetAllPerfilRepSuccess implements Action {
  readonly type = actions.GET_ALL_SUCCESS;
  constructor(public payload: PerfilRep[]) {}
}
export class GetAllPerfilRepFail implements Action {
  readonly type = actions.GET_ALL_FAIL;
  constructor(public payload: any) {}
}

export class DownloadPerfilRep implements Action {
  readonly type = actions.DOWNLOAD;
  constructor(public payload: any = null) { }
}
export class DownloadPerfilRepSuccess implements Action {
  readonly type = actions.DOWNLOAD_SUCCESS;
  constructor(public payload: any) { }
}
export class DownloadPerfilRepFail implements Action {
  readonly type = actions.DOWNLOAD_FAIL;
  constructor(public payload: any) { }
}

export type PerfilRepActions
  = ResetPerfilRep
  | AddPerfilRep
  | AddPerfilRepSuccess
  | AddPerfilRepFail
  | UpdatePerfilRep
  | UpdatePerfilRepSuccess
  | UpdatePerfilRepFail
  | DeletePerfilRep
  | DeletePerfilRepSuccess
  | DeletePerfilRepFail
  | GetAllPerfilRep
  | GetAllPerfilRepSuccess
  | GetAllPerfilRepFail
  | DownloadPerfilRep
  | DownloadPerfilRepSuccess
  | DownloadPerfilRepFail;
