import { Action } from '@ngrx/store';
import { TarifarioVISA } from '../../../../tarifario/models';
import { getCommonCrudActions } from '../common-actions';

export const actions = {
  ...getCommonCrudActions('TarifarioVISA')
};

export class ResetTarifarioVISA implements Action {
  readonly type = actions.RESET;
  constructor(public payload: any = null) {}
}

export class AddTarifarioVISA implements Action {
  readonly type = actions.ADD;

  constructor(public payload: any) {}
}

export class AddTarifarioVISASuccess implements Action {
  readonly type = actions.ADD_SUCCESS;
  constructor(public payload: any) {}
}

export class AddTarifarioVISAFail implements Action {
  readonly type = actions.ADD_FAIL;
  constructor(public payload: any) {}
}

export class UpdateTarifarioVISA implements Action {
  readonly type = actions.UPDATE;
  constructor(public payload: any) {}
}
export class UpdateTarifarioVISASuccess implements Action {
  readonly type = actions.UPDATE_SUCCESS;
  constructor(public payload: any) {}
}
export class UpdateTarifarioVISAFail implements Action {
  readonly type = actions.UPDATE_FAIL;
  constructor(public payload: any) {}
}

export class DeleteTarifarioVISA implements Action {
  readonly type = actions.DELETE;
  constructor(public payload: any) {}
}
export class DeleteTarifarioVISASuccess implements Action {
  readonly type = actions.DELETE_SUCCESS;
  constructor(public payload: any) {}
}
export class DeleteTarifarioVISAFail implements Action {
  readonly type = actions.DELETE_FAIL;
  constructor(public payload: any) {}
}

export class GetAllTarifarioVISA implements Action {
  readonly type = actions.GET_ALL;
  constructor(public payload = null) {}
}
export class GetAllTarifarioVISASuccess implements Action {
  readonly type = actions.GET_ALL_SUCCESS;
  constructor(public payload: TarifarioVISA[]) {}
}
export class GetAllTarifarioVISAFail implements Action {
  readonly type = actions.GET_ALL_FAIL;
  constructor(public payload: any) {}
}

export class DownloadTarifarioVISA implements Action {
  readonly type = actions.DOWNLOAD;
  constructor(public payload: any = null) { }
}
export class DownloadTarifarioVISASuccess implements Action {
  readonly type = actions.DOWNLOAD_SUCCESS;
  constructor(public payload: any) { }
}
export class DownloadTarifarioVISAFail implements Action {
  readonly type = actions.DOWNLOAD_FAIL;
  constructor(public payload: any) { }
}

export type TarifarioVISAActions
  = AddTarifarioVISA
  | AddTarifarioVISASuccess
  | AddTarifarioVISAFail
  | UpdateTarifarioVISA
  | UpdateTarifarioVISASuccess
  | UpdateTarifarioVISAFail
  | DeleteTarifarioVISA
  | DeleteTarifarioVISASuccess
  | DeleteTarifarioVISAFail
  | GetAllTarifarioVISA
  | GetAllTarifarioVISASuccess
  | GetAllTarifarioVISAFail
  | DownloadTarifarioVISA
  | DownloadTarifarioVISASuccess
  | DownloadTarifarioVISAFail
  | ResetTarifarioVISA;
