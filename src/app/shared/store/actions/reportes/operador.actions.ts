import { Action } from '@ngrx/store';
import { Operador } from '../../../../reportes/user/models';
import { getCommonCrudActions } from '../common-actions';

export const actions = {
  ...getCommonCrudActions('Operador'),
  GET_BY_TIPO_DATO: '[Operador] Obtener por tipo dato',
  GET_BY_TIPO_DATO_SUCCESS: '[Operador] Obtener por tipo dato correcto',
  GET_BY_TIPO_DATO_FAIL: '[Operador] Error al obtener por tipo dato'
}

export class GetByTipoDatoOperador implements Action {
  readonly type = actions.GET_BY_TIPO_DATO;
  constructor(public payload) {
  }
}

export class GetByTipoDatoOperadorSuccess implements Action {
  readonly type = actions.GET_BY_TIPO_DATO_SUCCESS;
  constructor(public payload: Operador[]) {}
}
export class GetByTipoDatoOperadorFail implements Action {
  readonly type = actions.GET_BY_TIPO_DATO_FAIL;
  constructor(public payload: any) {}
}
export type OperadorActions
  =  GetByTipoDatoOperador
  | GetByTipoDatoOperadorSuccess
  | GetByTipoDatoOperadorFail