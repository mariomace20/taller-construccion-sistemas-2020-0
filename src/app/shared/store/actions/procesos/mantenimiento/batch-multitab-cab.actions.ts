import { Action } from '@ngrx/store';
import { BatchMultitabCab } from '../../../../../procesos/models';
import { getCommonCrudActions } from '../../common-actions';

export const actions = {
  ...getCommonCrudActions('BatchMultitabCab')
}

export class AddBatchMultitabCab implements Action {
  readonly type = actions.ADD;
  constructor(public payload: any) {}
}
export class AddBatchMultitabCabSuccess implements Action {
  readonly type = actions.ADD_SUCCESS;
  constructor(public payload: any) {}
}
export class AddBatchMultitabCabFail implements Action {
  readonly type = actions.ADD_FAIL;
  constructor(public payload: any) {}
}

export class UpdateBatchMultitabCab implements Action {
  readonly type = actions.UPDATE;
  constructor(public payload: any) {}
}
export class UpdateBatchMultitabCabSuccess implements Action {
  readonly type = actions.UPDATE_SUCCESS;
  constructor(public payload: any) {}
}
export class UpdateBatchMultitabCabFail implements Action {
  readonly type = actions.UPDATE_FAIL;
  constructor(public payload: any) {}
}

export class DeleteBatchMultitabCab implements Action {
  readonly type = actions.DELETE;
  constructor(public payload: any) {}
}
export class DeleteBatchMultitabCabSuccess implements Action {
  readonly type = actions.DELETE_SUCCESS;
  constructor(public payload: any) {}
}
export class DeleteBatchMultitabCabFail implements Action {
  readonly type = actions.DELETE_FAIL;
  constructor(public payload: any) {}
}

export class GetAllBatchMultitabCab implements Action {
  readonly type = actions.GET_ALL;
  constructor(public payload = null) {}
}
export class GetAllBatchMultitabCabSuccess implements Action {
  readonly type = actions.GET_ALL_SUCCESS;
  constructor(public payload: BatchMultitabCab[]) {}
}
export class GetAllBatchMultitabCabFail implements Action {
  readonly type = actions.GET_ALL_FAIL;
  constructor(public payload: any) {}
}

export class ResetBatchMultitabCab implements Action {
  readonly type = actions.RESET;
  constructor(public payload: any = null) {}
}

export type BatchMultitabCabActions
  = AddBatchMultitabCab
  | AddBatchMultitabCabSuccess
  | AddBatchMultitabCabFail
  | UpdateBatchMultitabCab
  | UpdateBatchMultitabCabSuccess
  | UpdateBatchMultitabCabFail
  | DeleteBatchMultitabCab
  | DeleteBatchMultitabCabSuccess
  | DeleteBatchMultitabCabFail
  | GetAllBatchMultitabCab
  | GetAllBatchMultitabCabSuccess
  | GetAllBatchMultitabCabFail
  | ResetBatchMultitabCab;
