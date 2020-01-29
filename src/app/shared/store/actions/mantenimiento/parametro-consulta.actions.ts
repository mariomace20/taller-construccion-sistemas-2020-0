import { Action } from '@ngrx/store';
import { ParametroConsulta } from '../../../../mantenimiento/models';
import { getCommonCrudActions } from '../common-actions';

export const actions = {
  ...getCommonCrudActions('ParametroConsulta')
}
export class GetAllParametroConsulta implements Action {
  readonly type = actions.GET_ALL;
  constructor(public payload = null) {}
}
export class GetAllParametroConsultaSuccess implements Action {
  readonly type = actions.GET_ALL_SUCCESS;
  constructor(public payload: ParametroConsulta[]) {}
}
export class GetAllParametroConsultaFail implements Action {
  readonly type = actions.GET_ALL_FAIL;
  constructor(public payload: any) {}
}
export type ParametroConsultaActions
  =  GetAllParametroConsulta
  | GetAllParametroConsultaSuccess
  | GetAllParametroConsultaFail
