import { Action } from '@ngrx/store';
import {AtmRedUnicard} from '../../../../mantenimiento/models';
import { getCommonCrudActions } from '../common-actions';

export const actions = {
  ...getCommonCrudActions('AtmRedUnicard')
}

export class ResetAtmRedUnicard implements Action {
  readonly type = actions.RESET;
  constructor(public payload: any = null) {}
}

export class AddAtmRedUnicard implements Action {
  readonly type = actions.ADD;
  constructor(public payload: any) {}
}
export class AddAtmRedUnicardSuccess implements Action {
  readonly type = actions.ADD_SUCCESS;
  constructor(public payload: any) {}
}
export class AddAtmRedUnicardFail implements Action {
  readonly type = actions.ADD_FAIL;
  constructor(public payload: any) {}
}

export class UpdateAtmRedUnicard implements Action {
  readonly type = actions.UPDATE;
  constructor(public payload: any) {}
}
export class UpdateAtmRedUnicardSuccess implements Action {
  readonly type = actions.UPDATE_SUCCESS;
  constructor(public payload: any) {}
}
export class UpdateAtmRedUnicardFail implements Action {
  readonly type = actions.UPDATE_FAIL;
  constructor(public payload: any) {}
}

export class DeleteAtmRedUnicard implements Action {
  readonly type = actions.DELETE;
  constructor(public payload: any) {}
}
export class DeleteAtmRedUnicardSuccess implements Action {
  readonly type = actions.DELETE_SUCCESS;
  constructor(public payload: any) {}
}
export class DeleteAtmRedUnicardFail implements Action {
  readonly type = actions.DELETE_FAIL;
  constructor(public payload: any) {}
}

export class GetAllAtmRedUnicard implements Action {
  readonly type = actions.GET_ALL;
  constructor(public payload = null) {}
}
export class GetAllAtmRedUnicardSuccess implements Action {
  readonly type = actions.GET_ALL_SUCCESS;
  constructor(public payload: AtmRedUnicard[]) {}
}
export class GetAllAtmRedUnicardFail implements Action {
  readonly type = actions.GET_ALL_FAIL;
  constructor(public payload: any) {}
}

export class DownloadAtmRedUnicard implements Action {
  readonly type = actions.DOWNLOAD;
  constructor(public payload: any = null) { }
}
export class DownloadAtmRedUnicardSuccess implements Action {
  readonly type = actions.DOWNLOAD_SUCCESS;
  constructor(public payload: any) { }
}
export class DownloadAtmRedUnicardFail implements Action {
  readonly type = actions.DOWNLOAD_FAIL;
  constructor(public payload: any) { }
}

export type AtmRedUnicardActions
  = AddAtmRedUnicard
  | AddAtmRedUnicardSuccess
  | AddAtmRedUnicardFail
  | UpdateAtmRedUnicard
  | UpdateAtmRedUnicardSuccess
  | UpdateAtmRedUnicardFail
  | DeleteAtmRedUnicard
  | DeleteAtmRedUnicardSuccess
  | DeleteAtmRedUnicardFail
  | GetAllAtmRedUnicard
  | GetAllAtmRedUnicardSuccess
  | GetAllAtmRedUnicardFail
  | DownloadAtmRedUnicard
  | DownloadAtmRedUnicardSuccess
  | DownloadAtmRedUnicardFail;
