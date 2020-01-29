import { Injectable } from '@angular/core';
import { DistribucionVisaEventosService } from '../../../../mantenimiento/services';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as fromDistribucionVisaEventos from '../../actions/mantenimiento/distribucion-visa-eventos.actions';
import { switchMap, map, catchError, withLatestFrom } from 'rxjs/operators';
import { of } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import { GlobalMessages } from '../../reducers/global.reducer';
import { HttpErrorResponse } from '@angular/common/http';
import { addLabelToObjsArr, sortByAttr } from '../../../utils';
import { DistribucionVisaEventos } from '../../../../mantenimiento/models';

@Injectable()
export class DistribucionVisaEventosEffects {

  constructor(
    private actions$: Actions,
    private store$: Store<AppState>,
    private distribucionVisaEventosService: DistribucionVisaEventosService
  ) { }

  @Effect()
  GetAll$ = this.actions$
    .pipe(
      ofType(fromDistribucionVisaEventos.actions.GET_ALL),
      switchMap(() => {
        return this.distribucionVisaEventosService.buscarTodos()
          .pipe(
            map((res: DistribucionVisaEventos[]) => {
              return new fromDistribucionVisaEventos.GetAllDistribucionVisaEventosSuccess(res);
            }),
            catchError((err) => {
              return of(new fromDistribucionVisaEventos.GetAllDistribucionVisaEventosFail(err));
            })
          )
      })
    );

  @Effect()
  UpdateDistribucionVisaEventos$ = this.actions$
    .pipe(
      ofType(fromDistribucionVisaEventos.actions.UPDATE),
      withLatestFrom(this.store$.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromDistribucionVisaEventos.UpdateDistribucionVisaEventos, GlobalMessages]) => {
        return this.distribucionVisaEventosService.actualizar(action.payload)
          .pipe(
            map(res => {
              return new fromDistribucionVisaEventos.UpdateDistribucionVisaEventosSuccess({ data: res, message: messages.UPDATE_SUCCESS });
            }),
            catchError((err: HttpErrorResponse) => {
              return of(new fromDistribucionVisaEventos.UpdateDistribucionVisaEventosFail(err))
            })
          )
      })
    );
    
}
