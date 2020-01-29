import { getCommonConsultaActions } from "../common-actions";
import { Action } from '@ngrx/store';
import { CriterioIncomingVisaTC5 } from '../../../../consultas/models/criterios';

export const actions = {
  ...getCommonConsultaActions('IncomingVisaTC5TCR1'),
}

export class GetDetalleTC5TCR1 implements Action {
  readonly type = actions.GET_DETALLE;
  constructor(public payload: CriterioIncomingVisaTC5) {}
}
export class GetDetalleTC5TCR1Success implements Action {
  readonly type = actions.GET_DETALLE_SUCCESS;
  constructor(public payload: any) {}
}
export class GetDetalleTC5TCR1Fail implements Action {
  readonly type = actions.GET_DETALLE_FAIL;
  constructor(public payload: any) {}
}

export class ResetTC5TCR1 implements Action {
  readonly type = actions.RESET;
  constructor(public payload = null) {}
}

export type IncomingVisaTC5TCR1Actions
  = GetDetalleTC5TCR1
  | GetDetalleTC5TCR1Success
  | GetDetalleTC5TCR1Fail
  | ResetTC5TCR1;
