import { Action } from '@ngrx/store';
import { Servicio } from '../../../../mantenimiento/models';
import { getCommonCrudActions } from '../common-actions';

export const actions = {
  ...getCommonCrudActions('Servicio'), 
  GET_BY_MEMBRESIA: '[Servicio] Obtener por membresia',
  GET_BY_MEMBRESIA_SUCCESS: '[Servicio] Obtener por membresia correcto',
  GET_BY_MEMBRESIA_FAIL: '[Servicio] Error al obtener por membresia'
}

export class AddServicio implements Action {
  readonly type = actions.ADD;
  constructor(public payload: any) {}
}
export class AddServicioSuccess implements Action {
  readonly type = actions.ADD_SUCCESS;
  constructor(public payload: any) {}
}
export class AddServicioFail implements Action {
  readonly type = actions.ADD_FAIL;
  constructor(public payload: any) {}
}

export class UpdateServicio implements Action {
  readonly type = actions.UPDATE;
  constructor(public payload: any) {}
}
export class UpdateServicioSuccess implements Action {
  readonly type = actions.UPDATE_SUCCESS;
  constructor(public payload: any) {}
}
export class UpdateServicioFail implements Action {
  readonly type = actions.UPDATE_FAIL;
  constructor(public payload: any) {}
}

export class DeleteServicio implements Action {
  readonly type = actions.DELETE;
  constructor(public payload: any) {}
}
export class DeleteServicioSuccess implements Action {
  readonly type = actions.DELETE_SUCCESS;
  constructor(public payload: any) {}
}
export class DeleteServicioFail implements Action {
  readonly type = actions.DELETE_FAIL;
  constructor(public payload: any) {}
}

export class GetAllServicio implements Action {
  readonly type = actions.GET_ALL;
  constructor(public payload = null) {}
}
export class GetAllServicioSuccess implements Action {
  readonly type = actions.GET_ALL_SUCCESS;
  constructor(public payload: Servicio[]) {}
}
export class GetAllServicioFail implements Action {
  readonly type = actions.GET_ALL_FAIL;
  constructor(public payload: any) {}
}

export class ResetServicio implements Action {
  readonly type = actions.RESET;
  constructor(public payload: any = null) {}
}

export class GetByMembresia implements Action {
  readonly type = actions.GET_BY_MEMBRESIA;
  constructor(public payload: any) {}
}
export class GetByMembresiaSuccess implements Action {
  readonly type = actions.GET_BY_MEMBRESIA_SUCCESS;
  constructor(public payload: Servicio[]) {}
}
export class GetByMembresiaFail implements Action {
  readonly type = actions.GET_BY_MEMBRESIA_FAIL;
  constructor(public payload: any) {}
}

export class DownloadServicio implements Action {
  readonly type = actions.DOWNLOAD;
  constructor(public payload: any = null) { }
}
export class DownloadServicioSuccess implements Action {
  readonly type = actions.DOWNLOAD_SUCCESS;
  constructor(public payload: any) { }
}
export class DownloadServicioFail implements Action {
  readonly type = actions.DOWNLOAD_FAIL;
  constructor(public payload: any) { }
}

export type ServicioActions
  = AddServicio
  | AddServicioSuccess
  | AddServicioFail
  | UpdateServicio
  | UpdateServicioSuccess
  | UpdateServicioFail
  | DeleteServicio
  | DeleteServicioSuccess
  | DeleteServicioFail
  | GetAllServicio
  | GetAllServicioSuccess
  | GetAllServicioFail
  | ResetServicio
  | GetByMembresia
  | GetByMembresiaSuccess
  | GetByMembresiaFail
  | DownloadServicio
  | DownloadServicioSuccess
  | DownloadServicioFail;
