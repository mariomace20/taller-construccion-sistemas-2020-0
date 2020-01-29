import { RolTransaccion } from '../../../../mantenimiento/models';
import { State } from '../entity-state.model';
import { RolTransaccionActions, actions } from '../../actions/mantenimiento/rol-transaccion.actions';
import { RESOURCE_ACTIONS } from '../../../utils';

const INITIAL_STATE: State<RolTransaccion> = {
  data: [],
  action: null,
  done: false,
  failed: false,
  loading: false,
  selected: null,
  doneMessage: null,
  errors: null
};

export function rolTransaccionReducer(state = INITIAL_STATE, action: RolTransaccionActions): State<RolTransaccion>{
  switch(action.type){
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