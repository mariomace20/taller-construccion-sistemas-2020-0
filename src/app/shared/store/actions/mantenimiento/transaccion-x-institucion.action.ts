import { Action } from '@ngrx/store';
import { TransaccionXinstitucion } from '../../../../mantenimiento/models';
import { getCommonCrudActions } from '../common-actions';

export const actions = {
  ...getCommonCrudActions('TransaccionXinstitucion'),
}

export class ResetTransaccionXInstitucion implements Action {
  readonly type = actions.RESET;
  constructor(public payload: any = null) {}
}
export class AddTransaccionXinstitucion implements Action {
  readonly type = actions.ADD;
  constructor(public payload: any) {}
}
export class AddTransaccionXinstitucionSuccess implements Action {
  readonly type = actions.ADD_SUCCESS;
  constructor(public payload: any) {}
}
export class AddTransaccionXinstitucionFail implements Action {
  readonly type = actions.ADD_FAIL;
  constructor(public payload: any) {}
}

export class UpdateTransaccionXinstitucion implements Action {
  readonly type = actions.UPDATE;
  constructor(public payload: any) {}
}
export class UpdateTransaccionXinstitucionSuccess implements Action {
  readonly type = actions.UPDATE_SUCCESS;
  constructor(public payload: any) {}
}
export class UpdateTransaccionXinstitucionFail implements Action {
  readonly type = actions.UPDATE_FAIL;
  constructor(public payload: any) {}
}

export class DeleteTransaccionXinstitucion implements Action {
  readonly type = actions.DELETE;
  constructor(public payload: any) {}
}
export class DeleteTransaccionXinstitucionSuccess implements Action {
  readonly type = actions.DELETE_SUCCESS;
  constructor(public payload: any) {}
}
export class DeleteTransaccionXinstitucionFail implements Action {
  readonly type = actions.DELETE_FAIL;
  constructor(public payload: any) {}
}

export class GetAllTransaccionXinstitucion implements Action {
  readonly type = actions.GET_ALL;
  constructor(public payload = null) {}
}
export class GetAllTransaccionXinstitucionSuccess implements Action {
  readonly type = actions.GET_ALL_SUCCESS;
  constructor(public payload: TransaccionXinstitucion[]) {}
}
export class GetAllTransaccionXinstitucionFail implements Action {
  readonly type = actions.GET_ALL_FAIL;
  constructor(public payload: any) {}
}

export class DownloadTransaccionXinstitucion implements Action {
  readonly type = actions.DOWNLOAD;
  constructor(public payload: any = null) { }
}
export class DownloadTransaccionXinstitucionSuccess implements Action {
  readonly type = actions.DOWNLOAD_SUCCESS;
  constructor(public payload: any) { }
}
export class DownloadTransaccionXinstitucionFail implements Action {
  readonly type = actions.DOWNLOAD_FAIL;
  constructor(public payload: any) { }
}

export type TransaccionXinstitucionActions
  = AddTransaccionXinstitucion
  | AddTransaccionXinstitucionSuccess
  | AddTransaccionXinstitucionFail
  | UpdateTransaccionXinstitucion
  | UpdateTransaccionXinstitucionSuccess
  | UpdateTransaccionXinstitucionFail
  | DeleteTransaccionXinstitucion
  | DeleteTransaccionXinstitucionSuccess
  | DeleteTransaccionXinstitucionFail
  | GetAllTransaccionXinstitucion
  | GetAllTransaccionXinstitucionSuccess
  | GetAllTransaccionXinstitucionFail
  | DownloadTransaccionXinstitucion
  | DownloadTransaccionXinstitucionSuccess
  | DownloadTransaccionXinstitucionFail;
