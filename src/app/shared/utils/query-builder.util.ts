import { QueryBuilderClassNames, QueryBuilderConfig } from 'angular2-query-builder';
import { Campo } from '../../reportes/admin/models/campo.model';
import { CampoQuery, Filtro, CondicionQuery } from '../../reportes/user/models';
import { ReporteAvanzadoState } from '../../shared/store/reducers/entity-state.model';
import { getFormattedDate } from './dates.util';

interface Condition {
  field: string,
  operator: string,
  value: any,
  rules?: ConditionQueryBuilder
}

interface ConditionQueryBuilder {
  condition?: string,
  rules?: Condition[],
}


export const CONFIG_QUERY_BUILDER_BOOSTRAP: QueryBuilderClassNames = {
  removeIcon: 'fa fa-minus',
  addIcon: 'fa fa-plus',
  arrowIcon: 'fa fa-chevron-right px-2',
  button: 'btn',
  buttonGroup: 'btn-group',
  rightAlign: 'order-12 ml-auto',
  switchRow: 'd-flex px-2',
  switchGroup: 'd-flex align-items-center',
  switchRadio: 'custom-control-input',
  switchLabel: 'custom-control-label',
  switchControl: 'custom-control custom-radio custom-control-inline',
  row: 'row p-2 m-1',
  rule: 'border',
  ruleSet: 'border',
  invalidRuleSet: 'alert alert-danger',
  emptyWarning: 'text-danger mx-auto',
  operatorControl: 'form-control',
  operatorControlSize: 'col-auto pr-0',
  fieldControl: 'form-control',
  fieldControlSize: 'col-auto pr-0',
  entityControl: 'form-control',
  entityControlSize: 'col-auto pr-0',
  inputControl: 'form-control',
  inputControlSize: 'col-auto'
}

export const CONFIG_QUERY_BUILDER_MESSAGE_RULE_EMPTY = 'Un conjunto de reglas no puede estar vacío. Por favor agregue una regla o elimínela.';
const DEFAULT_OPERATOR_QUERY_BUILDER = '=';
const DEFAULT_CONDITION_QUERY_BUILDER = 'and';
const DEFAULT_VALUE_QUERY_BUILDER = undefined;

export function getDataTypeQueryBuilder(idTipoDato: string): string {
  if (idTipoDato === null) {
    return 'none';
  }
  switch (idTipoDato) {
    case 'VARCHAR2':
      return 'string';
    case 'NUMBER':
      return 'number';
    case 'DATE':
      return 'date';
    case 'CHAR':
      return 'string';
    case 'LONG':
      return 'string';
    case 'BYTE':
      return 'boolean';
    default:
      return 'not map';
  }
}
//Por mientras, debe ser jalado de la base de datos
const OPERADORES_TIPO_DATO = {
  NUMBER: ['=', '!=', '>', '<', '>=', '<='/*,'IN'*/],
  VARCHAR2: ['=', '!='/*,'IN'*/, 'CONTIENE'],
  DATE: ['=', '!='/*,'>','<','>=','<='*/, 'ESTA ENTRE'],
  CHAR: ['=', '!=']
}

function getOperators(idTipoDato: string, operadores?: any[]): string[] {
  let result: string[] = [];
  operadores.forEach(function(item: any) {
    if (item.idTipoDato === idTipoDato) {
      item.listaOperadores.forEach(function(x: any) {
        result.push(x.simboloOperador);
      });
      return result;
    }
  });
  return result;
}

function getIdOperatorOfOperators(tipoDato: string, simbolo: string, operators: any[]): number {
  let idOperador = -1;
  operators.forEach(function(item: any) {
    if (item.idTipoDato === tipoDato) {
      item.listaOperadores.forEach(function(x: any) {
        if (simbolo === x.simboloOperador) {
          idOperador = x.idOperador;
          return idOperador;
        }
      });
    }
  });
  return idOperador;
}

