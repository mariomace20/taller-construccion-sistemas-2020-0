import { Injectable } from '@angular/core';
import { EventosInstitucionMastercardService } from '../../../../mantenimiento/services/eventos-institucion-mastercard.service';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as fromEventosInstitucionMastercard from '../../actions/mantenimiento/eventos-institucion-mastercard.actions';
import { switchMap, map, catchError, withLatestFrom } from 'rxjs/operators';
import { of } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import { GlobalMessages } from '../../reducers/global.reducer';
import { HttpErrorResponse } from '@angular/common/http';
import {addLabelToObjsArr} from "../../../utils";

@Injectable()
export class EventosInstitucionMastercardEffects {

  constructor(
    private actions$: Actions,
    private store$: Store<AppState>,
    private eventosInstitucionMastercardService: EventosInstitucionMastercardService
  ) { }

  @Effect()
  GetAll$ = this.actions$
    .pipe(
      ofType(fromEventosInstitucionMastercard.actions.GET_ALL),
      switchMap(() => {
        return this.eventosInstitucionMastercardService.buscarTodos()
          .pipe(
            map(res => {
              addLabelToObjsArr(res, 'label', false, 'idEventoMc', 'description');
              return new fromEventosInstitucionMastercard.GetAllEventosInstitucionMastercardSuccess(res);
            }),
            catchError((err) => {
              return of(new fromEventosInstitucionMastercard.GetAllEventosInstitucionMastercardFail(err));
            })
          )
      })
    );

  @Effect()
  GetByInstMastercard$ = this.actions$
    .pipe(
      ofType(fromEventosInstitucionMastercard.actions.GET_BY_INST),
      switchMap((action: fromEventosInstitucionMastercard.GetByInstMastercard) => {
        return this.eventosInstitucionMastercardService.buscarPorInstitucion(action.payload)
          .pipe(
            map(res => {
              addLabelToObjsArr(res, 'label', false, 'idBillingLineMastercard', 'serviceDescription');
              return new fromEventosInstitucionMastercard.GetByInstMastercardSuccess(res);
            }),
            catchError((err) => {
              return of(new fromEventosInstitucionMastercard.GetByInstMastercardFail(err));
            })
          )
      })
    );

  @Effect()
  Add$ = this.actions$
    .pipe(
      ofType(fromEventosInstitucionMastercard.actions.ADD),
      withLatestFrom(this.store$.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromEventosInstitucionMastercard.AddEventosInstitucionMastercard, GlobalMessages]) => {
        return this.eventosInstitucionMastercardService.registrar(action.payload)
          .pipe(
            map(res => {
              return new fromEventosInstitucionMastercard.AddEventosInstitucionMastercardSuccess({ data: res, message: messages.ADD_SUCCESS });
            }),
            catchError((err: HttpErrorResponse) => {
              return of(new fromEventosInstitucionMastercard.AddEventosInstitucionMastercardFail(err))
            })
          )
      })
    );

  @Effect()
  Update$ = this.actions$
    .pipe(
      ofType(fromEventosInstitucionMastercard.actions.UPDATE),
      withLatestFrom(this.store$.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromEventosInstitucionMastercard.UpdateEventosInstitucionMastercard, GlobalMessages]) => {
        return this.eventosInstitucionMastercardService.actualizar(action.payload)
          .pipe(
            map(res => {
              return new fromEventosInstitucionMastercard.UpdateEventosInstitucionMastercardSuccess({ data: res, message: messages.UPDATE_SUCCESS });
            }),
            catchError((err: HttpErrorResponse) => {
              return of(new fromEventosInstitucionMastercard.UpdateEventosInstitucionMastercardFail(err))
            })
          )
      })
    );

  @Effect()
  Delete$ = this.actions$
    .pipe(
      ofType(fromEventosInstitucionMastercard.actions.DELETE),
      withLatestFrom(this.store$.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromEventosInstitucionMastercard.DeleteEventosInstitucionMastercard, GlobalMessages]) => {
        return this.eventosInstitucionMastercardService.eliminar(action.payload)
          .pipe(
            map(res => {
              return new fromEventosInstitucionMastercard.DeleteEventosInstitucionMastercardSuccess({ message: messages.DELETE_SUCCESS });
            }),
            catchError((err: HttpErrorResponse) => {
              return of(new fromEventosInstitucionMastercard.DeleteEventosInstitucionMastercardFail(err))
            })
          )
      })
    );

}
