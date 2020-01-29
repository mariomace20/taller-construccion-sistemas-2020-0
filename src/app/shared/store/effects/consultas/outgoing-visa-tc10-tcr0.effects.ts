import { Injectable } from '@angular/core';
import { OutgoingVisaTC10TCR0Service } from '../../../../consultas/service/outgoing-visa-tc10-tcr0.service';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as fromOutgoingVisaTC10TCR0 from '../../actions/consultas/outgoing-visa-tc10-tcr0.actions';
import { switchMap, map, catchError, withLatestFrom } from 'rxjs/operators';
import { of } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import { GlobalMessages } from '../../reducers/global.reducer';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class OutgoingVisaTC10TCR0Effects {

  constructor(
    private actions$: Actions,
    private store$: Store<AppState>,
    private outgoingVisaTC10TCR0Service: OutgoingVisaTC10TCR0Service
  ) { }

  @Effect()
  GetCriterio$ = this.actions$
    .pipe(
      ofType(fromOutgoingVisaTC10TCR0.actions.GET_CRITERIO_PAGINADO),
      switchMap((action: fromOutgoingVisaTC10TCR0.GetCriterioTC10TCR0) => {
        return this.outgoingVisaTC10TCR0Service.buscarPorCriterios(action.payload)
          .pipe(
            map(res => {
              return new fromOutgoingVisaTC10TCR0.GetCriterioTC10TCR0Success(res);
            }),
            catchError((err) => {
              return of(new fromOutgoingVisaTC10TCR0.GetCriterioTC10TCR0Fail(err));
            })
          )
      })
    );

    @Effect()
    GetXIdSecuencia$ = this.actions$
      .pipe(
        ofType(fromOutgoingVisaTC10TCR0.actions.GET_DETALLE),
        switchMap((action: fromOutgoingVisaTC10TCR0.GetDetalleTC10TCR0) => {
          return this.outgoingVisaTC10TCR0Service.buscarPorIdSecuencia(action.payload)
            .pipe(
              map(res => {
                return new fromOutgoingVisaTC10TCR0.GetDetalleTC10TCR0Success(res);
              }),
              catchError((err) => {
                return of(new fromOutgoingVisaTC10TCR0.GetDetalleTC10TCR0Fail(err));
              })
            )
        })
      );

      /*@Effect()
      GetFiltros$ = this.actions$
        .pipe(
          ofType(fromOutgoingVisaTC10TCR0.actions.GET_CRITERIO_FILTRO),
          switchMap((action: fromOutgoingVisaTC10TCR0.GetCriterioFiltroTC10TCR0) => {
            return this.OutgoingVisaTC10TCR0Service.buscarPorCriteriosFiltros(action.payload)
              .pipe(
                map(res => {
                  //console.log(res);
                  return new fromOutgoingVisaTC10TCR0.GetCriterioFiltroTC10TCR0Success(res);
                }),
                catchError((err) => {
                  //console.log(err);
                  return of(new fromOutgoingVisaTC10TCR0.GetCriterioFiltroTC10TCR0Fail(err));
                })
              )
          })
        );*/

}
