import { getCommonCrudActions } from '../../common-actions';
import { Action } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';
import { ParametroBatch } from '../../../../../procesos/models';

export const actions = {
  ...getCommonCrudActions('ParametroBatch')
}

export class GetAllParametroBatch implements Action {
  readonly type = actions.GET_ALL;
  constructor(public payload = null) { }
}
export class GetAllParametroBatchSuccess implements Action {
  readonly type = actions.GET_ALL_SUCCESS;
  constructor(public payload: ParametroBatch[]) { }
}
export class GetAllParametroBatchFail implements Action {
  readonly type = actions.GET_ALL_FAIL;
  constructor(public payload: HttpErrorResponse) { }
}

export class UpdateParametroBatch implements Action {
  readonly type = actions.UPDATE;
  constructor(public payload: ParametroBatch) {
  }
}
export class UpdateParametroBatchSuccess implements Action {
  readonly type = actions.UPDATE_SUCCESS;
  constructor(public payload: any) {
  }
}
export class UpdateParametroBatchFail implements Action {
  readonly type = actions.UPDATE_FAIL;
  constructor(public payload: any) {
  }
}

export type ParametroBatchActions
  = GetAllParametroBatch
  | GetAllParametroBatchSuccess
  | GetAllParametroBatchFail
  | UpdateParametroBatch
  | UpdateParametroBatchSuccess
  | UpdateParametroBatchFail;
