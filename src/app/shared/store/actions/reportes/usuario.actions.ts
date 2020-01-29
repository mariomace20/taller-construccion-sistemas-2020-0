import { Action } from '@ngrx/store';
import { Usuario } from '../../../../reportes/admin/models/usuario.model';
import { getCommonCrudActions } from '../common-actions';

export const actions = {
  ...getCommonCrudActions('Usuario')
}
/* Acción para buscarTodos */
export class GetAllUsuarios implements Action {
  readonly type = actions.GET_ALL;
  constructor(public payload= null) {}
}
export class GetAllUsuariosSuccess implements Action {
  readonly type = actions.GET_ALL_SUCCESS;
  constructor(public payload : Usuario[]) {}
}
export class GetAllUsuariosFail implements Action {
  readonly type = actions.GET_ALL_FAIL;
  constructor(public payload: any) {}
}



export type UsuarioActions
  =  GetAllUsuarios
  | GetAllUsuariosSuccess
  | GetAllUsuariosFail