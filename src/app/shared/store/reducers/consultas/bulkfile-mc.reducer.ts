import { BulkfileMc, DetalleBulkfileMc } from '../../../../consultas/models';
import { ConsultaState } from '../entity-state.model';
import { BulkfileMcActions, actions } from '../../actions/consultas/bulkfile-mc.actions';
import { RESOURCE_ACTIONS } from '../../../utils';

export const INITIAL_STATE: ConsultaState<BulkfileMc> = {
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

export function consultaBulkfileMcReducer(state = INITIAL_STATE, action: BulkfileMcActions): ConsultaState<BulkfileMc> {
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
      case actions.GET_DETALLE:
        return {
          ...state,
          action: RESOURCE_ACTIONS.CONSULTA_DETALLE,
          loading: true,
          done: false,
          failed: false,
          errors: null,
          selected: action.payload,
          doneMessage: null,
          pagination: false,
          currentDetail: {}
        }
      case actions.GET_DETALLE_SUCCESS:
        return {
          ...state,
          loading: false,
          done: true,
          failed: false,
          errors: null,
          doneMessage: null,
          pagination: false,
          currentDetail: action.payload
        }
      case actions.GET_DETALLE_FAIL:
        return {
          ...state,
          loading: false,
          done: false,
          failed: true,
          errors: action.payload,
          doneMessage: null,
          pagination: false,
          currentDetail: {}
        }
    default:
      return state;
  }
}
