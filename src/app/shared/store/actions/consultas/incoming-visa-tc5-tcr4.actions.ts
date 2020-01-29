import { getCommonConsultaActions } from "../common-actions";
import { Action } from '@ngrx/store';
import { CriterioIncomingVisaTC5 } from '../../../../consultas/models/criterios';

export const actions = {
  ...getCommonConsultaActions('IncomingVisaTC5TCR4'),
}

export class GetDetalleTC5TCR4 implements Action {
  readonly type = actions.GET_DETALLE;
  constructor(public payload: CriterioIncomingVisaTC5) {}
}
export class GetDetalleTC5TCR4Success implements Action {
  readonly type = actions.GET_DETALLE_SUCCESS;
  constructor(public payload: any) {}
}
export class GetDetalleTC5TCR4Fail implements Action {
  readonly type = actions.GET_DETALLE_FAIL;
  constructor(public payload: any) {}
}

export class ResetTC5TCR4 implements Action {
  readonly type = actions.RESET;
  constructor(public payload = null) {}
}

export type IncomingVisaTC5TCR4Actions
  = GetDetalleTC5TCR4
  | GetDetalleTC5TCR4Success
  | GetDetalleTC5TCR4Success
  | ResetTC5TCR4;
