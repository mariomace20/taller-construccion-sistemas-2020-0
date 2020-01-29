import { Action } from '@ngrx/store';

import { getCommonCrudActions } from '../common-actions';
import { ParametroRep } from '../../../../reportes/config-generales/models/parametro-rep.model';

export const actions = {
  ...getCommonCrudActions('ParametroRep')
}

export class GetAllParametroRep implements Action {
  readonly type = actions.GET_ALL;
  constructor(public payload = null) {}
}
export class GetAllParametroRepSuccess implements Action {
  readonly type = actions.GET_ALL_SUCCESS;
  constructor(public payload: ParametroRep[]) {}
}
export class GetAllParametroRepFail implements Action {
  readonly type = actions.GET_ALL_FAIL;
  constructor(public payload: any) {}
}

export class UpdateParametroRep implements Action {
  readonly type = actions.UPDATE;
  constructor(public payload: any) {}
}
export class UpdateParametroRepSuccess implements Action {
  readonly type = actions.UPDATE_SUCCESS;
  constructor(public payload: any) {}
}
export class UpdateParametroRepFail implements Action {
  readonly type = actions.UPDATE_FAIL;
  constructor(public payload: any) {}
}


export type ParametroRepActions
  = UpdateParametroRep
  | UpdateParametroRepSuccess
  | UpdateParametroRepFail
  | GetAllParametroRep
  | GetAllParametroRepSuccess
  | GetAllParametroRepFail;
