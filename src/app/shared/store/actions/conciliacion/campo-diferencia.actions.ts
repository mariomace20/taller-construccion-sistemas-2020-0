import { Action } from '@ngrx/store';
import { CampoDiferencia } from '../../../../conciliacion/models';
import { getCommonCrudActions } from '../common-actions';

export const actions = {
  ...getCommonCrudActions('CampoDiferencia'),
  GET_BY_CONCILIACION_TABLAS: '[CampoDiferencia] Obtener por conciliacion tablas',
  GET_BY_CONCILIACION_TABLAS_SUCCESS: '[CampoDiferencia] Obtener por conciliacion tablas correcto',
  GET_BY_CONCILIACION_TABLAS_FAIL: '[CampoDiferencia] Error al obtener por conciliacion tablas'
}

export class AddCampoDiferencia implements Action {
  readonly type = actions.ADD;
  constructor(public payload: any) {}
}
export class AddCampoDiferenciaSuccess implements Action {
  readonly type = actions.ADD_SUCCESS;
  constructor(public payload: any) {}
}
export class AddCampoDiferenciaFail implements Action {
  readonly type = actions.ADD_FAIL;
  constructor(public payload: any) {}
}

export class UpdateCampoDiferencia implements Action {
  readonly type = actions.UPDATE;
  constructor(public payload: any) {}
}
export class UpdateCampoDiferenciaSuccess implements Action {
  readonly type = actions.UPDATE_SUCCESS;
  constructor(public payload: any) {}
}
export class UpdateCampoDiferenciaFail implements Action {
  readonly type = actions.UPDATE_FAIL;
  constructor(public payload: any) {}
}

export class DeleteCampoDiferencia implements Action {
  readonly type = actions.DELETE;
  constructor(public payload: any) {}
}
export class DeleteCampoDiferenciaSuccess implements Action {
  readonly type = actions.DELETE_SUCCESS;
  constructor(public payload: any) {}
}
export class DeleteCampoDiferenciaFail implements Action {
  readonly type = actions.DELETE_FAIL;
  constructor(public payload: any) {}
}

export class GetAllCampoDiferencia implements Action {
  readonly type = actions.GET_ALL;
  constructor(public payload = null) {}
}
export class GetAllCampoDiferenciaSuccess implements Action {
  readonly type = actions.GET_ALL_SUCCESS;
  constructor(public payload: CampoDiferencia[]) {}
}
export class GetAllCampoDiferenciaFail implements Action {
  readonly type = actions.GET_ALL_FAIL;
  constructor(public payload: any) {}
}

export class GetByConciliacionTablas implements Action {
  readonly type = actions.GET_BY_CONCILIACION_TABLAS;
  constructor(public payload: any) {}
}
export class GetByConciliacionTablasSuccess implements Action {
  readonly type = actions.GET_BY_CONCILIACION_TABLAS_SUCCESS;
  constructor(public payload: CampoDiferencia[]) {}
}
export class GetByConciliacionTablasFail implements Action {
  readonly type = actions.GET_BY_CONCILIACION_TABLAS_FAIL;
  constructor(public payload: any) {}
}

export class ResetCampoDiferencia implements Action {
  readonly type = actions.RESET;
  constructor(public payload: any = null) {}
}

export type CampoDiferenciaActions
  = AddCampoDiferencia
  | AddCampoDiferenciaSuccess
  | AddCampoDiferenciaFail
  | UpdateCampoDiferencia
  | UpdateCampoDiferenciaSuccess
  | UpdateCampoDiferenciaFail
  | DeleteCampoDiferencia
  | DeleteCampoDiferenciaSuccess
  | DeleteCampoDiferenciaFail
  | GetAllCampoDiferencia
  | GetAllCampoDiferenciaSuccess
  | GetAllCampoDiferenciaFail
  | GetByConciliacionTablas
  | GetByConciliacionTablasSuccess
  | GetByConciliacionTablasFail
  | ResetCampoDiferencia;
