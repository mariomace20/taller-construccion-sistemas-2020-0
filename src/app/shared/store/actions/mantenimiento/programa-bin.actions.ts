import {getCommonCrudActions} from '../common-actions';
import {Action} from '@ngrx/store';
import {ProgramaBin} from '../../../../mantenimiento/models/programa-bin.model';

export const actions = {
  ...getCommonCrudActions('ProgramaBin'),
  GET_BY_MEMBRESIA_PRODUCTO: '[ProgramaBin] Obtener por membresía y producto',
  GET_BY_MEMBRESIA_PRODUCTO_SUCCESS: '[ProgramaBin] Obtener por membresía y producto correcto',
  GET_BY_MEMBRESIA_PRODUCTO_FAIL: '[ProgramaBin] Error al obtener por membresía y producto',
};

export class GetAllProgramaBin implements Action {
  readonly type = actions.GET_ALL;
  constructor(public payload = null) {}
}
export class GetAllProgramaBinSuccess implements Action {
  readonly type = actions.GET_ALL_SUCCESS;
  constructor(public payload: ProgramaBin[]) {}
}
export class GetAllProgramaBinFail implements Action {
  readonly type = actions.GET_ALL_FAIL;
  constructor(public payload: any) {}
}

export class AddProgramaBin implements Action {
  readonly type = actions.ADD;
  constructor(public payload: any) {}
}
export class AddProgramaBinSuccess implements Action {
  readonly type = actions.ADD_SUCCESS;
  constructor(public payload: any) {}
}
export class AddProgramaBinFail implements Action {
  readonly type = actions.ADD_FAIL;
  constructor(public payload: any) {}
}

export class UpdateProgramaBin implements Action {
  readonly type = actions.UPDATE;
  constructor(public payload: any) {}
}
export class UpdateProgramaBinSuccess implements Action {
  readonly type = actions.UPDATE_SUCCESS;
  constructor(public payload: any) {}
}
export class UpdateProgramaBinFail implements Action {
  readonly type = actions.UPDATE_FAIL;
  constructor(public payload: any) {}
}

export class DeleteProgramaBin implements Action {
  readonly type = actions.DELETE;
  constructor(public payload: any) {}
}
export class DeleteProgramaBinSuccess implements Action {
  readonly type = actions.DELETE_SUCCESS;
  constructor(public payload: any) {}
}
export class DeleteProgramaBinFail implements Action {
  readonly type = actions.DELETE_FAIL;
  constructor(public payload: any) {}
}

export class GetProgramasBinPorMembresiaYProducto implements Action {
  readonly type = actions.GET_BY_MEMBRESIA_PRODUCTO;
  constructor(public payload: any) {}
}
export class GetProgramasBinPorMembresiaYProductoSuccess implements Action {
  readonly type = actions.GET_BY_MEMBRESIA_PRODUCTO_SUCCESS;
  constructor(public payload: ProgramaBin[]) {}
}
export class GetProgramasBinPorMembresiaYProductoFail implements Action {
  readonly type = actions.GET_BY_MEMBRESIA_PRODUCTO_FAIL;
  constructor(public payload: any) {}
}

export class ResetProgramaBin implements Action {
  readonly type = actions.RESET;
  constructor(public payload: any = null) {}
}

export type ProgramaBinActions
  = GetAllProgramaBin
  | GetAllProgramaBinSuccess
  | GetAllProgramaBinFail
  | AddProgramaBin
  | AddProgramaBinSuccess
  | AddProgramaBinFail
  | UpdateProgramaBin
  | UpdateProgramaBinSuccess
  | UpdateProgramaBinFail
  | DeleteProgramaBin
  | DeleteProgramaBinSuccess
  | DeleteProgramaBinFail
  | GetProgramasBinPorMembresiaYProducto
  | GetProgramasBinPorMembresiaYProductoSuccess
  | GetProgramasBinPorMembresiaYProductoFail
  | ResetProgramaBin;
