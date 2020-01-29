import { getCommonCrudActions } from '../common-actions';
import { Action } from '@ngrx/store';
import { ReglasCompensacion } from '../../../../mantenimiento/models';


export const actions = {
  ...getCommonCrudActions('ReglasCompensacion')
}

export class GetAllReglasCompensacion implements Action {
  readonly type = actions.GET_ALL;
  constructor(public payload: any = null){}
}
export class GetAllReglasCompensacionSuccess implements Action {
  readonly type = actions.GET_ALL_SUCCESS;
  constructor(public payload: ReglasCompensacion[]){}
}
export class GetAllReglasCompensacionFail implements Action {
  readonly type = actions.GET_ALL_FAIL;
  constructor(public payload: any){}
}

export class AddReglasCompensacion implements Action {
  readonly type = actions.ADD;
  constructor(public payload: any){}
}
export class AddReglasCompensacionSuccess implements Action {
  readonly type = actions.ADD_SUCCESS;
  constructor(public payload: any){}
}
export class AddReglasCompensacionFail implements Action {
  readonly type = actions.ADD_FAIL;
  constructor(public payload: any){}
}

export class DeleteReglasCompensacion implements Action {
  readonly type = actions.DELETE;
  constructor(public payload: any){}
}
export class DeleteReglasCompensacionSuccess implements Action {
  readonly type = actions.DELETE_SUCCESS;
  constructor(public payload: any){}
}
export class DeleteReglasCompensacionFail implements Action {
  readonly type = actions.DELETE_FAIL;
  constructor(public payload: any){}
}

export class UpdateReglasCompensacion implements Action {
  readonly type = actions.UPDATE;
  constructor(public payload: any){}
}
export class UpdateReglasCompensacionSuccess implements Action {
  readonly type = actions.UPDATE_SUCCESS;
  constructor(public payload: any){}
}
export class UpdateReglasCompensacionFail implements Action {
  readonly type = actions.UPDATE_FAIL;
  constructor(public payload: any){}
}

export class ResetReglasCompensacion implements Action {
  readonly type = actions.RESET;
  constructor(public payload = null){}
}

export type ReglasCompensacionActions
  = GetAllReglasCompensacion
  | GetAllReglasCompensacionSuccess
  | GetAllReglasCompensacionFail
  | ResetReglasCompensacion
  | AddReglasCompensacion
  | AddReglasCompensacionSuccess
  | AddReglasCompensacionFail
  | DeleteReglasCompensacion
  | DeleteReglasCompensacionSuccess
  | DeleteReglasCompensacionFail
  | UpdateReglasCompensacion
  | UpdateReglasCompensacionSuccess
  | UpdateReglasCompensacionFail;
