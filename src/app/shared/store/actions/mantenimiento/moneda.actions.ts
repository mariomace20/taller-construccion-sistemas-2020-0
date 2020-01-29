import { Action } from '@ngrx/store';
import { Moneda } from '../../../../mantenimiento/models';
import { getCommonCrudActions } from '../common-actions';

export const actions = {
  ...getCommonCrudActions('Moneda')
}

export class GetAllMoneda implements Action {
  readonly type = actions.GET_ALL;
  constructor(public payload = null) {}
}
export class GetAllMonedaSuccess implements Action {
  readonly type = actions.GET_ALL_SUCCESS;
  constructor(public payload: Moneda[]) {}
}
export class GetAllMonedaFail implements Action {
  readonly type = actions.GET_ALL_FAIL;
  constructor(public payload: any) {}
}

export class ResetMoneda implements Action {
  readonly type = actions.RESET;

  constructor(public payload: any = null) {};
}

export type MonedaActions
  = GetAllMoneda
  | GetAllMonedaSuccess
  | GetAllMonedaFail
  | ResetMoneda;
