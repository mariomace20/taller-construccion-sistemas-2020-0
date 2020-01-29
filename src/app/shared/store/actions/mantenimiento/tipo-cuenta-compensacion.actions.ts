import { getCommonCrudActions } from '../common-actions';
import { Action } from '@ngrx/store';
import { TipoCuentaCompensacion } from '../../../../mantenimiento/models';


export const actions = {
  ...getCommonCrudActions('tipoCuentaCompensacion')
}

export class GetAllTipoCuentaCompensacion implements Action {
  readonly type = actions.GET_ALL;
  constructor(public payload: any = null){}
}

export class GetAllTipoCuentaCompensacionSuccess implements Action {
  readonly type = actions.GET_ALL_SUCCESS;
  constructor(public payload: TipoCuentaCompensacion[]){}
}

export class GetAllTipoCuentaCompensacionFail implements Action {
  readonly type = actions.GET_ALL_FAIL;
  constructor(public payload: any){}
}

export class ResetTipoCuentaCompensacion implements Action {
  readonly type = actions.RESET;
  constructor(public payload = null){}
}

export type TipoCuentaCompensacionActions
  = GetAllTipoCuentaCompensacion
  | GetAllTipoCuentaCompensacionSuccess
  | GetAllTipoCuentaCompensacionFail
  | ResetTipoCuentaCompensacion;
