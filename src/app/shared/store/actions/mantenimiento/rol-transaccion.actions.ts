import { getCommonCrudActions } from '../common-actions';
import { Action } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';
import { RolTransaccion } from '../../../../mantenimiento/models';

export const actions = {
  ...getCommonCrudActions('RolTransaccion')
}

export class GetAllRolTransaccion implements Action {
  readonly type = actions.GET_ALL;
  constructor(public payload: any = null){}
}
export class GetAllRolTransaccionSuccess implements Action {
  readonly type = actions.GET_ALL_SUCCESS;
  constructor(public payload: RolTransaccion[]){}
}
export class GetAllRolTransaccionFail implements Action {
  readonly type = actions.GET_ALL_FAIL;
  constructor(public payload: HttpErrorResponse){}
}

export type RolTransaccionActions 
  = GetAllRolTransaccion
  | GetAllRolTransaccionSuccess
  | GetAllRolTransaccionFail;