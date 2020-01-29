import { ReporteActions, actions } from '../../actions/reportes/reporte-estado.actions';
import { ReporteAvanzadoState } from '../entity-state.model';
import { getTablasBeforeDelete, getTablasOnJoinBeforeDelete, getCamposBeforeDelete  } from '../../../utils/reporte-estado.util';
import { RESOURCE_ACTIONS } from '../../../utils';

const INITIAL_STATE: ReporteAvanzadoState = {
  idReporte: 0,
  nombre: null,
  descripcion: null,
  descCorta: null,
  queryReporte: null,
  frecuencia: 0,
  prioridad:0,
  tablas: [],
  campos:[],
  filtros: [],
  condiciones:[],
  tablasOnJoin: [],
  descargando: false,
  consultando: false,
  resultadoConsulta: null,
  contadorCampo:[],
  action: null,
  publico:false,

}
export function reporteEstadoReducer(state: ReporteAvanzadoState = INITIAL_STATE, action: ReporteActions): ReporteAvanzadoState {
  switch (action.type) {
    case actions.ADD_TABLA_BASE:
      state.tablas[0] = action.payload;

      return {
        ...state,
        campos : [],
        action: RESOURCE_ACTIONS.ACTUALIZACION
      }
    case actions.ADD_TABLA_JOIN_AND_ON_JOIN:
      state.tablas[state.tablas.length] = action.payload.tablaJoin;
      state.tablasOnJoin[state.tablasOnJoin.length] = action.payload.onJoin;
      state.campos = state.campos.concat(action.payload.campos);
      return {
        ...state,
        action: RESOURCE_ACTIONS.ACTUALIZACION
      }
    case actions.ADD_TABLA_JOIN_AND_ON_JOIN_WITH_AND:
      state.tablasOnJoin[state.tablasOnJoin.length] = action.payload.onJoin;
      state.campos = state.campos.concat(action.payload.campos);
      return {
        ...state,
        action: RESOURCE_ACTIONS.ACTUALIZACION
      }
    case actions.ADD_DATOS:
      state.nombre = action.payload.nombre;
      state.descCorta = action.payload.descCorta;
      state.descripcion = action.payload.descripcion;
      state.publico = action.payload.publico;
      return {
        ...state,
        action: RESOURCE_ACTIONS.ACTUALIZACION
      }
    case actions.ADD_MANY_CAMPO:
      let camposAniadir = state.campos ? state.campos : []
      action.payload.forEach(function(item: any) {
        let nombreCampo=item.campo;
        let aliasEnQuery='';
        if(state.contadorCampo[nombreCampo]===undefined ||state.contadorCampo[nombreCampo]==null){
          state.contadorCampo[nombreCampo]=0;
          aliasEnQuery= item.campo;
        }else{
          state.contadorCampo[nombreCampo]+=1;
          aliasEnQuery= item.campo + state.contadorCampo[nombreCampo];
        }
        item.enSelect = true;
        item.aliasEnQuery=aliasEnQuery;
        item.aliasCampo = item.alias;
        camposAniadir.push(item);
      });
      return {
        ...state,
        campos: camposAniadir,
        action: RESOURCE_ACTIONS.ACTUALIZACION
      };
    case actions.ADD_FUNCION:
      let idCampo = action.payload.idCampo
      state.campos.map(c => {
        if (c.idCampo == idCampo)
          c.funcionGrupo = action.payload.funcion
      })
      return {
        ...state,
        action: RESOURCE_ACTIONS.ACTUALIZACION
      };
    case actions.QUITAR_CAMPO: {
      return {
        ...state,
        campos: state.campos.filter(
          c => c.idCampo != action.payload.idCampo || c.idInstanciaTabla != action.payload.idInstanciaTabla
        ),
        action: RESOURCE_ACTIONS.ACTUALIZACION
      }
    }
    case actions.VISIBLE_CAMPO: {
      state.campos.map(c => {
        if (c.idCampo == action.payload.campo.idCampo && c.idInstanciaTabla == action.payload.campo.idInstanciaTabla) {
          c.enSelect = action.payload.visible
        }
      })
      return {
        ...state,
        action: RESOURCE_ACTIONS.ACTUALIZACION
      }
    }
    case actions.DELETE_RELATION_BY_ID:
      state.tablas = getTablasBeforeDelete(action.payload,state);
      state.tablasOnJoin = getTablasOnJoinBeforeDelete(action.payload,state);
      state.campos = getCamposBeforeDelete(action.payload,state);
      return {
        ...state,
        action: RESOURCE_ACTIONS.ACTUALIZACION
      }
    case actions.ADD_FILTROS: {
      state.filtros = action.payload.filtros;
      state.condiciones = action.payload.condiciones;
      state.campos = state.campos.concat(action.payload.campos);
      return {
        ...state,
        action: RESOURCE_ACTIONS.ACTUALIZACION
      }
    }
    case actions.REMOVE_FILTROS: {
      state.filtros = [];
      state.condiciones = [];
      return {
        ...state,
        action: RESOURCE_ACTIONS.ACTUALIZACION
      }
    }
    case actions.REORDENAR_CAMPO: {
      let toIndex = action.payload.index
      let fromIndex
      state.campos.forEach(
        (c, i) => {
          if(c.idCampo == action.payload.campo.idCampo && c.idInstanciaTabla == action.payload.campo.idInstanciaTabla){
            fromIndex = i
          }
        }
      )
      state.campos.splice(toIndex, 0, state.campos.splice(fromIndex, 1)[0]);
      return {
        ...state,
        action: RESOURCE_ACTIONS.ACTUALIZACION
      }
    }
    case actions.ADD_ORDER_BY: {
      let campos = []
      state.campos.forEach(
        c => {
          if(c.idCampo == action.payload.campo.idCampo && c.idInstanciaTabla == action.payload.campo.idInstanciaTabla){
            console.log(action.payload)
            switch(action.payload.enOrderBy){
              case 1 :{
                c.enOrderBy = 'ASC';
                break;
              }
              case -1 :{
                c.enOrderBy = 'DESC';
                break;
              }
              default :
                c.enOrderBy = null;
            }
          }
          campos.push(c)
        }
      )
      return {
        ...state,
        campos: campos,
        action: RESOURCE_ACTIONS.ACTUALIZACION
      }
    }
    case actions.SET_REPORTE:{
      state= action.payload;
      let camposAniadir = state.campos ? state.campos : []
      action.payload.campos.forEach(function(item: any) {
        let nombreCampo=item.campo;
        let aliasEnQuery='';
        if(state.contadorCampo[nombreCampo]===undefined ||state.contadorCampo[nombreCampo]==null){
          state.contadorCampo[nombreCampo]=0;
          aliasEnQuery= item.campo;
        }else{
          state.contadorCampo[nombreCampo]+=1;
          aliasEnQuery= item.campo + state.contadorCampo[nombreCampo];
        }
        console.log(item.campo+'-'+aliasEnQuery);
        item.enSelect = true;
        item.aliasEnQuery=aliasEnQuery;
        item.aliasCampo = item.alias;
        camposAniadir.push(item);
      });

      return {
        ...state,
        campos: camposAniadir,
        action: RESOURCE_ACTIONS.ACTUALIZACION
      }
    }
    case actions.RESET_REPORTE:{
      state= {
        idReporte: 0,
        nombre: null,
        descripcion: null,
        descCorta: null,
        queryReporte: null,
        frecuencia: 0,
        prioridad:0,
        tablas: [],
        campos:[],
        filtros: [],
        condiciones:[],
        tablasOnJoin: [],
        descargando: false,
        consultando: false,
        resultadoConsulta: null,
        contadorCampo:{},
        action: null,
        publico:false,
      };
      return state;
    }
    case actions.GET_REPORTE_ESTADO:{
      state=state;
      return  {
        ...state,
        action: RESOURCE_ACTIONS.ACTUALIZACION
      };
    }
    case actions.GET_REPORTE:
        return {
          ...state,
          action: RESOURCE_ACTIONS.ACTUALIZACION
        };
    case actions.GET_REPORTE_SUCCESS:
        state= action.payload[0];
      return {
        ...state,
        contadorCampo: []
      };
    case actions.GET_REPORTE_FAIL:
      return {
        ...state
      };
    case actions.VISUALIZAR_REPORTE:
      return {
        ...state,
        consultando:true,
        action: RESOURCE_ACTIONS.CONSULTA
      };
    case actions.VISUALIZAR_SUCCESS:
      return {
        ...state,
        resultadoConsulta:action.payload,
        consultando:false

      };
    case actions.VISUALIZAR_FAIL:
      return {
        ...state,
        resultadoConsulta:null,
        consultando:false
      };
    default:
      return state;
  }
}
