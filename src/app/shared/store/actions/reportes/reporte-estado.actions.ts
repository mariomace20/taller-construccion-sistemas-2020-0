import { Action } from '@ngrx/store';
import { ReporteAvanzadoState } from '../../../store/reducers/entity-state.model';
import { Tabla, TablaQuery, CampoQuery} from '../../../../reportes/user/models';
import { getCommonCrudActions } from '../common-actions';

export const actions = {
    ADD_TABLA_BASE: `[Tabla Base] Agregar tabla base`,
    DELETE_TABLA_BASE: `[Tabla Base] Eliminar tabla base`,
    ADD_TABLA_JOIN_AND_ON_JOIN: `[Tabla Join and On Join] Agregar tabla join y campos on join`,
    ADD_MANY_TABLA: `[Tabla Join] Agregar multiples tablas`,
    ADD_CAMPO: `[Campo] Agregar campo a reporte`,
    ADD_MANY_CAMPO: `[Campo] Agregar multiples campos a reporte`,
    ADD_FILTROS: `[Filtro] Agregar filtros a reporte`,
    REMOVE_FILTROS: `[Filtro] Eliminar filtros a reporte`,
    UPDATE_FILTROS: `[Filtro] Agregar filtro a reporte`,
    RESET_REPORTE: `[Reporte Avanzado] Eliminar reporte`,
    CREATE_REPORTE: `[Reporte] Agregar reporte`,
    VISUALIZAR_REPORTE: `[Reporte] Visualizar reporte`,
    VISUALIZAR_FAIL: `[Reporte] Visualizar reporte fallido`,
    VISUALIZAR_SUCCESS: `[Reporte] Visualizar reporte completo`,
    GET_REPORTE: `[Reporte] Obtener reporte`,
    GET_REPORTE_FAIL: `[Reporte] Obtener reporte fallido`,
    GET_REPORTE_SUCCESS: `[Reporte] Obtener reporte completo`,
    SET_REPORTE: `[Reporte] setear reporte`,
    QUITAR_CAMPO: `[Campo] Quitar campo a  reporte `,
    VISIBLE_CAMPO: `[Campo] Hacer campo visible/invisible`,
    ADD_FUNCION: `[Funcion] Agregar funcion a  reporte `,
    ADD_DATOS: `[Dato] Agregar datos generales a  reporte `,
    DELETE_RELATION_BY_ID: `[Relacion] Eliminar relación de reporte `,
    GET_REPORTE_ESTADO:'[Reporte] Obtiene el reporte estado actual',
    REORDENAR_CAMPO: '[Reporte] Reordenar campo',
    ADD_ORDER_BY :'[Reporte] Agregar order by',
    ADD_TABLA_JOIN_AND_ON_JOIN_WITH_AND:  '[Reporte] Agregar solo campos on join con AND',
    ...getCommonCrudActions('Reporte')
}
//Funciones para manipular el estado Interno
export class CreateReporte implements Action {
  readonly type = actions.CREATE_REPORTE;
  constructor(public payload: any) {}
}
/* SELECCIONAR TABLA BASE DE REPORTE*/
export class AddTablaBase implements Action {
  readonly type = actions.ADD_TABLA_BASE;
  constructor(public payload: TablaQuery) {}
}
export class DeleteTablaBase implements Action {
  readonly type = actions.DELETE_TABLA_BASE;
  constructor(public payload = null) {}
}

export class DeleteRelacionById implements Action {
  readonly type = actions.DELETE_RELATION_BY_ID;
  constructor(public payload : any) {}
}

export class AddTablaJoinAndOnJoin implements Action {
  readonly type = actions.ADD_TABLA_JOIN_AND_ON_JOIN;
  constructor(public payload : any) {}
}

export class AddTablaJoinAndOnJoinWithAnd implements Action {
  readonly type = actions.ADD_TABLA_JOIN_AND_ON_JOIN_WITH_AND;
  constructor(public payload : any) {}
}

// UNIR TABLAS A REPORTE
export class AddManyTablas implements Action {
  readonly type = actions.ADD_MANY_TABLA;
  constructor(public payload: TablaQuery[]) {}
}

// AGREGAR CAMPO A REPORTE
export class AddCampo implements Action {
  readonly type = actions.ADD_CAMPO;
  constructor(public payload :CampoQuery) {}
}

// AGREGAR CAMPO A REPORTE
export class AddManyCampos implements Action {
  readonly type = actions.ADD_MANY_CAMPO;
  constructor(public payload : CampoQuery[]) {}
}
//QUITAR CAMPO
export class QuitarCampo implements Action {
  readonly type = actions.QUITAR_CAMPO;
  constructor(public payload :any) {}
}

//HACER UN CAMPO VISIBLE/NO VISIBLE
export class VisibleCampo implements Action {
  readonly type = actions.VISIBLE_CAMPO;
  constructor(public payload :any) {}
}

// AGREGAR FILTRO A REPORTE
export class AddFiltros implements Action {
  readonly type = actions.ADD_FILTROS;
  constructor(public payload :any) {}
}

export class RemoveFiltros implements Action {
  readonly type = actions.REMOVE_FILTROS;
  constructor(public payload = null) {}
}

// AGREGAR FILTRO A REPORTE
export class UpdateFiltros implements Action {
  readonly type = actions.UPDATE_FILTROS;
  constructor(public payload :any) {}
}

//ELIMINAR REPORTE
export class ResetReporte implements Action {
  readonly type = actions.RESET_REPORTE;
  constructor(public payload = null) {}
}

