import { Action } from '@ngrx/store';
import { CampoInsertarObservada } from '../../../../conciliacion/models';
import { getCommonCrudActions } from '../common-actions';

export const actions = {
  ...getCommonCrudActions('CampoInsertarObservada'),
  GET_BY_CONCILIACION_TABLAS: '[CampoInsertarObservada] Obtener por conciliacion tablas',
  GET_BY_CONCILIACION_TABLAS_SUCCESS: '[CampoInsertarObservada] Obtener por conciliacion tablas correcto',
  GET_BY_CONCILIACION_TABLAS_FAIL: '[CampoInsertarObservada] Error al obtener por conciliacion tablas'
}

export class AddCampoInsertarObservada implements Action {
  readonly type = actions.ADD;
  constructor(public payload: any) {}
}
export class AddCampoInsertarObservadaSuccess implements Action {
  readonly type = actions.ADD_SUCCESS;
  constructor(public payload: any) {}
}
export class AddCampoInsertarObservadaFail implements Action {
  readonly type = actions.ADD_FAIL;
  constructor(public payload: any) {}
}

export class UpdateCampoInsertarObservada implements Action {
  readonly type = actions.UPDATE;
  constructor(public payload: any) {}
}
export class UpdateCampoInsertarObservadaSuccess implements Action {
  readonly type = actions.UPDATE_SUCCESS;
  constructor(public payload: any) {}
}
export class UpdateCampoInsertarObservadaFail implements Action {
  readonly type = actions.UPDATE_FAIL;
  constructor(public payload: any) {}
}

export class DeleteCampoInsertarObservada implements Action {
  readonly type = actions.DELETE;
  constructor(public payload: any) {}
}
export class DeleteCampoInsertarObservadaSuccess implements Action {
  readonly type = actions.DELETE_SUCCESS;
  constructor(public payload: any) {}
}
export class DeleteCampoInsertarObservadaFail implements Action {
  readonly type = actions.DELETE_FAIL;
  constructor(public payload: any) {}
}

export class GetAllCampoInsertarObservada implements Action {
  readonly type = actions.GET_ALL;
  constructor(public payload = null) {}
}
export class GetAllCampoInsertarObservadaSuccess implements Action {
  readonly type = actions.GET_ALL_SUCCESS;
  constructor(public payload: CampoInsertarObservada[]) {}
}
export class GetAllCampoInsertarObservadaFail implements Action {
  readonly type = actions.GET_ALL_FAIL;
  constructor(public payload: any) {}
}

export class GetByConciliacionTablas implements Action {
  readonly type = actions.GET_BY_CONCILIACION_TABLAS;
  constructor(public payload: any) {}
}
export class GetByConciliacionTablasSuccess implements Action {
  readonly type = actions.GET_BY_CONCILIACION_TABLAS_SUCCESS;
  constructor(public payload: CampoInsertarObservada[]) {}
}
export class GetByConciliacionTablasFail implements Action {
  readonly type = actions.GET_BY_CONCILIACION_TABLAS_FAIL;
  constructor(public payload: any) {}
}

export class ResetCampoInsertarObservada implements Action {
  readonly type = actions.RESET;
  constructor(public payload: any = null) {}
}

export type CampoInsertarObservadaActions
  = AddCampoInsertarObservada
  | AddCampoInsertarObservadaSuccess
  | AddCampoInsertarObservadaFail
  | UpdateCampoInsertarObservada
  | UpdateCampoInsertarObservadaSuccess
  | UpdateCampoInsertarObservadaFail
  | DeleteCampoInsertarObservada
  | DeleteCampoInsertarObservadaSuccess
  | DeleteCampoInsertarObservadaFail
  | GetAllCampoInsertarObservada
  | GetAllCampoInsertarObservadaSuccess
  | GetAllCampoInsertarObservadaFail
  | GetByConciliacionTablas
  | GetByConciliacionTablasSuccess
  | GetByConciliacionTablasFail
  | ResetCampoInsertarObservada;
