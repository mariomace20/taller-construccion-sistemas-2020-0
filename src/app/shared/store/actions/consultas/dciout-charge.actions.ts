import { Action } from '@ngrx/store';
import { getCommonConsultaActions } from '../common-actions';
import { CriterioDcioutChargeRequest, CriterioBusquedaDetalleDcioutChargeMcRequest } from '../../../../consultas/models/criterios';
import { DetalleDcioutCharge } from '../../../../consultas/models';

export const actions = {
  ...getCommonConsultaActions('DcioutCharge')
}

export class GetCriterioDcioutCharge implements Action {
  readonly type = actions.GET_CRITERIO_PAGINADO;
  constructor(public payload: CriterioDcioutChargeRequest) {}
}
export class GetCriterioDcioutChargeSuccess implements Action {
  readonly type = actions.GET_CRITERIO_PAGINADO_SUCCESS;
  constructor(public payload: any) {}
}
export class GetCriterioDcioutChargeFail implements Action {
  readonly type = actions.GET_CRITERIO_PAGINADO_FAIL;
  constructor(public payload: any) {}
}

export class GetDetalleDcioutCharge implements Action {
  readonly type = actions.GET_DETALLE;
  constructor(public payload: CriterioBusquedaDetalleDcioutChargeMcRequest) {};
}
export class GetDetalleDcioutChargeSuccess implements Action {
  readonly type = actions.GET_DETALLE_SUCCESS;
  constructor(public payload: DetalleDcioutCharge) {};
}
export class GetDetalleDcioutChargeFail implements Action {
  readonly type = actions.GET_DETALLE_FAIL;
  constructor(public payload: any) {};
}

export class ResetDcioutCharge implements Action {
  readonly type = actions.RESET;
  constructor(public payload = null) {}
}

export type DcioutChargeActions
  = GetCriterioDcioutCharge
  | GetCriterioDcioutChargeSuccess
  | GetCriterioDcioutChargeFail
  | GetDetalleDcioutCharge
  | GetDetalleDcioutChargeSuccess
  | GetDetalleDcioutChargeFail
  | ResetDcioutCharge;
