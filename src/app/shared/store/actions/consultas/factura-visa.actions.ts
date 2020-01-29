import { getCommonConsultaActions } from "../common-actions";
import { Action } from '@ngrx/store';
import { CriterioFacturaVisaRequest, CriterioBusquedaDetalleFacturaVisaRequest } from '../../../../consultas/models/criterios';

export const actions = {
  ...getCommonConsultaActions('Factura Visa')
}

export class GetFacturaVisaCriterio implements Action {
  readonly type = actions.GET_CRITERIO_PAGINADO;
  constructor(public payload: CriterioFacturaVisaRequest) {}
}
export class GetFacturaVisaCriterioSuccess implements Action {
  readonly type = actions.GET_CRITERIO_PAGINADO_SUCCESS;
  constructor(public payload: any) {}
}
export class GetFacturaVisaCriterioFail implements Action {
  readonly type = actions.GET_CRITERIO_PAGINADO_FAIL;
  constructor(public payload: any) {}
}

export class ResetFacturaVisa implements Action {
  readonly type = actions.RESET;
  constructor(public payload = null) {}
}

export type FacturaVisaActions
  = GetFacturaVisaCriterio
  | GetFacturaVisaCriterioSuccess
  | GetFacturaVisaCriterioFail
  | ResetFacturaVisa;
