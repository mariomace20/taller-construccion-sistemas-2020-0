import { Tabla, TablaQuery, TablaOnJoin, CampoQuery, TablasForaneas } from '../../reportes/user/models';
import { PermisoUsuario, Campo } from '../../reportes/admin/models';
import { ReporteAvanzadoState } from '../../shared/store/reducers/entity-state.model';
import { FormGroup } from '@angular/forms';
import { MultitabDet } from '../../mantenimiento/models/multitab-det.model';
import { ObComboboxCellParams } from '../components/ag-grid/combobox-cell/combobox-cell.component';
import { removeElementArrObject } from '../../shared/utils/array.util';

/*
  [
    10: [1,2,3],
    20: [4,5,6],
    30: [7,8,9],
    40: [7,8,9],
  ]
*/
export interface ListaModificacion{
  [key: number] : string
}


const ALIAS_TABLAS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O'];

const MAX_ALIAS_TABLAS = ALIAS_TABLAS.length;

/*
* Esta constante debe estar actualizada según los registros de la tabla MAE_PARAMETRO_REPORTEADOR
* Ejemplo:
* 0	CANTIDAD MÁXIMA DE CAMPOS EN REPORTE	NUMBER	128	ADMIN		21/07/19	-- Se encuentra en la BD
*/
export const PARAMETROS_REPORTES = {
  MAX_CAMPOS: 0,
  MAX_FILTROS: 1,
  MAX_INTERVAL_CONSULTA: 2,
};

export const FUNCIONES_GRUPO = [
  {
    simboloOperador: 'SUM',
    nombre: 'SUMA'
  },
  {
    simboloOperador: 'AVG',
    nombre: 'PROMEDIO'
  },
  {
    simboloOperador: 'COUNT',
    nombre: 'CANTIDAD'
  },
  {
    simboloOperador: 'MAX',
    nombre: 'MÁXIMO'
  },
  {
    simboloOperador: 'MIN',
    nombre: 'MÍNIMO'
  }
]
export const JOINS_TYPE = {
  left: "LEFT JOIN",
  right: "RIGHT JOIN",
  inner: "INNER JOIN",
}



/* Esta funcion me obtiene el mayor orden que existe en las tablasJoins */
export function getOrden(state: any) {
  if (state.tablas.length === 0) {
    return 1;
  } else {
    let max = -1;
    for (let i = 0; i < state.tablas.length; i++) {
      if (state.tablas[i].orden > max) {
        max = state.tablas[i].orden;
      }
    }
    return max;
  }

}

/* Esta funcion me obtiene las tablasJoins existentes */
export function getTablasJoin(state: any): any[] {
  let array = new Array();
  if (state.tablasJoin.length === 0) {
    return array;
  } else {
    for (let i = 0; i < state.tablasJoin.length; i++) {
      let aux = {
        'tabla': state.tablasJoin[i].tabla,
        'tablaFrom': state.tablasJoin[i].tablaFrom,
        'campoCompartido': state.tablasJoin[i].campoCompartido
      }
      array.push(aux);
    }
    return array;
  }
}

/* Funcion que me indica si existe la tablaJoin en el estado */
export function existsTablaJoin(data: any, state: any) {
  let existe = false;
  let arrayTablasJoins = getTablasJoin(state);
  if (arrayTablasJoins.length === 0) {
    return false;
  } else {
    for (let i = 0; i < arrayTablasJoins.length; i++) {
      for (let j = 0; j < data.length; j++) {
        if (arrayTablasJoins[i].tablaFrom === data[j].tabla
          && arrayTablasJoins[i].tabla === data[j].tablaForanea
          && arrayTablasJoins[i].campoCompartido === data[j].campoFk) {
          existe = true;
        }
      }
    }
  }
  return existe;
}


