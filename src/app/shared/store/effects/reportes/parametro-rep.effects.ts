import { Injectable } from '@angular/core';
import { ParametroRepService } from '../../../../reportes/config-generales/services/parametro-rep.service';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as fromParametroRep from '../../actions/reportes/parametro-rep.actions';
import { switchMap, map, catchError, withLatestFrom } from 'rxjs/operators';
import { of } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import { GlobalMessages } from '../../reducers/global.reducer';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class ParametroRepEffects {

  constructor(
    private actions$: Actions,
    private store$: Store<AppState>,
    private ParametroRepService: ParametroRepService
  ) { }

  @Effect()
  GetAll$ = this.actions$
    .pipe(
      ofType(fromParametroRep.actions.GET_ALL),
      switchMap(() => {
        return this.ParametroRepService.buscarTodos()
          .pipe(
            map(res => {
              return new fromParametroRep.GetAllParametroRepSuccess(res);
            }),
            catchError((err) => {
              return of(new fromParametroRep.GetAllParametroRepFail(err));
            })
          )
      })
    );


  @Effect()
  UpdateParametroRep$ = this.actions$
    .pipe(
      ofType(fromParametroRep.actions.UPDATE),
      withLatestFrom(this.store$.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromParametroRep.UpdateParametroRep, GlobalMessages]) => {
        return this.ParametroRepService.actualizar(action.payload)
          .pipe(
            map(res => {
              return new fromParametroRep.UpdateParametroRepSuccess({ data: res, message: messages.UPDATE_SUCCESS });
            }),
            catchError((err: HttpErrorResponse) => {
              return of(new fromParametroRep.UpdateParametroRepFail(err))
            })
          )
      })
    );

}
