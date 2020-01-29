import { Action } from '@ngrx/store';
import { getCommonConsultaActions } from '../common-actions';
import { CriterioIatasRequest } from '../../../../consultas/models/criterios';
import { Iatas } from '../../../../consultas/models';

export const actions = {
  ...getCommonConsultaActions('Iatas')
}

export class GetCriterioIatas implements Action {
  readonly type = actions.GET_CRITERIO_PAGINADO;
  constructor(public payload: CriterioIatasRequest) {}
}
export class GetCriterioIatasSuccess implements Action {
  readonly type = actions.GET_CRITERIO_PAGINADO_SUCCESS;
  constructor(public payload: any) {}
}
export class GetCriterioIatasFail implements Action {
  readonly type = actions.GET_CRITERIO_PAGINADO_FAIL;
  constructor(public payload: any) {}
}

export class ResetIatas implements Action {
  readonly type = actions.RESET;
  constructor(public payload = null) {}
}

export type IatasActions
  = GetCriterioIatas
  | GetCriterioIatasSuccess
  | GetCriterioIatasFail
  | ResetIatas;
