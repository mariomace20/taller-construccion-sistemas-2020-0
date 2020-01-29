import { State } from '../../entity-state.model';
import { HeaderTrailer } from '../../../../../procesos/models';
import { HeaderTrailerActions, actions } from '../../../actions/procesos/mantenimiento/header-trailer.actions';
import { RESOURCE_ACTIONS } from '../../../../utils';

export interface HeaderTrailerState extends State<HeaderTrailer> {
  headers: HeaderTrailer[],
  trailers: HeaderTrailer[]
}

const INITIAL_STATE: HeaderTrailerState = {
  action: null,
  data: [],
  loading: false,
  errors: null,
  done: false,
  doneMessage: null,
  failed: false,
  selected: null,
  headers: [],
  trailers: []
}

export function headerTrailerReducer(state = INITIAL_STATE, action: HeaderTrailerActions): HeaderTrailerState {
  switch (action.type) {
    case actions.GET_ALL:
    case actions.GET_HEADERS:
    case actions.GET_TRAILERS:
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
    case actions.GET_HEADERS_SUCCESS:
      return {
        ...state,
        headers: action.payload,
        loading: false,
        done: true,
        failed: false,
        errors: null,
        selected: null
      };
    case actions.GET_HEADERS_FAIL:
      return {
        ...state,
        headers: [],
        loading: false,
        done: false,
        failed: true,
        errors: action.payload,
        selected: null
      };
    case actions.GET_TRAILERS_SUCCESS:
      return {
        ...state,
        trailers: action.payload,
        loading: false,
        done: true,
        failed: false,
        errors: null,
        selected: null
      };
    case actions.GET_TRAILERS_FAIL:
      return {
        ...state,
        trailers: [],
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