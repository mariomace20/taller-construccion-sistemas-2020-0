import { Action } from '@ngrx/store';
import { ModoEntradaPos } from '../../../../mantenimiento/models';
import { getCommonCrudActions } from '../common-actions';

export const actions = {
  ...getCommonCrudActions('ModoEntradaPos'),
  GET_X_MEMBRESIA: `[ModoEntradaPos] Obtener todos por membresía`,
  GET_X_MEMBRESIA_SUCCESS: `[ModoEntradaPos] Obtener todos por membresía correcto`,
  GET_X_MEMBRESIA_FAIL: `[ModoEntradaPos] Error al obtener todos por membresía`,
}

export class AddModoEntradaPos implements Action {
  readonly type = actions.ADD;
  constructor(public payload: any) {}
}
export class AddModoEntradaPosSuccess implements Action {
  readonly type = actions.ADD_SUCCESS;
  constructor(public payload: any) {}
}
export class AddModoEntradaPosFail implements Action {
  readonly type = actions.ADD_FAIL;
  constructor(public payload: any) {}
}

export class UpdateModoEntradaPos implements Action {
  readonly type = actions.UPDATE;
  constructor(public payload: any) {}
}
export class UpdateModoEntradaPosSuccess implements Action {
  readonly type = actions.UPDATE_SUCCESS;
  constructor(public payload: any) {}
}
export class UpdateModoEntradaPosFail implements Action {
  readonly type = actions.UPDATE_FAIL;
  constructor(public payload: any) {}
}

export class DeleteModoEntradaPos implements Action {
  readonly type = actions.DELETE;
  constructor(public payload: any) {}
}
export class DeleteModoEntradaPosSuccess implements Action {
  readonly type = actions.DELETE_SUCCESS;
  constructor(public payload: any) {}
}
export class DeleteModoEntradaPosFail implements Action {
  readonly type = actions.DELETE_FAIL;
  constructor(public payload: any) {}
}

export class GetAllModoEntradaPos implements Action {
  readonly type = actions.GET_ALL;
  constructor(public payload = null) {}
}
export class GetAllModoEntradaPosSuccess implements Action {
  readonly type = actions.GET_ALL_SUCCESS;
  constructor(public payload: ModoEntradaPos[]) {}
}
export class GetAllModoEntradaPosFail implements Action {
  readonly type = actions.GET_ALL_FAIL;
  constructor(public payload: any) {}
}

export class GetModoEntradaPosXMembresia implements Action {
  readonly type = actions.GET_X_MEMBRESIA;
  constructor(public payload : any ) {}
}
export class GetModoEntradaPosXMembresiaSuccess implements Action {
  readonly type = actions.GET_X_MEMBRESIA_SUCCESS;
  constructor(public payload: ModoEntradaPos[]) {}
}
export class GetModoEntradaPosXMembresiaFail implements Action {

  readonly type = actions.GET_X_MEMBRESIA_FAIL;
  constructor(public payload: any) {}
}

export class DownloadModoEntradaPos implements Action {
  readonly type = actions.DOWNLOAD;
  constructor(public payload: any = null) { }
}
export class DownloadModoEntradaPosSuccess implements Action {
  readonly type = actions.DOWNLOAD_SUCCESS;
  constructor(public payload: any) { }
}
export class DownloadModoEntradaPosFail implements Action {
  readonly type = actions.DOWNLOAD_FAIL;
  constructor(public payload: any) { }
}

export class ResetModoEntradaPos implements Action {
  readonly type = actions.RESET;
  constructor(public payload: any = null) {};
}

export type ModoEntradaPosActions
  = AddModoEntradaPos
  | AddModoEntradaPosSuccess
  | AddModoEntradaPosFail
  | UpdateModoEntradaPos
  | UpdateModoEntradaPosSuccess
  | UpdateModoEntradaPosFail
  | DeleteModoEntradaPos
  | DeleteModoEntradaPosSuccess
  | DeleteModoEntradaPosFail
  | GetAllModoEntradaPos
  | GetAllModoEntradaPosSuccess
  | GetAllModoEntradaPosFail
  | GetModoEntradaPosXMembresia
  | GetModoEntradaPosXMembresiaSuccess
  | GetModoEntradaPosXMembresiaFail
  | DownloadModoEntradaPos
  | DownloadModoEntradaPosSuccess
  | DownloadModoEntradaPosFail
  | ResetModoEntradaPos;
