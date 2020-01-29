import { getCommonConsultaActions } from "../common-actions";
import { Action } from '@ngrx/store';
import { CriterioLiberacionRequest } from '../../../../consultas/models/criterios';

export const actions = {
  ...getCommonConsultaActions('Liberadas')
}

export class GetLiberacionCriterio implements Action {
  readonly type = actions.GET_CRITERIO_PAGINADO;
  constructor(public payload: CriterioLiberacionRequest) {}
}
export class GetLiberacionCriterioSuccess implements Action {
  readonly type = actions.GET_CRITERIO_PAGINADO_SUCCESS;
  constructor(public payload: any) {}
}
export class GetLiberacionCriterioFail implements Action {
  readonly type = actions.GET_CRITERIO_PAGINADO_FAIL;
  constructor(public payload: any) {}
}

export class ResetLiberacion implements Action {
  readonly type = actions.RESET;
  constructor(public payload = null) {}
}

export type LiberacionActions
  = GetLiberacionCriterio
  | GetLiberacionCriterioSuccess
  | GetLiberacionCriterioFail
  | ResetLiberacion;
