import { EventosInstitucionVisa } from '../../../../mantenimiento/models';
import { EventosInstitucionVisaActions, actions } from '../../actions/mantenimiento/eventos-institucion-visa.actions';
import { RESOURCE_ACTIONS } from '../../../utils';
import { State } from '../entity-state.model';

const INITIAL_STATE: State<EventosInstitucionVisa> = {
  data: [],
  selected: null,
  action: null,
  loading: false,
  done: false,
  failed: false,
  errors: null,
  doneMessage: null,
  dataOtherRequest: [],
  otherRequest: 0 //por si se hace otra peticion: 0-none, 1-cargando, 2-exito, 3-fallido
}

export function eventosInstitucionVisaReducer(state = INITIAL_STATE, action: EventosInstitucionVisaActions): State<EventosInstitucionVisa> {
  switch (action.type) {
    case actions.RESET:
      return { ...INITIAL_STATE };
    case actions.GET_ALL:
      return {
        ...state,
        action: RESOURCE_ACTIONS.CONSULTA,
        loading: true,
        done: false,
        failed: false,
        errors: null,
        selected: null
      };
    case actions.GET_ALL_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        done: true,
        failed: false,
        errors: null,
        selected: null
      };
    case actions.GET_ALL_FAIL:
      return {
        ...state,
        data: [],
        loading: false,
        done: false,
        failed: true,
        errors: action.payload,
        selected: null
      };
      case actions.GET_BY_INST:
        return {
          ...state,
          otherRequest: 1
        };
      case actions.GET_BY_INST_SUCCESS:
        return {
          ...state,
          dataOtherRequest: action.payload,
          otherRequest: 2
        };
      case actions.GET_BY_INST_FAIL:
        return {
          ...state,
          dataOtherRequest: [],
          otherRequest: 3
        };
    case actions.ADD:
      return {
        ...state,
        action: RESOURCE_ACTIONS.REGISTRO,
        selected: action.payload,
        loading: true,
        done: false,
        failed: false,
        errors: null
      };
    case actions.ADD_SUCCESS:
      const data = [
        ...state.data,
        action.payload.data
      ];
      return {
        ...state,
        data: data,
        selected: null,
        loading: false,
        done: true,
        failed: false,
        errors: null,
        doneMessage: action.payload.message
      };
    case actions.ADD_FAIL:
      return {
        ...state,
        selected: null,
        loading: false,
        done: false,
        failed: true,
        errors: action.payload
      };
    case actions.UPDATE:
      return {
        ...state,
        action: RESOURCE_ACTIONS.ACTUALIZACION,
        selected: action.payload,
        loading: true,
        done: false,
        failed: false,
        errors: null
      };
    case actions.UPDATE_SUCCESS: {
      const index = state.data.findIndex(b => b.idBillingLineVisa === state.selected.idBillingLineVisa);
      if (index >= 0) {
        const data = [
          ...state.data.slice(0, index),
          action.payload.data,
          ...state.data.slice(index + 1)
        ];
        return {
          ...state,
          data,
          loading: false,
          done: true,
          failed: false,
          errors: null,
          doneMessage: action.payload.message
        }
      }
      return state;
    }
    case actions.UPDATE_FAIL:
      return {
        ...state,
        selected: null,
        loading: false,
        done: false,
        failed: true,
        errors: action.payload
      };
    case actions.DELETE:
      return {
        ...state,
        action: RESOURCE_ACTIONS.ELIMINACION,
        selected: action.payload,
        loading: true,
        done: false,
        errors: null,
        failed: false,
        doneMessage: null
      };
    case actions.DELETE_SUCCESS: {
      const data = state.data.filter(b => b.idBillingLineVisa !== state.selected.idBillingLineVisa);
      return {
        ...state,
        data,
        selected: null,
        loading: false,
        errors: null,
        done: true,
        failed: false,
        doneMessage: action.payload.message
      };
    }
    case actions.DELETE_FAIL:
      return {
        ...state,
        selected: null,
        loading: false,
        done: false,
        failed: true,
        errors: action.payload
      };
      case actions.DOWNLOAD:
      return {
        ...state,
        action: RESOURCE_ACTIONS.EXPORTACION,
        selected: null,
        loading: true,
        done: false,
        failed: false,
        errors: null
      }
    case actions.DOWNLOAD_SUCCESS:
      return {
        ...state,
        selected: null,
        loading: false,
        done: true,
        failed: false,
        errors: null,
        doneMessage: action.payload.message
      }
    case actions.DOWNLOAD_FAIL:
      return {
        ...state,
        selected: null,
        loading: false,
        done: false,
        failed: true,
        errors: action.payload
      }
    default:
      return state;
  }
}