export function createCriteriosTablasJoin(filas: any, orden: any) {
  let criterio = [];
  for (let i = 0; i < filas.length; i++) {
    let aux = {};
    for (let j = 0; j < filas[i].fila.length; j++) {
      let debeAgregarse = false;
      switch (j) {
        case 0:
          aux['idTablaFrom'] = filas[i].fila[j].data;
          aux['tablaFrom'] = filas[i].fila[j].text;
          break;
        case 1:
          aux['idTabla'] = filas[i].fila[j].data;
          aux['tabla'] = filas[i].fila[j].text;
          break;
        case 2:
          aux['campoCompartido'] = filas[i].fila[j].text;
          aux['idCampoCompartido'] = filas[i].fila[j].data;
          break;
        case 3:
          filas[i].fila[j].checked == true ? debeAgregarse = true : debeAgregarse = false;
          break;
      }
      aux['orden'] = orden + 1;
      aux['idQuery'] = null;
      aux['idInstancia'] = null;
      if (debeAgregarse) {
        criterio.push(aux)
      }
    }
  }
  return criterio;
}

export function createCriteriosCamposJoins(criterioTablasJoins: any) {
  let criterio = new Array();
  for (let i = 0; i < criterioTablasJoins.length; i++) {
    let aux = {
      'idTabla': criterioTablasJoins[i].idTabla,
      'tabla': criterioTablasJoins[i].tabla,
      'idCampo': criterioTablasJoins[i].idCampoCompartido,
      'campo': criterioTablasJoins[i].campoCompartido,
      'idTablaFrom': criterioTablasJoins[i].idTabla,
      'tablaFrom': criterioTablasJoins[i].idTablaFrom,
      'enSelect': 0,
      'orderBy': null,
      'idInstancia': '',
      'orden': criterioTablasJoins[i].orden,
    }
    criterio.push(aux);
  }
  return criterio;
}

export function getCamposInNoTState(campos: PermisoUsuario[], idsCampos: number[]): PermisoUsuario[] {
  if (idsCampos.length === 0 || campos.length === 0) {
    return [];
  }
  let resultPermisoUsuario: PermisoUsuario[] = [];
  campos.forEach(function(itemCampos) {
    if (idsCampos.indexOf(itemCampos.idCampo) === -1) {
      resultPermisoUsuario.push(itemCampos);
    }
  });
  return resultPermisoUsuario;
}

export function getItemsByTipo(params: ObComboboxCellParams) {
  switch (params.data.idTipoDato) {
    case 'NUMBER':
      return FUNCIONES_GRUPO;
    case 'DATE':
      return FUNCIONES_GRUPO.filter(f => f.simboloOperador == 'MIN' || f.simboloOperador == 'MAX')
    default:
      params.visible = false
  }
}

export function getIdsCamposOfState(state: ReporteAvanzadoState) {
  if (!state || !state.campos || state.campos.length === 0) {
    return [];
  }
  let resultArray: any[] = [];
  state.campos.forEach(itemCampos => {
    resultArray.push({
      idCampo: itemCampos.idCampo,
      idInstanciaTabla: itemCampos.idInstanciaTabla
    });
  });
  return resultArray;
}

export function getIdsTablasOfState(state: ReporteAvanzadoState): number[] {
  if (state.tablas.length === 0) {
    return [];
  }
  let resultArray: number[] = [];
  state.tablas.forEach(function(itemTabla) {
    resultArray.push(itemTabla.idTabla);
  });
  return resultArray;
}

export function getTablasOfState(state: ReporteAvanzadoState): any[] {
  if (state.tablas.length === 0) {
    return [];
  }
  let resultArray: any[] = [];
  state.tablas.forEach(function(itemTabla) {
    let obj: any = {};
    obj.idTabla = itemTabla.idTabla;
    obj.idInstancia = itemTabla.idInstancia;
    resultArray.push(obj);
  });
  return resultArray;
}

export function getCamposConAtributoEnSelect(state: ReporteAvanzadoState): number[] {
  if (state.campos.length === 0) {
    return [];
  }
  let resultArrayCampos: any[] = [];
  resultArrayCampos = state.campos.filter(campo => campo.enSelect);
  return resultArrayCampos;
}

