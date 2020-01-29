import { Action } from '@ngrx/store';
import { getCommonConsultaActions } from '../common-actions';
import { CriterioPMPRequest } from '../../../../consultas/models/criterios';
import { PMP } from '../../../../consultas/models';

export const actions = {
  ...getCommonConsultaActions('PMP')
}

export class GetCriterioPMP implements Action {
  readonly type = actions.GET_CRITERIO_PAGINADO;
  constructor(public payload: CriterioPMPRequest) {}
}
export class GetCriterioPMPSuccess implements Action {
  readonly type = actions.GET_CRITERIO_PAGINADO_SUCCESS;
  constructor(public payload: any) {}
}
export class GetCriterioPMPFail implements Action {
  readonly type = actions.GET_CRITERIO_PAGINADO_FAIL;
  constructor(public payload: any) {}
}

export class ResetPMP implements Action {
  readonly type = actions.RESET;
  constructor(public payload = null) {}
}

export type PMPActions
  = GetCriterioPMP
  | GetCriterioPMPSuccess
  | GetCriterioPMPFail
  | ResetPMP;
