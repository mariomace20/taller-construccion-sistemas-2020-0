import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { AppState } from '../../../app.reducers';
import { BatchMultitabDetService } from '../../../../../procesos/services';
import * as fromMultitab from '../../../actions/procesos/mantenimiento/batch-multitab-det.actions';
import { switchMap, map, catchError, withLatestFrom } from 'rxjs/operators';
import { of } from 'rxjs';
import { GlobalMessages } from '../../../reducers/global.reducer';
import { HttpErrorResponse } from '@angular/common/http';
import { addLabelToObjsArr, sortByAttr } from '../../../../utils';

@Injectable()
export class BatchMultitabDetEffects {
  constructor(private actions$: Actions, private store: Store<AppState>,
    private multitabDetService: BatchMultitabDetService) { }

  @Effect()
  GetAll$ = this.actions$
    .pipe(
      ofType(fromMultitab.actions.GET_ALL),
      switchMap(() => {
        return this.multitabDetService.buscarTodos()
          .pipe(
            map(res => {
              return new fromMultitab.GetAllBatchMultitabDetSuccess(res);
            }),
            catchError(err => of(new fromMultitab.GetAllBatchMultitabDetFail(err)))
          )
      })
    );

  @Effect()
  GetByBatchMultitabCab$ = this.actions$
    .pipe(
      ofType(fromMultitab.actions.GET_BY_BATCH_MULTITABCAB),
      switchMap((action: fromMultitab.GetByBatchMultitabCab) => {
        return this.multitabDetService.buscarPorMultitabCab(action.payload)
          .pipe(
            map(res => {
              sortByAttr(res, 'idMultiTabDet');
              addLabelToObjsArr(res, 'label', false, 'idMultiTabDet', 'descripcionItem');
              return new fromMultitab.GetByBatchMultitabCabSuccess(res)
            }),
            catchError(err => of(new fromMultitab.GetByBatchMultitabCabFail(err)))
          )
      })
    );

  @Effect()
  GetByBatchMultitabCabB$ = this.actions$
    .pipe(
      ofType(fromMultitab.actions.GET_BY_BATCH_MULTITABCAB_B),
      switchMap((action: fromMultitab.GetByBatchMultitabCabB) => {
        return this.multitabDetService.buscarPorMultitabCabB(action.payload)
          .pipe(
            map(res => {
              sortByAttr(res, 'idMultiTabDet');
              addLabelToObjsArr(res, 'label', false, 'idMultiTabDet', 'descripcionItem');
              return new fromMultitab.GetByBatchMultitabCabBSuccess(res)
            }),
            catchError(err => of(new fromMultitab.GetByBatchMultitabCabBFail(err)))
          )
      })
    );

  @Effect()
  AddBatchMultitabDet$ = this.actions$
    .pipe(
      ofType(fromMultitab.actions.ADD),
      withLatestFrom(this.store.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromMultitab.AddBatchMultitabDet, GlobalMessages]) => {
        return this.multitabDetService.registrar(action.payload)
          .pipe(
            map(res => {
              return new fromMultitab.AddBatchMultitabDetSuccess({ data: res, message: messages.ADD_SUCCESS });
            }),
            catchError((err: HttpErrorResponse) => {
              return of(new fromMultitab.AddBatchMultitabDetFail(err));
            })
          )
      })
    );

  @Effect()
  UpdateBatchMultitabDet$ = this.actions$
    .pipe(
      ofType(fromMultitab.actions.UPDATE),
      withLatestFrom(this.store.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromMultitab.UpdateBatchMultitabDet, GlobalMessages]) => {
        return this.multitabDetService.actualizar(action.payload)
          .pipe(
            map(res => {
              return new fromMultitab.UpdateBatchMultitabDetSuccess({ data: res, message: messages.UPDATE_SUCCESS });
            }),
            catchError((err: HttpErrorResponse) => of(new fromMultitab.UpdateBatchMultitabDetFail(err)))
          )
      })
    );

  @Effect()
  DeleteBatchMultitabDet = this.actions$
    .pipe(
      ofType(fromMultitab.actions.DELETE),
      withLatestFrom(this.store.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromMultitab.UpdateBatchMultitabDet, GlobalMessages]) => {
        return this.multitabDetService.eliminar(action.payload)
          .pipe(
            map(res => new fromMultitab.DeleteBatchMultitabDetSuccess({ message: messages.DELETE_SUCCESS })),
            catchError((err: HttpErrorResponse) => of(new fromMultitab.DeleteBatchMultitabDetFail(err)))
          )
      })
    );
}
