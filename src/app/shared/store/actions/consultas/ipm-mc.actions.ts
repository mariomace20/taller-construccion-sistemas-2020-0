import { getCommonConsultaActions } from "../common-actions";
import { Action } from '@ngrx/store';
import { CriterioIpmMcRequest, CriterioBusquedaDetalleIpmMcRequest } from '../../../../consultas/models/criterios';
import { DetalleIpmMc } from '../../../../consultas/models';

export const actions = {
  ...getCommonConsultaActions('Ipm MC')
}

export class GetIpmMcCriterio implements Action {
  readonly type = actions.GET_CRITERIO_PAGINADO;
  constructor(public payload: CriterioIpmMcRequest) {}
}
export class GetIpmMcCriterioSuccess implements Action {
  readonly type = actions.GET_CRITERIO_PAGINADO_SUCCESS;
  constructor(public payload: any) {}
}
export class GetIpmMcCriterioFail implements Action {
  readonly type = actions.GET_CRITERIO_PAGINADO_FAIL;
  constructor(public payload: any) {}
}

export class GetDetalleIpmMc implements Action {
  readonly type = actions.GET_DETALLE;
  constructor(public payload: CriterioBusquedaDetalleIpmMcRequest) {};
}
export class GetDetalleIpmMcSuccess implements Action {
  readonly type = actions.GET_DETALLE_SUCCESS;
  constructor(public payload: DetalleIpmMc) {};
}
export class GetDetalleIpmMcFail implements Action {
  readonly type = actions.GET_DETALLE_FAIL;
  constructor(public payload: any) {};
}

export class ResetIpmMc implements Action {
  readonly type = actions.RESET;
  constructor(public payload = null) {}
}


export type IpmMcActions
  = GetIpmMcCriterio
  | GetIpmMcCriterioSuccess
  | GetIpmMcCriterioFail
  | GetDetalleIpmMc
  | GetDetalleIpmMcSuccess
  | GetDetalleIpmMcFail
  ;
