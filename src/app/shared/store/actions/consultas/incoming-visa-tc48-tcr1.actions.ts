import { getCommonConsultaActions } from "../common-actions";
import { Action } from '@ngrx/store';

export const actions = {
  ...getCommonConsultaActions('IncomingVisaTCR1'),
}

export class GetDetalleTC48TCR1 implements Action {
  readonly type = actions.GET_DETALLE;
  constructor(public payload: any) {}
}
export class GetDetalleTC48TCR1Success implements Action {
  readonly type = actions.GET_DETALLE_SUCCESS;
  constructor(public payload: any) {}
}
export class GetDetalleTC48TCR1Fail implements Action {
  readonly type = actions.GET_DETALLE_FAIL;
  constructor(public payload: any) {}
}

export class ResetTC48TCR1 implements Action {
  readonly type = actions.RESET;
  constructor(public payload = null) {}
}

export type IncomingVisaTC48TCR1Actions
  = GetDetalleTC48TCR1
  | GetDetalleTC48TCR1Success
  | GetDetalleTC48TCR1Fail
  | ResetTC48TCR1;
