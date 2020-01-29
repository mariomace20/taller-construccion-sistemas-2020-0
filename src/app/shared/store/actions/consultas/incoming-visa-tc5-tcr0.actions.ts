import { getCommonConsultaActions } from "../common-actions";
import { Action } from '@ngrx/store';
import { CriterioIncomingVisaRequest } from '../../../../consultas/models/criterios';

export const actions = {
  ...getCommonConsultaActions('IncomingVisaTC5TCR0'),
}

export class GetDetalleTC5TCR0 implements Action {
  readonly type = actions.GET_DETALLE;
  constructor(public payload: any) {}
}
export class GetDetalleTC5TCR0Success implements Action {
  readonly type = actions.GET_DETALLE_SUCCESS;
  constructor(public payload: any) {}
}
export class GetDetalleTC5TCR0Fail implements Action {
  readonly type = actions.GET_DETALLE_FAIL;
  constructor(public payload: any) {}
}

export class ResetTC5TCR0 implements Action {
  readonly type = actions.RESET;
  constructor(public payload = null) {}
}

export type IncomingVisaTC5TCR0Actions
  = GetDetalleTC5TCR0
  | GetDetalleTC5TCR0Success
  | GetDetalleTC5TCR0Fail
  | ResetTC5TCR0;
