import { ConsultaState } from "../../entity-state.model";
import { GeneracionLog } from '../../../../../procesos/models';
import { GeneracionLogActions, actions } from '../../../actions/procesos/consultas/generacion-log.actions';
import { RESOURCE_ACTIONS } from '../../../../utils';

const INITIAL_STATE: ConsultaState<GeneracionLog> = {
  data: [],
  selected: null,
  action: null,
  loading: false,
  done: false,
  failed: false,
  errors: null,
  doneMessage: null,
  currentDetail: null,
  pagination: false,
}

export function generacionLogReducer(state = INITIAL_STATE, action: GeneracionLogActions): ConsultaState<GeneracionLog> {
  switch (action.type) {
    case actions.GET_CRITERIO:
      return {
        ...state,
        action: RESOURCE_ACTIONS.CONSULTA,
        data: [],
        selected: null,
        loading: true,
        done: false,
        failed: false,
        errors: null,
        doneMessage: null,
        currentDetail: null
      }
    case actions.GET_CRITERIO_SUCCESS: {
      return {
        ...state,
        data: action.payload,
        selected: null,
        loading: false,
        done: true,
        failed: false,
        errors: null,
        doneMessage: null,
        currentDetail: null
      }
    }
    case actions.GET_CRITERIO_FAIL: {
      return {
        ...state,
        data: [],
        selected: null,
        loading: false,
        done: false,
        failed: true,
        errors: action.payload,
        doneMessage: null,
        currentDetail: null
      }
    }
    default:
      return state;
  }
}
