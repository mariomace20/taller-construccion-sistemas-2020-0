import { Action } from '@ngrx/store';
import { getCommonConsultaActions } from '../common-actions';
import { CriterioEstablecimientoDcpRequest } from '../../../../consultas/models/criterios';

export const actions = {
  ...getCommonConsultaActions('EstablecimientoDcp')
}

export class GetCriterioEstablecimientoDcp implements Action {
  readonly type = actions.GET_CRITERIO_PAGINADO;
  constructor(public payload: CriterioEstablecimientoDcpRequest) {}
}
export class GetCriterioEstablecimientoDcpSuccess implements Action {
  readonly type = actions.GET_CRITERIO_PAGINADO_SUCCESS;
  constructor(public payload: any) {}
}
export class GetCriterioEstablecimientoDcpFail implements Action {
  readonly type = actions.GET_CRITERIO_PAGINADO_FAIL;
  constructor(public payload: any) {}
}

export class ResetEstablecimientoDcp implements Action {
  readonly type = actions.RESET;
  constructor(public payload = null) {}
}

export type EstablecimientoDcpActions
  = GetCriterioEstablecimientoDcp
  | GetCriterioEstablecimientoDcpSuccess
  | GetCriterioEstablecimientoDcpFail
  | ResetEstablecimientoDcp;
