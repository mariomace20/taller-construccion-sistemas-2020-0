import { getCommonConsultaActions } from "../common-actions";
import { Action } from '@ngrx/store';
import { CriterioIncomingVisaTC48Request } from '../../../../consultas/models/criterios';

export const actions = {
  ...getCommonConsultaActions('IncomingVisaTC48TCR0'),
}

export class GetDetalleTC48TCR0 implements Action {
  readonly type = actions.GET_DETALLE;
  constructor(public payload: any) {}
}
export class GetDetalleTC48TCR0Success implements Action {
  readonly type = actions.GET_DETALLE_SUCCESS;
  constructor(public payload: any) {}
}
export class GetDetalleTC48TCR0Fail implements Action {
  readonly type = actions.GET_DETALLE_FAIL;
  constructor(public payload: any) {}
}

export class ResetTC48TCR0 implements Action {
  readonly type = actions.RESET;
  constructor(public payload = null) {}
}


export type IncomingVisaTC48TCR0Actions
  = GetDetalleTC48TCR0
  | GetDetalleTC48TCR0Success
  | GetDetalleTC48TCR0Fail
  | ResetTC48TCR0;
