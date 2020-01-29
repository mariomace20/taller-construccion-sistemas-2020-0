import { Action } from '@ngrx/store';
import {AtmRedAsociada} from '../../../../mantenimiento/models';
import { getCommonCrudActions } from '../common-actions';

export const actions = {
  ...getCommonCrudActions('AtmRedAsociada')
}

export class ResetAtmRedAsociada implements Action {
  readonly type = actions.RESET;
  constructor(public payload: any = null) {}
}

export class AddAtmRedAsociada implements Action {
  readonly type = actions.ADD;
  constructor(public payload: any) {}
}
export class AddAtmRedAsociadaSuccess implements Action {
  readonly type = actions.ADD_SUCCESS;
  constructor(public payload: any) {}
}
export class AddAtmRedAsociadaFail implements Action {
  readonly type = actions.ADD_FAIL;
  constructor(public payload: any) {}
}

export class UpdateAtmRedAsociada implements Action {
  readonly type = actions.UPDATE;
  constructor(public payload: any) {}
}
export class UpdateAtmRedAsociadaSuccess implements Action {
  readonly type = actions.UPDATE_SUCCESS;
  constructor(public payload: any) {}
}
export class UpdateAtmRedAsociadaFail implements Action {
  readonly type = actions.UPDATE_FAIL;
  constructor(public payload: any) {}
}

export class DeleteAtmRedAsociada implements Action {
  readonly type = actions.DELETE;
  constructor(public payload: any) {}
}
export class DeleteAtmRedAsociadaSuccess implements Action {
  readonly type = actions.DELETE_SUCCESS;
  constructor(public payload: any) {}
}
export class DeleteAtmRedAsociadaFail implements Action {
  readonly type = actions.DELETE_FAIL;
  constructor(public payload: any) {}
}

export class GetAllAtmRedAsociada implements Action {
  readonly type = actions.GET_ALL;
  constructor(public payload = null) {}
}
export class GetAllAtmRedAsociadaSuccess implements Action {
  readonly type = actions.GET_ALL_SUCCESS;
  constructor(public payload: AtmRedAsociada[]) {}
}
export class GetAllAtmRedAsociadaFail implements Action {
  readonly type = actions.GET_ALL_FAIL;
  constructor(public payload: any) {}
}

export class DownloadAtmRedAsociada implements Action {
  readonly type = actions.DOWNLOAD;
  constructor(public payload: any = null) { }
}
export class DownloadAtmRedAsociadaSuccess implements Action {
  readonly type = actions.DOWNLOAD_SUCCESS;
  constructor(public payload: any) { }
}
export class DownloadAtmRedAsociadaFail implements Action {
  readonly type = actions.DOWNLOAD_FAIL;
  constructor(public payload: any) { }
}

export type AtmRedAsociadaActions
  = AddAtmRedAsociada
  | AddAtmRedAsociadaSuccess
  | AddAtmRedAsociadaFail
  | UpdateAtmRedAsociada
  | UpdateAtmRedAsociadaSuccess
  | UpdateAtmRedAsociadaFail
  | DeleteAtmRedAsociada
  | DeleteAtmRedAsociadaSuccess
  | DeleteAtmRedAsociadaFail
  | GetAllAtmRedAsociada
  | GetAllAtmRedAsociadaSuccess
  | GetAllAtmRedAsociadaFail
  | DownloadAtmRedAsociada
  | DownloadAtmRedAsociadaSuccess
  | DownloadAtmRedAsociadaFail;
