import { Action } from '@ngrx/store';
import { getCommonConsultaActions } from '../common-actions';
import { CriterioIrregularRequest } from '../../../../consultas/models/criterios';

export const actions = {
  ...getCommonConsultaActions('Irregular')
}

export class GetCriterioIrregular implements Action {
  readonly type = actions.GET_CRITERIO_PAGINADO;
  constructor(public payload: CriterioIrregularRequest) {}
}
export class GetCriterioIrregularSuccess implements Action {
  readonly type = actions.GET_CRITERIO_PAGINADO_SUCCESS;
  constructor(public payload: any) {}
}
export class GetCriterioIrregularFail implements Action {
  readonly type = actions.GET_CRITERIO_PAGINADO_FAIL;
  constructor(public payload: any) {}
}

export class ResetIrregular implements Action {
  readonly type = actions.RESET;
  constructor(public payload = null) {}
}

export type IrregularActions
  = GetCriterioIrregular
  | GetCriterioIrregularSuccess
  | GetCriterioIrregularFail
  | ResetIrregular;
