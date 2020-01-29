import{Action} from '@ngrx/store';
import { getCommonConsultaActions } from "../common-actions";
import { ComisCompensacion } from '../../../../consultas/models';
import{CriterioCompensacionRequest} from '../../../../consultas/models/criterios';
export const actions = {
  ...getCommonConsultaActions('Compensacion'),
}

export class GetComisCompensacion implements Action {
  readonly type = actions.GET_DETALLE_COMISION;
  constructor(public payload: any) {}
}
export class GetComisCompensacionSuccess implements Action {
  readonly type = actions.GET_DETALLE_COMISION_SUCCESS;
  constructor(public payload: ComisCompensacion) {}
}
export class GetComisCompensacionFail implements Action {
  readonly type = actions.GET_DETALLE_COMISION_FAIL;
  constructor(public payload: any) {}
}

export class ResetComisCompensacion implements Action {
  readonly type = actions.RESET;
  constructor(public payload = null) {}
}


export type ComisCompensacionActions
  = GetComisCompensacion
  | GetComisCompensacionSuccess
  | GetComisCompensacionFail
  | ResetComisCompensacion;
