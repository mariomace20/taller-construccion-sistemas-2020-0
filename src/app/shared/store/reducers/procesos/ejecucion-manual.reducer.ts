import { EjecucionManualActions, actions } from '../../actions/procesos/ejecucion-manual.actions';
import { HttpErrorResponse } from '@angular/common/http';
import { EJEC_MANUAL_ACTION, EJEC_MANUAL_ESTADO } from '../../../../procesos/models';

export interface EjecucionManualState {
  data: any[], // procesos y programas
  action: string,
  done: boolean,
  failed: boolean,
  loading: boolean,
  doneMessage: string,
  subprogramas: any[],
  errors: HttpErrorResponse
}

const INITIAL_STATE: EjecucionManualState = {
  data: [],
  action: null,
  done: false,
  failed: false,
  loading: false,
  doneMessage: null,
  subprogramas: [],
  errors: null
};

export function ejecucionManualReducer(state = INITIAL_STATE, action: EjecucionManualActions): EjecucionManualState {
  switch (action.type) {
    case actions.GET:
      return {
        ...state,
        action: EJEC_MANUAL_ACTION.GET_PROCESOS,
        done: false,
        failed: false,
        loading: true,
        doneMessage: null,
        subprogramas: [],
        errors: null
      }
    case actions.GET_SUCCESS: {
      action.payload.map(i => {
        i.programas = i.programas.sort((a, b) => {
          if (a.ordenEjecucion > b.ordenEjecucion) return 1;
          if (a.ordenEjecucion < b.ordenEjecucion) return -1;
          return 0;
        });
        i.programas.map(programa => programa.descripcionProceso = i.descripcionProceso)
      })
      const data = action.payload.sort((a, b) => {
        if (a.ordenEjecucion > b.ordenEjecucion) return 1;
        if (a.ordenEjecucion < b.ordenEjecucion) return -1;
        return 0;
      });
      return {
        ...state,
        action: EJEC_MANUAL_ACTION.GET_PROCESOS,
        data: data,
        done: true,
        failed: false,
        loading: false,
        doneMessage: null,
        subprogramas: [],
        errors: null
      }
    }
    case actions.GET_FAIL:
      return {
        ...state,
        action: EJEC_MANUAL_ACTION.GET_PROCESOS,
        done: false,
        failed: true,
        loading: false,
        doneMessage: null,
        subprogramas: [],
        errors: action.payload
      }
    case actions.GET_SUBPROGRAMAS:
      return {
        ...state,
        action: EJEC_MANUAL_ACTION.GET_SUBPROGRAMAS,
        done: false,
        failed: false,
        loading: true,
        doneMessage: null,
        subprogramas: [],
        errors: null
      }
    case actions.GET_SUBPROGRAMAS_SUCCESS: {
      const data = action.payload.sort((a, b) => {
        if (a.ordenEjecucion > b.ordenEjecucion) return 1;
        if (a.ordenEjecucion < b.ordenEjecucion) return -1;
        return 0;
      });
      return {
        ...state,
        action: EJEC_MANUAL_ACTION.GET_SUBPROGRAMAS,
        done: true,
        failed: false,
        loading: false,
        doneMessage: null,
        subprogramas: data,
        errors: null
      }
    }
    case actions.GET_SUBPROGRAMAS_FAIL:
      return {
        ...state,
        action: EJEC_MANUAL_ACTION.GET_SUBPROGRAMAS,
        done: false,
        failed: true,
        loading: false,
        doneMessage: null,
        subprogramas: [],
        errors: action.payload
      }
    case actions.EJECUTAR_PROGRAMA: {
      const ejecucionPrograma = action.payload;
      const idxProceso = state.data.findIndex(item => item.idProceso === ejecucionPrograma.idProceso);
      if (idxProceso >= 0) {
        const idxPrograma = state.data[idxProceso].programas.findIndex(item => item.idPrograma === ejecucionPrograma.idPrograma);
        if (idxPrograma >= 0) {
          const programa = JSON.parse(JSON.stringify(state.data[idxProceso].programas[idxPrograma]));
          programa.estado = EJEC_MANUAL_ESTADO.EN_EJECUCION;
          const programas = [
            ...state.data[idxProceso].programas.slice(0, idxPrograma),
            programa,
            ...state.data[idxProceso].programas.slice(idxPrograma + 1)
          ];
          const proceso = JSON.parse(JSON.stringify(state.data[idxProceso]));
          proceso.programas = programas;
          const data = [
            ...state.data.slice(0, idxProceso),
            proceso,
            ...state.data.slice(idxProceso + 1)
          ];
          return {
            ...state,
            data,
            action: EJEC_MANUAL_ACTION.EXEC_PROGRAMA,
            done: false,
            failed: false,
            loading: true,
            doneMessage: null,
            errors: null
          }
        }
        return state;
      }
    }
    case actions.EJECUTAR_PROGRAMA_SUCCESS: {
      const ejecucionPrograma = action.payload.data;
      const idxProceso = state.data.findIndex(item => item.idProceso === ejecucionPrograma.idProceso);
      if (idxProceso >= 0) {
        const idxPrograma = state.data[idxProceso].programas.findIndex(item => item.idPrograma === ejecucionPrograma.idPrograma);
        if (idxPrograma >= 0) {
          const programa = JSON.parse(JSON.stringify(state.data[idxProceso].programas[idxPrograma]));
          programa.estado = EJEC_MANUAL_ESTADO.NO_EJECUTANDO;
          const programas = [
            ...state.data[idxProceso].programas.slice(0, idxPrograma),
            programa,
            ...state.data[idxProceso].programas.slice(idxPrograma + 1)
          ];
          const proceso = JSON.parse(JSON.stringify(state.data[idxProceso]));
          proceso.programas = programas;
          const data = [
            ...state.data.slice(0, idxProceso),
            proceso,
            ...state.data.slice(idxProceso + 1)
          ];
          return {
            ...state,
            data,
            action: EJEC_MANUAL_ACTION.EXEC_PROGRAMA,
            done: true,
            failed: false,
            loading: false,
            doneMessage: action.payload.message,
            errors: null
          }
        }
        return state;
      }
    }
    case actions.EJECUTAR_PROGRAMA_FAIL: {
      const ejecucionPrograma = action.payload.data;
      const idxProceso = state.data.findIndex(item => item.idProceso === ejecucionPrograma.idProceso);
      if (idxProceso >= 0) {
        const idxPrograma = state.data[idxProceso].programas.findIndex(item => item.idPrograma === ejecucionPrograma.idPrograma);
        if (idxPrograma >= 0) {
          const programa = JSON.parse(JSON.stringify(state.data[idxProceso].programas[idxPrograma]));
          programa.estado = EJEC_MANUAL_ESTADO.NO_EJECUTANDO;
          const programas = [
            ...state.data[idxProceso].programas.slice(0, idxPrograma),
            programa,
            ...state.data[idxProceso].programas.slice(idxPrograma + 1)
          ];
          const proceso = JSON.parse(JSON.stringify(state.data[idxProceso]));
          proceso.programas = programas;
          const data = [
            ...state.data.slice(0, idxProceso),
            proceso,
            ...state.data.slice(idxProceso + 1)
          ];
          return {
            ...state,
            data,
            action: EJEC_MANUAL_ACTION.EXEC_PROGRAMA,
            done: false,
            failed: true,
            loading: false,
            doneMessage: null,
            errors: action.payload.error
          }
        }
        return state;
      }
    }
    case actions.EJECUTAR_SUBPROGRAMA: {
      const ejecucionSubprograma = action.payload;
      const idxSubprograma = state.subprogramas.findIndex(item => item.idProceso === ejecucionSubprograma.idProceso
        && item.idPrograma === ejecucionSubprograma.idPrograma && item.idSubprograma === ejecucionSubprograma.idSubprograma);
      const idxProceso = state.data.findIndex(item => item.idProceso === ejecucionSubprograma.idProceso);
      if (idxProceso >= 0) {
        const idxPrograma = state.data[idxProceso].programas.findIndex(item => item.idPrograma === ejecucionSubprograma.idPrograma);
        if (idxPrograma >= 0) {
          const programa = JSON.parse(JSON.stringify(state.data[idxProceso].programas[idxPrograma]));
          programa.estado = EJEC_MANUAL_ESTADO.EN_EJECUCION;
          const programas = [
            ...state.data[idxProceso].programas.slice(0, idxPrograma),
            programa,
            ...state.data[idxProceso].programas.slice(idxPrograma + 1)
          ];
          const proceso = JSON.parse(JSON.stringify(state.data[idxProceso]));
          proceso.programas = programas;
          const data = [
            ...state.data.slice(0, idxProceso),
            proceso,
            ...state.data.slice(idxProceso + 1)
          ];
          if (idxSubprograma >= 0) {
            let subprograma = JSON.parse(JSON.stringify(state.subprogramas[idxSubprograma]));
            subprograma.estado = EJEC_MANUAL_ESTADO.EN_EJECUCION;
            const subprogramas = [
              ...state.subprogramas.slice(0, idxSubprograma),
              subprograma,
              ...state.subprogramas.slice(idxSubprograma + 1)
            ];
            return {
              ...state,
              data,
              subprogramas,
              action: EJEC_MANUAL_ACTION.EXEC_SUBPROGRAMA,
              done: false,
              failed: false,
              loading: true,
              doneMessage: null,
              errors: null
            }
          }
          return {
            ...state,
            data,
            action: EJEC_MANUAL_ACTION.EXEC_SUBPROGRAMA,
            done: false,
            failed: false,
            loading: true,
            doneMessage: null,
            errors: null
          }
        }
      }
      return state;
    }
    case actions.EJECUTAR_SUBPROGRAMA_SUCCESS: {
      const ejecucionSubprograma = action.payload.data;
      const idxSubprograma = state.subprogramas.findIndex(item => item.idProceso === ejecucionSubprograma.idProceso
        && item.idPrograma === ejecucionSubprograma.idPrograma && item.idSubprograma === ejecucionSubprograma.idSubprograma);
      const idxProceso = state.data.findIndex(item => item.idProceso === ejecucionSubprograma.idProceso);
      if (idxProceso >= 0) {
        const idxPrograma = state.data[idxProceso].programas.findIndex(item => item.idPrograma === ejecucionSubprograma.idPrograma);
        if (idxPrograma >= 0) {
          const programa = JSON.parse(JSON.stringify(state.data[idxProceso].programas[idxPrograma]));
          programa.estado = EJEC_MANUAL_ESTADO.NO_EJECUTANDO;
          const programas = [
            ...state.data[idxProceso].programas.slice(0, idxPrograma),
            programa,
            ...state.data[idxProceso].programas.slice(idxPrograma + 1)
          ];
          const proceso = JSON.parse(JSON.stringify(state.data[idxProceso]));
          proceso.programas = programas;
          const data = [
            ...state.data.slice(0, idxProceso),
            proceso,
            ...state.data.slice(idxProceso + 1)
          ];
          if (idxSubprograma >= 0) {
            let subprograma = JSON.parse(JSON.stringify(state.subprogramas[idxSubprograma]));
            subprograma.estado = EJEC_MANUAL_ESTADO.NO_EJECUTANDO;
            const subprogramas = [
              ...state.subprogramas.slice(0, idxSubprograma),
              subprograma,
              ...state.subprogramas.slice(idxSubprograma + 1)
            ];
            return {
              ...state,
              subprogramas,
              data,
              action: EJEC_MANUAL_ACTION.EXEC_SUBPROGRAMA,
              done: true,
              failed: false,
              loading: false,
              doneMessage: action.payload.message,
              errors: null
            }
          }
          return {
            ...state,
            data,
            action: EJEC_MANUAL_ACTION.EXEC_SUBPROGRAMA,
            done: true,
            failed: false,
            loading: false,
            doneMessage: action.payload.message,
            errors: null
          }
        }
      }
      return state;
    }
    case actions.EJECUTAR_SUBPROGRAMA_FAIL: {
      const ejecucionSubprograma = action.payload.data;
      const idxSubprograma = state.subprogramas.findIndex(item => item.idProceso === ejecucionSubprograma.idProceso
        && item.idPrograma === ejecucionSubprograma.idPrograma && item.idSubprograma === ejecucionSubprograma.idSubprograma);
      const idxProceso = state.data.findIndex(item => item.idProceso === ejecucionSubprograma.idProceso);
      if (idxProceso >= 0) {
        const idxPrograma = state.data[idxProceso].programas.findIndex(item => item.idPrograma === ejecucionSubprograma.idPrograma);
        if (idxPrograma >= 0) {
          const programa = JSON.parse(JSON.stringify(state.data[idxProceso].programas[idxPrograma]));
          programa.estado = EJEC_MANUAL_ESTADO.NO_EJECUTANDO;
          const programas = [
            ...state.data[idxProceso].programas.slice(0, idxPrograma),
            programa,
            ...state.data[idxProceso].programas.slice(idxPrograma + 1)
          ];
          const proceso = JSON.parse(JSON.stringify(state.data[idxProceso]));
          proceso.programas = programas;
          const data = [
            ...state.data.slice(0, idxProceso),
            proceso,
            ...state.data.slice(idxProceso + 1)
          ];
          if (idxSubprograma >= 0) {
            let subprograma = JSON.parse(JSON.stringify(state.subprogramas[idxSubprograma]));
            subprograma.estado = EJEC_MANUAL_ESTADO.NO_EJECUTANDO;
            const subprogramas = [
              ...state.subprogramas.slice(0, idxSubprograma),
              subprograma,
              ...state.subprogramas.slice(idxSubprograma + 1)
            ];
            return {
              ...state,
              subprogramas,
              data,
              action: EJEC_MANUAL_ACTION.EXEC_SUBPROGRAMA,
              done: false,
              failed: true,
              loading: false,
              doneMessage: null,
              errors: action.payload.error
            }
          }
          return {
            ...state,
            data,
            action: EJEC_MANUAL_ACTION.EXEC_SUBPROGRAMA,
            done: false,
            failed: true,
            loading: false,
            doneMessage: null,
            errors: action.payload.error
          }
        }
      }
      return state;
    }
    default:
      return state;
  }
}