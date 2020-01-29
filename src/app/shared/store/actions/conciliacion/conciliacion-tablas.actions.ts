import { Action } from '@ngrx/store';
import { ConciliacionTablas } from '../../../../conciliacion/models';
import { getCommonCrudActions } from '../common-actions';

export const actions = {
  ...getCommonCrudActions('ConciliacionTablas'),
  GET_BY_CONCILIACION: '[ConciliacionTablas] Obtener por conciliacion',
  GET_BY_CONCILIACION_SUCCESS: '[ConciliacionTablas] Obtener por conciliacion correcto',
  GET_BY_CONCILIACION_FAIL: '[ConciliacionTablas] Error al obtener por conciliacion'
}

export class AddConciliacionTablas implements Action {
  readonly type = actions.ADD;
  constructor(public payload: any) {}
}
export class AddConciliacionTablasSuccess implements Action {
  readonly type = actions.ADD_SUCCESS;
  constructor(public payload: any) {}
}
export class AddConciliacionTablasFail implements Action {
  readonly type = actions.ADD_FAIL;
  constructor(public payload: any) {}
}

export class UpdateConciliacionTablas implements Action {
  readonly type = actions.UPDATE;
  constructor(public payload: any) {}
}
export class UpdateConciliacionTablasSuccess implements Action {
  readonly type = actions.UPDATE_SUCCESS;
  constructor(public payload: any) {}
}
export class UpdateConciliacionTablasFail implements Action {
  readonly type = actions.UPDATE_FAIL;
  constructor(public payload: any) {}
}

export class DeleteConciliacionTablas implements Action {
  readonly type = actions.DELETE;
  constructor(public payload: any) {}
}
export class DeleteConciliacionTablasSuccess implements Action {
  readonly type = actions.DELETE_SUCCESS;
  constructor(public payload: any) {}
}
export class DeleteConciliacionTablasFail implements Action {
  readonly type = actions.DELETE_FAIL;
  constructor(public payload: any) {}
}

export class GetAllConciliacionTablas implements Action {
  readonly type = actions.GET_ALL;
  constructor(public payload = null) {}
}
export class GetAllConciliacionTablasSuccess implements Action {
  readonly type = actions.GET_ALL_SUCCESS;
  constructor(public payload: ConciliacionTablas[]) {}
}
export class GetAllConciliacionTablasFail implements Action {
  readonly type = actions.GET_ALL_FAIL;
  constructor(public payload: any) {}
}

export class GetByConciliacion implements Action {
  readonly type = actions.GET_BY_CONCILIACION;
  constructor(public payload: any) {}
}
export class GetByConciliacionSuccess implements Action {
  readonly type = actions.GET_BY_CONCILIACION_SUCCESS;
  constructor(public payload: ConciliacionTablas[]) {}
}
export class GetByConciliacionFail implements Action {
  readonly type = actions.GET_BY_CONCILIACION_FAIL;
  constructor(public payload: any) {}
}

export class ResetConciliacionTablas implements Action {
  readonly type = actions.RESET;
  constructor(public payload: any = null) {}
}

export type ConciliacionTablasActions
  = AddConciliacionTablas
  | AddConciliacionTablasSuccess
  | AddConciliacionTablasFail
  | UpdateConciliacionTablas
  | UpdateConciliacionTablasSuccess
  | UpdateConciliacionTablasFail
  | DeleteConciliacionTablas
  | DeleteConciliacionTablasSuccess
  | DeleteConciliacionTablasFail
  | GetAllConciliacionTablas
  | GetAllConciliacionTablasSuccess
  | GetAllConciliacionTablasFail
  | GetByConciliacion
  | GetByConciliacionSuccess
  | GetByConciliacionFail
  | ResetConciliacionTablas;
