import {getCommonCrudActions} from '../common-actions';
import {Action} from '@ngrx/store';
import {TasaInteresPasiva} from '../../../../mantenimiento/models';

export const actions = {
  ...getCommonCrudActions('TasaInteresPasiva')
};


// ADD
export class AddTasaInteresPasiva implements Action {
  readonly type = actions.ADD;
  constructor(public payload: any) {}
}
export class AddTasaInteresPasivaSuccess implements Action {
  readonly type = actions.ADD_SUCCESS;
  constructor(public payload: any) {}
}
export class AddTasaInteresPasivaFail implements Action {
  readonly type = actions.ADD_FAIL;
  constructor(public payload: any) {}
}


// UPDATE
export class UpdateTasaInteresPasiva implements Action {
  readonly type = actions.UPDATE;
  constructor(public payload: any) {}
}
export class UpdateTasaInteresPasivaSuccess implements Action {
  readonly type = actions.UPDATE_SUCCESS;
  constructor(public payload: any) {}
}
export class UpdateTasaInteresPasivaFail implements Action {
  readonly type = actions.UPDATE_FAIL;
  constructor(public payload: any) {}
}


// DELETE
export class DeleteTasaInteresPasiva implements Action {
  readonly type = actions.DELETE;
  constructor(public payload: any) {}
}
export class DeleteTasaInteresPasivaSuccess implements Action {
  readonly type = actions.DELETE_SUCCESS;
  constructor(public payload: any) {}
}
export class DeleteTasaInteresPasivaFail implements Action {
  readonly type = actions.DELETE_FAIL;
  constructor(public payload: any) {}
}


// GET ALL
export class GetAllTasaInteresPasiva implements Action {
  readonly type = actions.GET_ALL;
  constructor(public payload = null) {}
}
export class GetAllTasaInteresPasivaSuccess implements Action {
  readonly type = actions.GET_ALL_SUCCESS;
  constructor(public payload: TasaInteresPasiva[]) {}
}
export class GetAllTasaInteresPasivaFail implements Action {
  readonly type = actions.GET_ALL_FAIL;
  constructor(public payload: any) {}
}


// DOWNLOAD
export class DownloadTasaInteresPasiva implements Action {
  readonly type = actions.DOWNLOAD;
  constructor(public payload: any = null) { }
}
export class DownloadTasaInteresPasivaSuccess implements Action {
  readonly type = actions.DOWNLOAD_SUCCESS;
  constructor(public payload: any) { }
}
export class DownloadTasaInteresPasivaFail implements Action {
  readonly type = actions.DOWNLOAD_FAIL;
  constructor(public payload: any) { }
}

export class ResetTasaInteresPasiva implements Action {
  readonly type = actions.RESET;
  constructor(public payload: any = null) {};
}


export type TasaInteresPasivaActions
  = AddTasaInteresPasiva
  | AddTasaInteresPasivaSuccess
  | AddTasaInteresPasivaFail
  | UpdateTasaInteresPasiva
  | UpdateTasaInteresPasivaSuccess
  | UpdateTasaInteresPasivaFail
  | DeleteTasaInteresPasiva
  | DeleteTasaInteresPasivaSuccess
  | DeleteTasaInteresPasivaFail
  | GetAllTasaInteresPasiva
  | GetAllTasaInteresPasivaSuccess
  | GetAllTasaInteresPasivaFail
  | DownloadTasaInteresPasiva
  | DownloadTasaInteresPasivaSuccess
  | DownloadTasaInteresPasivaFail
  | ResetTasaInteresPasiva;
