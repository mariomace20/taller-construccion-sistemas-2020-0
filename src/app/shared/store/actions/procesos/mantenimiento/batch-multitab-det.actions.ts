import { Action } from '@ngrx/store';
import { BatchMultitabDet } from '../../../../../procesos/models';
import { getCommonCrudActions } from '../../common-actions';

export const actions = {
  ...getCommonCrudActions('BatchMultitabDet'),
  GET_BY_BATCH_MULTITABCAB: '[BatchMultitabDet] Obtener por cabecera',
  GET_BY_BATCH_MULTITABCAB_SUCCESS: '[BatchMultitabDet] Obtener por cabecera correcto',
  GET_BY_BATCH_MULTITABCAB_FAIL: '[BatchMultitabDet] Error al obtener por cabecera',

  GET_BY_BATCH_MULTITABCAB_B: '[BatchMultitabDet] Obtener tabla por cabecera',
  GET_BY_BATCH_MULTITABCAB_B_SUCCESS: '[BatchMultitabDet] Obtener tabla por cabecera correcto',
  GET_BY_BATCH_MULTITABCAB_B_FAIL: '[BatchMultitabDet] Error al obtener tabla por cabecera',
}

export class AddBatchMultitabDet implements Action {
  readonly type = actions.ADD;
  constructor(public payload: any) { }
}
export class AddBatchMultitabDetSuccess implements Action {
  readonly type = actions.ADD_SUCCESS;
  constructor(public payload: any) { }
}
export class AddBatchMultitabDetFail implements Action {
  readonly type = actions.ADD_FAIL;
  constructor(public payload: any) { }
}

export class UpdateBatchMultitabDet implements Action {
  readonly type = actions.UPDATE;
  constructor(public payload: any) { }
}
export class UpdateBatchMultitabDetSuccess implements Action {
  readonly type = actions.UPDATE_SUCCESS;
  constructor(public payload: any) { }
}
export class UpdateBatchMultitabDetFail implements Action {
  readonly type = actions.UPDATE_FAIL;
  constructor(public payload: any) { }
}

export class DeleteBatchMultitabDet implements Action {
  readonly type = actions.DELETE;
  constructor(public payload: any) { }
}
export class DeleteBatchMultitabDetSuccess implements Action {
  readonly type = actions.DELETE_SUCCESS;
  constructor(public payload: any) { }
}
export class DeleteBatchMultitabDetFail implements Action {
  readonly type = actions.DELETE_FAIL;
  constructor(public payload: any) { }
}

export class GetAllBatchMultitabDet implements Action {
  readonly type = actions.GET_ALL;
  constructor(public payload = null) { }
}
export class GetAllBatchMultitabDetSuccess implements Action {
  readonly type = actions.GET_ALL_SUCCESS;
  constructor(public payload: BatchMultitabDet[]) { }
}
export class GetAllBatchMultitabDetFail implements Action {
  readonly type = actions.GET_ALL_FAIL;
  constructor(public payload: any) { }
}

export class GetByBatchMultitabCab implements Action {
  readonly type = actions.GET_BY_BATCH_MULTITABCAB;
  constructor(public payload: any) { }
}
export class GetByBatchMultitabCabSuccess implements Action {
  readonly type = actions.GET_BY_BATCH_MULTITABCAB_SUCCESS;
  constructor(public payload: BatchMultitabDet[]) { }
}
export class GetByBatchMultitabCabFail implements Action {
  readonly type = actions.GET_BY_BATCH_MULTITABCAB_FAIL;
  constructor(public payload: any) { }
}

export class GetByBatchMultitabCabB implements Action {
  readonly type = actions.GET_BY_BATCH_MULTITABCAB_B;
  constructor(public payload: any) {}
}
export class GetByBatchMultitabCabBSuccess implements Action {
  readonly type = actions.GET_BY_BATCH_MULTITABCAB_B_SUCCESS;
  constructor(public payload: BatchMultitabDet[]) {}
}
export class GetByBatchMultitabCabBFail implements Action {
  readonly type = actions.GET_BY_BATCH_MULTITABCAB_B_FAIL;
  constructor(public payload: any) {}
}

export class ResetBatchMultitabDet implements Action {
  readonly type = actions.RESET;
  constructor(public payload: any = null) { }
}

export type BatchMultitabDetActions
  = AddBatchMultitabDet
  | AddBatchMultitabDetSuccess
  | AddBatchMultitabDetFail
  | UpdateBatchMultitabDet
  | UpdateBatchMultitabDetSuccess
  | UpdateBatchMultitabDetFail
  | DeleteBatchMultitabDet
  | DeleteBatchMultitabDetSuccess
  | DeleteBatchMultitabDetFail
  | GetAllBatchMultitabDet
  | GetAllBatchMultitabDetSuccess
  | GetAllBatchMultitabDetFail
  | GetByBatchMultitabCab
  | GetByBatchMultitabCabSuccess
  | GetByBatchMultitabCabFail
  | GetByBatchMultitabCabB
  | GetByBatchMultitabCabBSuccess
  | GetByBatchMultitabCabBFail
  | ResetBatchMultitabDet;
