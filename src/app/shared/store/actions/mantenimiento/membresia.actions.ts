import { Action } from '@ngrx/store';
import { Membresia } from '../../../../mantenimiento/models';
import { getCommonCrudActions } from '../common-actions';

export const actions = {
  ...getCommonCrudActions('Membresía')
}

export class AddMembresia implements Action {
  readonly type = actions.ADD;
  constructor(public payload: any) {}
}
export class AddMembresiaSuccess implements Action {
  readonly type = actions.ADD_SUCCESS;
  constructor(public payload: any) {}
}
export class AddMembresiaFail implements Action {
  readonly type = actions.ADD_FAIL;
  constructor(public payload: any) {}
}

export class UpdateMembresia implements Action {
  readonly type = actions.UPDATE;
  constructor(public payload: any) {}
}
export class UpdateMembresiaSuccess implements Action {
  readonly type = actions.UPDATE_SUCCESS;
  constructor(public payload: any) {}
}
export class UpdateMembresiaFail implements Action {
  readonly type = actions.UPDATE_FAIL;
  constructor(public payload: any) {}
}

export class DeleteMembresia implements Action {
  readonly type = actions.DELETE;
  constructor(public payload: any) {}
}
export class DeleteMembresiaSuccess implements Action {
  readonly type = actions.DELETE_SUCCESS;
  constructor(public payload: any) {}
}
export class DeleteMembresiaFail implements Action {
  readonly type = actions.DELETE_FAIL;
  constructor(public payload: any) {}
}

export class GetAllMembresia implements Action {
  readonly type = actions.GET_ALL;
  constructor(public payload = null) {}
}
export class GetAllMembresiaSuccess implements Action {
  readonly type = actions.GET_ALL_SUCCESS;
  constructor(public payload: Membresia[]) {}
}
export class GetAllMembresiaFail implements Action {
  readonly type = actions.GET_ALL_FAIL;
  constructor(public payload: any) {}
}

export class DownloadMembresia implements Action {
  readonly type = actions.DOWNLOAD;
  constructor(public payload: any = null) { }
}
export class DownloadMembresiaSuccess implements Action {
  readonly type = actions.DOWNLOAD_SUCCESS;
  constructor(public payload: any) { }
}
export class DownloadMembresiaFail implements Action {
  readonly type = actions.DOWNLOAD_FAIL;
  constructor(public payload: any) { }
}
export class ResetMembresia implements Action {
  readonly type = actions.RESET;
  constructor(public payload: any = null) {};
}

export type MembresiaActions
  = AddMembresia
  | AddMembresiaSuccess
  | AddMembresiaFail
  | UpdateMembresia
  | UpdateMembresiaSuccess
  | UpdateMembresiaFail
  | DeleteMembresia
  | DeleteMembresiaSuccess
  | DeleteMembresiaFail
  | GetAllMembresia
  | GetAllMembresiaSuccess
  | GetAllMembresiaFail
  | DownloadMembresia
  | DownloadMembresiaSuccess
  | DownloadMembresiaFail
  | ResetMembresia;
