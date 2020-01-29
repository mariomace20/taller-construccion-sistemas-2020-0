import { getCommonCrudActions } from '../../common-actions';
import { Action } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';
import { Proceso } from '../../../../../procesos/models';

export const actions = {
  ...getCommonCrudActions('Proceso')
};

export class ResetProceso implements Action {
  readonly type = actions.RESET;
  constructor(public payload: any = null) {}
}

export class GetAllProceso implements Action {
  readonly type = actions.GET_ALL;
  constructor(public payload = null) { }
}
export class GetAllProcesoSuccess implements Action {
  readonly type = actions.GET_ALL_SUCCESS;
  constructor(public payload: Proceso[]) { }
}
export class GetAllProcesoFail implements Action {
  readonly type = actions.GET_ALL_FAIL;
  constructor(public payload: HttpErrorResponse) { }
}

export class AddProceso implements Action {
  readonly type = actions.ADD;
  constructor(public payload: Proceso) {
  }
}
export class AddProcesoSuccess implements Action {
  readonly type = actions.ADD_SUCCESS;
  constructor(public payload: any) {
  }
}
export class AddProcesoFail implements Action {
  readonly type = actions.ADD_FAIL;
  constructor(public payload: any) {
  }
}

export class UpdateProceso implements Action {
  readonly type = actions.UPDATE;
  constructor(public payload: Proceso) {
  }
}
export class UpdateProcesoSuccess implements Action {
  readonly type = actions.UPDATE_SUCCESS;
  constructor(public payload: any) {
  }
}
export class UpdateProcesoFail implements Action {
  readonly type = actions.UPDATE_FAIL;
  constructor(public payload: any) {
  }
}

export class DeleteProceso implements Action {
  readonly type = actions.DELETE;
  constructor(public payload: Proceso) {
  }
}
export class DeleteProcesoSuccess implements Action {
  readonly type = actions.DELETE_SUCCESS;
  constructor(public payload: any) {
  }
}
export class DeleteProcesoFail implements Action {
  readonly type = actions.DELETE_FAIL;
  constructor(public payload: any) {
  }
}

export type ProcesoActions
  = GetAllProceso
  | GetAllProcesoSuccess
  | GetAllProcesoFail
  | AddProceso
  | AddProcesoSuccess
  | AddProcesoFail
  | UpdateProceso
  | UpdateProcesoSuccess
  | UpdateProcesoFail
  | DeleteProceso
  | DeleteProcesoSuccess
  | DeleteProcesoFail
  | ResetProceso;
