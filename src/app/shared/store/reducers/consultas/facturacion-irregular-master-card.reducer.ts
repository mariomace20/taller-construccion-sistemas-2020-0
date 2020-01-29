import { FacturacionIrregularMasterCard } from '../../../../consultas/models';
import { FacturacionIrregularMasterCardActions, actions } from '../../actions/consultas/facturacion-irregular-master-card.actions';
import { RESOURCE_ACTIONS } from '../../../utils';
import { ConsultaState } from '../entity-state.model';

export const INITIAL_STATE: ConsultaState<FacturacionIrregularMasterCard> = {
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
};

export function facturacionIrregularMasterCardReducer(state = INITIAL_STATE, action: FacturacionIrregularMasterCardActions):
  ConsultaState<FacturacionIrregularMasterCard> {
  switch (action.type) {
    case actions.RESET:
      return {
        ...INITIAL_STATE
      };
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
    default:
      return state;
  }
}
