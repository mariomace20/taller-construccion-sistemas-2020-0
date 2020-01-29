import { Action } from '@ngrx/store';
import { CodigoRptaMembresia } from '../../../../mantenimiento/models';
import { getCommonCrudActions } from '../common-actions';

export const actions = {
  ...getCommonCrudActions('CodigoRptaMembresia')
}

export class AddCodigoRptaMembresia implements Action {
  readonly type = actions.ADD;
  constructor(public payload: any) {}
}
export class AddCodigoRptaMembresiaSuccess implements Action {
  readonly type = actions.ADD_SUCCESS;
  constructor(public payload: any) {}
}
export class AddCodigoRptaMembresiaFail implements Action {
  readonly type = actions.ADD_FAIL;
  constructor(public payload: any) {}
}

export class UpdateCodigoRptaMembresia implements Action {
  readonly type = actions.UPDATE;
  constructor(public payload: any) {}
}
export class UpdateCodigoRptaMembresiaSuccess implements Action {
  readonly type = actions.UPDATE_SUCCESS;
  constructor(public payload: any) {}
}
export class UpdateCodigoRptaMembresiaFail implements Action {
  readonly type = actions.UPDATE_FAIL;
  constructor(public payload: any) {}
}

export class DeleteCodigoRptaMembresia implements Action {
  readonly type = actions.DELETE;
  constructor(public payload: any) {}
}
export class DeleteCodigoRptaMembresiaSuccess implements Action {
  readonly type = actions.DELETE_SUCCESS;
  constructor(public payload: any) {}
}
export class DeleteCodigoRptaMembresiaFail implements Action {
  readonly type = actions.DELETE_FAIL;
  constructor(public payload: any) {}
}

export class GetAllCodigoRptaMembresia implements Action {
  readonly type = actions.GET_ALL;
  constructor(public payload = null) {}
}
export class GetAllCodigoRptaMembresiaSuccess implements Action {
  readonly type = actions.GET_ALL_SUCCESS;
  constructor(public payload: CodigoRptaMembresia[]) {}
}
export class GetAllCodigoRptaMembresiaFail implements Action {
  readonly type = actions.GET_ALL_FAIL;
  constructor(public payload: any) {}
}

export class GetCriterioCodigoRptaMembresia implements Action {
  readonly type = actions.GET_CRITERIO;
  constructor(public payload : any) {}
}
export class GetCriterioCodigoRptaMembresiaSuccess implements Action {
  readonly type = actions.GET_CRITERIO_SUCCESS;
  constructor(public payload: CodigoRptaMembresia[]) {}
}
export class GetCriterioCodigoRptaMembresiaFail implements Action {
  readonly type = actions.GET_CRITERIO_FAIL;
  constructor(public payload: any) {}
}

export class DownloadCodigoRptaMembresia implements Action {
  readonly type = actions.DOWNLOAD;
  constructor(public payload: any = null) { }
}
export class DownloadCodigoRptaMembresiaSuccess implements Action {
  readonly type = actions.DOWNLOAD_SUCCESS;
  constructor(public payload: any) { }
}
export class DownloadCodigoRptaMembresiaFail implements Action {
  readonly type = actions.DOWNLOAD_FAIL;
  constructor(public payload: any) { }
}

export class ResetCodigoRptaMembresia implements Action {
  readonly type = actions.RESET;
  constructor(public payload: any = null) {};
}

export type CodigoRptaMembresiaActions
  = AddCodigoRptaMembresia
  | AddCodigoRptaMembresiaSuccess
  | AddCodigoRptaMembresiaFail
  | UpdateCodigoRptaMembresia
  | UpdateCodigoRptaMembresiaSuccess
  | UpdateCodigoRptaMembresiaFail
  | DeleteCodigoRptaMembresia
  | DeleteCodigoRptaMembresiaSuccess
  | DeleteCodigoRptaMembresiaFail
  | GetAllCodigoRptaMembresia
  | GetAllCodigoRptaMembresiaSuccess
  | GetAllCodigoRptaMembresiaFail
  | DownloadCodigoRptaMembresia
  | DownloadCodigoRptaMembresiaSuccess
  | DownloadCodigoRptaMembresiaFail
  | ResetCodigoRptaMembresia;
