import { Action } from '@ngrx/store';
import { getCommonConsultaActions } from '../common-actions';
import { CriterioIataRequest } from '../../../../consultas/models/criterios';
import { Iata } from '../../../../consultas/models';

export const actions = {
  ...getCommonConsultaActions('Iata')
}

export class GetCriterioIata implements Action {
  readonly type = actions.GET_CRITERIO_PAGINADO;
  constructor(public payload: CriterioIataRequest) {}
}
export class GetCriterioIataSuccess implements Action {
  readonly type = actions.GET_CRITERIO_PAGINADO_SUCCESS;
  constructor(public payload: any) {}
}
export class GetCriterioIataFail implements Action {
  readonly type = actions.GET_CRITERIO_PAGINADO_FAIL;
  constructor(public payload: any) {}
}

export class ResetIata implements Action {
  readonly type = actions.RESET;
  constructor(public payload = null) {}
}

export type IataActions
  = GetCriterioIata
  | GetCriterioIataSuccess
  | GetCriterioIataFail
  | ResetIata;
