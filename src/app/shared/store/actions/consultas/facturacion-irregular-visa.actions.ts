import { Action } from '@ngrx/store';
import { FacturacionIrregularVisa } from '../../../../consultas/models';
import { getCommonCrudActions } from '../common-actions';

export const actions = {
  ...getCommonCrudActions('FacturacionIrregularVisa')
};

export class GetAllFacturacionIrregularVisa implements Action {
  readonly type = actions.GET_ALL;
  constructor(public payload = null) {}
}
export class GetAllFacturacionIrregularVisaSuccess implements Action {
  readonly type = actions.GET_ALL_SUCCESS;
  constructor(public payload: FacturacionIrregularVisa[]) {}
}
export class GetAllFacturacionIrregularVisaFail implements Action {
  readonly type = actions.GET_ALL_FAIL;
  constructor(public payload: any) {}
}

export class ResetFacturacionIrregularVisa implements Action {
  readonly type = actions.RESET;
  constructor(public payload: any = null) {}
}


export type FacturacionIrregularVisaActions
  = GetAllFacturacionIrregularVisa
  | GetAllFacturacionIrregularVisaSuccess
  | GetAllFacturacionIrregularVisaFail
  | ResetFacturacionIrregularVisa;
