import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as fromEstablecimientoDcp from '../../actions/consultas/establecimiento-dcp.actions';
import { switchMap, map, catchError, withLatestFrom } from 'rxjs/operators';
import { of } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import { GlobalMessages } from '../../reducers/global.reducer';
import { HttpErrorResponse } from '@angular/common/http';
import { addLabelToObjsArr, sortByAttr } from '../../../utils';
import { EstablecimientoDcpService } from '../../../../consultas/service';

@Injectable()
export class EstablecimientoDcpEffects {

  constructor(
    private actions$: Actions,
    private store$: Store<AppState>,
    private establecimientoDcpService: EstablecimientoDcpService
  ) { }

  @Effect()
  GetCriterio$ = this.actions$
    .pipe(
      ofType(fromEstablecimientoDcp.actions.GET_CRITERIO_PAGINADO),
      switchMap((action: fromEstablecimientoDcp.GetCriterioEstablecimientoDcp) => {
        return this.establecimientoDcpService.buscarPorCriterios(action.payload)
          .pipe(
            map(res => {
              return new fromEstablecimientoDcp.GetCriterioEstablecimientoDcpSuccess(res);
            }),
            catchError((err) => {
              return of(new fromEstablecimientoDcp.GetCriterioEstablecimientoDcpFail(err));
            })
          );
      })
    );

}
