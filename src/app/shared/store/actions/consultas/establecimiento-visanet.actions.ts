import{Action} from '@ngrx/store';
import { getCommonConsultaActions } from "../common-actions";
import{CriterioEstablecimientoVisanetRequest} from '../../../../consultas/models/criterios';
import { EstablecimientoVisanet } from '../../../../consultas/models';
export const actions = {
  ...getCommonConsultaActions('EstablecimientoVisanet'),
}

export class GetCriterioEstablecimientoVisanet implements Action {
  readonly type = actions.GET_CRITERIO_PAGINADO;
  constructor(public payload: CriterioEstablecimientoVisanetRequest) {}
}
export class GetCriterioEstablecimientoVisanetSuccess implements Action {
  readonly type = actions.GET_CRITERIO_PAGINADO_SUCCESS;
  constructor(public payload: EstablecimientoVisanet) {}
}
export class GetCriterioEstablecimientoVisanetFail implements Action {
  readonly type = actions.GET_CRITERIO_PAGINADO_FAIL;
  constructor(public payload: any) {}
}

export class ResetEstablecimientoVisanet implements Action {
  readonly type = actions.RESET;
  constructor(public payload = null) {}
}

export type EstablecimientoVisanetActions
  = GetCriterioEstablecimientoVisanet
  | GetCriterioEstablecimientoVisanetSuccess
  | GetCriterioEstablecimientoVisanetFail
  | ResetEstablecimientoVisanet;
