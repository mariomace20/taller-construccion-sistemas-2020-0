import { CargaState } from "../../entity-state.model";
import { CargaMiscMC } from '../../../../../procesos/models';
import { CargaMiscMCActions, actions } from '../../../actions/procesos/carga-manual/carga-misc-mc.actions';
import { RESOURCE_ACTIONS } from '../../../../utils';

const INITIAL_STATE: CargaState<CargaMiscMC> = {
  data: [],
  selected: null,
  action: null,
  loading: false,
  done: false,
  failed: false,
  errors: null,
  doneMessage: null
}

export function cargaMiscMCReducer(state = INITIAL_STATE, action: CargaMiscMCActions): CargaState<CargaMiscMC> {
  switch (action.type) {
    case actions.RESET:
      return {...INITIAL_STATE};
    case actions.UPLOAD:
      return {
        ...state,
        action: RESOURCE_ACTIONS.CONSULTA,
        data: action.payload,
        selected: null,
        loading: true,
        done: false,
        failed: false,
        errors: null,
        doneMessage: null,
      }
    case actions.UPLOAD_SUCCESS: {
      return {
        ...state,
        data: action.payload,
        selected: null,
        loading: false,
        done: true,
        failed: false,
        errors: null,
        doneMessage: null,
      }
    }
    case actions.UPLOAD_FAIL: {
      return {
        ...state,
        data: [],
        selected: null,
        loading: false,
        done: false,
        failed: true,
        errors: action.payload,
        doneMessage: null,
      }
    }
    default:
      return state;
  }
}
