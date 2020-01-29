import { Action } from '@ngrx/store';
import { getCommonConsultaActions } from "../common-actions";
import { EstablecimientoVisanetComis } from '../../../../consultas/models';
import { CriterioEstablecimientoVisanetRequest } from '../../../../consultas/models/criterios';
export const actions = {
  ...getCommonConsultaActions('EstablecimientoVisanet'),
}

export class GetEstablecimientoVisanetComis implements Action {
  readonly type = actions.GET_DETALLE_COMISION;
  constructor(public payload: CriterioEstablecimientoVisanetRequest) {}
}
export class GetEstablecimientoVisanetComisSuccess implements Action {
  readonly type = actions.GET_DETALLE_COMISION_SUCCESS;
  constructor(public payload: EstablecimientoVisanetComis) {}
}
export class GetEstablecimientoVisanetComisFail implements Action {
  readonly type = actions.GET_DETALLE_COMISION_FAIL;
  constructor(public payload: any) {}
}

export class ResetEstablecimientoVisanetComis implements Action {
  readonly type = actions.RESET;
  constructor(public payload = null) {}
}

export type EstablecimientoVisanetComisActions
  = GetEstablecimientoVisanetComis
  | GetEstablecimientoVisanetComisSuccess
  | GetEstablecimientoVisanetComisFail
  | ResetEstablecimientoVisanetComis;
