import { Action } from '@ngrx/store';
import { Institucion } from '../../../../mantenimiento/models';
import { getCommonCrudActions } from '../common-actions';

export const actions = {
  ...getCommonCrudActions('Institucion'),

  GET_INSTITUCIONES_UBA : `[Instituciones UBA] Obtener por criterio`,
  GET_INSTITUCIONES_UBA_SUCCESS : `[Instituciones UBA] Obtener por criterio correcto`,
  GET_INSTITUCIONES_UBA_FAIL : `[Instituciones UBA] Error obtener por criterio`,

  GET_INSTITUCIONES_NO_UBA : `[Instituciones NO UBA] Obtener por criterio no uba`,
  GET_INSTITUCIONES_NO_UBA_SUCCESS : `[Instituciones NO UBA] Obtener por criterio correcto no uba`,
  GET_INSTITUCIONES_NO_UBA_FAIL : `[Instituciones NO UBA] Error al obtener por criterio no uba`,
};

export class AddInstitucion implements Action {
  readonly type = actions.ADD;
  constructor(public payload: any) { }
}
export class AddInstitucionSuccess implements Action {
  readonly type = actions.ADD_SUCCESS;
  constructor(public payload: any) { }
}
export class AddInstitucionFail implements Action {
  readonly type = actions.ADD_FAIL;
  constructor(public payload: any) { }
}

export class UpdateInstitucion implements Action {
  readonly type = actions.UPDATE;
  constructor(public payload: any) { }
}
export class UpdateInstitucionSuccess implements Action {
  readonly type = actions.UPDATE_SUCCESS;
  constructor(public payload: any) { }
}
export class UpdateInstitucionFail implements Action {
  readonly type = actions.UPDATE_FAIL;
  constructor(public payload: any) { }
}

export class DeleteInstitucion implements Action {
  readonly type = actions.DELETE;
  constructor(public payload: any) { }
}
export class DeleteInstitucionSuccess implements Action {
  readonly type = actions.DELETE_SUCCESS;
  constructor(public payload: any) { }
}
export class DeleteInstitucionFail implements Action {
  readonly type = actions.DELETE_FAIL;
  constructor(public payload: any) { }
}

export class GetAllInstitucion implements Action {
  readonly type = actions.GET_ALL;
  constructor(public payload = null) { }
}
export class GetAllInstitucionSuccess implements Action {
  readonly type = actions.GET_ALL_SUCCESS;
  constructor(public payload: Institucion[]) { }
}
export class GetAllInstitucionFail implements Action {
  readonly type = actions.GET_ALL_FAIL;
  constructor(public payload: any) { }
}


export class GetInstitucionesUba implements Action {
  readonly type = actions.GET_INSTITUCIONES_UBA;
  constructor(public payload = null) { }
}
export class GetInstitucionesUbaSuccess implements Action {
  readonly type = actions.GET_INSTITUCIONES_UBA_SUCCESS;
  constructor(public payload: Institucion[]) { }
}
export class GetInstitucionesUbaFail implements Action {
  readonly type = actions.GET_INSTITUCIONES_UBA_FAIL;
  constructor(public payload: any) { }
}


export class GetInstitucionesNoUba implements Action {
  readonly type = actions.GET_INSTITUCIONES_NO_UBA;
  constructor(public payload = null) { }
}
export class GetInstitucionesNoUbaSuccess implements Action {
  readonly type = actions.GET_INSTITUCIONES_NO_UBA_SUCCESS;
  constructor(public payload: Institucion[]) { }
}
export class GetInstitucionesNoUbaFail implements Action {
  readonly type = actions.GET_INSTITUCIONES_NO_UBA_FAIL;
  constructor(public payload: any) { }
}

export class ResetInstitucion implements Action {
  readonly type = actions.RESET;
  constructor(public payload: any = null) { }
}

export class DownloadInstitucion implements Action {
  readonly type = actions.DOWNLOAD;
  constructor(public payload: any = null) { }
}
export class DownloadInstitucionSuccess implements Action {
  readonly type = actions.DOWNLOAD_SUCCESS;
  constructor(public payload: any) { }
}
export class DownloadInstitucionFail implements Action {
  readonly type = actions.DOWNLOAD_FAIL;
  constructor(public payload: any) { }
}

export type InstitucionActions
  = AddInstitucion
  | AddInstitucionSuccess
  | AddInstitucionFail
  | UpdateInstitucion
  | UpdateInstitucionSuccess
  | UpdateInstitucionFail
  | DeleteInstitucion
  | DeleteInstitucionSuccess
  | DeleteInstitucionFail
  | GetAllInstitucion
  | GetAllInstitucionSuccess
  | GetAllInstitucionFail
  | GetInstitucionesUba
  | GetInstitucionesUbaSuccess
  | GetInstitucionesUbaFail
  | GetInstitucionesNoUba
  | GetInstitucionesNoUbaSuccess
  | GetInstitucionesNoUbaFail
  | DownloadInstitucion
  | DownloadInstitucionSuccess
  | DownloadInstitucionFail
  | ResetInstitucion;
