import { Action } from '@ngrx/store';
import { EventosTransaccionVisa } from '../../../../mantenimiento/models';
import { getCommonCrudActions } from '../common-actions';

export const actions = {
  ...getCommonCrudActions('EventosTransaccionVisa'),
}

export class AddEventosTransaccionVisa implements Action {
  readonly type = actions.ADD;
  constructor(public payload: any) {}
}
export class AddEventosTransaccionVisaSuccess implements Action {
  readonly type = actions.ADD_SUCCESS;
  constructor(public payload: any) {}
}
export class AddEventosTransaccionVisaFail implements Action {
  readonly type = actions.ADD_FAIL;
  constructor(public payload: any) {}
}

export class UpdateEventosTransaccionVisa implements Action {
  readonly type = actions.UPDATE;
  constructor(public payload: any) {}
}
export class UpdateEventosTransaccionVisaSuccess implements Action {
  readonly type = actions.UPDATE_SUCCESS;
  constructor(public payload: any) {}
}
export class UpdateEventosTransaccionVisaFail implements Action {
  readonly type = actions.UPDATE_FAIL;
  constructor(public payload: any) {}
}

export class DeleteEventosTransaccionVisa implements Action {
  readonly type = actions.DELETE;
  constructor(public payload: any) {}
}
export class DeleteEventosTransaccionVisaSuccess implements Action {
  readonly type = actions.DELETE_SUCCESS;
  constructor(public payload: any) {}
}
export class DeleteEventosTransaccionVisaFail implements Action {
  readonly type = actions.DELETE_FAIL;
  constructor(public payload: any) {}
}

export class GetAllEventosTransaccionVisa implements Action {
  readonly type = actions.GET_ALL;
  constructor(public payload = null) {}
}
export class GetAllEventosTransaccionVisaSuccess implements Action {
  readonly type = actions.GET_ALL_SUCCESS;
  constructor(public payload: EventosTransaccionVisa[]) {}
}
export class GetAllEventosTransaccionVisaFail implements Action {
  readonly type = actions.GET_ALL_FAIL;
  constructor(public payload: any) {}
}

export class ResetEventosTransaccionVisa implements Action {
  readonly type = actions.RESET;
  constructor(public payload: any = null){}
}

export type EventosTransaccionVisaActions
  = AddEventosTransaccionVisa
  | AddEventosTransaccionVisaSuccess
  | AddEventosTransaccionVisaFail
  | UpdateEventosTransaccionVisa
  | UpdateEventosTransaccionVisaSuccess
  | UpdateEventosTransaccionVisaFail
  | DeleteEventosTransaccionVisa
  | DeleteEventosTransaccionVisaSuccess
  | DeleteEventosTransaccionVisaFail
  | GetAllEventosTransaccionVisa
  | GetAllEventosTransaccionVisaSuccess
  | GetAllEventosTransaccionVisaFail
  | ResetEventosTransaccionVisa;
