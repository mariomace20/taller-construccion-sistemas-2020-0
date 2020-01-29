import { Action } from '@ngrx/store';
import { GrupoBinTarifa } from '../../../../tarifario/models';
import { getCommonCrudActions } from '../common-actions';

export const actions = {
  ...getCommonCrudActions('GrupoBinTarifa'),
  GET_ALL_GROUPING: '[GrupoBinTarifa] Obtener todos agrupado',
  GET_ALL_GROUPING_SUCCESS: '[GrupoBinTarifa] Obtener todos agrupado success',
  GET_ALL_GROUPING_FAIL: '[GrupoBinTarifa] Error al obtener todos agrupado',
}

export class AddGrupoBinTarifa implements Action {
  readonly type = actions.ADD;
  constructor(public payload: any) {}
}
export class AddGrupoBinTarifaSuccess implements Action {
  readonly type = actions.ADD_SUCCESS;
  constructor(public payload: any) {}
}
export class AddGrupoBinTarifaFail implements Action {
  readonly type = actions.ADD_FAIL;
  constructor(public payload: any) {}
}

export class UpdateGrupoBinTarifa implements Action {
  readonly type = actions.UPDATE;
  constructor(public payload: any) {}
}
export class UpdateGrupoBinTarifaSuccess implements Action {
  readonly type = actions.UPDATE_SUCCESS;
  constructor(public payload: any) {}
}
export class UpdateGrupoBinTarifaFail implements Action {
  readonly type = actions.UPDATE_FAIL;
  constructor(public payload: any) {}
}

export class DeleteGrupoBinTarifa implements Action {
  readonly type = actions.DELETE;
  constructor(public payload: any) {}
}
export class DeleteGrupoBinTarifaSuccess implements Action {
  readonly type = actions.DELETE_SUCCESS;
  constructor(public payload: any) {}
}
export class DeleteGrupoBinTarifaFail implements Action {
  readonly type = actions.DELETE_FAIL;
  constructor(public payload: any) {}
}

export class GetAllGrupoBinTarifa implements Action {
  readonly type = actions.GET_ALL;
  constructor(public payload = null) {}
}
export class GetAllGrupoBinTarifaSuccess implements Action {
  readonly type = actions.GET_ALL_SUCCESS;
  constructor(public payload: GrupoBinTarifa[]) {}
}
export class GetAllGrupoBinTarifaFail implements Action {
  readonly type = actions.GET_ALL_FAIL;
  constructor(public payload: any) {}
}

export class GetAllGrupoBinTarifaAgrupado implements Action {
  readonly type = actions.GET_ALL_GROUPING;
  constructor(public payload = null) {}
}
export class GetAllGrupoBinTarifaAgrupadoSuccess implements Action {
  readonly type = actions.GET_ALL_GROUPING_SUCCESS;
  constructor(public payload: GrupoBinTarifa[]) {}
}
export class GetAllGrupoBinTarifaAgrupadoFail implements Action {
  readonly type = actions.GET_ALL_GROUPING_FAIL;
  constructor(public payload: any) {}
}

export class DownloadGrupoBinTarifa implements Action {
  readonly type = actions.DOWNLOAD;
  constructor(public payload: any){}
}
export class DownloadGrupoBinTarifaSuccess implements Action {
  readonly type = actions.DOWNLOAD_SUCCESS;
  constructor(public payload: any){}
}
export class DownloadGrupoBinTarifaFail implements Action {
  readonly type = actions.DOWNLOAD_FAIL;
  constructor(public payload: any){}
}

export type GrupoBinTarifaActions
  = AddGrupoBinTarifa
  | AddGrupoBinTarifaSuccess
  | AddGrupoBinTarifaFail
  | UpdateGrupoBinTarifa
  | UpdateGrupoBinTarifaSuccess
  | UpdateGrupoBinTarifaFail
  | DeleteGrupoBinTarifa
  | DeleteGrupoBinTarifaSuccess
  | DeleteGrupoBinTarifaFail
  | GetAllGrupoBinTarifa
  | GetAllGrupoBinTarifaSuccess
  | GetAllGrupoBinTarifaFail
  | GetAllGrupoBinTarifaAgrupado
  | GetAllGrupoBinTarifaAgrupadoSuccess
  | GetAllGrupoBinTarifaAgrupadoFail
  | DownloadGrupoBinTarifa
  | DownloadGrupoBinTarifaSuccess
  | DownloadGrupoBinTarifaFail;
