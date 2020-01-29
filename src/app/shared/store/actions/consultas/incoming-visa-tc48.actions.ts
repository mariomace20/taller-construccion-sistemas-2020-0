import { getCommonConsultaActions } from "../common-actions";
import { Action } from '@ngrx/store';
import { CriterioIncomingVisaTC48Request } from '../../../../consultas/models/criterios';

export const actions = {
  ...getCommonConsultaActions('IncomingVisaTC48'),
}

export class GetCriterioTC48 implements Action {
  readonly type = actions.GET_CRITERIO_PAGINADO;
  constructor(public payload:CriterioIncomingVisaTC48Request) {}
}
export class GetCriterioTC48Success implements Action {
  readonly type = actions.GET_CRITERIO_PAGINADO_SUCCESS;
  constructor(public payload: any) {}
}
export class GetCriterioTC48Fail implements Action {
  readonly type = actions.GET_CRITERIO_PAGINADO_FAIL;
  constructor(public payload: any) {}
}

export class ResetTC48 implements Action {
  readonly type = actions.RESET;
  constructor(public payload = null) {}
}

export type IncomingVisaTC48Actions
  = GetCriterioTC48
  | GetCriterioTC48Success
  | GetCriterioTC48Fail
  | ResetTC48;
