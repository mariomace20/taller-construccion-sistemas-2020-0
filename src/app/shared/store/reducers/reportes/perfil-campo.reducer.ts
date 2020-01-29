import { PerfilCampoActions, actions } from '../../actions/reportes/perfil-campo.actions';
import { RESOURCE_ACTIONS } from '../../../utils';
import { State } from '../entity-state.model';
import { PerfilCampo } from '../../../../reportes/admin/models/perfil-campo.model';

const INITIAL_STATE: State<PerfilCampo> = {
  data: [],
  selected: null,
  action: null,
  loading: false,
  done: false,
  failed: false,
  errors: null,
  doneMessage: null
}

export function perfilCampoReducer(state = INITIAL_STATE, action: PerfilCampoActions): State<PerfilCampo> {
  switch (action.type) {
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
    case actions.GET_CRITERIO:
      return {
        ...state,
        action: RESOURCE_ACTIONS.CONSULTA,
        loading: true,
        done: false,
        failed: false,
        errors: null,
        selected: null,
      }
    case actions.GET_CRITERIO_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        done: true,
        failed: false,
        errors: null,
        selected: null
      }
    case actions.GET_CRITERIO_FAIL:
      return {
        ...state,
        data: [],
        loading: false,
        done: false,
        failed: true,
        errors: action.payload,
        selected: null
      }
    case actions.UPDATE:
      return {
        ...state,
        action: RESOURCE_ACTIONS.ACTUALIZACION,
        loading: true,
        done: false,
        failed: false,
        errors: null,
        selected: null,
      }
    case actions.UPDATE_SUCCESS:
      return {
        ...state,
        data: [],
        loading: false,
        done: true,
        failed: false,
        errors: null,
        selected: null
      }
    case actions.UPDATE_FAIL:
      return {
        ...state,
        data: [],
        loading: false,
        done: false,
        failed: true,
        errors: action.payload,
        selected: null
      }
    default:
      return state;
  }
}
