import { Action } from '@ngrx/store';
import { getCommonCrudActions } from '../common-actions';
import { FuncionGrupo } from '../../../../reportes/user/models/funcion-grupo.model';

export const actions = {
  ...getCommonCrudActions('FuncionGrupo'),
  GET_ALL :'[Funcion] Obtener funciones',
  GET_ALL_SUCESS :'[Funcion] Obtener funciones correcto',
  GET_ALL_FAIL :'[Funcion] Error al obtener funciones'
}

export class GetAllFunciones implements Action {
  readonly type = actions.GET_ALL;
  constructor(public payload= null) {}
}
export class GetAllFuncionesSuccess implements Action {
  readonly type = actions.GET_ALL_SUCESS;
 constructor(public payload : FuncionGrupo[]) {}
}
export class GetAllFuncionesFail implements Action {
  readonly type = actions.GET_ALL_FAIL;
  constructor(public payload: any) {}
}
export type FuncionGrupoActions
  =   GetAllFunciones
  | GetAllFuncionesSuccess
  | GetAllFuncionesFail