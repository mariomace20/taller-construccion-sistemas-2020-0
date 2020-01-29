import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { HeaderTrailerService } from '../../../../../procesos/services';
import * as fromHeaderTrailer from '../../../actions/procesos/mantenimiento/header-trailer.actions';
import { catchError, map, switchMap } from "rxjs/operators";
import { of } from 'rxjs';
import { addLabelToObjsArr } from "../../../../utils";

@Injectable()
export class HeaderTrailerEffects {
  constructor(private actions$: Actions, private archivoCodificacionService: HeaderTrailerService) { }

  @Effect()
  GetAll$ = this.actions$.pipe(ofType(fromHeaderTrailer.actions.GET_ALL), switchMap(() => {
    return this.archivoCodificacionService.buscarTodos().pipe(
      map(res => {
        addLabelToObjsArr(res, 'label', false, 'idHeaderTrailer', 'descripcionHeaderTrailer');
        return new fromHeaderTrailer.GetAllHeaderTrailerSuccess(res);
      }),
      catchError((err) => {
        return of(new fromHeaderTrailer.GetAllHeaderTrailerFail(err));
      }));
  }));

  @Effect()
  GetHeaders$ = this.actions$.pipe(ofType(fromHeaderTrailer.actions.GET_HEADERS),
    switchMap((action: fromHeaderTrailer.GetHeadersOfHeaderTrailer) => {
      return this.archivoCodificacionService.buscarPorTipoHeaderTrailer(action.payload).pipe(
        map(res => {
          addLabelToObjsArr(res, 'label', false, 'idHeaderTrailer', 'descripcionHeaderTrailer');
          return new fromHeaderTrailer.GetHeadersOfHeaderTrailerSuccess(res);
        }),
        catchError((err) => {
          return of(new fromHeaderTrailer.GetHeadersOfHeaderTrailerFail(err));
        }));
    }));

  @Effect()
  GetTrailers$ = this.actions$.pipe(ofType(fromHeaderTrailer.actions.GET_TRAILERS),
    switchMap((action: fromHeaderTrailer.GetTrailersOfHeaderTrailer) => {
      return this.archivoCodificacionService.buscarPorTipoHeaderTrailer(action.payload).pipe(
        map(res => {
          addLabelToObjsArr(res, 'label', false, 'idHeaderTrailer', 'descripcionHeaderTrailer');
          return new fromHeaderTrailer.GetTrailersOfHeaderTrailerSuccess(res);
        }),
        catchError((err) => {
          return of(new fromHeaderTrailer.GetTrailersOfHeaderTrailerFail(err));
        }));
    }));

}