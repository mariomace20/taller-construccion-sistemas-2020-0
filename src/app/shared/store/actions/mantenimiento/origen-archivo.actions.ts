import { Action } from '@ngrx/store';
import { OrigenArchivo } from '../../../../mantenimiento/models';
import { getCommonCrudActions } from '../common-actions';

export const actions = {
  ...getCommonCrudActions('OrigenArchivo'),

  GET_ORIGENES_ARCHIVOS_CONCILIADOS : `[Origenes Archivos Conciliados] Obtener por criterio`,
  GET_ORIGENES_ARCHIVOS_CONCILIADOS_SUCCESS : `[Origenes Archivos Conciliados] Obtener por criterio correcto`,
  GET_ORIGENES_ARCHIVOS_CONCILIADOS_FAIL : `[Origenes Archivos Conciliados] Error obtener por criterio`,

}

export class GetAllOrigenArchivo implements Action {
  readonly type = actions.GET_ALL;
  constructor(public payload = null) {}
}
export class GetAllOrigenArchivoSuccess implements Action {
  readonly type = actions.GET_ALL_SUCCESS;
  constructor(public payload: OrigenArchivo[]) {}
}
export class GetAllOrigenArchivoFail implements Action {
  readonly type = actions.GET_ALL_FAIL;
  constructor(public payload: any) {}
}

export class GetOrigenesArchivosConciliados implements Action {
  readonly type = actions.GET_ORIGENES_ARCHIVOS_CONCILIADOS;
  constructor(public payload = null) { }
}
export class GetOrigenesArchivosConciliadosSuccess implements Action {
  readonly type = actions.GET_ORIGENES_ARCHIVOS_CONCILIADOS_SUCCESS;
  constructor(public payload: OrigenArchivo[]) { }
}
export class GetOrigenesArchivosConciliadosFail implements Action {
  readonly type = actions.GET_ORIGENES_ARCHIVOS_CONCILIADOS_FAIL;
  constructor(public payload: any) { }
}

export class AddOrigenArchivo implements Action {
  readonly type = actions.ADD;
  constructor(public payload: any) {}
}
export class AddOrigenArchivoSuccess implements Action {
  readonly type = actions.ADD_SUCCESS;
  constructor(public payload: any) {}
}
export class AddOrigenArchivoFail implements Action {
  readonly type = actions.ADD_FAIL;
  constructor(public payload: any) {}
}

export class UpdateOrigenArchivo implements Action {
  readonly type = actions.UPDATE;
  constructor(public payload: any) {}
}
export class UpdateOrigenArchivoSuccess implements Action {
  readonly type = actions.UPDATE_SUCCESS;
  constructor(public payload: any) {}
}
export class UpdateOrigenArchivoFail implements Action {
  readonly type = actions.UPDATE_FAIL;
  constructor(public payload: any) {}
}

export class DeleteOrigenArchivo implements Action {
  readonly type = actions.DELETE;
  constructor(public payload: any) {}
}
export class DeleteOrigenArchivoSuccess implements Action {
  readonly type = actions.DELETE_SUCCESS;
  constructor(public payload: any) {}
}
export class DeleteOrigenArchivoFail implements Action {
  readonly type = actions.DELETE_FAIL;
  constructor(public payload: any) {}
}

export class ResetOrigenArchivo implements Action {
  readonly type = actions.RESET;
  constructor(public payload: any = null) {};
}

export type OrigenArchivoActions
  = GetAllOrigenArchivo
  | GetAllOrigenArchivoSuccess
  | GetAllOrigenArchivoFail
  | GetOrigenesArchivosConciliados
  | GetOrigenesArchivosConciliadosSuccess
  | GetOrigenesArchivosConciliadosFail
  | AddOrigenArchivo
  | AddOrigenArchivoSuccess
  | AddOrigenArchivoFail
  | UpdateOrigenArchivo
  | UpdateOrigenArchivoSuccess
  | UpdateOrigenArchivoFail
  | DeleteOrigenArchivo
  | DeleteOrigenArchivoSuccess
  | DeleteOrigenArchivoFail
  | ResetOrigenArchivo
