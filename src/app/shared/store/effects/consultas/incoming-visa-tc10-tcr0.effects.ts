import { Injectable } from '@angular/core';
import { IncomingVisaTC10TCR0Service } from '../../../../consultas/service/incoming-visa-tc10-tcr0.service';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as fromIncomingVisaTC10TCR0 from '../../actions/consultas/incoming-visa-tc10-tcr0.actions';
import { switchMap, map, catchError, withLatestFrom } from 'rxjs/operators';
import { of } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import { GlobalMessages } from '../../reducers/global.reducer';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class IncomingVisaTC10TCR0Effects {

  constructor(
    private actions$: Actions,
    private store$: Store<AppState>,
    private incomingVisaTC10TCR0Service: IncomingVisaTC10TCR0Service
  ) { }

  @Effect()
  GetCriterio$ = this.actions$
    .pipe(
      ofType(fromIncomingVisaTC10TCR0.actions.GET_CRITERIO_PAGINADO),
      switchMap((action: fromIncomingVisaTC10TCR0.GetCriterioTC10TCR0) => {
        return this.incomingVisaTC10TCR0Service.buscarPorCriterios(action.payload)
          .pipe(
            map(res => {
              return new fromIncomingVisaTC10TCR0.GetCriterioTC10TCR0Success(res);
            }),
            catchError((err) => {
              return of(new fromIncomingVisaTC10TCR0.GetCriterioTC10TCR0Fail(err));
            })
          )
      })
    );

    @Effect()
    GetXIdSecuencia$ = this.actions$
      .pipe(
        ofType(fromIncomingVisaTC10TCR0.actions.GET_DETALLE),
        switchMap((action: fromIncomingVisaTC10TCR0.GetDetalleTC10TCR0) => {
          return this.incomingVisaTC10TCR0Service.buscarPorIdSecuencia(action.payload)
            .pipe(
              map(res => {
                return new fromIncomingVisaTC10TCR0.GetDetalleTC10TCR0Success(res);
              }),
              catchError((err) => {
                return of(new fromIncomingVisaTC10TCR0.GetDetalleTC10TCR0Fail(err));
              })
            )
        })
      );

      /*@Effect()
      GetFiltros$ = this.actions$
        .pipe(
          ofType(fromIncomingVisaTC10TCR0.actions.GET_CRITERIO_FILTRO),
          switchMap((action: fromIncomingVisaTC10TCR0.GetCriterioFiltroTC10TCR0) => {
            return this.incomingVisaTC10TCR0Service.buscarPorCriteriosFiltros(action.payload)
              .pipe(
                map(res => {
                  //console.log(res);
                  return new fromIncomingVisaTC10TCR0.GetCriterioFiltroTC10TCR0Success(res);
                }),
                catchError((err) => {
                  //console.log(err);
                  return of(new fromIncomingVisaTC10TCR0.GetCriterioFiltroTC10TCR0Fail(err));
                })
              )
          })
        );*/

}
