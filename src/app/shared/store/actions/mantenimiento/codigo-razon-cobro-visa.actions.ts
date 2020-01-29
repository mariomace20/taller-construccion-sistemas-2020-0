import { Action } from '@ngrx/store';
import { CodigoRazonCobroVisa } from '../../../../mantenimiento/models';
import { getCommonCrudActions } from '../common-actions';

export const actions = {
  ...getCommonCrudActions('CodigoRazonCobroVisa')
};

export class ResetCodigoRazonCobroVisa implements Action {
  readonly type = actions.RESET;
  constructor(public payload: any = null) {}
}

export class AddCodigoRazonCobroVisa implements Action {
  readonly type = actions.ADD;

  constructor(public payload: any) {}
}

export class AddCodigoRazonCobroVisaSuccess implements Action {
  readonly type = actions.ADD_SUCCESS;
  constructor(public payload: any) {}
}

export class AddCodigoRazonCobroVisaFail implements Action {
  readonly type = actions.ADD_FAIL;
  constructor(public payload: any) {}
}

export class UpdateCodigoRazonCobroVisa implements Action {
  readonly type = actions.UPDATE;
  constructor(public payload: any) {}
}
export class UpdateCodigoRazonCobroVisaSuccess implements Action {
  readonly type = actions.UPDATE_SUCCESS;
  constructor(public payload: any) {}
}
export class UpdateCodigoRazonCobroVisaFail implements Action {
  readonly type = actions.UPDATE_FAIL;
  constructor(public payload: any) {}
}

export class DeleteCodigoRazonCobroVisa implements Action {
  readonly type = actions.DELETE;
  constructor(public payload: any) {}
}
export class DeleteCodigoRazonCobroVisaSuccess implements Action {
  readonly type = actions.DELETE_SUCCESS;
  constructor(public payload: any) {}
}
export class DeleteCodigoRazonCobroVisaFail implements Action {
  readonly type = actions.DELETE_FAIL;
  constructor(public payload: any) {}
}

export class GetAllCodigoRazonCobroVisa implements Action {
  readonly type = actions.GET_ALL;
  constructor(public payload = null) {}
}
export class GetAllCodigoRazonCobroVisaSuccess implements Action {
  readonly type = actions.GET_ALL_SUCCESS;
  constructor(public payload: CodigoRazonCobroVisa[]) {}
}
export class GetAllCodigoRazonCobroVisaFail implements Action {
  readonly type = actions.GET_ALL_FAIL;
  constructor(public payload: any) {}
}

export class DownloadCodigoRazonCobroVisa implements Action {
  readonly type = actions.DOWNLOAD;
  constructor(public payload: any = null) { }
}
export class DownloadCodigoRazonCobroVisaSuccess implements Action {
  readonly type = actions.DOWNLOAD_SUCCESS;
  constructor(public payload: any) { }
}
export class DownloadCodigoRazonCobroVisaFail implements Action {
  readonly type = actions.DOWNLOAD_FAIL;
  constructor(public payload: any) { }
}

export type CodigoRazonCobroVisaActions
  = AddCodigoRazonCobroVisa
  | AddCodigoRazonCobroVisaSuccess
  | AddCodigoRazonCobroVisaFail
  | UpdateCodigoRazonCobroVisa
  | UpdateCodigoRazonCobroVisaSuccess
  | UpdateCodigoRazonCobroVisaFail
  | DeleteCodigoRazonCobroVisa
  | DeleteCodigoRazonCobroVisaSuccess
  | DeleteCodigoRazonCobroVisaFail
  | GetAllCodigoRazonCobroVisa
  | GetAllCodigoRazonCobroVisaSuccess
  | GetAllCodigoRazonCobroVisaFail
  | DownloadCodigoRazonCobroVisa
  | DownloadCodigoRazonCobroVisaSuccess
  | DownloadCodigoRazonCobroVisaFail
  | ResetCodigoRazonCobroVisa;
