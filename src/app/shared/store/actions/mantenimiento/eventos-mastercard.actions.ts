import { Action } from '@ngrx/store';
import { EventosMastercard } from '../../../../mantenimiento/models';
import { getCommonCrudActions } from '../common-actions';

export const actions = {
  ...getCommonCrudActions('EventosMastercard')
}

export class GetAllEventosMastercard implements Action {
  readonly type = actions.GET_ALL;
  constructor(public payload = null) {}
}
export class GetAllEventosMastercardSuccess implements Action {
  readonly type = actions.GET_ALL_SUCCESS;
  constructor(public payload: EventosMastercard[]) {}
}
export class GetAllEventosMastercardFail implements Action {
  readonly type = actions.GET_ALL_FAIL;
  constructor(public payload: any) {}
}

export class ResetEventosMastercard implements Action {
  readonly type = actions.RESET;
  constructor(public payload: any = null){}
}

export type EventosMastercardActions
  = GetAllEventosMastercard
  | GetAllEventosMastercardSuccess
  | GetAllEventosMastercardFail
  | ResetEventosMastercard;
