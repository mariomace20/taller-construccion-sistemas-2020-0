import { Action } from '@ngrx/store';
import { Region } from '../../../../mantenimiento/models';
import { getCommonCrudActions } from '../common-actions';

export const actions = {
  ...getCommonCrudActions('Region')
}

export class AddRegion implements Action {
  readonly type = actions.ADD;
  constructor(public payload: any) {}
}
export class AddRegionSuccess implements Action {
  readonly type = actions.ADD_SUCCESS;
  constructor(public payload: any) {}
}
export class AddRegionFail implements Action {
  readonly type = actions.ADD_FAIL;
  constructor(public payload: any) {}
}

export class UpdateRegion implements Action {
  readonly type = actions.UPDATE;
  constructor(public payload: any) {}
}
export class UpdateRegionSuccess implements Action {
  readonly type = actions.UPDATE_SUCCESS;
  constructor(public payload: any) {}
}
export class UpdateRegionFail implements Action {
  readonly type = actions.UPDATE_FAIL;
  constructor(public payload: any) {}
}

export class DeleteRegion implements Action {
  readonly type = actions.DELETE;
  constructor(public payload: any) {}
}
export class DeleteRegionSuccess implements Action {
  readonly type = actions.DELETE_SUCCESS;
  constructor(public payload: any) {}
}
export class DeleteRegionFail implements Action {
  readonly type = actions.DELETE_FAIL;
  constructor(public payload: any) {}
}

export class GetAllRegion implements Action {
  readonly type = actions.GET_ALL;
  constructor(public payload = null) {}
}
export class GetAllRegionSuccess implements Action {
  readonly type = actions.GET_ALL_SUCCESS;
  constructor(public payload: Region[]) {}
}
export class GetAllRegionFail implements Action {
  readonly type = actions.GET_ALL_FAIL;
  constructor(public payload: any) {}
}

export class DownloadRegion implements Action {
  readonly type = actions.DOWNLOAD;
  constructor(public payload: any = null) { }
}
export class DownloadRegionSuccess implements Action {
  readonly type = actions.DOWNLOAD_SUCCESS;
  constructor(public payload: any) { }
}
export class DownloadRegionFail implements Action {
  readonly type = actions.DOWNLOAD_FAIL;
  constructor(public payload: any) { }
}

export class ResetRegion implements Action {
  readonly type = actions.RESET;
  constructor(public payload = null) { }
}


export type RegionActions
  = AddRegion
  | AddRegionSuccess
  | AddRegionFail
  | UpdateRegion
  | UpdateRegionSuccess
  | UpdateRegionFail
  | DeleteRegion
  | DeleteRegionSuccess
  | DeleteRegionFail
  | GetAllRegion
  | GetAllRegionSuccess
  | GetAllRegionFail
  | DownloadRegion
  | DownloadRegionSuccess
  | DownloadRegionFail
  | ResetRegion;
