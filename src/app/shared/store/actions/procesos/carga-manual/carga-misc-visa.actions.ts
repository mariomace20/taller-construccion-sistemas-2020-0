import { Action } from '@ngrx/store';
import { CargaMiscVisa } from '../../../../../procesos/models';
import { getCommonCrudActions } from '../../common-actions';

export const actions = {
  ...getCommonCrudActions('Carga Factura VISA'),

  UPLOAD: '[CargaMiscVisa] Subir archivo',
  UPLOAD_SUCCESS: '[CargaMiscVisa] Archivo subido correctamente',
  UPLOAD_FAIL: '[CargaMiscVisa] Fallo al subir el archivo'
}

export class UploadCargaMiscVisa implements Action {
  readonly type = actions.UPLOAD;
  constructor(public payload: File[]) {}
}
export class UploadCargaMiscVisaSuccess implements Action {
  readonly type = actions.UPLOAD_SUCCESS;
  constructor(public payload: CargaMiscVisa[]) {}
}
export class UploadCargaMiscVisaFail implements Action {
  readonly type = actions.UPLOAD_FAIL;
  constructor(public payload: any) {}
}

export class ResetCargaMiscVisa implements Action {
  readonly type = actions.RESET;
  constructor(public payload: any = null) {};
}

export type CargaMiscVisaActions
  = UploadCargaMiscVisa
  | UploadCargaMiscVisaSuccess
  | UploadCargaMiscVisaFail
  | ResetCargaMiscVisa;
