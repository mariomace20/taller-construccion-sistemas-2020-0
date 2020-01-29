import { Action } from '@ngrx/store';
import { CampoActualizar } from '../../../../conciliacion/models';
import { getCommonCrudActions } from '../common-actions';

export const actions = {
  ...getCommonCrudActions('CampoActualizar'),
  GET_BY_CONCILIACION_TABLAS: '[CampoActualizar] Obtener por conciliacion tablas',
  GET_BY_CONCILIACION_TABLAS_SUCCESS: '[CampoActualizar] Obtener por conciliacion tablas correcto',
  GET_BY_CONCILIACION_TABLAS_FAIL: '[CampoActualizar] Error al obtener por conciliacion tablas'
}

export class AddCampoActualizar implements Action {
  readonly type = actions.ADD;
  constructor(public payload: any) {}
}
export class AddCampoActualizarSuccess implements Action {
  readonly type = actions.ADD_SUCCESS;
  constructor(public payload: any) {}
}
export class AddCampoActualizarFail implements Action {
  readonly type = actions.ADD_FAIL;
  constructor(public payload: any) {}
}

export class UpdateCampoActualizar implements Action {
  readonly type = actions.UPDATE;
  constructor(public payload: any) {}
}
export class UpdateCampoActualizarSuccess implements Action {
  readonly type = actions.UPDATE_SUCCESS;
  constructor(public payload: any) {}
}
export class UpdateCampoActualizarFail implements Action {
  readonly type = actions.UPDATE_FAIL;
  constructor(public payload: any) {}
}

export class DeleteCampoActualizar implements Action {
  readonly type = actions.DELETE;
  constructor(public payload: any) {}
}
export class DeleteCampoActualizarSuccess implements Action {
  readonly type = actions.DELETE_SUCCESS;
  constructor(public payload: any) {}
}
export class DeleteCampoActualizarFail implements Action {
  readonly type = actions.DELETE_FAIL;
  constructor(public payload: any) {}
}

export class GetAllCampoActualizar implements Action {
  readonly type = actions.GET_ALL;
  constructor(public payload = null) {}
}
export class GetAllCampoActualizarSuccess implements Action {
  readonly type = actions.GET_ALL_SUCCESS;
  constructor(public payload: CampoActualizar[]) {}
}
export class GetAllCampoActualizarFail implements Action {
  readonly type = actions.GET_ALL_FAIL;
  constructor(public payload: any) {}
}

export class GetByConciliacionTablas implements Action {
  readonly type = actions.GET_BY_CONCILIACION_TABLAS;
  constructor(public payload: any) {}
}
export class GetByConciliacionTablasSuccess implements Action {
  readonly type = actions.GET_BY_CONCILIACION_TABLAS_SUCCESS;
  constructor(public payload: CampoActualizar[]) {}
}
export class GetByConciliacionTablasFail implements Action {
  readonly type = actions.GET_BY_CONCILIACION_TABLAS_FAIL;
  constructor(public payload: any) {}
}

export class ResetCampoActualizar implements Action {
  readonly type = actions.RESET;
  constructor(public payload: any = null) {}
}

export type CampoActualizarActions
  = AddCampoActualizar
  | AddCampoActualizarSuccess
  | AddCampoActualizarFail
  | UpdateCampoActualizar
  | UpdateCampoActualizarSuccess
  | UpdateCampoActualizarFail
  | DeleteCampoActualizar
  | DeleteCampoActualizarSuccess
  | DeleteCampoActualizarFail
  | GetAllCampoActualizar
  | GetAllCampoActualizarSuccess
  | GetAllCampoActualizarFail
  | GetByConciliacionTablas
  | GetByConciliacionTablasSuccess
  | GetByConciliacionTablasFail
  | ResetCampoActualizar;
