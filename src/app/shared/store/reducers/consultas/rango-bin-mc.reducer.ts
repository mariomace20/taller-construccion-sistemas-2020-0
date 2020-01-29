import { RangoBinMC } from '../../../../consultas/models';
import { RangoBinMCActions, actions } from '../../actions/consultas/rango-bin-mc.actions';
import { RESOURCE_ACTIONS } from '../../../utils';
import { State, ConsultaState } from '../entity-state.model';

const INITIAL_STATE: ConsultaState<RangoBinMC> = {
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

export function rangoBinMCReducer(state = INITIAL_STATE, action: RangoBinMCActions): ConsultaState<RangoBinMC> {
  switch (action.type) {
    case actions.RESET:
      return {
      ...INITIAL_STATE
    };
    case actions.GET_CRITERIO_PAGINADO:
      return {
        ...state,
        action: RESOURCE_ACTIONS.CONSULTA,
        loading: true,
        done: false,
        failed: false,
        pagination: true,
        errors: null,
        selected: null
      };
    case actions.GET_CRITERIO_PAGINADO_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        done: true,
        failed: false,
        pagination: true,
        errors: null,
        selected: null
      };
    case actions.GET_CRITERIO_PAGINADO_FAIL:
      return {
        ...state,
        data: [],
        loading: false,
        done: false,
        failed: true,
        pagination: true,
        errors: action.payload,
        selected: null
      };
    default:
      return state;
  }
}
