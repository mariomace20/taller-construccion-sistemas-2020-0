import { Injectable } from '@angular/core';
import { EventosInstitucionVisaService } from '../../../../mantenimiento/services';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as fromEventosInstitucionVisa from '../../actions/mantenimiento/eventos-institucion-visa.actions';
import { switchMap, map, catchError, withLatestFrom } from 'rxjs/operators';
import { of } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import { GlobalMessages } from '../../reducers/global.reducer';
import { HttpErrorResponse } from '@angular/common/http';
import {addLabelToObjsArr} from "../../../utils";

@Injectable()
export class EventosInstitucionVisaEffects {

  constructor(
    private actions$: Actions,
    private store$: Store<AppState>,
    private eventosInstitucionVisaService: EventosInstitucionVisaService
  ) { }

  @Effect()
  GetAll$ = this.actions$
    .pipe(
      ofType(fromEventosInstitucionVisa.actions.GET_ALL),
      switchMap(() => {
        return this.eventosInstitucionVisaService.buscarTodos()
          .pipe(
            map(res => {
              addLabelToObjsArr(res, 'label', false, 'idBillingLineVisa', 'serviceDescription');
              return new fromEventosInstitucionVisa.GetAllEventosInstitucionVisaSuccess(res);
            }),
            catchError((err) => {
              return of(new fromEventosInstitucionVisa.GetAllEventosInstitucionVisaFail(err));
            })
          )
      })
    );

  @Effect()
  GetByInstVisa$ = this.actions$
    .pipe(
      ofType(fromEventosInstitucionVisa.actions.GET_BY_INST),
      switchMap((action: fromEventosInstitucionVisa.GetByInstVisa) => {
        return this.eventosInstitucionVisaService.buscarPorInstitucion(action.payload)
          .pipe(
            map(res => {
              addLabelToObjsArr(res, 'label', false, 'idBillingLineVisa', 'serviceDescription');
              return new fromEventosInstitucionVisa.GetByInstVisaSuccess(res);
            }),
            catchError((err) => {
              return of(new fromEventosInstitucionVisa.GetByInstVisaFail(err));
            })
          )
      })
    );

  @Effect()
  Add$ = this.actions$
    .pipe(
      ofType(fromEventosInstitucionVisa.actions.ADD),
      withLatestFrom(this.store$.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromEventosInstitucionVisa.AddEventosInstitucionVisa, GlobalMessages]) => {
        return this.eventosInstitucionVisaService.registrar(action.payload)
          .pipe(
            map(res => {
              return new fromEventosInstitucionVisa.AddEventosInstitucionVisaSuccess({ data: res, message: messages.ADD_SUCCESS });
            }),
            catchError((err: HttpErrorResponse) => {
              return of(new fromEventosInstitucionVisa.AddEventosInstitucionVisaFail(err))
            })
          )
      })
    );

  @Effect()
  Update$ = this.actions$
    .pipe(
      ofType(fromEventosInstitucionVisa.actions.UPDATE),
      withLatestFrom(this.store$.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromEventosInstitucionVisa.UpdateEventosInstitucionVisa, GlobalMessages]) => {
        return this.eventosInstitucionVisaService.actualizar(action.payload)
          .pipe(
            map(res => {
              return new fromEventosInstitucionVisa.UpdateEventosInstitucionVisaSuccess({ data: res, message: messages.UPDATE_SUCCESS });
            }),
            catchError((err: HttpErrorResponse) => {
              return of(new fromEventosInstitucionVisa.UpdateEventosInstitucionVisaFail(err))
            })
          )
      })
    );

  @Effect()
  Delete$ = this.actions$
    .pipe(
      ofType(fromEventosInstitucionVisa.actions.DELETE),
      withLatestFrom(this.store$.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromEventosInstitucionVisa.DeleteEventosInstitucionVisa, GlobalMessages]) => {
        return this.eventosInstitucionVisaService.eliminar(action.payload)
          .pipe(
            map(res => {
              return new fromEventosInstitucionVisa.DeleteEventosInstitucionVisaSuccess({ message: messages.DELETE_SUCCESS });
            }),
            catchError((err: HttpErrorResponse) => {
              return of(new fromEventosInstitucionVisa.DeleteEventosInstitucionVisaFail(err))
            })
          )
      })
    );

}
