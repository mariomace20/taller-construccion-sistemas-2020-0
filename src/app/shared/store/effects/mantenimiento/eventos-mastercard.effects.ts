import { Injectable } from '@angular/core';
import { EventosMastercardService } from '../../../../mantenimiento/services/eventos-mastercard.service';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as fromEventosMastercard from '../../actions/mantenimiento/eventos-mastercard.actions';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import { addLabelToObjsArr } from '../../../utils';

@Injectable()
export class EventosMastercardEffects {

  constructor(
    private actions$: Actions,
    private store$: Store<AppState>,
    private eventosMastercardService: EventosMastercardService
  ) { }

  @Effect()
  GetAll$ = this.actions$
    .pipe(
      ofType(fromEventosMastercard.actions.GET_ALL),
      switchMap(() => {
        return this.eventosMastercardService.buscarTodos()
          .pipe(
            map(res => {
              addLabelToObjsArr(res, 'label', false, 'idEventoMc', 'description');
              return new fromEventosMastercard.GetAllEventosMastercardSuccess(res);
            }),
            catchError((err) => {
              return of(new fromEventosMastercard.GetAllEventosMastercardFail(err));
            })
          )
      })
    );

}
