import { Action } from '@ngrx/store';
import { CodigoFacturacion } from '../../../../facturacion/models';
import { getCommonCrudActions } from '../common-actions';

export const actions = {
  ...getCommonCrudActions('CodigoFacturacion')
}
export class ResetCodigoFacturacion implements  Action {
  readonly type = actions.RESET;

  constructor(public payload: any = null) {};
}
export class AddCodigoFacturacion implements Action {
  readonly type = actions.ADD;
  constructor(public payload: any) {}
}
export class AddCodigoFacturacionSuccess implements Action {
  readonly type = actions.ADD_SUCCESS;
  constructor(public payload: any) {}
}
export class AddCodigoFacturacionFail implements Action {
  readonly type = actions.ADD_FAIL;
  constructor(public payload: any) {}
}

export class UpdateCodigoFacturacion implements Action {
  readonly type = actions.UPDATE;
  constructor(public payload: any) {}
}
export class UpdateCodigoFacturacionSuccess implements Action {
  readonly type = actions.UPDATE_SUCCESS;
  constructor(public payload: any) {}
}
export class UpdateCodigoFacturacionFail implements Action {
  readonly type = actions.UPDATE_FAIL;
  constructor(public payload: any) {}
}

export class DeleteCodigoFacturacion implements Action {
  readonly type = actions.DELETE;
  constructor(public payload: any) {}
}
export class DeleteCodigoFacturacionSuccess implements Action {
  readonly type = actions.DELETE_SUCCESS;
  constructor(public payload: any) {}
}
export class DeleteCodigoFacturacionFail implements Action {
  readonly type = actions.DELETE_FAIL;
  constructor(public payload: any) {}
}

export class GetAllCodigoFacturacion implements Action {
  readonly type = actions.GET_ALL;
  constructor(public payload = null) {}
}
export class GetAllCodigoFacturacionSuccess implements Action {
  readonly type = actions.GET_ALL_SUCCESS;
  constructor(public payload: CodigoFacturacion[]) {}
}
export class GetAllCodigoFacturacionFail implements Action {
  readonly type = actions.GET_ALL_FAIL;
  constructor(public payload: any) {}
}

export class DownloadCodigoFacturacion implements Action {
  readonly type = actions.DOWNLOAD;
  constructor(public payload: any = null) { }
}
export class DownloadCodigoFacturacionSuccess implements Action {
  readonly type = actions.DOWNLOAD_SUCCESS;
  constructor(public payload: any) { }
}
export class DownloadCodigoFacturacionFail implements Action {
  readonly type = actions.DOWNLOAD_FAIL;
  constructor(public payload: any) { }
}

export type CodigoFacturacionActions
  = AddCodigoFacturacion
  | AddCodigoFacturacionSuccess
  | AddCodigoFacturacionFail
  | UpdateCodigoFacturacion
  | UpdateCodigoFacturacionSuccess
  | UpdateCodigoFacturacionFail
  | DeleteCodigoFacturacion
  | DeleteCodigoFacturacionSuccess
  | DeleteCodigoFacturacionFail
  | GetAllCodigoFacturacion
  | GetAllCodigoFacturacionSuccess
  | GetAllCodigoFacturacionFail
  | DownloadCodigoFacturacion
  | DownloadCodigoFacturacionSuccess
  | DownloadCodigoFacturacionFail
  | ResetCodigoFacturacion;
