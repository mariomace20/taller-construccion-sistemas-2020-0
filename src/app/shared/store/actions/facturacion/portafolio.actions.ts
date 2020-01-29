import { Action } from '@ngrx/store';
import { Portafolio } from '../../../../facturacion/models';
import { getCommonCrudActions } from '../common-actions';

export const actions = {
  ...getCommonCrudActions('Portafolio')
}

export class AddPortafolio implements Action {
  readonly type = actions.ADD;
  constructor(public payload: any) {}
}
export class AddPortafolioSuccess implements Action {
  readonly type = actions.ADD_SUCCESS;
  constructor(public payload: any) {}
}
export class AddPortafolioFail implements Action {
  readonly type = actions.ADD_FAIL;
  constructor(public payload: any) {}
}

export class UpdatePortafolio implements Action {
  readonly type = actions.UPDATE;
  constructor(public payload: any) {}
}
export class UpdatePortafolioSuccess implements Action {
  readonly type = actions.UPDATE_SUCCESS;
  constructor(public payload: any) {}
}
export class UpdatePortafolioFail implements Action {
  readonly type = actions.UPDATE_FAIL;
  constructor(public payload: any) {}
}

export class DeletePortafolio implements Action {
  readonly type = actions.DELETE;
  constructor(public payload: any) {}
}
export class DeletePortafolioSuccess implements Action {
  readonly type = actions.DELETE_SUCCESS;
  constructor(public payload: any) {}
}
export class DeletePortafolioFail implements Action {
  readonly type = actions.DELETE_FAIL;
  constructor(public payload: any) {}
}

export class GetAllPortafolio implements Action {
  readonly type = actions.GET_ALL;
  constructor(public payload = null) {}
}
export class GetAllPortafolioSuccess implements Action {
  readonly type = actions.GET_ALL_SUCCESS;
  constructor(public payload: Portafolio[]) {}
}
export class GetAllPortafolioFail implements Action {
  readonly type = actions.GET_ALL_FAIL;
  constructor(public payload: any) {}
}

export class DownloadPortafolio implements Action {
  readonly type = actions.DOWNLOAD;
  constructor(public payload: any = null) { }
}
export class DownloadPortafolioSuccess implements Action {
  readonly type = actions.DOWNLOAD_SUCCESS;
  constructor(public payload: any) { }
}
export class DownloadPortafolioFail implements Action {
  readonly type = actions.DOWNLOAD_FAIL;
  constructor(public payload: any) { }
}

export class ResetPortafolio implements Action {
  readonly type = actions.RESET;
  constructor(public payload: any = null) {};
}

export type PortafolioActions
  = AddPortafolio
  | AddPortafolioSuccess
  | AddPortafolioFail
  | UpdatePortafolio
  | UpdatePortafolioSuccess
  | UpdatePortafolioFail
  | DeletePortafolio
  | DeletePortafolioSuccess
  | DeletePortafolioFail
  | GetAllPortafolio
  | GetAllPortafolioSuccess
  | GetAllPortafolioFail
  | DownloadPortafolio
  | DownloadPortafolioSuccess
  | DownloadPortafolioFail
  | ResetPortafolio;
