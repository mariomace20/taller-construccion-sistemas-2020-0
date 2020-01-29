import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { ParametroBatchService } from '../../../../../procesos/services';
import * as fromParametroBatch from '../../../actions/procesos/mantenimiento/parametro-batch.actions';
import { catchError, map, switchMap, withLatestFrom } from "rxjs/operators";
import { of } from 'rxjs';
import { Store } from "@ngrx/store";
import { AppState } from "../../../app.reducers";
import { HttpErrorResponse } from "@angular/common/http";
import { GlobalMessages } from "../../../reducers/global.reducer";
import { addIndexToArray } from '../../../../utils';

@Injectable()
export class ParametroBatchEffects {
  constructor(private actions$: Actions, private store$: Store<AppState>,
    private procesoService: ParametroBatchService) { }

  @Effect()
  GetAll$ = this.actions$.pipe(ofType(fromParametroBatch.actions.GET_ALL), switchMap(() => {
    return this.procesoService.buscarTodos().pipe(
      map(res => {
        addIndexToArray(res, 'idParametroBatch');
        return new fromParametroBatch.GetAllParametroBatchSuccess(res);
      }),
      catchError((err) => {
        return of(new fromParametroBatch.GetAllParametroBatchFail(err));
      }));
  }));

  @Effect()
  UpdateParametroBatch$ = this.actions$.pipe(ofType(fromParametroBatch.actions.UPDATE),
    withLatestFrom(this.store$.select('globalData', 'messages')),
    switchMap(
      ([action, messages]: [fromParametroBatch.UpdateParametroBatch, GlobalMessages]) => {
        return this.procesoService.actualizar(
          action.payload).pipe(
            map(res => {
              res['idParametroBatch'] = 0;
              return new fromParametroBatch.UpdateParametroBatchSuccess(
                { data: res, message: messages.UPDATE_SUCCESS });
            }),
            catchError((err: HttpErrorResponse) => {
              return of(
                new fromParametroBatch.UpdateParametroBatchFail(err))
            })
          );
      }));

}