export function getNextInstanciaOfState(state: ReporteAvanzadoState): string {
  if (state.tablas.length === 0) {
    return ALIAS_TABLAS[0];
  }
  let resultInstancia: string = "";
  let maxIndice: number = -1;
  state.tablas.forEach(function(itemTabla) {
    let indiceActual = ALIAS_TABLAS.indexOf(itemTabla.idInstancia);
    ALIAS_TABLAS.indexOf(itemTabla.idInstancia) > maxIndice ? maxIndice = indiceActual : ""
  });
  maxIndice < MAX_ALIAS_TABLAS ? resultInstancia = ALIAS_TABLAS[maxIndice + 1] : resultInstancia = "-1";
  return resultInstancia;
}

export function getNextInstanciaOfVariable(instancia: string): string {
  if (instancia === "") {
    return "-1";
  }
  let resultInstancia: string = "";
  let index = ALIAS_TABLAS.indexOf(instancia);
  resultInstancia = ALIAS_TABLAS[index + 1]
  index < MAX_ALIAS_TABLAS ? resultInstancia = ALIAS_TABLAS[index + 1] : resultInstancia = "-1";
  return resultInstancia;
}


export function processingTablaBaseToState(tabla: Tabla): TablaQuery {
  if (tabla === null) {
    return null;
  }
  let tablaQuery: TablaQuery = {
    idTablaQuery: null,
    idReporte: null,
    idTabla: tabla.idTabla,
    tabla: tabla.nombre,
    aliasTabla: tabla.alias,
    idInstancia: 'A',
    orden: 1,
    esBase: true,
    permitido: null,
    idTipoJoin: null,
    tipoJoin: null,
    descripcionTipoJoin: null,
  }
  return tablaQuery;
}

export function processingTablasAgregadasOfState(state: ReporteAvanzadoState): TablaQuery[] {
  if (state.tablas.length === 0) {
    return [];
  }
  let tablas: TablaQuery[] = [];
  state.tablas.forEach(function(item) {
    tablas.push(item);
  });
  return tablas;
}

export function filterTablasForaneasToSelect(tablasForaneas: TablasForaneas[]): any[] {
  if (tablasForaneas.length === 0) {
    return [];
  }
  let ngElementsTablas: any[] = [];
  tablasForaneas.forEach(function(item) {
    let obj = {
      ...item,
      idTablaForeaneaCampo: item.idTabla + "-" + item.idCampo + "|" + item.idTablaForanea + "-" + item.idCampoForaneo,
      labelTablaForaneaCampo: 'Tabla por unir: ' + item.aliasTablaForanea + " - Campo relacionado: " + item.aliasCampo
    }
    ngElementsTablas.push(obj);
  });
  return ngElementsTablas;
}

export function isFormTablasJoinValid(form: FormGroup): boolean {
  let isValid = false;
  let objForm = form.getRawValue();
  if (objForm.tablasPorUnir === null || objForm.tablasEnReporte === null) {
    isValid = false
  } else {
    isValid = true;
  }
  return isValid;
}

export function getRelationOfForm(form: FormGroup): any {
  if (form.getRawValue().tablasPorUnir === null || form.getRawValue().tablasEnReporte === null) {
    return null;
  } else {
    let strTablasPorUnir = form.getRawValue().tablasPorUnir;
    let arrTablas = strTablasPorUnir.split('|')
    let tablaBase = arrTablas[0];
    let tablaJoin = arrTablas[1];
    tablaBase = tablaBase.split('-');
    tablaJoin = tablaJoin.split('-');
    let obj = {
      idTablaBase: tablaBase[0],
      idCampoBase: tablaBase[1],
      idTablaForanea: tablaJoin[0],
      idCampoForaneo: tablaJoin[1]
    }
    return obj;
  }
}

