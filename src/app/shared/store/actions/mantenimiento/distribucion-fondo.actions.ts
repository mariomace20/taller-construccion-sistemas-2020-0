import { Action } from '@ngrx/store';
import { DistribucionFondo } from '../../../../mantenimiento/models';
import { getCommonCrudActions } from '../common-actions';

export const actions = {
  ...getCommonCrudActions('DistribucionFondo')
}

export class AddDistribucionFondo implements Action {
  readonly type = actions.ADD;
  constructor(public payload: DistribucionFondo) {}
}
export class AddDistribucionFondoSuccess implements Action {
  readonly type = actions.ADD_SUCCESS;
  constructor(public payload: any) {}
}
export class AddDistribucionFondoFail implements Action {
  readonly type = actions.ADD_FAIL;
  constructor(public payload: any) {}
}

export class UpdateDistribucionFondo implements Action {
  readonly type = actions.UPDATE;
  constructor(public payload: DistribucionFondo) {}
}
export class UpdateDistribucionFondoSuccess implements Action {
  readonly type = actions.UPDATE_SUCCESS;
  constructor(public payload: any) {}
}
export class UpdateDistribucionFondoFail implements Action {
  readonly type = actions.UPDATE_FAIL;
  constructor(public payload: any) {}
}

export class DeleteDistribucionFondo implements Action {
  readonly type = actions.DELETE;
  constructor(public payload: any) {}
}
export class DeleteDistribucionFondoSuccess implements Action {
  readonly type = actions.DELETE_SUCCESS;
  constructor(public payload: any) {}
}
export class DeleteDistribucionFondoFail implements Action {
  readonly type = actions.DELETE_FAIL;
  constructor(public payload: any) {}
}

export class GetAllDistribucionFondo implements Action {
  readonly type = actions.GET_ALL;
  constructor(public payload = null) {}
}
export class GetAllDistribucionFondoSuccess implements Action {
  readonly type = actions.GET_ALL_SUCCESS;
  constructor(public payload: DistribucionFondo[]) {}
}
export class GetAllDistribucionFondoFail implements Action {
  readonly type = actions.GET_ALL_FAIL;
  constructor(public payload: any) {}
}

export class DownloadDistribucionFondo implements Action {
  readonly type = actions.DOWNLOAD;
  constructor(public payload: any = null) { }
}
export class DownloadDistribucionFondoSuccess implements Action {
  readonly type = actions.DOWNLOAD_SUCCESS;
  constructor(public payload: any) { }
}
export class DownloadDistribucionFondoFail implements Action {
  readonly type = actions.DOWNLOAD_FAIL;
  constructor(public payload: any) { }
}

export type DistribucionFondoActions
  = AddDistribucionFondo
  | AddDistribucionFondoSuccess
  | AddDistribucionFondoFail
  | UpdateDistribucionFondo
  | UpdateDistribucionFondoSuccess
  | UpdateDistribucionFondoFail
  | DeleteDistribucionFondo
  | DeleteDistribucionFondoSuccess
  | DeleteDistribucionFondoFail
  | GetAllDistribucionFondo
  | GetAllDistribucionFondoSuccess
  | GetAllDistribucionFondoFail
  | DownloadDistribucionFondo
  | DownloadDistribucionFondoSuccess
  | DownloadDistribucionFondoFail;
