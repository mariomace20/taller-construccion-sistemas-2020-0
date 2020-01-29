import { Action } from '@ngrx/store';
import { IndLimitePiso } from '../../../../mantenimiento/models';
import { getCommonCrudActions } from '../common-actions';

export const actions = {
  ...getCommonCrudActions('IndLimitePiso')
}

export class AddIndLimitePiso implements Action {
  readonly type = actions.ADD;
  constructor(public payload: any) {}
}
export class AddIndLimitePisoSuccess implements Action {
  readonly type = actions.ADD_SUCCESS;
  constructor(public payload: any) {}
}
export class AddIndLimitePisoFail implements Action {
  readonly type = actions.ADD_FAIL;
  constructor(public payload: any) {}
}

export class UpdateIndLimitePiso implements Action {
  readonly type = actions.UPDATE;
  constructor(public payload: any) {}
}
export class UpdateIndLimitePisoSuccess implements Action {
  readonly type = actions.UPDATE_SUCCESS;
  constructor(public payload: any) {}
}
export class UpdateIndLimitePisoFail implements Action {
  readonly type = actions.UPDATE_FAIL;
  constructor(public payload: any) {}
}

export class DeleteIndLimitePiso implements Action {
  readonly type = actions.DELETE;
  constructor(public payload: any) {}
}
export class DeleteIndLimitePisoSuccess implements Action {
  readonly type = actions.DELETE_SUCCESS;
  constructor(public payload: any) {}
}
export class DeleteIndLimitePisoFail implements Action {
  readonly type = actions.DELETE_FAIL;
  constructor(public payload: any) {}
}

export class GetAllIndLimitePiso implements Action {
  readonly type = actions.GET_ALL;
  constructor(public payload = null) {}
}
export class GetAllIndLimitePisoSuccess implements Action {
  readonly type = actions.GET_ALL_SUCCESS;
  constructor(public payload: IndLimitePiso[]) {}
}
export class GetAllIndLimitePisoFail implements Action {
  readonly type = actions.GET_ALL_FAIL;
  constructor(public payload: any) {}
}

export class DownloadIndLimitePiso implements Action {
  readonly type = actions.DOWNLOAD;
  constructor(public payload: any = null) { }
}
export class DownloadIndLimitePisoSuccess implements Action {
  readonly type = actions.DOWNLOAD_SUCCESS;
  constructor(public payload: any) { }
}
export class DownloadIndLimitePisoFail implements Action {
  readonly type = actions.DOWNLOAD_FAIL;
  constructor(public payload: any) { }
}

export type IndLimitePisoActions
  = AddIndLimitePiso
  | AddIndLimitePisoSuccess
  | AddIndLimitePisoFail
  | UpdateIndLimitePiso
  | UpdateIndLimitePisoSuccess
  | UpdateIndLimitePisoFail
  | DeleteIndLimitePiso
  | DeleteIndLimitePisoSuccess
  | DeleteIndLimitePisoFail
  | GetAllIndLimitePiso
  | GetAllIndLimitePisoSuccess
  | GetAllIndLimitePisoFail
  | DownloadIndLimitePiso
  | DownloadIndLimitePisoSuccess
  | DownloadIndLimitePisoFail;
