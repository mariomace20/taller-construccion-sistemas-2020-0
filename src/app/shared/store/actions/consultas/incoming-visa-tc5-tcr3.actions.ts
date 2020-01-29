import { getCommonConsultaActions } from "../common-actions";
import { Action } from '@ngrx/store';
import { CriterioIncomingVisaTC5 } from '../../../../consultas/models/criterios';

export const actions = {
    ...getCommonConsultaActions('IncomingVisaTC5TCR3'),
}

export class GetDetalleTC5TCR3 implements Action {
  readonly type = actions.GET_DETALLE;
  constructor(public payload: CriterioIncomingVisaTC5) {}
}
export class GetDetalleTC5TCR3Success implements Action {
  readonly type = actions.GET_DETALLE_SUCCESS;
  constructor(public payload: any) {}
}
export class GetDetalleTC5TCR3Fail implements Action {
  readonly type = actions.GET_DETALLE_FAIL;
  constructor(public payload: any) {}
}

export class ResetTC5TCR3 implements Action {
  readonly type = actions.RESET;
  constructor(public payload = null) {}
}

export type IncomingVisaTC5TCR3Actions
  = GetDetalleTC5TCR3
  | GetDetalleTC5TCR3Success
  | GetDetalleTC5TCR3Fail
  | ResetTC5TCR3;
