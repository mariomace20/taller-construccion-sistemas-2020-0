import { getCommonConsultaActions } from '../../common-actions';
import { Action } from '@ngrx/store';
import { CriterioBusquedaLogControlProgramaRequest, LogControlPrograma } from '../../../../../procesos/models';

export const actions = {
  ...getCommonConsultaActions('LogControlPrograma')
}

export class GetLogControlProgramaCriterio implements Action {
  readonly type = actions.GET_CRITERIO;
  constructor(public payload: CriterioBusquedaLogControlProgramaRequest) { }
}
export class GetLogControlProgramaCriterioSuccess implements Action {
  readonly type = actions.GET_CRITERIO_SUCCESS;
  constructor(public payload: LogControlPrograma[]) { }
}
export class GetLogControlProgramaCriterioFail implements Action {
  readonly type = actions.GET_CRITERIO_FAIL;
  constructor(public payload: any) { }
}

export type LogControlProgramaActions
  = GetLogControlProgramaCriterio
  | GetLogControlProgramaCriterioSuccess
  | GetLogControlProgramaCriterioFail;