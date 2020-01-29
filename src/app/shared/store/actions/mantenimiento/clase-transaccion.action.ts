import { Action } from '@ngrx/store';
import { ClaseTransaccion } from '../../../../mantenimiento/models';
import { getCommonCrudActions } from '../common-actions';

export const actions = {
  ...getCommonCrudActions('ClaseTransaccion')
}

export class AddClaseTransaccion implements Action {
  readonly type = actions.ADD;
  constructor(public payload: any) {}
}
export class AddClaseTransaccionSuccess implements Action {
  readonly type = actions.ADD_SUCCESS;
  constructor(public payload: any) {}
}
export class AddClaseTransaccionFail implements Action {
  readonly type = actions.ADD_FAIL;
  constructor(public payload: any) {}
}

export class UpdateClaseTransaccion implements Action {
  readonly type = actions.UPDATE;
  constructor(public payload: any) {}
}
export class UpdateClaseTransaccionSuccess implements Action {
  readonly type = actions.UPDATE_SUCCESS;
  constructor(public payload: any) {}
}
export class UpdateClaseTransaccionFail implements Action {
  readonly type = actions.UPDATE_FAIL;
  constructor(public payload: any) {}
}

export class DeleteClaseTransaccion implements Action {
  readonly type = actions.DELETE;
  constructor(public payload: any) {}
}
export class DeleteClaseTransaccionSuccess implements Action {
  readonly type = actions.DELETE_SUCCESS;
  constructor(public payload: any) {}
}
export class DeleteClaseTransaccionFail implements Action {
  readonly type = actions.DELETE_FAIL;
  constructor(public payload: any) {}
}

export class GetAllClaseTransaccion implements Action {
  readonly type = actions.GET_ALL;
  constructor(public payload = null) {}
}
export class GetAllClaseTransaccionSuccess implements Action {
  readonly type = actions.GET_ALL_SUCCESS;
  constructor(public payload: ClaseTransaccion[]) {}
}
export class GetAllClaseTransaccionFail implements Action {
  readonly type = actions.GET_ALL_FAIL;
  constructor(public payload: any) {}
}

export class DownloadClaseTransaccion implements Action {
  readonly type = actions.DOWNLOAD;
  constructor(public payload: any = null) { }
}
export class DownloadClaseTransaccionSuccess implements Action {
  readonly type = actions.DOWNLOAD_SUCCESS;
  constructor(public payload: any) { }
}
export class DownloadClaseTransaccionFail implements Action {
  readonly type = actions.DOWNLOAD_FAIL;
  constructor(public payload: any) { }
}

export class ResetClaseTransaccion implements Action {
  readonly type = actions.RESET;
  constructor(public payload: any = null){}
}

export type ClaseTransaccionActions
  = AddClaseTransaccion
  | AddClaseTransaccionSuccess
  | AddClaseTransaccionFail
  | UpdateClaseTransaccion
  | UpdateClaseTransaccionSuccess
  | UpdateClaseTransaccionFail
  | DeleteClaseTransaccion
  | DeleteClaseTransaccionSuccess
  | DeleteClaseTransaccionFail
  | GetAllClaseTransaccion
  | GetAllClaseTransaccionSuccess
  | GetAllClaseTransaccionFail
  | DownloadClaseTransaccion
  | DownloadClaseTransaccionSuccess
  | DownloadClaseTransaccionFail
  | ResetClaseTransaccion;
