import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as fromPMP from '../../actions/consultas/pmp.actions';
import { switchMap, map, catchError, withLatestFrom } from 'rxjs/operators';
import { of } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import { GlobalMessages } from '../../reducers/global.reducer';
import { HttpErrorResponse } from '@angular/common/http';
import { addLabelToObjsArr, sortByAttr } from '../../../utils';
import { PMPService } from '../../../../consultas/service';

@Injectable()
export class PMPEffects {

  constructor(
    private actions$: Actions,
    private store$: Store<AppState>,
    private dcinChargeService: PMPService
  ) { }

  @Effect()
  GetCriterio$ = this.actions$
    .pipe(
      ofType(fromPMP.actions.GET_CRITERIO_PAGINADO),
      switchMap((action: fromPMP.GetCriterioPMP) => {
        return this.dcinChargeService.buscarPorCriterios(action.payload)
          .pipe(
            map(res => {
              return new fromPMP.GetCriterioPMPSuccess(res);
            }),
            catchError((err) => {
              return of(new fromPMP.GetCriterioPMPFail(err));
            })
          )
      })
    );

}
