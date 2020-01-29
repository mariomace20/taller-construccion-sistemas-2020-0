import { OutgoingVisaTC5TCR5 } from '../../../../consultas/models';
import { OutgoingVisaTC5TCR5Actions, actions } from '../../actions/consultas/outgoing-visa-tc5-tcr5.actions';
import { RESOURCE_ACTIONS } from '../../../utils';
import { ConsultaState } from '../entity-state.model';

const INITIAL_STATE: ConsultaState<OutgoingVisaTC5TCR5> = {
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

export function outgoingVisaTC5TCR5Reducer(state = INITIAL_STATE, action: OutgoingVisaTC5TCR5Actions): ConsultaState<OutgoingVisaTC5TCR5> {
  switch (action.type) {
    case actions.RESET:
      return {
      ...INITIAL_STATE
    };
    case actions.GET_DETALLE:
      return {
        ...state,
        action: RESOURCE_ACTIONS.CONSULTA,
        loading: true,
        done: false,
        failed: false,
        errors: null,
        selected: null
      };
    case actions.GET_DETALLE_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        done: true,
        failed: false,
        errors: null,
        selected: null
      };
    case actions.GET_DETALLE_FAIL:
      return {
        ...state,
        data: [],
        loading: false,
        done: false,
        failed: true,
        errors: action.payload,
        selected: null
      };
    default:
        return state;
}

}
