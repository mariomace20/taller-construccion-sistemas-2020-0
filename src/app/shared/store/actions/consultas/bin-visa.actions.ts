import { Action } from '@ngrx/store';
import { getCommonConsultaActions } from '../common-actions';
import { CriterioBinVisaRequest } from '../../../../consultas/models/criterios';

export const actions = {
  ...getCommonConsultaActions('BinVisa')
}

export class GetCriterioBinVisa implements Action {
  readonly type = actions.GET_CRITERIO_PAGINADO;
  constructor(public payload: CriterioBinVisaRequest) {}
}
export class GetCriterioBinVisaSuccess implements Action {
  readonly type = actions.GET_CRITERIO_PAGINADO_SUCCESS;
  constructor(public payload: any) {}
}
export class GetCriterioBinVisaFail implements Action {
  readonly type = actions.GET_CRITERIO_PAGINADO_FAIL;
  constructor(public payload: any) {}
}

export class ResetBinVisa implements Action {
  readonly type = actions.RESET;
  constructor(public payload = null) {}
}

export type BinVisaActions
  = GetCriterioBinVisa
  | GetCriterioBinVisaSuccess
  | GetCriterioBinVisaFail
  | ResetBinVisa;
