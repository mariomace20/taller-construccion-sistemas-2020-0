import { Action } from '@ngrx/store';
import { CategoriaNegocio } from '../../../../mantenimiento/models';
import { getCommonCrudActions } from '../common-actions';

export const actions = {
  ...getCommonCrudActions('CategoriaNegocio')
}
export class GetAllCategoriaNegocio implements Action {
  readonly type = actions.GET_ALL;
  constructor(public payload = null) {}
}
export class GetAllCategoriaNegocioSuccess implements Action {
  readonly type = actions.GET_ALL_SUCCESS;
  constructor(public payload: CategoriaNegocio[]) {}
}
export class GetAllCategoriaNegocioFail implements Action {
  readonly type = actions.GET_ALL_FAIL;
  constructor(public payload: any) {}
}
export type CategoriaNegocioActions
  =  GetAllCategoriaNegocio
  | GetAllCategoriaNegocioSuccess
  | GetAllCategoriaNegocioFail
