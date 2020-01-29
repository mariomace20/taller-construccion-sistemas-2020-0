import { Action } from '@ngrx/store';
import { RangoBinVisa } from '../../../../consultas/models';
import { getCommonConsultaActions } from '../common-actions';
import { CriterioRangoBinVisaRequest } from '../../../../consultas/models/criterios';

export const actions = {
  ...getCommonConsultaActions('RangoBinVisa')
}

export class GetCriterioRangoBinVisa implements Action {
  readonly type = actions.GET_CRITERIO_PAGINADO;
  constructor(public payload: CriterioRangoBinVisaRequest) {}
}
export class GetCriterioRangoBinVisaSuccess implements Action {
  readonly type = actions.GET_CRITERIO_PAGINADO_SUCCESS;
  constructor(public payload: any) {}
}
export class GetCriterioRangoBinVisaFail implements Action {
  readonly type = actions.GET_CRITERIO_PAGINADO_FAIL;
  constructor(public payload: any) {}
}

export class ResetRangoBinVisa implements Action {
  readonly type = actions.RESET;
  constructor(public payload = null) {}
}


export type RangoBinVisaActions
  = GetCriterioRangoBinVisa
  | GetCriterioRangoBinVisaSuccess
  | GetCriterioRangoBinVisaFail
  | ResetRangoBinVisa;
