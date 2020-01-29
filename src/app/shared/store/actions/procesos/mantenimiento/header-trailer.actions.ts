import { getCommonCrudActions } from '../../common-actions';
import { Action } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';
import { HeaderTrailer, TIPO_HEADER_TRAILER } from '../../../../../procesos/models';

export const actions = {
  ...getCommonCrudActions('HeaderTrailer'),
  GET_HEADERS: '[HeaderTrailer] Obtener headers',
  GET_HEADERS_SUCCESS: '[HeaderTrailer] Obtener headers completo',
  GET_HEADERS_FAIL: '[HeaderTrailer] Error obtener headers',
  GET_TRAILERS: '[HeaderTrailer] Obtener trailers',
  GET_TRAILERS_SUCCESS: '[HeaderTrailer] Obtener trailers completo',
  GET_TRAILERS_FAIL: '[HeaderTrailer] Error obtener trailers',
}

export class GetAllHeaderTrailer implements Action {
  readonly type = actions.GET_ALL;
  constructor(public payload = null) { }
}
export class GetAllHeaderTrailerSuccess implements Action {
  readonly type = actions.GET_ALL_SUCCESS;
  constructor(public payload: HeaderTrailer[]) { }
}
export class GetAllHeaderTrailerFail implements Action {
  readonly type = actions.GET_ALL_FAIL;
  constructor(public payload: HttpErrorResponse) { }
}

export class GetHeadersOfHeaderTrailer implements Action {
  readonly type = actions.GET_HEADERS;
  constructor(public payload: string = TIPO_HEADER_TRAILER.HEADER) { }
}
export class GetHeadersOfHeaderTrailerSuccess implements Action {
  readonly type = actions.GET_HEADERS_SUCCESS;
  constructor(public payload: HeaderTrailer[]) { }
}
export class GetHeadersOfHeaderTrailerFail implements Action {
  readonly type = actions.GET_HEADERS_FAIL;
  constructor(public payload: HttpErrorResponse) { }
}

export class GetTrailersOfHeaderTrailer implements Action {
  readonly type = actions.GET_TRAILERS;
  constructor(public payload: string = TIPO_HEADER_TRAILER.TRAILER) { }
}
export class GetTrailersOfHeaderTrailerSuccess implements Action {
  readonly type = actions.GET_TRAILERS_SUCCESS;
  constructor(public payload: HeaderTrailer[]) { }
}
export class GetTrailersOfHeaderTrailerFail implements Action {
  readonly type = actions.GET_TRAILERS_FAIL;
  constructor(public payload: HttpErrorResponse) { }
}


export type HeaderTrailerActions
  = GetAllHeaderTrailer
  | GetAllHeaderTrailerSuccess
  | GetAllHeaderTrailerFail
  | GetHeadersOfHeaderTrailer
  | GetHeadersOfHeaderTrailerSuccess
  | GetHeadersOfHeaderTrailerFail
  | GetTrailersOfHeaderTrailer
  | GetTrailersOfHeaderTrailerSuccess
  | GetTrailersOfHeaderTrailerFail;