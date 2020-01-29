import { getCommonConsultaActions } from "../common-actions";
import { Action } from '@ngrx/store';
import { CriterioOutgoingVisaTC5 } from '../../../../consultas/models/criterios';

export const actions = {
  ...getCommonConsultaActions('OutgoingVisaTC5TCR5'),
}

export class GetDetalleTC5TCR5 implements Action {
  readonly type = actions.GET_DETALLE;
  constructor(public payload: CriterioOutgoingVisaTC5) {}
}
export class GetDetalleTC5TCR5Success implements Action {
  readonly type = actions.GET_DETALLE_SUCCESS;
  constructor(public payload: any) {}
}
export class GetDetalleTC5TCR5Fail implements Action {
  readonly type = actions.GET_DETALLE_FAIL;
  constructor(public payload: any) {}
}

export class ResetTC5TCR5 implements Action {
  readonly type = actions.RESET;
  constructor(public payload = null) {}
}

export type OutgoingVisaTC5TCR5Actions
  = GetDetalleTC5TCR5
  | GetDetalleTC5TCR5Success
  | GetDetalleTC5TCR5Fail
  | ResetTC5TCR5;
