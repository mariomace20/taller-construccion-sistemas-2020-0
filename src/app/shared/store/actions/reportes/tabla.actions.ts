import { Action } from '@ngrx/store';
import { Tabla } from '../../../../reportes/user/models';
import { getCommonCrudActions } from '../common-actions';

export const actions = {
  ...getCommonCrudActions('Tabla'),
  GET_PERMITED: `Tabla Obtener todos`,
  GET_PERMITED_SUCCESS: `Tabla Obtener todos correcto`,
  GET_PERMITED_FAIL: `Tabla Error obtener todos`,
}

export class GetAllTabla implements Action {
  readonly type = actions.GET_ALL;
  constructor(public payload = null) {
    //console.log('Tabla')
  }
}
export class GetAllTablaSuccess implements Action {
  readonly type = actions.GET_ALL_SUCCESS;
  constructor(public payload: Tabla[]) { }
}
export class GetAllTablaFail implements Action {
  readonly type = actions.GET_ALL_FAIL;
  constructor(public payload: any) { }
}
export class GetAllPermitidasTabla implements Action {
  readonly type = actions.GET_PERMITED;
  constructor(public payload = null) {
    //console.log('Tabla')
  }
}
export class GetAllPermitidasTablaSuccess implements Action {
  readonly type = actions.GET_PERMITED_SUCCESS;
  constructor(public payload: Tabla[]) { }
}
export class GetAllPermitidasTablaFail implements Action {
  readonly type = actions.GET_PERMITED_FAIL;
  constructor(public payload: any) { }
}
export class UpdateTabla implements Action {
  readonly type = actions.UPDATE;
  constructor(public payload: any) { }
}
export class UpdateTablaSuccess implements Action {
  readonly type = actions.UPDATE_SUCCESS;
  constructor(public payload: any) { }
}
export class UpdateTablaFail implements Action {
  readonly type = actions.UPDATE_FAIL;
  constructor(public payload: any) { }
}
export type TablaActions
  = GetAllTabla
  | GetAllTablaSuccess
  | GetAllTablaFail
  | UpdateTabla
  | UpdateTablaSuccess
  | UpdateTablaFail
  | GetAllPermitidasTabla
  | GetAllPermitidasTablaSuccess
  | GetAllPermitidasTablaFail
