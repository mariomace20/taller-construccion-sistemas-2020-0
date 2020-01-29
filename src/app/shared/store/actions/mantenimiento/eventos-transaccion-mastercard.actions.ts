import { Action } from '@ngrx/store';
import { EventosTransaccionMastercard } from '../../../../mantenimiento/models';
import { getCommonCrudActions } from '../common-actions';

export const actions = {
  ...getCommonCrudActions('EventosTransaccionMastercard')
}

export class AddEventosTransaccionMastercard implements Action {
  readonly type = actions.ADD;
  constructor(public payload: any) {}
}
export class AddEventosTransaccionMastercardSuccess implements Action {
  readonly type = actions.ADD_SUCCESS;
  constructor(public payload: any) {}
}
export class AddEventosTransaccionMastercardFail implements Action {
  readonly type = actions.ADD_FAIL;
  constructor(public payload: any) {}
}

export class UpdateEventosTransaccionMastercard implements Action {
  readonly type = actions.UPDATE;
  constructor(public payload: any) {}
}
export class UpdateEventosTransaccionMastercardSuccess implements Action {
  readonly type = actions.UPDATE_SUCCESS;
  constructor(public payload: any) {}
}
export class UpdateEventosTransaccionMastercardFail implements Action {
  readonly type = actions.UPDATE_FAIL;
  constructor(public payload: any) {}
}

export class DeleteEventosTransaccionMastercard implements Action {
  readonly type = actions.DELETE;
  constructor(public payload: any) {}
}
export class DeleteEventosTransaccionMastercardSuccess implements Action {
  readonly type = actions.DELETE_SUCCESS;
  constructor(public payload: any) {}
}
export class DeleteEventosTransaccionMastercardFail implements Action {
  readonly type = actions.DELETE_FAIL;
  constructor(public payload: any) {}
}

export class GetAllEventosTransaccionMastercard implements Action {
  readonly type = actions.GET_ALL;
  constructor(public payload = null) {}
}
export class GetAllEventosTransaccionMastercardSuccess implements Action {
  readonly type = actions.GET_ALL_SUCCESS;
  constructor(public payload: EventosTransaccionMastercard[]) {}
}
export class GetAllEventosTransaccionMastercardFail implements Action {
  readonly type = actions.GET_ALL_FAIL;
  constructor(public payload: any) {}
}

export class ResetEventosTransaccionMastercard implements Action {
  readonly type = actions.RESET;
  constructor(public payload: any = null){}
}

export type EventosTransaccionMastercardActions
  = AddEventosTransaccionMastercard
  | AddEventosTransaccionMastercardSuccess
  | AddEventosTransaccionMastercardFail
  | UpdateEventosTransaccionMastercard
  | UpdateEventosTransaccionMastercardSuccess
  | UpdateEventosTransaccionMastercardFail
  | DeleteEventosTransaccionMastercard
  | DeleteEventosTransaccionMastercardSuccess
  | DeleteEventosTransaccionMastercardFail
  | GetAllEventosTransaccionMastercard
  | GetAllEventosTransaccionMastercardSuccess
  | GetAllEventosTransaccionMastercardFail
  | ResetEventosTransaccionMastercard;
