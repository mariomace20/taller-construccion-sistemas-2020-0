import { Action } from '@ngrx/store';
import { DistribucionMcEventos } from '../../../../mantenimiento/models';
import { getCommonCrudActions } from '../common-actions';

export const actions = {
  ...getCommonCrudActions('DistribucionMcEventos')
}
export class ResetDistribucionMcEventos implements Action {
  readonly type = actions.RESET;
  constructor(public payload: any = null) {}
}

export class UpdateDistribucionMcEventos implements Action {
  readonly type = actions.UPDATE;
  constructor(public payload: any) {}
}

export class UpdateDistribucionMcEventosSuccess implements Action {
  readonly type = actions.UPDATE_SUCCESS;
  constructor(public payload: any) {}
}

export class UpdateDistribucionMcEventosFail implements Action {
  readonly type = actions.UPDATE_FAIL;
  constructor(public payload: any) {}
}

export class GetAllDistribucionMcEventos implements Action {
  readonly type = actions.GET_ALL;
  constructor(public payload = null) {}
}

export class GetAllDistribucionMcEventosSuccess implements Action {
  readonly type = actions.GET_ALL_SUCCESS;
  constructor(public payload: DistribucionMcEventos[]) {}
}
export class GetAllDistribucionMcEventosFail implements Action {
  readonly type = actions.GET_ALL_FAIL;
  constructor(public payload: any) {}
}


export type DistribucionMcEventosActions
  = UpdateDistribucionMcEventos
  | UpdateDistribucionMcEventosSuccess
  | UpdateDistribucionMcEventosFail
  | GetAllDistribucionMcEventos
  | GetAllDistribucionMcEventosSuccess
  | GetAllDistribucionMcEventosFail;
