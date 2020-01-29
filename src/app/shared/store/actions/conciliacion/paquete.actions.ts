import { Action } from '@ngrx/store';
import { Paquete } from '../../../../conciliacion/models';
import { getCommonCrudActions } from '../common-actions';

export const actions = {
  ...getCommonCrudActions('Paquete')
}

export class AddPaquete implements Action {
  readonly type = actions.ADD;
  constructor(public payload: any) {}
}
export class AddPaqueteSuccess implements Action {
  readonly type = actions.ADD_SUCCESS;
  constructor(public payload: any) {}
}
export class AddPaqueteFail implements Action {
  readonly type = actions.ADD_FAIL;
  constructor(public payload: any) {}
}

export class UpdatePaquete implements Action {
  readonly type = actions.UPDATE;
  constructor(public payload: any) {}
}
export class UpdatePaqueteSuccess implements Action {
  readonly type = actions.UPDATE_SUCCESS;
  constructor(public payload: any) {}
}
export class UpdatePaqueteFail implements Action {
  readonly type = actions.UPDATE_FAIL;
  constructor(public payload: any) {}
}

export class DeletePaquete implements Action {
  readonly type = actions.DELETE;
  constructor(public payload: any) {}
}
export class DeletePaqueteSuccess implements Action {
  readonly type = actions.DELETE_SUCCESS;
  constructor(public payload: any) {}
}
export class DeletePaqueteFail implements Action {
  readonly type = actions.DELETE_FAIL;
  constructor(public payload: any) {}
}

export class GetAllPaquete implements Action {
  readonly type = actions.GET_ALL;
  constructor(public payload = null) {}
}
export class GetAllPaqueteSuccess implements Action {
  readonly type = actions.GET_ALL_SUCCESS;
  constructor(public payload: Paquete[]) {}
}
export class GetAllPaqueteFail implements Action {
  readonly type = actions.GET_ALL_FAIL;
  constructor(public payload: any) {}
}

export type PaqueteActions
  = AddPaquete
  | AddPaqueteSuccess
  | AddPaqueteFail
  | UpdatePaquete
  | UpdatePaqueteSuccess
  | UpdatePaqueteFail
  | DeletePaquete
  | DeletePaqueteSuccess
  | DeletePaqueteFail
  | GetAllPaquete
  | GetAllPaqueteSuccess
  | GetAllPaqueteFail;
