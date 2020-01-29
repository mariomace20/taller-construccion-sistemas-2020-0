import { getCommonConsultaActions } from "../common-actions";
import { Action } from '@ngrx/store';
import { CriterioObservadaRequest, CriterioBusquedaDetalleObservadaRequest } from '../../../../consultas/models/criterios';
import { DetalleObservada } from '../../../../consultas/models';

export const actions = {
  ...getCommonConsultaActions('Observada')
}

export class GetObservadaCriterio implements Action {
  readonly type = actions.GET_CRITERIO_PAGINADO;
  constructor(public payload: CriterioObservadaRequest) {}
}
export class GetObservadaCriterioSuccess implements Action {
  readonly type = actions.GET_CRITERIO_PAGINADO_SUCCESS;
  constructor(public payload: any) {}
}
export class GetObservadaCriterioFail implements Action {
  readonly type = actions.GET_CRITERIO_PAGINADO_FAIL;
  constructor(public payload: any) {}
}

export class GetDetalleObservada implements Action {
  readonly type = actions.GET_DETALLE;
  constructor(public payload: CriterioBusquedaDetalleObservadaRequest) {};
}
export class GetDetalleObservadaSuccess implements Action {
  readonly type = actions.GET_DETALLE_SUCCESS;
  constructor(public payload: DetalleObservada) {};
}
export class GetDetalleObservadaFail implements Action {
  readonly type = actions.GET_DETALLE_FAIL;
  constructor(public payload: any) {};
}

export class ResetObservada implements Action {
  readonly type = actions.RESET;
  constructor(public payload: any = null) {};
}

export type ObservadaActions
  = GetObservadaCriterio
  | GetObservadaCriterioSuccess
  | GetObservadaCriterioFail
  | GetDetalleObservada
  | GetDetalleObservadaSuccess
  | GetDetalleObservadaFail
  | ResetObservada;
