import { Action } from '@ngrx/store';
import { Pais } from '../../../../mantenimiento/models';
import { getCommonCrudActions } from '../common-actions';

export const actions = {
  ...getCommonCrudActions('Pais')
}

export class AddPais implements Action {
  readonly type = actions.ADD;
  constructor(public payload: any) {}
}
export class AddPaisSuccess implements Action {
  readonly type = actions.ADD_SUCCESS;
  constructor(public payload: any) {}
}
export class AddPaisFail implements Action {
  readonly type = actions.ADD_FAIL;
  constructor(public payload: any) {}
}

export class UpdatePais implements Action {
  readonly type = actions.UPDATE;
  constructor(public payload: any) {}
}
export class UpdatePaisSuccess implements Action {
  readonly type = actions.UPDATE_SUCCESS;
  constructor(public payload: any) {}
}
export class UpdatePaisFail implements Action {
  readonly type = actions.UPDATE_FAIL;
  constructor(public payload: any) {}
}

export class DeletePais implements Action {
  readonly type = actions.DELETE;
  constructor(public payload: any) {}
}
export class DeletePaisSuccess implements Action {
  readonly type = actions.DELETE_SUCCESS;
  constructor(public payload: any) {}
}
export class DeletePaisFail implements Action {
  readonly type = actions.DELETE_FAIL;
  constructor(public payload: any) {}
}

export class GetAllPais implements Action {
  readonly type = actions.GET_ALL;
  constructor(public payload = null) {}
}
export class GetAllPaisSuccess implements Action {
  readonly type = actions.GET_ALL_SUCCESS;
  constructor(public payload: Pais[]) {}
}
export class GetAllPaisFail implements Action {
  readonly type = actions.GET_ALL_FAIL;
  constructor(public payload: any) {}
}

export class DownloadPais implements Action {
  readonly type = actions.DOWNLOAD;
  constructor(public payload: any = null) { }
}
export class DownloadPaisSuccess implements Action {
  readonly type = actions.DOWNLOAD_SUCCESS;
  constructor(public payload: any) { }
}
export class DownloadPaisFail implements Action {
  readonly type = actions.DOWNLOAD_FAIL;
  constructor(public payload: any) { }
}

export class ResetPais implements Action {
  readonly type = actions.RESET;
  constructor(public payload = null) { }
}


export type PaisActions
  = AddPais
  | AddPaisSuccess
  | AddPaisFail
  | UpdatePais
  | UpdatePaisSuccess
  | UpdatePaisFail
  | DeletePais
  | DeletePaisSuccess
  | DeletePaisFail
  | GetAllPais
  | GetAllPaisSuccess
  | GetAllPaisFail
  | DownloadPais
  | DownloadPaisSuccess
  | DownloadPaisFail
  | ResetPais;
