import { Action } from '@ngrx/store';
import { IndicadorCorreoTelefono } from '../../../../mantenimiento/models';
import { getCommonCrudActions } from '../common-actions';

export const actions = {
  ...getCommonCrudActions('IndicadorCorreoTelefono'),
  GET_X_MEMBRESIA: `[TipoTerminalPos] Obtener todos por membresía`,
  GET_X_MEMBRESIA_SUCCESS: `[TipoTerminalPos] Obtener todos por membresía correcto`,
  GET_X_MEMBRESIA_FAIL: `[TipoTerminalPos] Error al obtener todos por membresía`,
};

export class AddIndicadorCorreoTelefono implements Action {
  readonly type = actions.ADD;
  constructor(public payload: any) {}
}
export class AddIndicadorCorreoTelefonoSuccess implements Action {
  readonly type = actions.ADD_SUCCESS;
  constructor(public payload: any) {}
}
export class AddIndicadorCorreoTelefonoFail implements Action {
  readonly type = actions.ADD_FAIL;
  constructor(public payload: any) {}
}

export class UpdateIndicadorCorreoTelefono implements Action {
  readonly type = actions.UPDATE;
  constructor(public payload: any) {}
}
export class UpdateIndicadorCorreoTelefonoSuccess implements Action {
  readonly type = actions.UPDATE_SUCCESS;
  constructor(public payload: any) {}
}
export class UpdateIndicadorCorreoTelefonoFail implements Action {
  readonly type = actions.UPDATE_FAIL;
  constructor(public payload: any) {}
}

export class DeleteIndicadorCorreoTelefono implements Action {
  readonly type = actions.DELETE;
  constructor(public payload: any) {}
}
export class DeleteIndicadorCorreoTelefonoSuccess implements Action {
  readonly type = actions.DELETE_SUCCESS;
  constructor(public payload: any) {}
}
export class DeleteIndicadorCorreoTelefonoFail implements Action {
  readonly type = actions.DELETE_FAIL;
  constructor(public payload: any) {}
}

export class GetAllIndicadorCorreoTelefono implements Action {
  readonly type = actions.GET_ALL;
  constructor(public payload = null) {}
}
export class GetAllIndicadorCorreoTelefonoSuccess implements Action {
  readonly type = actions.GET_ALL_SUCCESS;
  constructor(public payload: IndicadorCorreoTelefono[]) {}
}
export class GetAllIndicadorCorreoTelefonoFail implements Action {
  readonly type = actions.GET_ALL_FAIL;
  constructor(public payload: any) {}
}
export class GetIndicadorCorreoTelefonoXMembresia implements Action {
  readonly type = actions.GET_X_MEMBRESIA;
  constructor(public payload = null) {}
}
export class GetIndicadorCorreoTelefonoXMembresiaSuccess implements Action {
  readonly type = actions.GET_X_MEMBRESIA_SUCCESS;
  constructor(public payload: IndicadorCorreoTelefono[]) {}
}
export class GetIndicadorCorreoTelefonoXMembresiaFail implements Action {
  readonly type = actions.GET_X_MEMBRESIA_FAIL;
  constructor(public payload: any) {}
}

export class DownloadIndicadorCorreoTelefono implements Action {
  readonly type = actions.DOWNLOAD;
  constructor(public payload: any = null){}
}
export class DownloadIndicadorCorreoTelefonoSuccess implements Action {
  readonly type = actions.DOWNLOAD_SUCCESS;
  constructor(public payload: any = null){}
}
export class DownloadIndicadorCorreoTelefonoFail implements Action {
  readonly type = actions.DOWNLOAD_FAIL;
  constructor(public payload: any = null){}
}

export class ResetIndicadorCorreoTelefono implements Action {
  readonly  type = actions.RESET;
  constructor(public payload: any = null) {};
}

export type IndicadorCorreoTelefonoActions
  = AddIndicadorCorreoTelefono
  | AddIndicadorCorreoTelefonoSuccess
  | AddIndicadorCorreoTelefonoFail
  | UpdateIndicadorCorreoTelefono
  | UpdateIndicadorCorreoTelefonoSuccess
  | UpdateIndicadorCorreoTelefonoFail
  | DeleteIndicadorCorreoTelefono
  | DeleteIndicadorCorreoTelefonoSuccess
  | DeleteIndicadorCorreoTelefonoFail
  | GetAllIndicadorCorreoTelefono
  | GetAllIndicadorCorreoTelefonoSuccess
  | GetAllIndicadorCorreoTelefonoFail
  | DownloadIndicadorCorreoTelefono
  | DownloadIndicadorCorreoTelefonoSuccess
  | DownloadIndicadorCorreoTelefonoFail
  | ResetIndicadorCorreoTelefono;
