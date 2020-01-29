import { getCommonConsultaActions } from "../common-actions";
import { Action } from '@ngrx/store';
import { CriterioFacturaMCRequest, CriterioBusquedaDetalleFacturaMCRequest } from '../../../../consultas/models/criterios';

export const actions = {
  ...getCommonConsultaActions('Factura MC')
}

export class GetFacturaMCCriterio implements Action {
  readonly type = actions.GET_CRITERIO_PAGINADO;
  constructor(public payload: CriterioFacturaMCRequest) {}
}
export class GetFacturaMCCriterioSuccess implements Action {
  readonly type = actions.GET_CRITERIO_PAGINADO_SUCCESS;
  constructor(public payload: any) {}
}
export class GetFacturaMCCriterioFail implements Action {
  readonly type = actions.GET_CRITERIO_PAGINADO_FAIL;
  constructor(public payload: any) {}
}

export class ResetFacturaMC implements Action {
  readonly type = actions.RESET;
  constructor(public payload = null) {}
}

export type FacturaMCActions
  = GetFacturaMCCriterio
  | GetFacturaMCCriterioSuccess
  | GetFacturaMCCriterioFail
  | ResetFacturaMC;
