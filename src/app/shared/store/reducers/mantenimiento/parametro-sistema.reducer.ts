import { ParametroSistema } from '../../../../mantenimiento/models';
import { ParametroSistemaActions, actions } from '../../actions/mantenimiento/parametro-sistema.actions';
import { RESOURCE_ACTIONS } from '../../../utils';
import { State } from '../entity-state.model';

const INITIAL_STATE: State<ParametroSistema> = {
  data: [],
  selected: null,
  action: null,
  loading: false,
  done: false,
  failed: false,
  errors: null,
  doneMessage: null
}

export function parametroSistemaReducer(state = INITIAL_STATE, action: ParametroSistemaActions): State<ParametroSistema> {
  switch (action.type) {
    case actions.RESET:
      return {...INITIAL_STATE};
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
        return {
          ...state,
          data: [action.payload.data],
          loading: false,
          done: true,
          failed: false,
          errors: null,
          doneMessage: action.payload.message
        }
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
    default:
      return state;
  }
}