export function getJoinType(form: FormGroup, multitabsDet: MultitabDet[]): any {
  /*if(multitabsDet.length === 0){
    return null;
  }else{*/
  let objForm = form.getRawValue();
  let switchTablaBase = objForm.incluirValoresNulosTablaBase;
  let switchInnerJoin = objForm.incluirInnerJoin;
  let switchTablaJoin = objForm.incluirValoresNulosTablaJoin;
  let objJoin: any = {};
  if (switchTablaBase) {
    objJoin.tipoJoin = 'LEFT JOIN';
    objJoin.idTipoJoin = 1;
  }
  if (switchInnerJoin) {
    objJoin.tipoJoin = 'INNER JOIN';
    objJoin.idTipoJoin = 2;
  }
  if (switchTablaJoin) {
    objJoin.tipoJoin = 'RIGHT JOIN';
    objJoin.idTipoJoin = 3;
  }
  return objJoin;
  //}
}

export function getTablaJoinToState(objRelation: any, objJoin: any, reporteEstado: ReporteAvanzadoState): TablaQuery {
  let tablaQuery: TablaQuery = {
    idTablaQuery: null,
    idReporte: null,
    idTabla: objRelation.idTablaForanea,
    tabla: objRelation.tablaForanea,
    aliasTabla: objRelation.aliasTablaForanea,
    idInstancia: getNextInstanciaOfState(reporteEstado),
    orden: getOrden(reporteEstado) + 1,
    esBase: false,
    permitido: null,
    idTipoJoin: objJoin.idTipoJoin,
    tipoJoin: objJoin.tipoJoin,
    descripcionTipoJoin: null,
  }
  return tablaQuery;
}

export function getCamposOnJoinToState(objRelationSelect: any, objTablasEnReporteSelectOfState: any, objTablasJoinOfState: any): any {
  let tablaQuery: TablaOnJoin = {
    idTablaOnJoin: null,
    idReporte: null,
    idCampoQueryBase: null,
    idTablaBase: objTablasEnReporteSelectOfState.idTabla,
    tablaBase: objTablasEnReporteSelectOfState.tabla,
    instanciaTablaBase: objTablasEnReporteSelectOfState.idInstancia,
    idCampoBase: objRelationSelect.idCampo,
    campoBase: objRelationSelect.campo,
    idCampoQueryJoin: null,
    idTablaJoin: objTablasJoinOfState.idTabla,
    tablaJoin: objTablasJoinOfState.tabla,
    instanciaTablaJoin: objTablasJoinOfState.idInstancia,
    idCampoJoin: objRelationSelect.idCampoForaneo,
    campoJoin: objRelationSelect.campoForaneo,
    idOperador: 1,
    simboloOperador: '=',
    operadorLogico: null,
    //Solo campos visuales:
    aliasTablaBase: objRelationSelect.aliasTabla,
    aliasCampoBase: objRelationSelect.aliasCampo,
    aliasTablaJoin: objRelationSelect.aliasTablaForanea,
    aliasCampoJoin: objRelationSelect.aliasCampoForaneo,
    idTipoJoin: objTablasJoinOfState.idTipoJoin,
    tipoJoin: objTablasJoinOfState.tipoJoin
  }
  return tablaQuery;
}

export function getAuxCriteriaOnJoin(camposOnJoinToSate: any): any[] {
  let resultArr: any[] = [];
  resultArr.push({
    instancia: camposOnJoinToSate.instanciaTablaBase,
    idCampo: camposOnJoinToSate.idCampoBase,
    nombreCampo: camposOnJoinToSate.campoBase,
    aliasCampo: camposOnJoinToSate.aliasCampoBase,
    idTabla: camposOnJoinToSate.idTablaBase,
    nombreTabla: camposOnJoinToSate.tablaBase,
    aliasTabla: camposOnJoinToSate.aliasTablaBase,
  });
  resultArr.push({
    instancia: camposOnJoinToSate.instanciaTablaJoin,
    idCampo: camposOnJoinToSate.idCampoJoin,
    nombreCampo: camposOnJoinToSate.campoJoin,
    aliasCampo: camposOnJoinToSate.aliasCampoJoin,
    idTabla: camposOnJoinToSate.idTablaJoin,
    nombreTabla: camposOnJoinToSate.tablaJoin,
    aliasTabla: camposOnJoinToSate.aliasTablaJoin,
  });
  return resultArr;
}

