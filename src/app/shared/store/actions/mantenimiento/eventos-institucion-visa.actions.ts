import { Action } from '@ngrx/store';
import { EventosInstitucionVisa } from '../../../../mantenimiento/models';
import { getCommonCrudActions } from '../common-actions';

export const actions = {
  ...getCommonCrudActions('EventosInstitucionVisa'),
  GET_BY_INST : `[EventosInstitucionVisa] Obtener por institución`,
  GET_BY_INST_SUCCESS : `[EventosInstitucionVisa] Obtener por institución correcto`,
  GET_BY_INST_FAIL : `[EventosInstitucionVisa] Error obtener por institución`,
}

export class AddEventosInstitucionVisa implements Action {
  readonly type = actions.ADD;
  constructor(public payload: any) {}
}
export class AddEventosInstitucionVisaSuccess implements Action {
  readonly type = actions.ADD_SUCCESS;
  constructor(public payload: any) {}
}
export class AddEventosInstitucionVisaFail implements Action {
  readonly type = actions.ADD_FAIL;
  constructor(public payload: any) {}
}

export class UpdateEventosInstitucionVisa implements Action {
  readonly type = actions.UPDATE;
  constructor(public payload: any) {}
}
export class UpdateEventosInstitucionVisaSuccess implements Action {
  readonly type = actions.UPDATE_SUCCESS;
  constructor(public payload: any) {}
}
export class UpdateEventosInstitucionVisaFail implements Action {
  readonly type = actions.UPDATE_FAIL;
  constructor(public payload: any) {}
}

export class DeleteEventosInstitucionVisa implements Action {
  readonly type = actions.DELETE;
  constructor(public payload: any) {}
}
export class DeleteEventosInstitucionVisaSuccess implements Action {
  readonly type = actions.DELETE_SUCCESS;
  constructor(public payload: any) {}
}
export class DeleteEventosInstitucionVisaFail implements Action {
  readonly type = actions.DELETE_FAIL;
  constructor(public payload: any) {}
}

export class GetByInstVisa implements Action {
  readonly type = actions.GET_BY_INST;
  constructor(public payload = null) {}
}
export class GetByInstVisaSuccess implements Action {
  readonly type = actions.GET_BY_INST_SUCCESS;
  constructor(public payload: EventosInstitucionVisa[]) {}
}
export class GetByInstVisaFail implements Action {
  readonly type = actions.GET_BY_INST_FAIL;
  constructor(public payload: any) {}
}

export class GetAllEventosInstitucionVisa implements Action {
  readonly type = actions.GET_ALL;
  constructor(public payload = null) {}
}
export class GetAllEventosInstitucionVisaSuccess implements Action {
  readonly type = actions.GET_ALL_SUCCESS;
  constructor(public payload: EventosInstitucionVisa[]) {}
}
export class GetAllEventosInstitucionVisaFail implements Action {
  readonly type = actions.GET_ALL_FAIL;
  constructor(public payload: any) {}
}

export class ResetEventosInstitucionVisa implements Action {
  readonly type = actions.RESET;
  constructor(public payload: any = null){}
}

export type EventosInstitucionVisaActions
  = AddEventosInstitucionVisa
  | AddEventosInstitucionVisaSuccess
  | AddEventosInstitucionVisaFail
  | UpdateEventosInstitucionVisa
  | UpdateEventosInstitucionVisaSuccess
  | UpdateEventosInstitucionVisaFail
  | DeleteEventosInstitucionVisa
  | DeleteEventosInstitucionVisaSuccess
  | DeleteEventosInstitucionVisaFail
  | GetAllEventosInstitucionVisa
  | GetAllEventosInstitucionVisaSuccess
  | GetAllEventosInstitucionVisaFail
  | GetByInstVisa
  | GetByInstVisaSuccess
  | GetByInstVisaFail
  | ResetEventosInstitucionVisa;
