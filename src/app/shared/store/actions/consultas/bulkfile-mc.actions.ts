import { getCommonConsultaActions } from "../common-actions";
import { Action } from '@ngrx/store';
import { CriterioBulkfileMcRequest, CriterioBusquedaDetalleBulkfileMcRequest } from '../../../../consultas/models/criterios';
import { DetalleBulkfileMc } from '../../../../consultas/models';

export const actions = {
  ...getCommonConsultaActions('Bulkfile MC')
}

export class GetBulkfileMcCriterio implements Action {
  readonly type = actions.GET_CRITERIO_PAGINADO;
  constructor(public payload: CriterioBulkfileMcRequest) {}
}
export class GetBulkfileMcCriterioSuccess implements Action {
  readonly type = actions.GET_CRITERIO_PAGINADO_SUCCESS;
  constructor(public payload: any) {}
}
export class GetBulkfileMcCriterioFail implements Action {
  readonly type = actions.GET_CRITERIO_PAGINADO_FAIL;
  constructor(public payload: any) {}
}

export class GetDetalleBulkfileMc implements Action {
  readonly type = actions.GET_DETALLE;
  constructor(public payload: CriterioBusquedaDetalleBulkfileMcRequest) {};
}
export class GetDetalleBulkfileMcSuccess implements Action {
  readonly type = actions.GET_DETALLE_SUCCESS;
  constructor(public payload: DetalleBulkfileMc) {};
}
export class GetDetalleBulkfileMcFail implements Action {
  readonly type = actions.GET_DETALLE_FAIL;
  constructor(public payload: any) {};
}

export class ResetBulkfileMc implements Action {
  readonly type = actions.RESET;
  constructor(public payload = null) {}
}

export type BulkfileMcActions
  = GetBulkfileMcCriterio
  | GetBulkfileMcCriterioSuccess
  | GetBulkfileMcCriterioFail
  | GetDetalleBulkfileMc
  | GetDetalleBulkfileMcSuccess
  | GetDetalleBulkfileMcFail
  | ResetBulkfileMc;
