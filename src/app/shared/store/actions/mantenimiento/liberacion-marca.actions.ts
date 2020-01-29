import { Action } from '@ngrx/store';
import { LiberacionMarca } from '../../../../mantenimiento/models';
import { getCommonCrudActions } from '../common-actions';

export const actions = {
  ...getCommonCrudActions('LiberacionMarca'),
  GET_BY_MEMBRESIA: '[LiberacionMarca] Obtener por membresia',
  GET_BY_MEMBRESIA_SUCCESS: '[LiberacionMarca] Obtener por membresia correcto',
  GET_BY_MEMBRESIA_FAIL: '[LiberacionMarca] Error al obtener por membresia'
}

export class AddLiberacionMarca implements Action {
  readonly type = actions.ADD;
  constructor(public payload: any) {}
}
export class AddLiberacionMarcaSuccess implements Action {
  readonly type = actions.ADD_SUCCESS;
  constructor(public payload: any) {}
}
export class AddLiberacionMarcaFail implements Action {
  readonly type = actions.ADD_FAIL;
  constructor(public payload: any) {}
}

export class UpdateLiberacionMarca implements Action {
  readonly type = actions.UPDATE;
  constructor(public payload: any) {}
}
export class UpdateLiberacionMarcaSuccess implements Action {
  readonly type = actions.UPDATE_SUCCESS;
  constructor(public payload: any) {}
}
export class UpdateLiberacionMarcaFail implements Action {
  readonly type = actions.UPDATE_FAIL;
  constructor(public payload: any) {}
}

export class DeleteLiberacionMarca implements Action {
  readonly type = actions.DELETE;
  constructor(public payload: any) {}
}
export class DeleteLiberacionMarcaSuccess implements Action {
  readonly type = actions.DELETE_SUCCESS;
  constructor(public payload: any) {}
}
export class DeleteLiberacionMarcaFail implements Action {
  readonly type = actions.DELETE_FAIL;
  constructor(public payload: any) {}
}

export class GetAllLiberacionMarca implements Action {
  readonly type = actions.GET_ALL;
  constructor(public payload = null) {}
}
export class GetAllLiberacionMarcaSuccess implements Action {
  readonly type = actions.GET_ALL_SUCCESS;
  constructor(public payload: LiberacionMarca[]) {}
}
export class GetAllLiberacionMarcaFail implements Action {
  readonly type = actions.GET_ALL_FAIL;
  constructor(public payload: any) {}
}

export class ResetLiberacionMarca implements Action {
  readonly type = actions.RESET;
  constructor(public payload: any = null) {}
}

export class GetByMembresia implements Action {
  readonly type = actions.GET_BY_MEMBRESIA;
  constructor(public payload: any) {}
}
export class GetByMembresiaSuccess implements Action {
  readonly type = actions.GET_BY_MEMBRESIA_SUCCESS;
  constructor(public payload: LiberacionMarca[]) {}
}
export class GetByMembresiaFail implements Action {
  readonly type = actions.GET_BY_MEMBRESIA_FAIL;
  constructor(public payload: any) {}
}

export type LiberacionMarcaActions
  = AddLiberacionMarca
  | AddLiberacionMarcaSuccess
  | AddLiberacionMarcaFail
  | UpdateLiberacionMarca
  | UpdateLiberacionMarcaSuccess
  | UpdateLiberacionMarcaFail
  | DeleteLiberacionMarca
  | DeleteLiberacionMarcaSuccess
  | DeleteLiberacionMarcaFail
  | GetAllLiberacionMarca
  | GetAllLiberacionMarcaSuccess
  | GetAllLiberacionMarcaFail
  | ResetLiberacionMarca
  | GetByMembresia
  | GetByMembresiaSuccess
  | GetByMembresiaFail;