export function getIdsCamposOnJoin(camposOnJoinToSate: any): number[] {
  let resultArr: number[] = [];
  resultArr.push(camposOnJoinToSate.idCampoBase);
  resultArr.push(camposOnJoinToSate.idCampoJoin);
  return resultArr;
}

export function getCamposToState(campos: Campo[], auxCriteria: any[]): CampoQuery[] {
  let camposQuery: CampoQuery[] = [];
  campos.forEach(function(item) {
    auxCriteria.forEach(function(x, i) {
      if (x.idCampo === item.idCampo) {
        let obj: CampoQuery = {
          idCampoQuery: 0,
          idTablaQuery: 0,
          idReporte: 0,
          idTabla: x.idTabla,
          tabla: x.nombreTabla,
          alias: x.aliasCampo, //repetido por el pane de campos
          aliasTabla: x.aliasTabla,
          idInstanciaTabla: x.instancia,
          idCampo: x.idCampo,
          campo: x.nombreCampo,
          aliasCampo: x.aliasCampo,
          aliasEnQuery: x.nombreCampo,
          enOrderBy: null,
          ordenOrderBy: 0,
          enSelect: false,
          idFuncionGrupo: null,
          funcionGrupo: null,
          idTipoDato: item.idTipoDato,
          permitido: 0,
          mostrarEnPaneCampos: i === 0 ? false : true
        }
        camposQuery.push(obj);
      }
    });
  });
  return camposQuery;
}

export function isTablaJoinRepited(tablaJoinToState: any, camposOnJoinToSate: any, state: ReporteAvanzadoState): boolean {
  let isRepited: boolean = false;
  if (tablaJoinToState === null || camposOnJoinToSate === null) {
    return false;
  } else {
    state.tablas.forEach(function(item) {
      if (item.idTabla === tablaJoinToState.idTabla && item.idInstancia === tablaJoinToState.idInstancia) {
        isRepited = true;
      }
    });
    state.tablasOnJoin.forEach(function(item) {
      if (item.idTablaBase === camposOnJoinToSate.idTablaBase && item.idTablaJoin === camposOnJoinToSate.idTablaJoin
        && item.idCampoBase === camposOnJoinToSate.idCampoBase && item.idCampoJoin === camposOnJoinToSate.idCampoJoin) {
        isRepited = true;
      }
    });
    return isRepited;
  }
}

export function getLabelFieldNullPermited(tablaIzq: string, tablaDer: string, tipoJoin: string) {
  switch (tipoJoin) {
    case JOINS_TYPE.left:
      return `<label class="text-center px-1 ob-body-aggrid-color-label-gray margenes-circulares-etiquetas">${tablaIzq}</label>`
    case JOINS_TYPE.right:
      return `<label class="text-center px-1 ob-body-aggrid-color-label-gray margenes-circulares-etiquetas">${tablaDer}</label>`
    case JOINS_TYPE.inner:
      return `<label class="text-center px-1 ob-body-aggrid-color-label-gray margenes-circulares-etiquetas">AMBAS TABLAS</label>`
  }
}

export function getTablaOfState(idTabla: number, state: ReporteAvanzadoState): any {
  if (state.tablas.length === 0) {
    return {};
  } else {
    let objResult: any = {};
    state.tablas.forEach(function(item) {
      if (item.idTabla === idTabla) {
        objResult = {
          ...item
        };
        return objResult;
      }
    });
  }
}

