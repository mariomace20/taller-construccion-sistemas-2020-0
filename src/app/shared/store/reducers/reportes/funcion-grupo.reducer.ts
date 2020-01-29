import { FuncionGrupo } from '../../../../reportes/user/models';
import { FuncionGrupoActions, actions } from '../../actions/reportes/funcion-grupo.actions';
import { RESOURCE_ACTIONS } from '../../../utils';
import { State } from '../entity-state.model';

const INITIAL_STATE: State<FuncionGrupo> = {
  data: [],
  selected: null,
  action: null,
  loading: false,
  done: false,
  failed: false,
  errors: null,
  doneMessage: null
}

export function operadorReducer(state = INITIAL_STATE, action: FuncionGrupoActions): State<FuncionGrupo> {
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