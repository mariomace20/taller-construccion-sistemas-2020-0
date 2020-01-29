import { EstablecimientoVisanetComis } from '../../../../consultas/models';
import { EstablecimientoVisanetComisActions, actions } from '../../actions/consultas/establecimiento-visanet-comis.actions';
import { RESOURCE_ACTIONS } from '../../../utils';
import { DetalleConsultaState } from '../entity-state.model';

const INITIAL_STATE: DetalleConsultaState<EstablecimientoVisanetComis> = {
  data: [],
  selected: null,
  action: null,
  loading: false,
  done: false,
  failed: false,
  errors: null,
  doneMessage: null,
  currentDetail: false,
  currentDetails: false
}

export function consultaEstablecimientoVisanetComisReducer(state = INITIAL_STATE, action: EstablecimientoVisanetComisActions): DetalleConsultaState<EstablecimientoVisanetComis> {
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
        currentDetails: false
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
        currentDetails: true
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
        currentDetails: true
      };
    default:
      return state;
  }

  }
