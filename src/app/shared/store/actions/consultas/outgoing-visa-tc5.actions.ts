import { getCommonConsultaActions } from "../common-actions";
import { Action } from '@ngrx/store';
import { CriterioOutgoingVisaRequest } from '../../../../consultas/models/criterios';

export const actions = {
  ...getCommonConsultaActions('OutgoingVisaTC5'),
}

export class GetCriterioTC5 implements Action {
  readonly type = actions.GET_CRITERIO_PAGINADO;
  constructor(public payload: CriterioOutgoingVisaRequest) {}
}
export class GetCriterioTC5Success implements Action {
  readonly type = actions.GET_CRITERIO_PAGINADO_SUCCESS;
  constructor(public payload: any) {}
}
export class GetCriterioTC5Fail implements Action {
  readonly type = actions.GET_CRITERIO_PAGINADO_FAIL;
  constructor(public payload: any) {}
}

export class ResetTC5 implements Action {
  readonly type = actions.RESET;
  constructor(public payload = null) {}
}


export type OutgoingVisaTC5Actions
  = GetCriterioTC5
  | GetCriterioTC5Success
  | GetCriterioTC5Fail
  | ResetTC5;
