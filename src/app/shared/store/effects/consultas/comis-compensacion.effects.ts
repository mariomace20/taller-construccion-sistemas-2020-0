import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import { CompensacionService } from '../../../../consultas/service/compensacion.service';
import * as fromComisCompensacion from '../../actions/consultas/comis-compensacion.actions';
import { of } from 'rxjs';
import { switchMap, map, catchError, withLatestFrom } from 'rxjs/operators';
@Injectable()
export class ComisCompensacionEffects{
  constructor(
    private actions$: Actions,
    private store$: Store<AppState>,
    private compensacionService: CompensacionService
  ) { }

      @Effect()
      GetComisCompensacion$ = this.actions$
        .pipe(
          ofType(fromComisCompensacion.actions.GET_DETALLE_COMISION),
          switchMap((action: fromComisCompensacion.GetComisCompensacion) => {
            return this.compensacionService.buscarComisionPorSecuenciaCompensacion(action.payload)
              .pipe(
                map(res => {
                  return new fromComisCompensacion.GetComisCompensacionSuccess(res);
                }),
                catchError((err) => {
                  return of(new fromComisCompensacion.GetComisCompensacionFail(err));
                })
              )
          })
        );
}