export function initFieldsQueryBuilder(campos: any[], config: any, query: any, operadores: any[], initQuery: boolean) {
  campos.forEach(function(item) {
    let strId = item.idInstancia + "|" + item.idTabla + "|" + item.tabla + "|" + item.idCampo + "|" + item.campo + "|" + item.idTipoDato + "|" + item.aliasTabla + "|" + item.alias;
    let arrOperators: any[] = getOperators(item.idTipoDato, operadores);
    config.fields = {
      ...config.fields,
      [strId]: {
        name: "(" + item.idInstancia + ") " + item.aliasTabla + " - " + item.alias,
        tabla: item.idTabla,
        campo: item.idCampo,
        type: getDataTypeQueryBuilder(item.idTipoDato),
        value: strId,
        operators: arrOperators
      }
    }
  });
  if (initQuery) {
    let arr = {
      field: campos[campos.length - 1].idInstancia + "|" + campos[campos.length - 1].idTabla + "|" + campos[campos.length - 1].tabla + "|" + campos[campos.length - 1].idCampo + "|" + campos[campos.length - 1].campo + "|" + campos[campos.length - 1].idTipoDato + "|" + campos[campos.length - 1].aliasTabla + "|" + campos[campos.length - 1].alias,
      operator: DEFAULT_OPERATOR_QUERY_BUILDER,
      value: DEFAULT_VALUE_QUERY_BUILDER
    }
    query.condition = DEFAULT_CONDITION_QUERY_BUILDER;
    query.rules = [];
    query.rules.push(arr);
  }
}

function recursionNodeRule(query: any): boolean {
  let isValid: boolean = true;
  query.rules.forEach(function(item: any) {
    if (item.rules === undefined) {
      if (item.value === undefined || item.value === '') {
        isValid = false;
      }
    } else {
      if (item.rules.length !== 0 && item.field === undefined) {
        isValid = recursionNodeRule(item);
      }
    }
  });
  return isValid;
}

export function isFiltrosValid(query: any): boolean {
  if (query.rules.length === 0) {
    return false;
  }
  return recursionNodeRule(query);
}

function recursionNodeValue(query: any, filtrosYCondiciones: any, idCondicionPadre: number, secuenciaCondicion: number, operators: any[]): Filtro[] {
  let objCondiciones: any = {
    idCondicionQuery: secuenciaCondicion,
    idCondicionQueryAux: secuenciaCondicion,
    idCondicionPadre: idCondicionPadre,
    idReporte: null,
    operadorLogico: query.condition.toUpperCase(),
    tipoCondicion: 0
  }
  filtrosYCondiciones.condiciones.push(objCondiciones);
  query.rules.forEach(function(item: any) {
    if (item.rules === undefined) {
      let arrField = item.field.split('|');
      let idOperador = getIdOperatorOfOperators(arrField[5], item.operator, operators);
      let objFiltros: Filtro = {
        idFiltroCampo: null,
        idCampoQuery: null,
        idReporte: null,
        idTabla: parseInt(arrField[1]),
        tabla: arrField[2],
        aliasTabla: arrField[6],
        idCampo: parseInt(arrField[3]),
        campo: arrField[4],
        aliasCampo: arrField[7],
        idInstancia: arrField[0],
        idOperador: idOperador, //cambiar
        simboloOperador: item.operator, // cambiar
        idCondicionPadre: idCondicionPadre + 1,
        valor: getValorInputFilter(item,arrField[5]),
        tipoDatoValor: arrField[5],
        permitido: null
      }
      filtrosYCondiciones.filtros.push(objFiltros);
    } else {
      if (item.rules.length !== 0 && item.field === undefined) {
        recursionNodeValue(item, filtrosYCondiciones, idCondicionPadre + 1, secuenciaCondicion + 1, operators);
      }
    }
  });
  return;
}

