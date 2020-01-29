import { IncomingVisaTC5TCR4 } from '../../../../consultas/models';
import { IncomingVisaTC5TCR4Actions, actions } from '../../actions/consultas/incoming-visa-tc5-tcr4.actions';
import { RESOURCE_ACTIONS } from '../../../utils';
import { ConsultaState } from '../entity-state.model';

const INITIAL_STATE: ConsultaState<IncomingVisaTC5TCR4> = {
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

export function incomingVisaTC5TCR4Reducer(state = INITIAL_STATE, action: IncomingVisaTC5TCR4Actions): ConsultaState<IncomingVisaTC5TCR4> {
  switch (action.type) {
    case actions.RESET:
      return {
        ...INITIAL_STATE
      }
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
