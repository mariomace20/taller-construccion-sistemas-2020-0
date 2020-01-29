import { Action } from '@ngrx/store';
import { Bin } from '../../../../mantenimiento/models';
import { getCommonCrudActions } from '../common-actions';

export const actions = {
  ...getCommonCrudActions('Bin'),
  GET_X_INSTITUCION : `[Bin] Obtener por institucion`,
  GET_X_INSTITUCION_SUCCESS : `[Bin] Obtener por institucion correcto`,
  GET_X_INSTITUCION_FAIL : `[Bin] Error al Obtener por institucion`
}
export class ResetBin implements Action {
  readonly type = actions.RESET;
  constructor(public payload: any = null) {}
}
export class AddBin implements Action {
  readonly type = actions.ADD;
  constructor(public payload: any) {}
}
export class AddBinSuccess implements Action {
  readonly type = actions.ADD_SUCCESS;
  constructor(public payload: any) {}
}
export class AddBinFail implements Action {
  readonly type = actions.ADD_FAIL;
  constructor(public payload: any) {}
}

export class UpdateBin implements Action {
  readonly type = actions.UPDATE;
  constructor(public payload: any) {}
}
export class UpdateBinSuccess implements Action {
  readonly type = actions.UPDATE_SUCCESS;
  constructor(public payload: any) {}
}
export class UpdateBinFail implements Action {
  readonly type = actions.UPDATE_FAIL;
  constructor(public payload: any) {}
}

export class DeleteBin implements Action {
  readonly type = actions.DELETE;
  constructor(public payload: any) {}
}
export class DeleteBinSuccess implements Action {
  readonly type = actions.DELETE_SUCCESS;
  constructor(public payload: any) {}
}
export class DeleteBinFail implements Action {
  readonly type = actions.DELETE_FAIL;
  constructor(public payload: any) {}
}

export class GetBinXInstitucion implements Action {
  readonly type = actions.GET_X_INSTITUCION;
  constructor(public payload : any) {}
}
export class GetBinXInstitucionSuccess implements Action {
  readonly type = actions.GET_X_INSTITUCION_SUCCESS;
  constructor(public payload: Bin[]) {}
}
export class GetBinXInstitucionFail implements Action {
  readonly type = actions.GET_X_INSTITUCION_FAIL;
  constructor(public payload: any) {}
}

export class GetAllBin implements Action {
  readonly type = actions.GET_ALL;
  constructor(public payload = null) {}
}
export class GetAllBinSuccess implements Action {
  readonly type = actions.GET_ALL_SUCCESS;
  constructor(public payload: Bin[]) {}
}
export class GetAllBinFail implements Action {
  readonly type = actions.GET_ALL_FAIL;
  constructor(public payload: any) {}
}

export class DownloadBin implements Action {
  readonly type = actions.DOWNLOAD;
  constructor(public payload: any = null) { }
}
export class DownloadBinSuccess implements Action {
  readonly type = actions.DOWNLOAD_SUCCESS;
  constructor(public payload: any) { }
}
export class DownloadBinFail implements Action {
  readonly type = actions.DOWNLOAD_FAIL;
  constructor(public payload: any) { }
}

export type BinActions
  = AddBin
  | AddBinSuccess
  | AddBinFail
  | UpdateBin
  | UpdateBinSuccess
  | UpdateBinFail
  | DeleteBin
  | DeleteBinSuccess
  | DeleteBinFail
  | GetAllBin
  | GetAllBinSuccess
  | GetAllBinFail
  | GetBinXInstitucion
  | GetBinXInstitucionSuccess
  | GetBinXInstitucionFail
  | DownloadBin
  | DownloadBinSuccess
  | DownloadBinFail;
