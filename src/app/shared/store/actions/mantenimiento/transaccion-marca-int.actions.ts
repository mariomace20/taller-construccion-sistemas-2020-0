import { Action } from '@ngrx/store';
import { TransaccionMarcaInt } from '../../../../mantenimiento/models';
import { getCommonCrudActions } from '../common-actions';

export const actions = {
  ...getCommonCrudActions('TransaccionMarcaInt'),
  GET_BY_CLASE: '[TransaccionMarcaInt] Obtener códigos por clase',
  GET_BY_CLASE_SUCCESS: '[TransaccionMarcaInt] Obtener códigos por clase correcto.',
  GET_BY_CLASE_FAIL: '[TransaccionMarcaInt] Error al obtener códigos por clase',
  GET_X_MEMBRESIA: '[TransaccionMarcaInt] Obtener por membresia',
  GET_X_MEMBRESIA_SUCCESS: '[TransaccionMarcaInt] Obtener por membresia correcto',
  GET_X_MEMBRESIA_FAIL: '[TransaccionMarcaInt] Error al obtener Todos por membresia',
}

export class AddTransaccionMarcaInt implements Action {
  readonly type = actions.ADD;
  constructor(public payload: any) {}
}
export class AddTransaccionMarcaIntSuccess implements Action {
  readonly type = actions.ADD_SUCCESS;
  constructor(public payload: any) {}
}
export class AddTransaccionMarcaIntFail implements Action {
  readonly type = actions.ADD_FAIL;
  constructor(public payload: any) {}
}

export class UpdateTransaccionMarcaInt implements Action {
  readonly type = actions.UPDATE;
  constructor(public payload: any) {}
}
export class UpdateTransaccionMarcaIntSuccess implements Action {
  readonly type = actions.UPDATE_SUCCESS;
  constructor(public payload: any) {}
}
export class UpdateTransaccionMarcaIntFail implements Action {
  readonly type = actions.UPDATE_FAIL;
  constructor(public payload: any) {}
}

export class DeleteTransaccionMarcaInt implements Action {
  readonly type = actions.DELETE;
  constructor(public payload: any) {}
}
export class DeleteTransaccionMarcaIntSuccess implements Action {
  readonly type = actions.DELETE_SUCCESS;
  constructor(public payload: any) {}
}
export class DeleteTransaccionMarcaIntFail implements Action {
  readonly type = actions.DELETE_FAIL;
  constructor(public payload: any) {}
}

export class GetTransaccionMarcaIntVisaXMembresia implements Action {
  readonly type = actions.GET_X_MEMBRESIA;
  constructor(public payload : string) {}
}
export class GetTransaccionMarcaIntVisaXMembresiaSuccess implements Action {
  readonly type = actions.GET_X_MEMBRESIA_SUCCESS;
  constructor(public payload = null) {}
}
export class GetTransaccionMarcaIntVisaXMembresiaFail implements Action {
  readonly type = actions.GET_X_MEMBRESIA_FAIL;
  constructor(public payload = null) {}
}

export class GetAllTransaccionMarcaInt implements Action {
  readonly type = actions.GET_ALL;
  constructor(public payload = null) {}
}
export class GetAllTransaccionMarcaIntSuccess implements Action {
  readonly type = actions.GET_ALL_SUCCESS;
  constructor(public payload: TransaccionMarcaInt[]) {}
}
export class GetAllTransaccionMarcaIntFail implements Action {
  readonly type = actions.GET_ALL_FAIL;
  constructor(public payload: any) {}
}

export class ResetTransaccionMarcaInt implements Action {
  readonly type = actions.RESET;
  constructor(public payload: any = null){}
}

export class DownloadTransaccionMarcaInt implements Action {
  readonly type = actions.DOWNLOAD;
  constructor(public payload: any = null) { }
}
export class DownloadTransaccionMarcaIntSuccess implements Action {
  readonly type = actions.DOWNLOAD_SUCCESS;
  constructor(public payload: any) { }
}
export class DownloadTransaccionMarcaIntFail implements Action {
  readonly type = actions.DOWNLOAD_FAIL;
  constructor(public payload: any) { }
}

export type TransaccionMarcaIntActions
  = AddTransaccionMarcaInt
  | AddTransaccionMarcaIntSuccess
  | AddTransaccionMarcaIntFail
  | UpdateTransaccionMarcaInt
  | UpdateTransaccionMarcaIntSuccess
  | UpdateTransaccionMarcaIntFail
  | DeleteTransaccionMarcaInt
  | DeleteTransaccionMarcaIntSuccess
  | DeleteTransaccionMarcaIntFail
  | GetTransaccionMarcaIntVisaXMembresia
  | GetTransaccionMarcaIntVisaXMembresiaSuccess
  | GetTransaccionMarcaIntVisaXMembresiaFail
  | GetAllTransaccionMarcaInt
  | GetAllTransaccionMarcaIntSuccess
  | GetAllTransaccionMarcaIntFail
  | ResetTransaccionMarcaInt
  | DownloadTransaccionMarcaInt
  | DownloadTransaccionMarcaIntSuccess
  | DownloadTransaccionMarcaIntFail;
