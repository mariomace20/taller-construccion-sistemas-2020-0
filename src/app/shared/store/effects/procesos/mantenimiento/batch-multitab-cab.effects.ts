import { Injectable } from '@angular/core';
import { Actions, ofType, Effect } from '@ngrx/effects';
import { BatchMultitabCabService } from '../../../../../procesos/services';
import { AppState } from '../../../app.reducers';
import { Store } from '@ngrx/store';
import * as fromMultitab from '../../../actions/procesos/mantenimiento/batch-multitab-cab.actions';
import { switchMap, map, catchError, withLatestFrom } from 'rxjs/operators';
import { of } from 'rxjs';
import { GlobalMessages } from '../../../reducers/global.reducer';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class BatchMultitabCabEffects {

  constructor(private actions$: Actions, private store: Store<AppState>,
    private multitabCabService: BatchMultitabCabService
  ) { }

  @Effect()
  GetAll$ = this.actions$
    .pipe(
      ofType(fromMultitab.actions.GET_ALL),
      switchMap(() => {
        return this.multitabCabService.buscarTodos()
          .pipe(
            map(res => {
              return new fromMultitab.GetAllBatchMultitabCabSuccess(res);
            }),
            catchError(err => {
              return of(new fromMultitab.GetAllBatchMultitabCabFail(err));
            })
          )
      })
    );

  @Effect()
  AddBatchMultitabCab$ = this.actions$
    .pipe(
      ofType(fromMultitab.actions.ADD),
      withLatestFrom(this.store.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromMultitab.AddBatchMultitabCab, GlobalMessages]) => {
        return this.multitabCabService.registrar(action.payload)
          .pipe(
            map(res => {
              return new fromMultitab.AddBatchMultitabCabSuccess({ data: res, message: messages.ADD_SUCCESS });
            }),
            catchError((err: HttpErrorResponse) => {
              return of(new fromMultitab.AddBatchMultitabCabFail(err));
            })
          )
      })
    );

  @Effect()
  UpdateBatchMultitabCab$ = this.actions$
    .pipe(
      ofType(fromMultitab.actions.UPDATE),
      withLatestFrom(this.store.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromMultitab.UpdateBatchMultitabCab, GlobalMessages]) => {
        return this.multitabCabService.actualizar(action.payload)
          .pipe(
            map(res => {
              return new fromMultitab.UpdateBatchMultitabCabSuccess({ data: res, message: messages.UPDATE_SUCCESS });
            }),
            catchError((err: HttpErrorResponse) => of(new fromMultitab.UpdateBatchMultitabCabFail(err)))
          )
      })
    );

  @Effect()
  DeleteBatchMultitabCab = this.actions$
    .pipe(
      ofType(fromMultitab.actions.DELETE),
      withLatestFrom(this.store.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromMultitab.UpdateBatchMultitabCab, GlobalMessages]) => {
        return this.multitabCabService.eliminar(action.payload)
          .pipe(
            map(res => new fromMultitab.DeleteBatchMultitabCabSuccess({ message: messages.DELETE_SUCCESS })),
            catchError((err: HttpErrorResponse) => of(new fromMultitab.DeleteBatchMultitabCabFail(err)))
          )
      })
    );

}
