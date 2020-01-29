import { OutgoingVisaTC10TCR0 } from '../../../../consultas/models';
import { OutgoingVisaTC10TCR0Actions, actions } from '../../actions/consultas/outgoing-visa-tc10-tcr0.actions';
import { RESOURCE_ACTIONS } from '../../../utils';
import { ConsultaState } from '../entity-state.model';

const INITIAL_STATE: ConsultaState<OutgoingVisaTC10TCR0> = {
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
  filtering: false,
  sorting: false,
  filtered: false,
  sorted: false,
}

export function outgoingVisaTC10TCR0Reducer(state = INITIAL_STATE, action: OutgoingVisaTC10TCR0Actions): ConsultaState<OutgoingVisaTC10TCR0> {
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
    case actions.GET_CRITERIO_FILTRO:
      return {
        ...state,
        pagination: false,
        filtering: true,
        sorting: false,
        filtered: false,
        sorted: false,
        errors: null,
      };
    case actions.GET_CRITERIO_FILTRO_SUCCESS:
      return {
        ...state,
        data: action.payload,
        pagination: false,
        filtering: false,
        sorting: false,
        filtered: true,
        sorted: false,
        errors: null,
      };
    case actions.GET_CRITERIO_FILTRO_FAIL:
      return {
        ...state,
        data: [],
        pagination: false,
        filtering: false,
        sorting: false,
        filtered: false,
        sorted: false,
        errors: action.payload,
      };
    case actions.GET_DETALLE:
      return {
        ...state,
        action: RESOURCE_ACTIONS.CONSULTA,
        loading: true,
        done: false,
        failed: false,
        pagination: false,
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
        pagination: false,
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
        pagination: false,
        errors: action.payload,
        selected: null
      };
    default:
      return state;
  }

}
