import { Action } from '@ngrx/store';
import { CargaMiscMC } from '../../../../../procesos/models';
import { getCommonCrudActions } from '../../common-actions';

export const actions = {
  ...getCommonCrudActions('Carga Factura MASTERCARD'),

  UPLOAD: '[CargaMiscMC] Subir archivo',
  UPLOAD_SUCCESS: '[CargaMiscMC] Archivo subido correctamente',
  UPLOAD_FAIL: '[CargaMiscMC] Fallo al subir el archivo'
}

export class UploadCargaMiscMC implements Action {
  readonly type = actions.UPLOAD;
  constructor(public payload: File[]) {}
}
export class UploadCargaMiscMCSuccess implements Action {
  readonly type = actions.UPLOAD_SUCCESS;
  constructor(public payload: CargaMiscMC[]) {}
}
export class UploadCargaMiscMCFail implements Action {
  readonly type = actions.UPLOAD_FAIL;
  constructor(public payload: any) {}
}

export class ResetCargaMiscMC implements Action {
  readonly type = actions.RESET;
  constructor(public payload: any = null) {};
}

export type CargaMiscMCActions
  = UploadCargaMiscMC
  | UploadCargaMiscMCSuccess
  | UploadCargaMiscMCFail
  | ResetCargaMiscMC;