export function isTablaDuplicatedInState(idTabla: number, state: ReporteAvanzadoState): boolean {
  if (state.tablas.length === 0) {
    return false;
  } else {
    let isDuplicated: boolean = false;
    let cont = 0;
    state.tablas.forEach(function(item) {
      if (item.idTabla === idTabla) {
        cont = cont + 1;
      }
    });
    cont === 1 ? isDuplicated = false : isDuplicated = true;
    return isDuplicated;
  }
}

export function addInstaciaOfStateInCampos(campos: Campo[], idInstancia: string): any[] {
  if (campos.length === 0) {
    return [];
  }
  let arrResult: any[] = []
  campos.forEach(function(item) {
    let obj = {
      ...item,
      idInstancia: idInstancia
    }
    arrResult.push(obj);
  });
  return arrResult;
}

export function isJoinIncluded(form: FormGroup): boolean {
  let leftJoin = form.getRawValue().incluirValoresNulosTablaBase;
  let innerJoin = form.getRawValue().incluirInnerJoin;
  let rightJoin = form.getRawValue().incluirValoresNulosTablaJoin;
  if (leftJoin === false && innerJoin === false && rightJoin === false) {
    return false;
  } else {
    return true;
  }
}

export function getTablasBeforeDelete(payload: any, state: ReporteAvanzadoState): TablaQuery[] {
  let newArrayTablas = [];
  state.tablas.forEach(function(tabla) {
    if (tabla.idTabla !== payload.idTablaJoin && tabla.idInstancia !== payload.instanciaTablaJoin) {
      newArrayTablas.push(tabla);
    }
  });
  return newArrayTablas;
}

export function getTablasOnJoinBeforeDelete(payload: any, state: ReporteAvanzadoState): TablaQuery[] {
  let newArrayTablasOnJoin = [];
  state.tablasOnJoin.forEach(function(tablaOnJoin) {
    if (tablaOnJoin.idTablaJoin === payload.idTablaJoin && tablaOnJoin.idTablaBase === payload.idTablaBase && tablaOnJoin.idCampoBase === payload.idCampoBase && tablaOnJoin.idCampoJoin === payload.idCampoJoin && tablaOnJoin.instanciaTablaBase === payload.instanciaTablaBase && tablaOnJoin.instanciaTablaJoin === payload.instanciaTablaJoin) {

    } else {
      newArrayTablasOnJoin.push(tablaOnJoin);
    }
  });
  return newArrayTablasOnJoin;
}

export function getCamposBeforeDelete(payload: any, state: ReporteAvanzadoState): CampoQuery[] {
  let newArrayCampos = [];
  state.campos.forEach(function(campos) {
    if (campos.idInstanciaTabla !== payload.instanciaTablaJoin && campos.idTabla !== payload.idTablaJoin) {
      newArrayCampos.push(campos);
    }
  });
  return newArrayCampos;

}

export function getCamposJoinJoinBeforeDelete(payload: any, state: ReporteAvanzadoState): CampoQuery[] {
  let newArrayCampos = [];
  state.campos.forEach(function(camposOnJoin) {
    if (camposOnJoin.idCampo !== payload.idCampoJoin && camposOnJoin.idTabla !== payload.idTablaJoin) {
      newArrayCampos.push(camposOnJoin);
    }
  });
  return newArrayCampos;
}

export function isValidChooseJoin(form: FormGroup) {
  let isValid: boolean = true;
  if (!form.getRawValue().incluirValoresNulosTablaBase && !form.getRawValue().incluirValoresNulosTablaJoin && !form.getRawValue().incluirInnerJoin) {
    isValid = false;
  }
  return isValid;
}

export function isInstanciaTablaRepited(tabla: any, state: ReporteAvanzadoState) {
  let isRepited: boolean = false;
  state.tablas.forEach(function(item) {
    if (tabla.idTabla === item.idTabla) {
      isRepited = true;
    }
  });
  return isRepited;
}

