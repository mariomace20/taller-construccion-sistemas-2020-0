import { Injectable } from '@angular/core';
import { EventosVisaService } from '../../../../mantenimiento/services/eventos-visa.service';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as fromEventosVisa from '../../actions/mantenimiento/eventos-visa.actions';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import { addLabelToObjsArr } from '../../../utils';

@Injectable()
export class EventosVisaEffects {

  constructor(
    private actions$: Actions,
    private store$: Store<AppState>,
    private eventosVisaService: EventosVisaService
  ) { }

  @Effect()
  GetAll$ = this.actions$
    .pipe(
      ofType(fromEventosVisa.actions.GET_ALL),
      switchMap(() => {
        return this.eventosVisaService.buscarTodos()
          .pipe(
            map(res => {
              addLabelToObjsArr(res, 'label', false, 'idBillingLineVisa', 'serviceDescription');
              return new fromEventosVisa.GetAllEventosVisaSuccess(res);
            }),
            catchError((err) => {
              return of(new fromEventosVisa.GetAllEventosVisaFail(err));
            })
          )
      })
    );

    @Effect()
    GetEventSinTxn$ = this.actions$
      .pipe(
        ofType(fromEventosVisa.actions.GET_EVENTO_SIN_TXN),
        switchMap(() => {
          return this.eventosVisaService.buscarEventosSinTxn()
            .pipe(
              map(res => {
                addLabelToObjsArr(res, 'label', false, 'idBillingLineVisa', 'serviceDescription');
                return new fromEventosVisa.GetEventosSinTxnVisaSuccess(res);
              }),
              catchError((err) => {
                return of(new fromEventosVisa.GetEventosSinTxnVisaFail(err));
              })
            )
        })
      );

  @Effect()
  GetAllResumen$ = this.actions$
    .pipe(
      ofType(fromEventosVisa.actions.GET_ALL_RESUMEN),
      switchMap(() => {
        return this.eventosVisaService.buscarTodos()
          .pipe(
            map(res => {
              addLabelToObjsArr(res, 'label', false, 'idBillingLineVisa', 'serviceDescription');
              return new fromEventosVisa.GetAllEventosVisaResumenSuccess(res);
            }),
            catchError((err) => {
              return of(new fromEventosVisa.GetAllEventosVisaResumenFail(err));
            })
          )
      })
    );

}