export function getValorInputFilter(item: any, tipoDato): any{
  /*if(tipoDato=='DATE' && item.operator == 'BETWEEN'){
    return ;
  }*/
  if(tipoDato == 'DATE' && item.operator != 'BETWEEN'){
    return ''.concat("TO_DATE('",getFormattedDate(item.value),"','DD/MM/YYYY')");
  }
  if(tipoDato == 'DATE' && item.operator == 'BETWEEN'){
    return ''.concat("TO_DATE('",getFormattedDate(item.value[0]),"','DD/MM/YYYY')"," AND ","TO_DATE('",getFormattedDate(item.value[1]),"','DD/MM/YYYY')");
  }
  if(tipoDato == 'VARCHAR2' && item.operator == 'LIKE'){
    ''.concat('%',item.value,'%');
  }
  return item.value;
}

export function getFiltersToState(query: ConditionQueryBuilder, operators: any[]): any {
  if (query.rules.length === 0) {
    return;
  }
  let filtrosYCondiciones: any = {
    filtros: [],
    condiciones: []
  };
  recursionNodeValue(query, filtrosYCondiciones, 0, 1, operators);
  return filtrosYCondiciones;
}

export function recursionQueryOfState(state: ReporteAvanzadoState, query: any, idCondicionQuery: number) {
  state.condiciones.forEach(function(item) {
    if (item.idCondicionQuery === idCondicionQuery) { //1
      query.condition = item.operadorLogico.toLowerCase(); //and
      state.filtros.forEach(function(x) {
        if (x.idCondicionPadre === idCondicionQuery) {
          let obj = {
            field: x.idInstancia + "|" + x.idTabla + "|" + x.tabla + "|" + x.idCampo + "|" + x.campo + "|" + x.tipoDatoValor + "|" + x.aliasTabla + "|" + x.aliasCampo,
            operator: x.simboloOperador,
            value: x.valor
          }
          query.rules.push(obj);
        }
      });
    }
    if (item.idCondicionPadre === idCondicionQuery) {
      let queryRecursive: any = {
        condition: '',
        rules: []
      };
      query.rules.push(queryRecursive);
      recursionQueryOfState(state, query.rules[query.rules.length - 1], item.idCondicionQuery);
    }
  });
}

export function getQueryOfState(state: ReporteAvanzadoState): any {
  let query: any = {
    condition: '',
    rules: []
  };
  recursionQueryOfState(state, query, 1);
  return query;
}

export function getCamposInactiveToState(resultFiltros: any, state: ReporteAvanzadoState): any {
  let arrCampos: any[] = [];
  if (state.campos.length !== 0) {
    resultFiltros.filtros.forEach(function(item) {
      state.campos.forEach(function(campo) {
        if (item.idCampo !== campo.idCampo && item.idTabla !== campo.idTabla && item.idInstancia !== campo.idInstanciaTabla) {
          let obj: any = {
            idCampoQuery: null,
            idTablaQuery: null,
            idReporte: null,
            idTabla: item.idTabla,
            tabla: item.tabla,
            aliasTabla: item.aliasTabla, // falta
            idInstanciaTabla: item.idInstancia,
            idCampo: item.idCampo,
            campo: item.campo,
            aliasCampo: item.aliasCampo, //repetir
            alias: item.aliasCampo, //repetir
            enOrderBy: null,
            ordenOrderBy: 0,
            enSelect: false,
            idFuncionGrupo: null,
            funcionGrupo: null,
            idTipoDato: item.tipoDatoValor,
            permitido: 0
          }
          arrCampos.push(obj);
        }
      });
    });
  } else {
    resultFiltros.filtros.forEach(function(item) {
      let obj: any = {
        idCampoQuery: null,
        idTablaQuery: null,
        idReporte: null,
        idTabla: item.idTabla,
        tabla: item.tabla,
        aliasTabla: item.aliasTabla, // falta
        idInstanciaTabla: item.idInstancia,
        idCampo: item.idCampo,
        campo: item.campo,
        aliasCampo: item.aliasCampo, //repetir
        alias: item.aliasCampo, //repetir
        enOrderBy: null,
        ordenOrderBy: 0,
        enSelect: false,
        idFuncionGrupo: null,
        funcionGrupo: null,
        idTipoDato: item.tipoDatoValor,
        permitido: 0
      }
      arrCampos.push(obj);
    });
  }
  return arrCampos;
}
