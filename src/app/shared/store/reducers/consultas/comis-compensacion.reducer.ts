import { ComisCompensacion } from '../../../../consultas/models';
import { ComisCompensacionActions, actions } from '../../actions/consultas/comis-compensacion.actions';
import { RESOURCE_ACTIONS } from '../../../utils';
import { ComisCompensacionState } from '../entity-state.model';


const INITIAL_STATE: ComisCompensacionState<ComisCompensacion> = {
  data: [],
  selected: null,
  action: null,
  loading: false,
  done: false,
  failed: false,
  errors: null,
  doneMessage: null,
  currentDetail: false,
  currentCommissions:false,
}
export function consultaComisCompensacionReducer(state = INITIAL_STATE, action: ComisCompensacionActions): ComisCompensacionState<ComisCompensacion> {
  switch (action.type) {
    case actions.RESET:
      return {
      ...INITIAL_STATE
    };
        case actions.GET_DETALLE_COMISION:
          return {
            ...state,
            action: RESOURCE_ACTIONS.CONSULTA_DETALLE,
            loading: true,
            done: false,
            failed: false,
            pagination: false,
            errors: null,
            selected: null,
            currentCommissions:false,
          };
        case actions.GET_DETALLE_COMISION_SUCCESS:
          return {
            ...state,
            data: action.payload,
            loading: false,
            done: true,
            failed: false,
            pagination: false,
            errors: null,
            selected: null,
            currentCommissions:true,
          };
        case actions.GET_DETALLE_COMISION_FAIL:
          return {
            ...state,
            data: [],
            loading: false,
            done: false,
            failed: true,
            pagination: false,
            errors: action.payload,
            selected: null,
            currentCommissions:true,
          };
    default:
      return state;
  }

  }
