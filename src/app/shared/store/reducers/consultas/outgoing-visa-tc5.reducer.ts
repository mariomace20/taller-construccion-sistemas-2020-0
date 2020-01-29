import { OutgoingVisaTC5 } from '../../../../consultas/models';
import { OutgoingVisaTC5Actions, actions } from '../../actions/consultas/outgoing-visa-tc5.actions';
import { RESOURCE_ACTIONS } from '../../../utils';
import { ConsultaState } from '../entity-state.model';

const INITIAL_STATE: ConsultaState<OutgoingVisaTC5> = {
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

export function outgoingVisaTC5Reducer(state = INITIAL_STATE, action: OutgoingVisaTC5Actions): ConsultaState<OutgoingVisaTC5> {
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
