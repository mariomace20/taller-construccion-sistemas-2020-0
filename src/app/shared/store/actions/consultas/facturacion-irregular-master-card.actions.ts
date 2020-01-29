import { Action } from '@ngrx/store';
import { FacturacionIrregularMasterCard } from '../../../../consultas/models';
import { getCommonCrudActions } from '../common-actions';

export const actions = {
  ...getCommonCrudActions('FacturacionIrregularMasterCard')
};

export class GetAllFacturacionIrregularMasterCard implements Action {
  readonly type = actions.GET_ALL;
  constructor(public payload = null) {}
}
export class GetAllFacturacionIrregularMasterCardSuccess implements Action {
  readonly type = actions.GET_ALL_SUCCESS;
  constructor(public payload: FacturacionIrregularMasterCard[]) {}
}
export class GetAllFacturacionIrregularMasterCardFail implements Action {
  readonly type = actions.GET_ALL_FAIL;
  constructor(public payload: any) {}
}

export class ResetFacturacionIrregularMasterCard implements Action {
  readonly type = actions.RESET;
  constructor(public payload: any = null) {}
}


export type FacturacionIrregularMasterCardActions
  = GetAllFacturacionIrregularMasterCard
  | GetAllFacturacionIrregularMasterCardSuccess
  | GetAllFacturacionIrregularMasterCardFail
  | ResetFacturacionIrregularMasterCard;
