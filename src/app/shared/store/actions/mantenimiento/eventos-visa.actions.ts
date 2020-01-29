import { Action } from '@ngrx/store';
import { EventosVisa } from '../../../../mantenimiento/models';
import { getCommonCrudActions } from '../common-actions';

export const actions = {
  ...getCommonCrudActions('EventosVisa'),
  GET_ALL_RESUMEN: '[EventosVisa] Obtener todos resumen',
  GET_ALL_RESUMEN_SUCCESS: '[EventosVisa] Obtener todos resumen correcto',
  GET_ALL_RESUMEN_FAIL: '[EventosVisa] Obtener todos resumen fallido',
  GET_EVENTO_SIN_TXN: '[EventosVisa] Obtener todos los eventos sin txn',
  GET_EVENTO_SIN_TXN_SUCCESS: '[EventosVisa] Obtener todos los eventos sin txn correcto',
  GET_EVENTO_SIN_TXN_FAIL: '[EventosVisa] Obtener todos los eventos sin txn fallido',
}

export class GetAllEventosVisa implements Action {
  readonly type = actions.GET_ALL;
  constructor(public payload = null) {}
}
export class GetAllEventosVisaSuccess implements Action {
  readonly type = actions.GET_ALL_SUCCESS;
  constructor(public payload: EventosVisa[]) {}
}
export class GetAllEventosVisaFail implements Action {
  readonly type = actions.GET_ALL_FAIL;
  constructor(public payload: any) {}
}

export class GetAllEventosVisaResumen implements Action {
  readonly type = actions.GET_ALL_RESUMEN;
  constructor(public payload = null) {}
}
export class GetAllEventosVisaResumenSuccess implements Action {
  readonly type = actions.GET_ALL_RESUMEN_SUCCESS;
  constructor(public payload: EventosVisa[]) {}
}
export class GetAllEventosVisaResumenFail implements Action {
  readonly type = actions.GET_ALL_RESUMEN_FAIL;
  constructor(public payload: any) {}
}

export class GetEventosSinTxnVisa implements Action {
  readonly type = actions.GET_EVENTO_SIN_TXN;
  constructor(public payload = null) {}
}
export class GetEventosSinTxnVisaSuccess implements Action {
  readonly type = actions.GET_EVENTO_SIN_TXN_SUCCESS;
  constructor(public payload: any[]) {}
}
export class GetEventosSinTxnVisaFail implements Action {
  readonly type = actions.GET_EVENTO_SIN_TXN_FAIL;
  constructor(public payload: any) {}
}


export class ResetEventosVisa implements Action {
  readonly type = actions.RESET;
  constructor(public payload: any = null){}
}

export type EventosVisaActions
  = GetAllEventosVisa
  | GetAllEventosVisaSuccess
  | GetAllEventosVisaFail
  | GetAllEventosVisaResumen
  | GetAllEventosVisaResumenSuccess
  | GetAllEventosVisaResumenFail
  | GetEventosSinTxnVisa
  | GetEventosSinTxnVisaSuccess
  | GetEventosSinTxnVisaFail
  | ResetEventosVisa;
