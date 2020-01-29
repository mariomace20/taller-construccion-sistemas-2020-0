import { Action } from '@ngrx/store';
import { CampoMatching } from '../../../../conciliacion/models';
import { getCommonCrudActions } from '../common-actions';

export const actions = {
  ...getCommonCrudActions('CampoMatching'),
  GET_BY_CONCILIACION_TABLAS: '[CampoMatching] Obtener por conciliacion tablas',
  GET_BY_CONCILIACION_TABLAS_SUCCESS: '[CampoMatching] Obtener por conciliacion tablas correcto',
  GET_BY_CONCILIACION_TABLAS_FAIL: '[CampoMatching] Error al obtener por conciliacion tablas'
}

export class AddCampoMatching implements Action {
  readonly type = actions.ADD;
  constructor(public payload: any) {}
}
export class AddCampoMatchingSuccess implements Action {
  readonly type = actions.ADD_SUCCESS;
  constructor(public payload: any) {}
}
export class AddCampoMatchingFail implements Action {
  readonly type = actions.ADD_FAIL;
  constructor(public payload: any) {}
}

export class UpdateCampoMatching implements Action {
  readonly type = actions.UPDATE;
  constructor(public payload: any) {}
}
export class UpdateCampoMatchingSuccess implements Action {
  readonly type = actions.UPDATE_SUCCESS;
  constructor(public payload: any) {}
}
export class UpdateCampoMatchingFail implements Action {
  readonly type = actions.UPDATE_FAIL;
  constructor(public payload: any) {}
}

export class DeleteCampoMatching implements Action {
  readonly type = actions.DELETE;
  constructor(public payload: any) {}
}
export class DeleteCampoMatchingSuccess implements Action {
  readonly type = actions.DELETE_SUCCESS;
  constructor(public payload: any) {}
}
export class DeleteCampoMatchingFail implements Action {
  readonly type = actions.DELETE_FAIL;
  constructor(public payload: any) {}
}

export class GetAllCampoMatching implements Action {
  readonly type = actions.GET_ALL;
  constructor(public payload = null) {}
}
export class GetAllCampoMatchingSuccess implements Action {
  readonly type = actions.GET_ALL_SUCCESS;
  constructor(public payload: CampoMatching[]) {}
}
export class GetAllCampoMatchingFail implements Action {
  readonly type = actions.GET_ALL_FAIL;
  constructor(public payload: any) {}
}

export class GetByConciliacionTablas implements Action {
  readonly type = actions.GET_BY_CONCILIACION_TABLAS;
  constructor(public payload: any) {}
}
export class GetByConciliacionTablasSuccess implements Action {
  readonly type = actions.GET_BY_CONCILIACION_TABLAS_SUCCESS;
  constructor(public payload: CampoMatching[]) {}
}
export class GetByConciliacionTablasFail implements Action {
  readonly type = actions.GET_BY_CONCILIACION_TABLAS_FAIL;
  constructor(public payload: any) {}
}

export class ResetCampoMatching implements Action {
  readonly type = actions.RESET;
  constructor(public payload: any = null) {}
}

export type CampoMatchingActions
  = AddCampoMatching
  | AddCampoMatchingSuccess
  | AddCampoMatchingFail
  | UpdateCampoMatching
  | UpdateCampoMatchingSuccess
  | UpdateCampoMatchingFail
  | DeleteCampoMatching
  | DeleteCampoMatchingSuccess
  | DeleteCampoMatchingFail
  | GetAllCampoMatching
  | GetAllCampoMatchingSuccess
  | GetAllCampoMatchingFail
  | GetByConciliacionTablas
  | GetByConciliacionTablasSuccess
  | GetByConciliacionTablasFail
  | ResetCampoMatching;
