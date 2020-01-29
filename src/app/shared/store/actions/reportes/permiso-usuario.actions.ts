import { Action } from '@ngrx/store';

import { getCommonCrudActions } from '../common-actions';
import { PermisoUsuario } from '../../../../reportes/admin/models/permiso-usuario.model';
import { ParametrosUpdateAllCamposPerfil } from '../../../../reportes/admin/models';
import { Tabla } from '../../../../reportes/user/models';


export const actions = {
  ...getCommonCrudActions('PermisoUsuario'),
  GET_TABLAS_PERMITIDAS: `[${'PermisoUsuario'}] Obtener todas las tablas permitidas por usuario`,
  GET_TABLAS_PERMITIDAS_SUCCESS: `[${'PermisoUsuario'}] Obtener todas las tablas permitidas por usuario correcto`,
  GET_TABLAS_PERMITIDAS_FAIL: `[${'PermisoUsuario'}] Error al obtener todas las tablas permitidas por usuario`,
  UPDATE_ALL: `[${'PermisoUsuario'}] Actualizar por Lote`,
  UPDATE_ALL_SUCCESS: `[${'PermisoUsuario'}] Actualización por lote correcta`,
  UPDATE_ALL_FAIL: `[${'PermisoUsuario'}] Error en actualización por lote`,
}

export class AddPermisoUsuario implements Action {
  readonly type = actions.ADD;
  constructor(public payload: any) {}
}
export class AddPermisoUsuarioSuccess implements Action {
  readonly type = actions.ADD_SUCCESS;
  constructor(public payload: any) {}
}
export class AddPermisoUsuarioFail implements Action {
  readonly type = actions.ADD_FAIL;
  constructor(public payload: any) {}
}

export class UpdatePermisoUsuario implements Action {
  readonly type = actions.UPDATE;
  constructor(public payload: any) {}
}
export class UpdatePermisoUsuarioSuccess implements Action {
  readonly type = actions.UPDATE_SUCCESS;
  constructor(public payload: any) {}
}
export class UpdatePermisoUsuarioFail implements Action {
  readonly type = actions.UPDATE_FAIL;
  constructor(public payload: any) {}
}

export class DeletePermisoUsuario implements Action {
  readonly type = actions.DELETE;
  constructor(public payload: any) {}
}
export class DeletePermisoUsuarioSuccess implements Action {
  readonly type = actions.DELETE_SUCCESS;
  constructor(public payload: any) {}
}
export class DeletePermisoUsuarioFail implements Action {
  readonly type = actions.DELETE_FAIL;
  constructor(public payload: any) {}
}

export class GetAllPermisoUsuario implements Action {
  readonly type = actions.GET_ALL;
  constructor(public payload = null) {}
}
export class GetAllPermisoUsuarioSuccess implements Action {
  readonly type = actions.GET_ALL_SUCCESS;
  constructor(public payload: PermisoUsuario[]) {}
}
export class GetAllPermisoUsuarioFail implements Action {
  readonly type = actions.GET_ALL_FAIL;
  constructor(public payload: any) {}
}

export class GetTablasPermitidas implements Action {
  readonly type = actions.GET_TABLAS_PERMITIDAS;
  constructor(public payload = null) {}
}
export class GetTablasPermitidasSuccess implements Action {
  readonly type = actions.GET_TABLAS_PERMITIDAS_SUCCESS;
  constructor(public payload : Tabla[]) {}
}
export class GetTablasPermitidasFail implements Action {
  readonly type = actions.GET_TABLAS_PERMITIDAS_FAIL;
  constructor(public payload : any) {}
}

export class GetCriterioPermisoUsuario implements Action {
    readonly type = actions.GET_CRITERIO;
    constructor(public payload: any) {}
  }
  export class GetCriterioPermisoUsuarioSuccess implements Action {
    readonly type = actions.GET_CRITERIO_SUCCESS;
    constructor(public payload: PermisoUsuario[]) {}
  }
  export class GetCriterioPermisoUsuarioFail implements Action {
    readonly type = actions.GET_CRITERIO_FAIL;
    constructor(public payload: any) {}
  }
export class DownloadPermisoUsuario implements Action {
  readonly type = actions.DOWNLOAD;
  constructor(public payload: any = null) { }
}
export class DownloadPermisoUsuarioSuccess implements Action {
  readonly type = actions.DOWNLOAD_SUCCESS;
  constructor(public payload: any) { }
}
export class DownloadPermisoUsuarioFail implements Action {
  readonly type = actions.DOWNLOAD_FAIL;
  constructor(public payload: any) { }
}
export class UpdateAllPermisosUsuario implements Action {
  readonly type = actions.UPDATE_ALL;
  constructor(public payload : {parametro:ParametrosUpdateAllCamposPerfil, modificaciones: any}) {}
}
export class UpdateAllPermisosUsuarioSuccess implements Action {
  readonly type = actions.UPDATE_ALL_SUCCESS;
  constructor(public payload: any) {}
}
export class UpdateAllPermisosUsuarioFail implements Action {
  readonly type = actions.UPDATE_ALL_FAIL;
  constructor(public payload: any) {}
}

export type PermisoUsuarioActions
  = AddPermisoUsuario
  | AddPermisoUsuarioSuccess
  | AddPermisoUsuarioFail
  | UpdatePermisoUsuario
  | UpdatePermisoUsuarioSuccess
  | UpdatePermisoUsuarioFail
  | DeletePermisoUsuario
  | DeletePermisoUsuarioSuccess
  | DeletePermisoUsuarioFail
  | GetAllPermisoUsuario
  | GetAllPermisoUsuarioSuccess
  | GetAllPermisoUsuarioFail
  | GetTablasPermitidas
  | GetTablasPermitidasSuccess
  | GetTablasPermitidasFail
  | DownloadPermisoUsuario
  | DownloadPermisoUsuarioSuccess
  | DownloadPermisoUsuarioFail
  | GetCriterioPermisoUsuario
  | GetCriterioPermisoUsuarioSuccess
  | GetCriterioPermisoUsuarioFail
  | UpdateAllPermisosUsuario
  | UpdateAllPermisosUsuarioSuccess
  | UpdateAllPermisosUsuarioFail;
