import { Action } from '@ngrx/store';
import { EventosInstitucionMastercard } from '../../../../mantenimiento/models';
import { getCommonCrudActions } from '../common-actions';

export const actions = {
  ...getCommonCrudActions('EventosInstitucionMastercard'),
  GET_BY_INST : `[EventosInstitucionMastercard] Obtener por institución`,
  GET_BY_INST_SUCCESS : `[EventosInstitucionMastercard] Obtener por institución correcto`,
  GET_BY_INST_FAIL : `[EventosInstitucionMastercard] Error obtener por institución`,
}

export class AddEventosInstitucionMastercard implements Action {
  readonly type = actions.ADD;
  constructor(public payload: any) {}
}
export class AddEventosInstitucionMastercardSuccess implements Action {
  readonly type = actions.ADD_SUCCESS;
  constructor(public payload: any) {}
}
export class AddEventosInstitucionMastercardFail implements Action {
  readonly type = actions.ADD_FAIL;
  constructor(public payload: any) {}
}

export class UpdateEventosInstitucionMastercard implements Action {
  readonly type = actions.UPDATE;
  constructor(public payload: any) {}
}
export class UpdateEventosInstitucionMastercardSuccess implements Action {
  readonly type = actions.UPDATE_SUCCESS;
  constructor(public payload: any) {}
}
export class UpdateEventosInstitucionMastercardFail implements Action {
  readonly type = actions.UPDATE_FAIL;
  constructor(public payload: any) {}
}

export class DeleteEventosInstitucionMastercard implements Action {
  readonly type = actions.DELETE;
  constructor(public payload: any) {}
}
export class DeleteEventosInstitucionMastercardSuccess implements Action {
  readonly type = actions.DELETE_SUCCESS;
  constructor(public payload: any) {}
}
export class DeleteEventosInstitucionMastercardFail implements Action {
  readonly type = actions.DELETE_FAIL;
  constructor(public payload: any) {}
}

export class GetByInstMastercard implements Action {
  readonly type = actions.GET_BY_INST;
  constructor(public payload = null) {}
}
export class GetByInstMastercardSuccess implements Action {
  readonly type = actions.GET_BY_INST_SUCCESS;
  constructor(public payload: EventosInstitucionMastercard[]) {}
}
export class GetByInstMastercardFail implements Action {
  readonly type = actions.GET_BY_INST_FAIL;
  constructor(public payload: any) {}
}

export class GetAllEventosInstitucionMastercard implements Action {
  readonly type = actions.GET_ALL;
  constructor(public payload = null) {}
}
export class GetAllEventosInstitucionMastercardSuccess implements Action {
  readonly type = actions.GET_ALL_SUCCESS;
  constructor(public payload: EventosInstitucionMastercard[]) {}
}
export class GetAllEventosInstitucionMastercardFail implements Action {
  readonly type = actions.GET_ALL_FAIL;
  constructor(public payload: any) {}
}

export class ResetEventosInstitucionMastercard implements Action {
  readonly type = actions.RESET;
  constructor(public payload: any = null){}
}

export type EventosInstitucionMastercardActions
  = AddEventosInstitucionMastercard
  | AddEventosInstitucionMastercardSuccess
  | AddEventosInstitucionMastercardFail
  | UpdateEventosInstitucionMastercard
  | UpdateEventosInstitucionMastercardSuccess
  | UpdateEventosInstitucionMastercardFail
  | DeleteEventosInstitucionMastercard
  | DeleteEventosInstitucionMastercardSuccess
  | DeleteEventosInstitucionMastercardFail
  | GetAllEventosInstitucionMastercard
  | GetAllEventosInstitucionMastercardSuccess
  | GetAllEventosInstitucionMastercardFail
  | GetByInstMastercard
  | GetByInstMastercardSuccess
  | GetByInstMastercardFail
  | ResetEventosInstitucionMastercard;
