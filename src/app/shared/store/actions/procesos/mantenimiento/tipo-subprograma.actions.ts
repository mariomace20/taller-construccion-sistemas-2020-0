import { getCommonCrudActions } from '../../common-actions';
import { Action } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';
import { TipoSubprograma } from '../../../../../procesos/models';

export const actions = {
  ...getCommonCrudActions('TipoSubprograma')
}

export class GetAllTipoSubprograma implements Action {
  readonly type = actions.GET_ALL;
  constructor(public payload = null) { }
}
export class GetAllTipoSubprogramaSuccess implements Action {
  readonly type = actions.GET_ALL_SUCCESS;
  constructor(public payload: TipoSubprograma[]) { }
}
export class GetAllTipoSubprogramaFail implements Action {
  readonly type = actions.GET_ALL_FAIL;
  constructor(public payload: HttpErrorResponse) { }
}


export class AddTipoSubprograma implements Action {
  readonly type = actions.ADD;
  constructor(public payload: TipoSubprograma) {
  }
}
export class AddTipoSubprogramaSuccess implements Action {
  readonly type = actions.ADD_SUCCESS;
  constructor(public payload: any) {
  }
}
export class AddTipoSubprogramaFail implements Action {
  readonly type = actions.ADD_FAIL;
  constructor(public payload: any) {
  }
}

export class UpdateTipoSubprograma implements Action {
  readonly type = actions.UPDATE;
  constructor(public payload: TipoSubprograma) {
  }
}
export class UpdateTipoSubprogramaSuccess implements Action {
  readonly type = actions.UPDATE_SUCCESS;
  constructor(public payload: any) {
  }
}
export class UpdateTipoSubprogramaFail implements Action {
  readonly type = actions.UPDATE_FAIL;
  constructor(public payload: any) {
  }
}

export class DeleteTipoSubprograma implements Action {
  readonly type = actions.DELETE;
  constructor(public payload: TipoSubprograma) {
  }
}
export class DeleteTipoSubprogramaSuccess implements Action {
  readonly type = actions.DELETE_SUCCESS;
  constructor(public payload: any) {
  }
}
export class DeleteTipoSubprogramaFail implements Action {
  readonly type = actions.DELETE_FAIL;
  constructor(public payload: any) {
  }
}

export type TipoSubprogramaActions
  = GetAllTipoSubprograma
  | GetAllTipoSubprogramaSuccess
  | GetAllTipoSubprogramaFail
  | AddTipoSubprograma
  | AddTipoSubprogramaSuccess
  | AddTipoSubprogramaFail
  | UpdateTipoSubprograma
  | UpdateTipoSubprogramaSuccess
  | UpdateTipoSubprogramaFail
  | DeleteTipoSubprograma
  | DeleteTipoSubprogramaSuccess
  | DeleteTipoSubprogramaFail;