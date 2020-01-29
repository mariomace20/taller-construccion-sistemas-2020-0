import { Action } from '@ngrx/store';
import { Conciliacion } from '../../../../conciliacion/models';
import { getCommonCrudActions } from '../common-actions';

export const actions = {
  ...getCommonCrudActions('Conciliacion'),
  GET_BY_PAQUETE: '[Conciliacion] Obtener por paquete',
  GET_BY_PAQUETE_SUCCESS: '[Conciliacion] Obtener por paquete correcto',
  GET_BY_PAQUETE_FAIL: '[Conciliacion] Error al obtener por paquete'
}

export class AddConciliacion implements Action {
  readonly type = actions.ADD;
  constructor(public payload: any) {}
}
export class AddConciliacionSuccess implements Action {
  readonly type = actions.ADD_SUCCESS;
  constructor(public payload: any) {}
}
export class AddConciliacionFail implements Action {
  readonly type = actions.ADD_FAIL;
  constructor(public payload: any) {}
}

export class UpdateConciliacion implements Action {
  readonly type = actions.UPDATE;
  constructor(public payload: any) {}
}
export class UpdateConciliacionSuccess implements Action {
  readonly type = actions.UPDATE_SUCCESS;
  constructor(public payload: any) {}
}
export class UpdateConciliacionFail implements Action {
  readonly type = actions.UPDATE_FAIL;
  constructor(public payload: any) {}
}

export class DeleteConciliacion implements Action {
  readonly type = actions.DELETE;
  constructor(public payload: any) {}
}
export class DeleteConciliacionSuccess implements Action {
  readonly type = actions.DELETE_SUCCESS;
  constructor(public payload: any) {}
}
export class DeleteConciliacionFail implements Action {
  readonly type = actions.DELETE_FAIL;
  constructor(public payload: any) {}
}

export class GetAllConciliacion implements Action {
  readonly type = actions.GET_ALL;
  constructor(public payload = null) {}
}
export class GetAllConciliacionSuccess implements Action {
  readonly type = actions.GET_ALL_SUCCESS;
  constructor(public payload: Conciliacion[]) {}
}
export class GetAllConciliacionFail implements Action {
  readonly type = actions.GET_ALL_FAIL;
  constructor(public payload: any) {}
}

export class GetByPaquete implements Action {
  readonly type = actions.GET_BY_PAQUETE;
  constructor(public payload: any) {}
}
export class GetByPaqueteSuccess implements Action {
  readonly type = actions.GET_BY_PAQUETE_SUCCESS;
  constructor(public payload: Conciliacion[]) {}
}
export class GetByPaqueteFail implements Action {
  readonly type = actions.GET_BY_PAQUETE_FAIL;
  constructor(public payload: any) {}
}

export class ResetConciliacion implements Action {
  readonly type = actions.RESET;
  constructor(public payload: any = null) {}
}

export type ConciliacionActions
  = AddConciliacion
  | AddConciliacionSuccess
  | AddConciliacionFail
  | UpdateConciliacion
  | UpdateConciliacionSuccess
  | UpdateConciliacionFail
  | DeleteConciliacion
  | DeleteConciliacionSuccess
  | DeleteConciliacionFail
  | GetAllConciliacion
  | GetAllConciliacionSuccess
  | GetAllConciliacionFail
  | GetByPaquete
  | GetByPaqueteSuccess
  | GetByPaqueteFail
  | ResetConciliacion;
