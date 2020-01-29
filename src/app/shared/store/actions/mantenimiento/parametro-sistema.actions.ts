import { Action } from '@ngrx/store';
import { ParametroSistema } from '../../../../mantenimiento/models';
import { getCommonCrudActions } from '../common-actions';

export const actions = {
  ...getCommonCrudActions('ParametroSistema')
}

export class GetAllParametroSistema implements Action {
  readonly type = actions.GET_ALL;
  constructor(public payload = null) {}
}
export class GetAllParametroSistemaSuccess implements Action {
  readonly type = actions.GET_ALL_SUCCESS;
  constructor(public payload: ParametroSistema[]) {}
}
export class GetAllParametroSistemaFail implements Action {
  readonly type = actions.GET_ALL_FAIL;
  constructor(public payload: any) {}
}
export class UpdateParametroSistema implements Action {
  readonly type = actions.UPDATE;
  constructor(public payload: any){}
}
export class UpdateParametroSistemaSuccess implements Action {
  readonly type = actions.UPDATE_SUCCESS;
  constructor(public payload: any){}
}
export class UpdateParametroSistemaFail implements Action {
  readonly type = actions.UPDATE_FAIL;
  constructor(public payload: any){}
}
export class ResetParametroSistema implements Action {
  readonly  type = actions.RESET;
  constructor(public payload:any = null) {};
}

export type ParametroSistemaActions
  = GetAllParametroSistema
  | GetAllParametroSistemaSuccess
  | GetAllParametroSistemaFail
  | UpdateParametroSistema
  | UpdateParametroSistemaSuccess
  | UpdateParametroSistemaFail
  | ResetParametroSistema;
