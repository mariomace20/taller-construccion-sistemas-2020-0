import { Action } from '@ngrx/store';
import { TipoTerminalPos } from '../../../../mantenimiento/models';
import { getCommonCrudActions } from '../common-actions';

export const actions = {
  ...getCommonCrudActions('TipoTerminalPos'),
  GET_X_MEMBRESIA: `[TipoTerminalPos] Obtener todos por membresía`,
  GET_X_MEMBRESIA_SUCCESS: `[TipoTerminalPos] Obtener todos por membresía correcto`,
  GET_X_MEMBRESIA_FAIL: `[TipoTerminalPos] Error al obtener todos por membresía`,
}

export class ResetTipoTerminalPos implements Action {
  readonly type = actions.RESET;
  constructor(public payload: any = null) {};
}

export class AddTipoTerminalPos implements Action {
  readonly type = actions.ADD;
  constructor(public payload: any) {}
}
export class AddTipoTerminalPosSuccess implements Action {
  readonly type = actions.ADD_SUCCESS;
  constructor(public payload: any) {}
}
export class AddTipoTerminalPosFail implements Action {
  readonly type = actions.ADD_FAIL;
  constructor(public payload: any) {}
}

export class UpdateTipoTerminalPos implements Action {
  readonly type = actions.UPDATE;
  constructor(public payload: any) {}
}
export class UpdateTipoTerminalPosSuccess implements Action {
  readonly type = actions.UPDATE_SUCCESS;
  constructor(public payload: any) {}
}
export class UpdateTipoTerminalPosFail implements Action {
  readonly type = actions.UPDATE_FAIL;
  constructor(public payload: any) {}
}

export class DeleteTipoTerminalPos implements Action {
  readonly type = actions.DELETE;
  constructor(public payload: any) {}
}
export class DeleteTipoTerminalPosSuccess implements Action {
  readonly type = actions.DELETE_SUCCESS;
  constructor(public payload: any) {}
}
export class DeleteTipoTerminalPosFail implements Action {
  readonly type = actions.DELETE_FAIL;
  constructor(public payload: any) {}
}

export class GetAllTipoTerminalPos implements Action {
  readonly type = actions.GET_ALL;
  constructor(public payload = null) {}
}
export class GetAllTipoTerminalPosSuccess implements Action {
  readonly type = actions.GET_ALL_SUCCESS;
  constructor(public payload: TipoTerminalPos[]) {}
}
export class GetAllTipoTerminalPosFail implements Action {
  readonly type = actions.GET_ALL_FAIL;
  constructor(public payload: any) {}
}

export class GetTipoTerminalPosXMembresia implements Action {
  readonly type = actions.GET_X_MEMBRESIA;
  constructor(public payload : any) {}
}
export class GetTipoTerminalPosXMembresiaSuccess implements Action {
  readonly type = actions.GET_X_MEMBRESIA_SUCCESS;
  constructor(public payload: TipoTerminalPos[]) {}
}
export class GetTipoTerminalPosXMembresiaFail implements Action {
  readonly type = actions.GET_X_MEMBRESIA_FAIL;
  constructor(public payload: any) {}
}

export class DownloadTipoTerminalPos implements Action {
  readonly type = actions.DOWNLOAD;
  constructor(public payload: any = null) { }
}
export class DownloadTipoTerminalPosSuccess implements Action {
  readonly type = actions.DOWNLOAD_SUCCESS;
  constructor(public payload: any) { }
}
export class DownloadTipoTerminalPosFail implements Action {
  readonly type = actions.DOWNLOAD_FAIL;
  constructor(public payload: any) { }
}


export type TipoTerminalPosActions
  = AddTipoTerminalPos
  | AddTipoTerminalPosSuccess
  | AddTipoTerminalPosFail
  | UpdateTipoTerminalPos
  | UpdateTipoTerminalPosSuccess
  | UpdateTipoTerminalPosFail
  | DeleteTipoTerminalPos
  | DeleteTipoTerminalPosSuccess
  | DeleteTipoTerminalPosFail
  | GetAllTipoTerminalPos
  | GetAllTipoTerminalPosSuccess
  | GetAllTipoTerminalPosFail
  | GetTipoTerminalPosXMembresia
  | GetTipoTerminalPosXMembresiaSuccess
  | GetTipoTerminalPosXMembresiaFail
  | DownloadTipoTerminalPos
  | DownloadTipoTerminalPosSuccess
  | DownloadTipoTerminalPosFail
  | ResetTipoTerminalPos;
