import { Action } from '@ngrx/store';
import { TipoIrregular } from '../../../../mantenimiento/models';
import { getCommonCrudActions } from '../common-actions';

export const actions = {
  ...getCommonCrudActions('tipoIrregular'),

}

export class GetAllTipoIrregular implements Action {
  readonly type = actions.GET_ALL;
  constructor(public payload: any = null) {}
}
export class GetAllTipoIrregularSuccess implements Action {
  readonly type = actions.GET_ALL_SUCCESS;
  constructor(public payload: TipoIrregular[]) {}
}
export class GetAllTipoIrregularFail implements Action {
  readonly type = actions.GET_ALL_FAIL;
  constructor(public payload: any) {}
}

export type TipoIrregularActions
  = GetAllTipoIrregular
  | GetAllTipoIrregularSuccess
  | GetAllTipoIrregularFail