// Acción para interactuar con la BD

export class AddReporte implements Action {
  readonly type = actions.ADD;
  constructor(public payload: any) {}
}
export class AddReporteSuccess implements Action {
  readonly type = actions.ADD_SUCCESS;
  constructor(public payload: any) {}
}
export class AddReporteFail implements Action {
  readonly type = actions.ADD_FAIL;
  constructor(public payload: any) {}
}

export class UpdateReporte implements Action {
  readonly type = actions.UPDATE;
  constructor(public payload: any) {}
}
export class UpdateReporteSuccess implements Action {
  readonly type = actions.UPDATE_SUCCESS;
  constructor(public payload: any) {}
}
export class UpdateReporteFail implements Action {
  readonly type = actions.UPDATE_FAIL;
  constructor(public payload: any) {}
}

export class DeleteReporte implements Action {
  readonly type = actions.DELETE;
  constructor(public payload: any) {}
}
export class DeleteReporteSuccess implements Action {
  readonly type = actions.DELETE_SUCCESS;
  constructor(public payload: any) {}
}
export class DeleteReporteFail implements Action {
  readonly type = actions.DELETE_FAIL;
  constructor(public payload: any) {}
}

export class GetAllReporte implements Action {
  readonly type = actions.GET_ALL;
  constructor(public payload = null) {}
}
export class GetAllReporteSuccess implements Action {
  readonly type = actions.GET_ALL_SUCCESS;
  constructor(public payload: ReporteAvanzadoState[]) {}
}
export class GetAllReporteFail implements Action {
  readonly type = actions.GET_ALL_FAIL;
  constructor(public payload: any) {}
}
export class GetCriterioReporte implements Action {
  readonly type = actions.GET_CRITERIO;
  constructor(public payload: any) {}
}
export class GetCriterioReporteSuccess implements Action {
  readonly type = actions.GET_CRITERIO_SUCCESS;
  constructor(public payload:ReporteAvanzadoState[]) {}
}
export class GetCriterioReporteFail implements Action {
  readonly type = actions.GET_CRITERIO_FAIL;
  constructor(public payload: any) {}
}
export class DownloadReporte implements Action {
  readonly type = actions.DOWNLOAD;
  constructor(public payload: any = null) { }
}
export class DownloadReporteSuccess implements Action {
  readonly type = actions.DOWNLOAD_SUCCESS;
  constructor(public payload: any) { }
}
export class DownloadReporteFail implements Action {
  readonly type = actions.DOWNLOAD_FAIL;
  constructor(public payload: any) { }
}
export class VisualizarReporte implements Action {
  readonly type = actions.VISUALIZAR_REPORTE;
  constructor(public payload: any) { }
}
export class VisualizarReporteFail implements Action {
  readonly type = actions.VISUALIZAR_FAIL;
  constructor(public payload: any) { }
}
export class VisualizarReporteSuccess implements Action {
  readonly type = actions.VISUALIZAR_SUCCESS;
  constructor(public payload: any) { }
}
export class SetReporte implements Action {
  readonly type = actions.SET_REPORTE;
  constructor(public payload: ReporteAvanzadoState) { }
}
export class GetReporteEstado implements Action {
  readonly type = actions.GET_REPORTE_ESTADO;
  constructor(public payload = null) { }
}
export class GetReporte implements Action {
  readonly type = actions.GET_REPORTE;
  constructor(public payload: any) { }
}
export class GetReporteFail implements Action {
  readonly type = actions.GET_REPORTE_FAIL;
  constructor(public payload: any) { }
}
export class GetReporteSuccess implements Action {
  readonly type = actions.GET_REPORTE_SUCCESS;
  constructor(public payload: any) { }
}
export class AddFuncion implements Action {
  readonly type = actions.ADD_FUNCION;
  constructor(public payload: any) { }
}

export class AddDatos implements Action {
  readonly type = actions.ADD_DATOS;
  constructor(public payload: any) { }
}

export class ReordenarCampo implements Action {
  readonly type = actions.REORDENAR_CAMPO;
  constructor(public payload: any) { }
}
export class AddOrderByCampo implements Action {
  readonly type = actions.ADD_ORDER_BY;
  constructor(public payload: any) { }
}


export type ReporteActions
  =  AddTablaBase
  | AddTablaJoinAndOnJoin
  | AddTablaJoinAndOnJoinWithAnd
  | DeleteTablaBase
  | AddManyTablas
  | AddCampo
  | AddManyCampos
  | UpdateFiltros
  | ResetReporte
  | CreateReporte
  | AddReporte
  | AddReporteSuccess
  | AddReporteFail
  | UpdateReporte
  | UpdateReporteSuccess
  | UpdateReporteFail
  | DeleteReporte
  | DeleteReporteSuccess
  | DeleteReporteFail
  | GetAllReporte
  | GetAllReporteSuccess
  | GetAllReporteFail
  | GetCriterioReporte
  | GetCriterioReporteSuccess
  | GetCriterioReporteFail
  | DownloadReporte
  | DownloadReporteSuccess
  | DownloadReporteFail
  | VisualizarReporte
  | VisualizarReporteFail
  | VisualizarReporteSuccess
  | GetReporte
  | GetReporteEstado
  | SetReporte
  | GetReporteFail
  | GetReporteSuccess
  | AddFuncion
  | AddDatos
  | ReordenarCampo
  | AddOrderByCampo;
