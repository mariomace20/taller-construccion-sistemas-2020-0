import { Action } from '@ngrx/store';
import { DistribucionVisaEventos } from '../../../../mantenimiento/models';
import { getCommonCrudActions } from '../common-actions';

export const actions = {
  ...getCommonCrudActions('DistribucionVisaEventos')
}
export class ResetDistribucionVisaEventos implements Action {
  readonly type = actions.RESET;
  constructor(public payload: any = null) {}
}

export class UpdateDistribucionVisaEventos implements Action {
  readonly type = actions.UPDATE;
  constructor(public payload: any) {}
}

export class UpdateDistribucionVisaEventosSuccess implements Action {
  readonly type = actions.UPDATE_SUCCESS;
  constructor(public payload: any) {}
}

export class UpdateDistribucionVisaEventosFail implements Action {
  readonly type = actions.UPDATE_FAIL;
  constructor(public payload: any) {}
}

export class GetAllDistribucionVisaEventos implements Action {
  readonly type = actions.GET_ALL;
  constructor(public payload = null) {}
}

export class GetAllDistribucionVisaEventosSuccess implements Action {
  readonly type = actions.GET_ALL_SUCCESS;
  constructor(public payload: DistribucionVisaEventos[]) {}
}
export class GetAllDistribucionVisaEventosFail implements Action {
  readonly type = actions.GET_ALL_FAIL;
  constructor(public payload: any) {}
}


export type DistribucionVisaEventosActions
  = UpdateDistribucionVisaEventos
  | UpdateDistribucionVisaEventosSuccess
  | UpdateDistribucionVisaEventosFail
  | GetAllDistribucionVisaEventos
  | GetAllDistribucionVisaEventosSuccess
  | GetAllDistribucionVisaEventosFail;