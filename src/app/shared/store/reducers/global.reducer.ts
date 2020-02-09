import {GlobalDataActions, actions} from '../actions/global.actions';

export interface GlobalMessages {
  ADD_SUCCESS: string,
  UPDATE_SUCCESS: string,
  DELETE_SUCCESS: string,
  DOWNLOAD_SUCCESS: string
};

export interface State {
  infoApp: any,
  pathEndpoints: {
    AUTH: string,
    MANT_GENERAL: string,
    MANT_COMPENSACION: string,
    MANT_MARCA_INT: string,
    MANT_FACTURACION: string,
    MANT_PROCESAMIENTO: string,
    MANT_TARIFARIO: string,
    MANT_SEGURIDAD: string,
    CONSULTAS: string,
    REPORTES: string,
    CONCILIACION: string
  },
  messages: GlobalMessages
}

export const INITIAL_STATE: State = {
  infoApp: {
    company: 'FISI',
    version: '1.0.0',
    year: 2020
  },
  pathEndpoints: {
    AUTH: '',
    MANT_GENERAL: /*'mantenimiento/general/'*/'',
    MANT_COMPENSACION: /*'mantenimiento/compensacion/',*/'',
    MANT_MARCA_INT: '',
    MANT_FACTURACION: /*'mantenimiento/facturacion/'*/'',
    MANT_PROCESAMIENTO: /*'mantenimiento/procesamiento/'*/'',
    MANT_TARIFARIO: /*'mantenimiento/tarifario/'*/'',
    MANT_SEGURIDAD: /*'seguridad/'*/'',
    CONSULTAS: '',
    REPORTES: '',
    CONCILIACION: '',
  },
  messages: {
    ADD_SUCCESS: 'Se registró correctamente.',
    UPDATE_SUCCESS: 'Se actualizó correctamente.',
    DELETE_SUCCESS: 'Se eliminó correctamente.',
    DOWNLOAD_SUCCESS: 'Se descargó correctamente'
  }
}

export function globalReducer(state = INITIAL_STATE, action: GlobalDataActions): State {
  switch (action.type) {
    case actions.GET_ALL:
    default:
      return state;
  }
}
