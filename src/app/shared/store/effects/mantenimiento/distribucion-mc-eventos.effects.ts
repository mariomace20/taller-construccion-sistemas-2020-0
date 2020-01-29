import { Injectable } from '@angular/core';
import { DistribucionMcEventosService } from '../../../../mantenimiento/services';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as fromDistribucionMcEventos from '../../actions/mantenimiento/distribucion-mc-eventos.actions';
import { switchMap, map, catchError, withLatestFrom } from 'rxjs/operators';
import { of } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import { GlobalMessages } from '../../reducers/global.reducer';
import { HttpErrorResponse } from '@angular/common/http';
import { addLabelToObjsArr, sortByAttr } from '../../../utils';
import { DistribucionMcEventos } from '../../../../mantenimiento/models';

@Injectable()
export class DistribucionMcEventosEffects {

  constructor(
    private actions$: Actions,
    private store$: Store<AppState>,
    private distribucionMcEventosService: DistribucionMcEventosService
  ) { }

  @Effect()
  GetAll$ = this.actions$
    .pipe(
      ofType(fromDistribucionMcEventos.actions.GET_ALL),
      switchMap(() => {
        return this.distribucionMcEventosService.buscarTodos()
          .pipe(
            map((res: DistribucionMcEventos[]) => {
              return new fromDistribucionMcEventos.GetAllDistribucionMcEventosSuccess(res);
            }),
            catchError((err) => {
              return of(new fromDistribucionMcEventos.GetAllDistribucionMcEventosFail(err));
            })
          )
      })
    );

  @Effect()
  UpdateDistribucionMcEventos$ = this.actions$
    .pipe(
      ofType(fromDistribucionMcEventos.actions.UPDATE),
      withLatestFrom(this.store$.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromDistribucionMcEventos.UpdateDistribucionMcEventos, GlobalMessages]) => {
        return this.distribucionMcEventosService.actualizar(action.payload)
          .pipe(
            map(res => {
              return new fromDistribucionMcEventos.UpdateDistribucionMcEventosSuccess({ data: res, message: messages.UPDATE_SUCCESS });
            }),
            catchError((err: HttpErrorResponse) => {
              return of(new fromDistribucionMcEventos.UpdateDistribucionMcEventosFail(err))
            })
          )
      })
    );

}
