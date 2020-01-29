import { Action } from '@ngrx/store';
import { getCommonCrudActions } from '../common-actions';
import { OperadorTipoDato } from '../../../../reportes/user/models/operador-tipo-dato.model';

export const actions = {
  ...getCommonCrudActions('Operador Tipo Dato'),
  GET_GROUP_OPERADOR_TIPO_DATO: `[Operador Tipo Dato] Obtener operadores agrupados por tipo dato`,
  GET_GROUP_OPERADOR_TIPO_DATO_SUCCESS: `[Operador Tipo Dato] Obtener operadores agrupados por tipo dato correcto`,
  GET_GROUP_OPERADOR_TIPO_DATO_FAIL: `[Operador Tipo Dato] Error al obtener operadores agrupados por tipo dato`,
}
/* Acción para buscarTodos */
export class GetAllOperadorTipoDato implements Action {
  readonly type = actions.GET_ALL;
  constructor(public payload = null) {}
}
export class GetAllOperadorTipoDatoSuccess implements Action {
  readonly type = actions.GET_ALL_SUCCESS;
  constructor(public payload: any) {}
}
export class GetAllOperadorTipoDatoFail implements Action {
  readonly type = actions.GET_ALL_FAIL;
  constructor(public payload: any) {}
}

/* Acción para buscarPorCriterios */
export class GetCriterioOperadorTipoDato implements Action {
  readonly type = actions.GET_CRITERIO;
  constructor(public payload?: any) {}
}
export class GetCriterioOperadorTipoDatoSuccess implements Action {
  readonly type = actions.GET_CRITERIO_SUCCESS;
  constructor(public payload: OperadorTipoDato[]) {}
}
export class GetCriterioOperadorTipoDatoFail implements Action {
  readonly type = actions.GET_CRITERIO_FAIL;
  constructor(public payload: any) {}
}

export class GetGroupOperadorTipoDato implements Action {
  readonly type = actions.GET_GROUP_OPERADOR_TIPO_DATO;
  constructor(public payload: any) {}
}
export class GetGroupOperadorTipoDatoSuccess implements Action {
  readonly type = actions.GET_GROUP_OPERADOR_TIPO_DATO_SUCCESS;
  constructor(public payload: OperadorTipoDato[]) {}
}
export class GetGroupOperadorTipoDatoFail implements Action {
  readonly type = actions.GET_GROUP_OPERADOR_TIPO_DATO_FAIL;
  constructor(public payload: any) {}
}

export type OperadorTipoDatoActions
  =  GetAllOperadorTipoDato
  | GetAllOperadorTipoDatoSuccess
  | GetAllOperadorTipoDatoFail
  | GetCriterioOperadorTipoDato
  | GetCriterioOperadorTipoDatoSuccess
  | GetCriterioOperadorTipoDatoFail
  | GetGroupOperadorTipoDato
  | GetGroupOperadorTipoDatoSuccess
  | GetGroupOperadorTipoDatoFail
