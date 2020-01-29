import { Action } from '@ngrx/store';
import { GiroNegocio } from '../../../../mantenimiento/models';
import { getCommonCrudActions } from '../common-actions';

export const actions = {
  ...getCommonCrudActions('GiroNegocio'),
  GET_X_MEMBRESIA: `[GiroNegocio] Obtener todos por membresía`,
  GET_X_MEMBRESIA_SUCCESS: `[GiroNegocio] Obtener todos por membresía correcto`,
  GET_X_MEMBRESIA_FAIL: `[GiroNegocio] Error al obtener todos por membresía`,
}

export class GetAllGiroNegocio implements Action {
  readonly type = actions.GET_ALL;
  constructor(public payload = null) {}
}
export class GetAllGiroNegocioSuccess implements Action {
  readonly type = actions.GET_ALL_SUCCESS;
  constructor(public payload: GiroNegocio[]) {}
}
export class GetAllGiroNegocioFail implements Action {
  readonly type = actions.GET_ALL_FAIL;
  constructor(public payload: any) {}
}

export class GetGiroNegocioXMembresia implements Action {
  readonly type = actions.GET_X_MEMBRESIA;
  constructor(public payload : any ) {}
}
export class GetGiroNegocioXMembresiaSuccess implements Action {
  readonly type = actions.GET_X_MEMBRESIA_SUCCESS;
  constructor(public payload: GiroNegocio[]) {}
}
export class GetGiroNegocioXMembresiaFail implements Action {
  readonly type = actions.GET_X_MEMBRESIA_FAIL;
  constructor(public payload: any) {}
}

export type GiroNegocioActions
  = GetAllGiroNegocio
  | GetAllGiroNegocioSuccess
  | GetAllGiroNegocioFail
  | GetGiroNegocioXMembresia
  | GetGiroNegocioXMembresiaSuccess
  | GetGiroNegocioXMembresiaFail;
