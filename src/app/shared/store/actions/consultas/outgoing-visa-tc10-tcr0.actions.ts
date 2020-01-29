import { getCommonConsultaActions } from "../common-actions";
import { Action } from '@ngrx/store';
import { CriterioOutgoingVisaTC10Request} from '../../../../consultas/models/criterios';

export const actions = {
  ...getCommonConsultaActions('OutgoingVisaTC10TCR0'),
}

export class GetCriterioTC10TCR0 implements Action {
  readonly type = actions.GET_CRITERIO_PAGINADO;
  constructor(public payload: CriterioOutgoingVisaTC10Request) {}
}
export class GetCriterioTC10TCR0Success implements Action {
  readonly type = actions.GET_CRITERIO_PAGINADO_SUCCESS;
  constructor(public payload: any) {}
}
export class GetCriterioTC10TCR0Fail implements Action {
  readonly type = actions.GET_CRITERIO_PAGINADO_FAIL;
  constructor(public payload: any) {}
}

export class GetCriterioFiltroTC10TCR0 implements Action {
  readonly type = actions.GET_CRITERIO_FILTRO;
  constructor(public payload: CriterioOutgoingVisaTC10Request) {}
}
export class GetCriterioFiltroTC10TCR0Success implements Action {
  readonly type = actions.GET_CRITERIO_FILTRO_SUCCESS;
  constructor(public payload: any) {}
}
export class GetCriterioFiltroTC10TCR0Fail implements Action {
  readonly type = actions.GET_CRITERIO_FILTRO_FAIL;
  constructor(public payload: any) {}
}

export class GetDetalleTC10TCR0 implements Action {
  readonly type = actions.GET_DETALLE;
  constructor(public payload: any) {}
}
export class GetDetalleTC10TCR0Success implements Action {
  readonly type = actions.GET_DETALLE_SUCCESS;
  constructor(public payload: any) {}
}
export class GetDetalleTC10TCR0Fail implements Action {
  readonly type = actions.GET_DETALLE_FAIL;
  constructor(public payload: any) {}
}

export class ResetTC10RCR0 implements Action {
  readonly type = actions.RESET;
  constructor(public payload: any = null) {}
}

export type OutgoingVisaTC10TCR0Actions
  = GetCriterioTC10TCR0
  | GetCriterioTC10TCR0Success
  | GetCriterioTC10TCR0Fail
  | GetDetalleTC10TCR0
  | GetDetalleTC10TCR0Success
  | GetDetalleTC10TCR0Fail
  | GetCriterioFiltroTC10TCR0
  | GetCriterioFiltroTC10TCR0Success
  | GetCriterioFiltroTC10TCR0Fail
  | ResetTC10RCR0;
