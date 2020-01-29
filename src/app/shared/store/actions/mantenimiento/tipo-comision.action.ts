import { getCommonCrudActions } from '../common-actions';
import { Action } from '@ngrx/store';
import { TipoComision } from '../../../../mantenimiento/models';


export const actions = {
  ...getCommonCrudActions('tipoComision')
}

export class GetAllTipoComision implements Action {
  readonly type = actions.GET_ALL;
  constructor(public payload: any = null){}
}

export class GetAllTipoComisionSuccess implements Action {
  readonly type = actions.GET_ALL_SUCCESS;
  constructor(public payload: TipoComision[]){}
}

export class GetAllTipoComisionFail implements Action {
  readonly type = actions.GET_ALL_FAIL;
  constructor(public payload: any){}
}

export class GetByIdTipoComision implements Action {
  readonly type = actions.GET_BY_ID;
  constructor(public payload: number){}
}

export class GetByIdTipoTipoComisionSuccess implements Action {
  readonly type = actions.GET_BY_ID_SUCCESS;
  constructor(public payload: TipoComision[]){}
}

export class GetByIdTipoComisionFail implements Action {
  readonly type = actions.GET_BY_ID_FAIL;
  constructor(public payload: any){}
}

export class ResetTipoComision implements Action {
  readonly type = actions.RESET;
  constructor(public payload: any = null){}
}

export type TipoComisionActions
  = GetAllTipoComision
  | GetAllTipoComisionSuccess
  | GetAllTipoComisionFail
  | GetByIdTipoComision
  | GetByIdTipoTipoComisionSuccess
  | GetByIdTipoComisionFail
  | ResetTipoComision;
