import { Action } from '@ngrx/store';
import { CodigoTransaccion } from '../../../../mantenimiento/models';
import { getCommonCrudActions } from '../common-actions';

export const actions = {
  ...getCommonCrudActions('CodigoTransaccion'), 
  GET_BY_CLASE: '[CodigoTransaccion] Obtener códigos por clase',
  GET_BY_CLASE_SUCCESS: '[CodigoTransaccion] Obtener códigos por clase correcto.',
  GET_BY_CLASE_FAIL: '[CodigoTransaccion] Error al obtener códigos por clase'
}

export class AddCodigoTransaccion implements Action {
  readonly type = actions.ADD;
  constructor(public payload: any) {}
}
export class AddCodigoTransaccionSuccess implements Action {
  readonly type = actions.ADD_SUCCESS;
  constructor(public payload: any) {}
}
export class AddCodigoTransaccionFail implements Action {
  readonly type = actions.ADD_FAIL;
  constructor(public payload: any) {}
}

export class UpdateCodigoTransaccion implements Action {
  readonly type = actions.UPDATE;
  constructor(public payload: any) {}
}
export class UpdateCodigoTransaccionSuccess implements Action {
  readonly type = actions.UPDATE_SUCCESS;
  constructor(public payload: any) {}
}
export class UpdateCodigoTransaccionFail implements Action {
  readonly type = actions.UPDATE_FAIL;
  constructor(public payload: any) {}
}

export class DeleteCodigoTransaccion implements Action {
  readonly type = actions.DELETE;
  constructor(public payload: any) {}
}
export class DeleteCodigoTransaccionSuccess implements Action {
  readonly type = actions.DELETE_SUCCESS;
  constructor(public payload: any) {}
}
export class DeleteCodigoTransaccionFail implements Action {
  readonly type = actions.DELETE_FAIL;
  constructor(public payload: any) {}
}

export class GetAllCodigoTransaccion implements Action {
  readonly type = actions.GET_ALL;
  constructor(public payload = null) {}
}
export class GetAllCodigoTransaccionSuccess implements Action {
  readonly type = actions.GET_ALL_SUCCESS;
  constructor(public payload: CodigoTransaccion[]) {}
}
export class GetAllCodigoTransaccionFail implements Action {
  readonly type = actions.GET_ALL_FAIL;
  constructor(public payload: any) {}
}
export class ResetCodigoTransaccion implements Action {
  readonly type = actions.RESET;
  constructor(public payload: any = null){}
}
export class GetByClaseTransaccion implements Action {
  readonly type = actions.GET_BY_CLASE;
  constructor(public payload: any = null){}
}
export class GetByClaseTransaccionSuccess implements Action {
  readonly type = actions.GET_BY_CLASE_SUCCESS;
  constructor(public payload: CodigoTransaccion[]){}
}
export class GetByClaseTransaccionFail implements Action {
  readonly type = actions.GET_BY_CLASE_FAIL;
  constructor(public payload: any){}
}

export class DownloadCodigoTransaccion implements Action {
  readonly type = actions.DOWNLOAD;
  constructor(public payload: any = null) { }
}
export class DownloadCodigoTransaccionSuccess implements Action {
  readonly type = actions.DOWNLOAD_SUCCESS;
  constructor(public payload: any) { }
}
export class DownloadCodigoTransaccionFail implements Action {
  readonly type = actions.DOWNLOAD_FAIL;
  constructor(public payload: any) { }
}

export type CodigoTransaccionActions
  = AddCodigoTransaccion
  | AddCodigoTransaccionSuccess
  | AddCodigoTransaccionFail
  | UpdateCodigoTransaccion
  | UpdateCodigoTransaccionSuccess
  | UpdateCodigoTransaccionFail
  | DeleteCodigoTransaccion
  | DeleteCodigoTransaccionSuccess
  | DeleteCodigoTransaccionFail
  | GetAllCodigoTransaccion
  | GetAllCodigoTransaccionSuccess
  | GetAllCodigoTransaccionFail
  | ResetCodigoTransaccion
  | DownloadCodigoTransaccion
  | DownloadCodigoTransaccionSuccess
  | DownloadCodigoTransaccionFail;
