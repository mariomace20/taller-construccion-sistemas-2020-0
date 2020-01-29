import { getCommonConsultaActions } from '../../common-actions';
import { Action } from '@ngrx/store';
import { CriterioGeneracionLogRequest, GeneracionLog } from '../../../../../procesos/models';

export const actions = {
  ...getCommonConsultaActions('GeneracionLog')
}

export class GetGeneracionLogCriterio implements Action {
  readonly type = actions.GET_CRITERIO;
  constructor(public payload: CriterioGeneracionLogRequest) { }
}
export class GetGeneracionLogCriterioSuccess implements Action {
  readonly type = actions.GET_CRITERIO_SUCCESS;
  constructor(public payload: GeneracionLog[]) { }
}
export class GetGeneracionLogCriterioFail implements Action {
  readonly type = actions.GET_CRITERIO_FAIL;
  constructor(public payload: any) { }
}

export type GeneracionLogActions
  = GetGeneracionLogCriterio
  | GetGeneracionLogCriterioSuccess
  | GetGeneracionLogCriterioFail;