export function getInstanciaAnterior(camposOnJoinToSate: any, state: any) {
  let strResult: string;
  state.tablas.forEach(function(item: any) {
    if (camposOnJoinToSate.idTablaJoin === item.idTabla) {
      strResult = item.idInstancia;
    }
  });
  return strResult;
}


export function getCamposWithInstanciaAnterior(camposToState: any[], instancia: string) {
  let arrCamposToState: any[] = [];
  camposToState.forEach(function(item: any, idx: number) {
    if (idx === 0) {
      let obj = item;
      obj = {
        ...item,
        idInstanciaTabla: instancia,
        aliasEnQuery: item.aliasCampo
      }
      arrCamposToState.push(obj);
    }
  });
  return arrCamposToState;
}

export function isCampoOnJoinInState(campo: any, state: ReporteAvanzadoState): boolean{
  let isFound: boolean = false;
  state.tablasOnJoin.forEach(function(x: any) {
    if(campo.idCampo === x.idCampoJoin && campo.idInstanciaTabla === x.instanciaTablaJoin && campo.idTabla === x.idTablaJoin){
      isFound = true;
    }
  });
  return isFound;
}

export function ignoreCamposDuplicatedByOnJoin(state: ReporteAvanzadoState): any[] {
  let arrCampos: any[] = [];
  state.campos.forEach(function(item: any) {
    if(!isCampoOnJoinInState(item,state)){
      arrCampos.push(item);
    }
  });
  return arrCampos;
}


export function addIndMostrarEnPaneCampo(campos: any[]): any[] {
  var arrCampos: any[] = [];
  campos.forEach(function(item: any) {
    item = {
      ...item,
      mostrarEnPaneCampos: true,
    }
    arrCampos.push(item);
  });
  return arrCampos;
}

export function isCampoInState(campo: any, state: ReporteAvanzadoState): boolean{
  let isFound: boolean = false;
  state.campos.forEach(function(x: any) {
    if(campo.idCampo === x.idCampo && campo.idInstanciaTabla === x.idInstanciaTabla && campo.idTabla === x.idTabla){
      isFound = true;
    }
  });
  return isFound;
}

export function getCamposNotRepitedInState(campos: any[], state: ReporteAvanzadoState): any[] {
  var arrCampos: any[] = [];
  campos.forEach(function(item: any) {
    if(!isCampoInState(item,state)){
      arrCampos.push(item);
    }
  });
  return arrCampos;
}

export function getCellClassToReport(idTipoDato: string): string{
  let cellClass: string = '';
  switch(idTipoDato){
    case "VARCHAR2":
      cellClass="ob-type-string";
      break;
    case "DATE":
      cellClass="ob-type-fecha";
      break;
    case "NUMBER":
      cellClass="ob-type-number";
      break;
  }
  return cellClass;
}

export function getTypeFloatingFilerReport(idTipoDato: string): string{
  let cellClass: string = '';
  switch(idTipoDato){
    case "VARCHAR2":
      cellClass="agTextColumnFilter";
      break;
    case "DATE":
      cellClass="agDateColumnFilter";
      break;
    case "NUMBER":
      cellClass="agNumberColumnFilter";
      break;
  }
  return cellClass;
}

export function getChartDateType(idTipoDato: string): string{
  let chartDateType: string = '';
  switch(idTipoDato){
    case "VARCHAR2":
      chartDateType="category";
      break;
    case "DATE":
      chartDateType="category";
      break;
    case "NUMBER":
      chartDateType="series";
      break;
  }
  return chartDateType;
}

export function getEnablePivot(idTipoDato: string): boolean{
  let enablePivot: boolean = false;
  switch(idTipoDato){
    case "VARCHAR2":
      enablePivot=false;
      break;
    case "DATE":
      enablePivot=false;
      break;
    case "NUMBER":
      enablePivot=true;
      break;
  }
  return enablePivot;
}


