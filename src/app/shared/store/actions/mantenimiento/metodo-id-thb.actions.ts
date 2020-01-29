import { Action } from '@ngrx/store';
import { MetodoIdThb } from '../../../../mantenimiento/models';
import { getCommonCrudActions } from '../common-actions';

export const actions = {
  ...getCommonCrudActions('MetodoIdThb'),
  GET_X_MEMBRESIA: `[MetodoIdThb] Obtener todos por membresia`,
  GET_X_MEMBRESIA_SUCCESS: `[MetodoIdThb] Obtener todos por membresia correcto`,
  GET_X_MEMBRESIA_FAIL: `[MetodoIdThb] Error al obtener todos por membresia`,
}

export class AddMetodoIdThb implements Action {
  readonly type = actions.ADD;
  constructor(public payload: any) {}
}
export class AddMetodoIdThbSuccess implements Action {
  readonly type = actions.ADD_SUCCESS;
  constructor(public payload: any) {}
}
export class AddMetodoIdThbFail implements Action {
  readonly type = actions.ADD_FAIL;
  constructor(public payload: any) {}
}

export class UpdateMetodoIdThb implements Action {
  readonly type = actions.UPDATE;
  constructor(public payload: any) {}
}
export class UpdateMetodoIdThbSuccess implements Action {
  readonly type = actions.UPDATE_SUCCESS;
  constructor(public payload: any) {}
}
export class UpdateMetodoIdThbFail implements Action {
  readonly type = actions.UPDATE_FAIL;
  constructor(public payload: any) {}
}

export class DeleteMetodoIdThb implements Action {
  readonly type = actions.DELETE;
  constructor(public payload: any) {}
}
export class DeleteMetodoIdThbSuccess implements Action {
  readonly type = actions.DELETE_SUCCESS;
  constructor(public payload: any) {}
}
export class DeleteMetodoIdThbFail implements Action {
  readonly type = actions.DELETE_FAIL;
  constructor(public payload: any) {}
}

export class GetAllMetodoIdThb implements Action {
  readonly type = actions.GET_ALL;
  constructor(public payload = null) {}
}
export class GetAllMetodoIdThbSuccess implements Action {
  readonly type = actions.GET_ALL_SUCCESS;
  constructor(public payload: MetodoIdThb[]) {}
}
export class GetAllMetodoIdThbFail implements Action {
  readonly type = actions.GET_ALL_FAIL;
  constructor(public payload: any) {}
}

export class GetMetodoIdThbXMembresia implements Action {
  readonly type = actions.GET_X_MEMBRESIA;
  constructor(public payload : any) {}
}
export class GetMetodoIdThbXMembresiaSuccess implements Action {
  readonly type = actions.GET_X_MEMBRESIA_SUCCESS;
  constructor(public payload: MetodoIdThb[]) {}
}
export class GetMetodoIdThbXMembresiaFail implements Action {
  readonly type = actions.GET_X_MEMBRESIA_FAIL;
  constructor(public payload: any) {}
}

export class DownloadMetodoIdThb implements Action {
  readonly type = actions.DOWNLOAD;
  constructor(public payload: any = null) { }
}
export class DownloadMetodoIdThbSuccess implements Action {
  readonly type = actions.DOWNLOAD_SUCCESS;
  constructor(public payload: any) { }
}
export class DownloadMetodoIdThbFail implements Action {
  readonly type = actions.DOWNLOAD_FAIL;
  constructor(public payload: any) { }
}
export class ResetMetodoIdThb implements Action {
  readonly type = actions.RESET;
  constructor(public payload: any = null) {};
}

export type MetodoIdThbActions
  = AddMetodoIdThb
  | AddMetodoIdThbSuccess
  | AddMetodoIdThbFail
  | UpdateMetodoIdThb
  | UpdateMetodoIdThbSuccess
  | UpdateMetodoIdThbFail
  | DeleteMetodoIdThb
  | DeleteMetodoIdThbSuccess
  | DeleteMetodoIdThbFail
  | GetAllMetodoIdThb
  | GetAllMetodoIdThbSuccess
  | GetAllMetodoIdThbFail
  | GetMetodoIdThbXMembresia
  | GetMetodoIdThbXMembresiaSuccess
  | GetMetodoIdThbXMembresiaFail
  | DownloadMetodoIdThb
  | DownloadMetodoIdThbSuccess
  | DownloadMetodoIdThbFail
  | ResetMetodoIdThb;
