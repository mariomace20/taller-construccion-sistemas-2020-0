import { getCommonCrudActions } from '../../common-actions';
import { Action } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';
import { SubProgramaProcedimientoSql } from '../../../../../procesos/models';

export const actions = {
  ...getCommonCrudActions('SubProgramaProcedimientoSql')
}

export class GetAllSubProgramaProcedimientoSql implements Action {
  readonly type = actions.GET_ALL;
  constructor(public payload = null) { }
}
export class GetAllSubProgramaProcedimientoSqlSuccess implements Action {
  readonly type = actions.GET_ALL_SUCCESS;
  constructor(public payload: SubProgramaProcedimientoSql[]) { }
}
export class GetAllSubProgramaProcedimientoSqlFail implements Action {
  readonly type = actions.GET_ALL_FAIL;
  constructor(public payload: HttpErrorResponse) { }
}

export class AddSubProgramaProcedimientoSql implements Action {
  readonly type = actions.ADD;
  constructor(public payload: SubProgramaProcedimientoSql) {
  }
}
export class AddSubProgramaProcedimientoSqlSuccess implements Action {
  readonly type = actions.ADD_SUCCESS;
  constructor(public payload: any) {
  }
}
export class AddSubProgramaProcedimientoSqlFail implements Action {
  readonly type = actions.ADD_FAIL;
  constructor(public payload: any) {
  }
}

export class UpdateSubProgramaProcedimientoSql implements Action {
  readonly type = actions.UPDATE;
  constructor(public payload: SubProgramaProcedimientoSql) {
  }
}
export class UpdateSubProgramaProcedimientoSqlSuccess implements Action {
  readonly type = actions.UPDATE_SUCCESS;
  constructor(public payload: any) {
  }
}
export class UpdateSubProgramaProcedimientoSqlFail implements Action {
  readonly type = actions.UPDATE_FAIL;
  constructor(public payload: any) {
  }
}

export class DeleteSubProgramaProcedimientoSql implements Action {
  readonly type = actions.DELETE;
  constructor(public payload: SubProgramaProcedimientoSql) {
  }
}
export class DeleteSubProgramaProcedimientoSqlSuccess implements Action {
  readonly type = actions.DELETE_SUCCESS;
  constructor(public payload: any) {
  }
}
export class DeleteSubProgramaProcedimientoSqlFail implements Action {
  readonly type = actions.DELETE_FAIL;
  constructor(public payload: any) {
  }
}

export class ResetSubProgramaProcedimientoSql implements Action {
  readonly type = actions.RESET;
  constructor(public payload = null) { }
}

export type SubProgramaProcedimientoSqlActions
  = GetAllSubProgramaProcedimientoSql
  | GetAllSubProgramaProcedimientoSqlSuccess
  | GetAllSubProgramaProcedimientoSqlFail
  | AddSubProgramaProcedimientoSql
  | AddSubProgramaProcedimientoSqlSuccess
  | AddSubProgramaProcedimientoSqlFail
  | UpdateSubProgramaProcedimientoSql
  | UpdateSubProgramaProcedimientoSqlSuccess
  | UpdateSubProgramaProcedimientoSqlFail
  | DeleteSubProgramaProcedimientoSql
  | DeleteSubProgramaProcedimientoSqlSuccess
  | DeleteSubProgramaProcedimientoSqlFail
  | ResetSubProgramaProcedimientoSql