export function getEnableRowGorup(idTipoDato: string): boolean{
  let enableRowGroup: boolean = false;
  switch(idTipoDato){
    case "VARCHAR2":
      enableRowGroup=true;
      break;
    case "DATE":
      enableRowGroup=true;
      break;
    case "NUMBER":
      enableRowGroup=true;
      break;
  }
  return enableRowGroup;
}


export function getMessageValidState(reporteEstado: ReporteAvanzadoState): string{
  if(reporteEstado.nombre === ''
      || reporteEstado.nombre === null
        || reporteEstado.descripcion === ''
          || reporteEstado.descripcion === null
            || reporteEstado.descCorta === ''
              || reporteEstado.descCorta === null){
    return 'Ingrese los datos generales del reporte';
  }
  if(reporteEstado.tablas.length === 0){
    return 'Ingrese una(s) tabla(s) al reporte';
  }
  if(reporteEstado.campos.length === 0){
    return 'Ingrese campos al reporte';
  }
  if(reporteEstado.filtros.length === 0){
    return 'Ingrese filtros al reporte';
  }
  return '';
}

export function isValidState(reporteEstado: ReporteAvanzadoState): boolean{
  let isValid: boolean = true;
  if(reporteEstado.nombre === ''
      || reporteEstado.nombre === null
        || reporteEstado.descripcion === ''
          || reporteEstado.descripcion === null
            || reporteEstado.descCorta === ''
              || reporteEstado.descCorta === null){
    return isValid = false;
  }
  if(reporteEstado.tablas.length === 0){
    return isValid = false;
  }
  if(reporteEstado.campos.length === 0){
    return isValid = false;
  }
  if(reporteEstado.filtros.length === 0){
    return isValid = false;
  }
  return isValid;
}

export function verifyExistsIdTabla(listaModificacion: ListaModificacion[], idTabla: string): number{
  let posicion: number = -1;
  listaModificacion.forEach(function(item, idx){
    let idTablaItem = Object.keys(item)[0];
    if(idTablaItem == idTabla){
      posicion = idx;
    }
  });
  return posicion;
}

export function verifyExistsIdCampo(listaModificacion: ListaModificacion[], posicion: number, idTabla: number ,idCampo: number): boolean{
  let existe: boolean = false;
  let strCampos = listaModificacion[posicion][idTabla];
  let idsCampos: any[] = strCampos.split("-");
  if(idsCampos.indexOf(idCampo.toString()) != -1){
    existe = true;
  }
  return existe;
}

export function removeIdCampo(listaModificacion: ListaModificacion[], posicion: number, idTabla: number ,idCampo: number): ListaModificacion[]{
  let strCampos = listaModificacion[posicion][idTabla];
  let idsCampos: any[] = strCampos.split("-");
  let idx = idsCampos.indexOf(idCampo.toString());
  idsCampos.splice(idx, 1);
  listaModificacion[posicion][idTabla] = idsCampos.join("-");
  if(listaModificacion[posicion][idTabla] == ''){
    removeElementArrObject(listaModificacion,idTabla);
  }
  return listaModificacion;
}

export function getListaModificacion(allCamposAsignables: any[]): ListaModificacion[]{
  let listaModifcacion: ListaModificacion[] = [];
  let allCamposConPermiso: any[] = allCamposAsignables.filter(campo => campo.existePermiso);
  let idsTablasAgregadas: any[] = [];
  allCamposConPermiso.forEach(function(item){
    if(idsTablasAgregadas.indexOf(item.idTabla)==-1){
      let obj = {
        [item.idTabla]: item.idCampo.toString()
      }
      idsTablasAgregadas.push(item.idTabla);
      listaModifcacion.push(obj);
    }else{
      let pos: number = verifyExistsIdTabla(listaModifcacion,item.idTabla);
      listaModifcacion[pos][item.idTabla] = listaModifcacion[pos][item.idTabla].concat("-",item.idCampo);
    }
  });
  return listaModifcacion;
}
