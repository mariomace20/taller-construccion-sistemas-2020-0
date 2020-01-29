import { State } from '../../entity-state.model';
import { ParametroBatch } from '../../../../../procesos/models';
import { ParametroBatchActions, actions } from '../../../actions/procesos/mantenimiento/parametro-batch.actions';
import { RESOURCE_ACTIONS } from '../../../../utils';

const INITIAL_STATE: State<ParametroBatch> = {
  action: null,
  data: [],
  loading: false,
  errors: null,
  done: false,
  doneMessage: null,
  failed: false,
  selected: null
}

export function parametroBatchReducer(state = INITIAL_STATE, action: ParametroBatchActions): State<ParametroBatch> {
  switch (action.type) {
    case actions.GET_ALL:
      return {
        ...state,
        action: RESOURCE_ACTIONS.CONSULTA,
        loading: true,
        done: false,
        failed: false,
        errors: null,
        selected: null
      }
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
    case actions.UPDATE: {
      return {
        ...state,
        action: RESOURCE_ACTIONS.ACTUALIZACION,
        selected: action.payload,
        loading: true,
        done: false,
        failed: false,
        errors: null
      };
    }
    case actions.UPDATE_SUCCESS: {
      const index = state.data.findIndex(p => p.idParametroBatch === state.selected.idParametroBatch);
      if (index >= 0) {
        const data = [
          ...state.data.slice(0, index),
          action.payload.data,
          ...state.data.slice(index + 1)
        ];
        return {
          ...state,
          data,
          loading: false,
          done: true,
          failed: false,
          errors: null,
          doneMessage: action.payload.message
        }
      }
      return state;
    }
    case actions.UPDATE_FAIL: {
      return {
        ...state,
        selected: null,
        loading: false,
        done: false,
        failed: true,
        errors: action.payload
      };
    }
    default:
      return state;
  }
}