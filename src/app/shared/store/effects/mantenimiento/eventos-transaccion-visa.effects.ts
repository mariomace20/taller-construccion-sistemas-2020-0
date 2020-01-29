import { Injectable } from '@angular/core';
import { EventosTransaccionVisaService } from '../../../../mantenimiento/services/eventos-transaccion-visa.service';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as fromEventosTransaccionVisa from '../../actions/mantenimiento/eventos-transaccion-visa.actions';
import { switchMap, map, catchError, withLatestFrom } from 'rxjs/operators';
import { of } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import { GlobalMessages } from '../../reducers/global.reducer';
import { HttpErrorResponse } from '@angular/common/http';
import {addLabelToObjsArr, sortByAttr} from "../../../utils";

@Injectable()
export class EventosTransaccionVisaEffects {

  constructor(
    private actions$: Actions,
    private store$: Store<AppState>,
    private eventosTransaccionVisaService: EventosTransaccionVisaService
  ) { }

  @Effect()
  GetAll$ = this.actions$
    .pipe(
      ofType(fromEventosTransaccionVisa.actions.GET_ALL),
      switchMap(() => {
        return this.eventosTransaccionVisaService.buscarTodos()
          .pipe(
            map(res => {
              addLabelToObjsArr(res, 'label', false, 'idBillingLineVisa', 'serviceDescription');
              return new fromEventosTransaccionVisa.GetAllEventosTransaccionVisaSuccess(res);
            }),
            catchError((err) => {
              return of(new fromEventosTransaccionVisa.GetAllEventosTransaccionVisaFail(err));
            })
          )
      })
    );

  @Effect()
  Add$ = this.actions$
    .pipe(
      ofType(fromEventosTransaccionVisa.actions.ADD),
      withLatestFrom(this.store$.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromEventosTransaccionVisa.AddEventosTransaccionVisa, GlobalMessages]) => {
        return this.eventosTransaccionVisaService.registrar(action.payload)
          .pipe(
            map(res => {
              return new fromEventosTransaccionVisa.AddEventosTransaccionVisaSuccess({ data: res, message: messages.ADD_SUCCESS });
            }),
            catchError((err: HttpErrorResponse) => {
              return of(new fromEventosTransaccionVisa.AddEventosTransaccionVisaFail(err))
            })
          )
      })
    );

  @Effect()
  Update$ = this.actions$
    .pipe(
      ofType(fromEventosTransaccionVisa.actions.UPDATE),
      withLatestFrom(this.store$.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromEventosTransaccionVisa.UpdateEventosTransaccionVisa, GlobalMessages]) => {
        return this.eventosTransaccionVisaService.actualizar(action.payload)
          .pipe(
            map(res => {
              return new fromEventosTransaccionVisa.UpdateEventosTransaccionVisaSuccess({ data: res, message: messages.UPDATE_SUCCESS });
            }),
            catchError((err: HttpErrorResponse) => {
              return of(new fromEventosTransaccionVisa.UpdateEventosTransaccionVisaFail(err))
            })
          )
      })
    );

  @Effect()
  Delete$ = this.actions$
    .pipe(
      ofType(fromEventosTransaccionVisa.actions.DELETE),
      withLatestFrom(this.store$.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromEventosTransaccionVisa.DeleteEventosTransaccionVisa, GlobalMessages]) => {
        return this.eventosTransaccionVisaService.eliminar(action.payload)
          .pipe(
            map(res => {
              return new fromEventosTransaccionVisa.DeleteEventosTransaccionVisaSuccess({ message: messages.DELETE_SUCCESS });
            }),
            catchError((err: HttpErrorResponse) => {
              return of(new fromEventosTransaccionVisa.DeleteEventosTransaccionVisaFail(err))
            })
          )
      })
    );

}
