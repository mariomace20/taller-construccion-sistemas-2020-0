import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import { IrregularService } from '../../../../consultas/service/irregular.service';
import * as fromIrregular from '../../actions/consultas/irregular.actions';
import { of } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';

@Injectable()
export class IrregularEffects {
  constructor(
    private actions$: Actions,
    private store$: Store<AppState>,
    private irregularService: IrregularService
  ) { }

  @Effect()
  GetCriterio$ = this.actions$
    .pipe(
      ofType(fromIrregular.actions.GET_CRITERIO_PAGINADO),
      switchMap((action: fromIrregular.GetCriterioIrregular) => {
        return this.irregularService.buscarPorCriterios(action.payload)
          .pipe(
            map(res => {
              console.log(res);
              return new fromIrregular.GetCriterioIrregularSuccess(res);
            }),
            catchError((err) => {
              return of(new fromIrregular.GetCriterioIrregularFail(err));
            })
          )
      })
    );



}
