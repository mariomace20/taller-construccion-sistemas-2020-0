import { Action } from '@ngrx/store';
import { RangoBinMC } from '../../../../consultas/models';
import { getCommonConsultaActions } from '../common-actions';
import { CriterioRangoBinMCRequest } from '../../../../consultas/models/criterios';

export const actions = {
  ...getCommonConsultaActions('RangoBinMC')
}

export class GetCriterioRangoBinMC implements Action {
  readonly type = actions.GET_CRITERIO_PAGINADO;
  constructor(public payload: CriterioRangoBinMCRequest) {}
}
export class GetCriterioRangoBinMCSuccess implements Action {
  readonly type = actions.GET_CRITERIO_PAGINADO_SUCCESS;
  constructor(public payload: any) {}
}
export class GetCriterioRangoBinMCFail implements Action {
  readonly type = actions.GET_CRITERIO_PAGINADO_FAIL;
  constructor(public payload: any) {}
}

export class ResetRangoBinMC implements Action {
  readonly type = actions.RESET;
  constructor(public payload = null) {}
}

export type RangoBinMCActions
  = GetCriterioRangoBinMC
  | GetCriterioRangoBinMCSuccess
  | GetCriterioRangoBinMCFail
  | ResetRangoBinMC;
