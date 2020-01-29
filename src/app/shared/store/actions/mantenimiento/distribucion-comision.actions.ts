import { Action } from '@ngrx/store';
import { DistribucionComision } from '../../../../mantenimiento/models';
import { getCommonCrudActions } from '../common-actions';

export const actions = {
  ...getCommonCrudActions('DistribucionComision')
}

export class AddDistribucionComision implements Action {
  readonly type = actions.ADD;
  constructor(public payload: DistribucionComision) {}
}
export class AddDistribucionComisionSuccess implements Action {
  readonly type = actions.ADD_SUCCESS;
  constructor(public payload: any) {}
}
export class AddDistribucionComisionFail implements Action {
  readonly type = actions.ADD_FAIL;
  constructor(public payload: any) {}
}

export class UpdateDistribucionComision implements Action {
  readonly type = actions.UPDATE;
  constructor(public payload: DistribucionComision) {}
}
export class UpdateDistribucionComisionSuccess implements Action {
  readonly type = actions.UPDATE_SUCCESS;
  constructor(public payload: any) {}
}
export class UpdateDistribucionComisionFail implements Action {
  readonly type = actions.UPDATE_FAIL;
  constructor(public payload: any) {}
}

export class DeleteDistribucionComision implements Action {
  readonly type = actions.DELETE;
  constructor(public payload: any) {}
}
export class DeleteDistribucionComisionSuccess implements Action {
  readonly type = actions.DELETE_SUCCESS;
  constructor(public payload: any) {}
}
export class DeleteDistribucionComisionFail implements Action {
  readonly type = actions.DELETE_FAIL;
  constructor(public payload: any) {}
}

export class GetAllDistribucionComision implements Action {
  readonly type = actions.GET_ALL;
  constructor(public payload = null) {}
}
export class GetAllDistribucionComisionSuccess implements Action {
  readonly type = actions.GET_ALL_SUCCESS;
  constructor(public payload: DistribucionComision[]) {}
}
export class GetAllDistribucionComisionFail implements Action {
  readonly type = actions.GET_ALL_FAIL;
  constructor(public payload: any) {}
}

export class DownloadDistribucionComision implements Action {
  readonly type = actions.DOWNLOAD;
  constructor(public payload: any = null) { }
}
export class DownloadDistribucionComisionSuccess implements Action {
  readonly type = actions.DOWNLOAD_SUCCESS;
  constructor(public payload: any) { }
}
export class DownloadDistribucionComisionFail implements Action {
  readonly type = actions.DOWNLOAD_FAIL;
  constructor(public payload: any) { }
}

export type DistribucionComisionActions
  = AddDistribucionComision
  | AddDistribucionComisionSuccess
  | AddDistribucionComisionFail
  | UpdateDistribucionComision
  | UpdateDistribucionComisionSuccess
  | UpdateDistribucionComisionFail
  | DeleteDistribucionComision
  | DeleteDistribucionComisionSuccess
  | DeleteDistribucionComisionFail
  | GetAllDistribucionComision
  | GetAllDistribucionComisionSuccess
  | GetAllDistribucionComisionFail
  | DownloadDistribucionComision
  | DownloadDistribucionComisionSuccess
  | DownloadDistribucionComisionFail;
