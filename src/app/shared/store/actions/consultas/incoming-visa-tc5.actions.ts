import { getCommonConsultaActions } from "../common-actions";
import { Action } from '@ngrx/store';
import { CriterioIncomingVisaRequest } from '../../../../consultas/models/criterios';

export const actions = {
  ...getCommonConsultaActions('IncomingVisaTC5'),
}

export class GetCriterioTC5 implements Action {
  readonly type = actions.GET_CRITERIO_PAGINADO;
  constructor(public payload: CriterioIncomingVisaRequest) {}
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


export type IncomingVisaTC5Actions
  = GetCriterioTC5
  | GetCriterioTC5Success
  | GetCriterioTC5Fail
  | ResetTC5;
