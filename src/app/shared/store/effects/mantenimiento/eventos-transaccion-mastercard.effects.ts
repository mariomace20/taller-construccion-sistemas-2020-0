import { Injectable } from '@angular/core';
import { EventosTransaccionMastercardService } from '../../../../mantenimiento/services/eventos-transaccion-mastercard.service';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as fromEventosTransaccionMastercard from '../../actions/mantenimiento/eventos-transaccion-mastercard.actions';
import { switchMap, map, catchError, withLatestFrom } from 'rxjs/operators';
import { of } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import { GlobalMessages } from '../../reducers/global.reducer';
import { HttpErrorResponse } from '@angular/common/http';
import {addLabelToObjsArr, sortByAttr} from "../../../utils";

@Injectable()
export class EventosTransaccionMastercardEffects {

  constructor(
    private actions$: Actions,
    private store$: Store<AppState>,
    private EventosTransaccionMastercardService: EventosTransaccionMastercardService
  ) { }

  @Effect()
  GetAll$ = this.actions$
    .pipe(
      ofType(fromEventosTransaccionMastercard.actions.GET_ALL),
      switchMap(() => {
        return this.EventosTransaccionMastercardService.buscarTodos()
          .pipe(
            map(res => {
              addLabelToObjsArr(res, 'label', false, 'idEventoMc', 'description');
              return new fromEventosTransaccionMastercard.GetAllEventosTransaccionMastercardSuccess(res);
            }),
            catchError((err) => {
              return of(new fromEventosTransaccionMastercard.GetAllEventosTransaccionMastercardFail(err));
            })
          )
      })
    );

  @Effect()
  Add$ = this.actions$
    .pipe(
      ofType(fromEventosTransaccionMastercard.actions.ADD),
      withLatestFrom(this.store$.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromEventosTransaccionMastercard.AddEventosTransaccionMastercard, GlobalMessages]) => {
        return this.EventosTransaccionMastercardService.registrar(action.payload)
          .pipe(
            map(res => {
              return new fromEventosTransaccionMastercard.AddEventosTransaccionMastercardSuccess({ data: res, message: messages.ADD_SUCCESS });
            }),
            catchError((err: HttpErrorResponse) => {
              return of(new fromEventosTransaccionMastercard.AddEventosTransaccionMastercardFail(err))
            })
          )
      })
    );

  @Effect()
  Update$ = this.actions$
    .pipe(
      ofType(fromEventosTransaccionMastercard.actions.UPDATE),
      withLatestFrom(this.store$.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromEventosTransaccionMastercard.UpdateEventosTransaccionMastercard, GlobalMessages]) => {
        return this.EventosTransaccionMastercardService.actualizar(action.payload)
          .pipe(
            map(res => {
              return new fromEventosTransaccionMastercard.UpdateEventosTransaccionMastercardSuccess({ data: res, message: messages.UPDATE_SUCCESS });
            }),
            catchError((err: HttpErrorResponse) => {
              return of(new fromEventosTransaccionMastercard.UpdateEventosTransaccionMastercardFail(err))
            })
          )
      })
    );

  @Effect()
  Delete$ = this.actions$
    .pipe(
      ofType(fromEventosTransaccionMastercard.actions.DELETE),
      withLatestFrom(this.store$.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromEventosTransaccionMastercard.DeleteEventosTransaccionMastercard, GlobalMessages]) => {
        return this.EventosTransaccionMastercardService.eliminar(action.payload)
          .pipe(
            map(res => {
              return new fromEventosTransaccionMastercard.DeleteEventosTransaccionMastercardSuccess({ message: messages.DELETE_SUCCESS });
            }),
            catchError((err: HttpErrorResponse) => {
              return of(new fromEventosTransaccionMastercard.DeleteEventosTransaccionMastercardFail(err))
            })
          )
      })
    );

}
