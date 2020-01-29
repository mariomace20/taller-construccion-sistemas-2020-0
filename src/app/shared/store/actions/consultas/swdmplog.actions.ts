import { getCommonConsultaActions } from "../common-actions";
import { Action } from '@ngrx/store';
import { CriterioSwdmplogRequest, CriterioBusquedaDetalleSwdmplog } from '../../../../consultas/models/criterios';
import { DetalleSwdmplog } from '../../../../consultas/models';

export const actions = {
  ...getCommonConsultaActions('swdmplog')
}

export class GetSwdmplogCriterio implements Action {
  readonly type = actions.GET_CRITERIO;
  constructor(public payload: CriterioSwdmplogRequest) {}
}
export class GetSwdmplogCriterioSuccess implements Action {
  readonly type = actions.GET_CRITERIO_SUCCESS;
  constructor(public payload: any) {}
}
export class GetSwdmplogCriterioFail implements Action {
  readonly type = actions.GET_CRITERIO_FAIL;
  constructor(public payload: any) {}
}

export class GetSwdmplogCriterioPaginado implements Action {
  readonly type = actions.GET_CRITERIO_PAGINADO;
  constructor(public payload: CriterioSwdmplogRequest) {}
}
export class GetSwdmplogCriterioPaginadoSuccess implements Action {
  readonly type = actions.GET_CRITERIO_PAGINADO_SUCCESS;
  constructor(public payload: any) {}
}
export class GetSwdmplogCriterioPaginadoFail implements Action {
  readonly type = actions.GET_CRITERIO_PAGINADO_FAIL;
  constructor(public payload: any) {}
}

export class GetDetalleSwdmplog implements Action {
  readonly type = actions.GET_DETALLE;
  constructor(public payload: CriterioBusquedaDetalleSwdmplog) {};
}
export class GetDetalleSwdmplogSuccess implements Action {
  readonly type = actions.GET_DETALLE_SUCCESS;
  constructor(public payload: DetalleSwdmplog) {};
}
export class GetDetalleSwdmplogFail implements Action {
  readonly type = actions.GET_DETALLE_FAIL;
  constructor(public payload: any) {};
}

export class ResetSwdmplog implements Action {
  readonly type = actions.RESET;
  constructor(public payload: any = null) {}
}

export type SwdmplogActions
  = GetSwdmplogCriterio
  | GetSwdmplogCriterioSuccess
  | GetSwdmplogCriterioFail
  | GetSwdmplogCriterioPaginado
  | GetSwdmplogCriterioPaginadoSuccess
  | GetSwdmplogCriterioPaginadoFail
  | GetDetalleSwdmplog
  | GetDetalleSwdmplogSuccess
  | GetDetalleSwdmplogFail
  | ResetSwdmplog;
