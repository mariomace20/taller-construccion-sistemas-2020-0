import { Action } from '@ngrx/store';
import { getCommonConsultaActions } from '../common-actions';
import { CriterioDcinChargeRequest, CriterioBusquedaDetalleDcinChargeMcRequest } from '../../../../consultas/models/criterios';
import { DetalleDcinCharge } from '../../../../consultas/models';

export const actions = {
  ...getCommonConsultaActions('DcinCharge')
}

export class GetCriterioDcinCharge implements Action {
  readonly type = actions.GET_CRITERIO_PAGINADO;
  constructor(public payload: CriterioDcinChargeRequest) {}
}
export class GetCriterioDcinChargeSuccess implements Action {
  readonly type = actions.GET_CRITERIO_PAGINADO_SUCCESS;
  constructor(public payload: any) {}
}
export class GetCriterioDcinChargeFail implements Action {
  readonly type = actions.GET_CRITERIO_PAGINADO_FAIL;
  constructor(public payload: any) {}
}

export class GetDetalleDcinCharge implements Action {
  readonly type = actions.GET_DETALLE;
  constructor(public payload: CriterioBusquedaDetalleDcinChargeMcRequest) {};
}
export class GetDetalleDcinChargeSuccess implements Action {
  readonly type = actions.GET_DETALLE_SUCCESS;
  constructor(public payload: DetalleDcinCharge) {};
}
export class GetDetalleDcinChargeFail implements Action {
  readonly type = actions.GET_DETALLE_FAIL;
  constructor(public payload: any) {};
}

export class ResetDcinCharge implements Action {
  readonly type = actions.RESET;
  constructor(public payload = null) {}
}

export type DcinChargeActions
  = GetCriterioDcinCharge
  | GetCriterioDcinChargeSuccess
  | GetCriterioDcinChargeFail
  | GetDetalleDcinCharge
  | GetDetalleDcinChargeSuccess
  | GetDetalleDcinChargeFail
  | ResetDcinCharge;
