import { Injectable } from '@angular/core';
import { MetodoIdThbService } from '../../../../mantenimiento/services/metodo-id-thb.service';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as fromMetodoIdThb from '../../actions/mantenimiento/metodo-id-thb.actions';
import { switchMap, map, catchError, withLatestFrom } from 'rxjs/operators';
import { of } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import { GlobalMessages } from '../../reducers/global.reducer';
import { addLabelToObjsArr, sortByAttr } from '../../../utils';
import { HttpErrorResponse } from '@angular/common/http';
@Injectable()
export class MetodoIdThbEffects {

  constructor(
    private actions$: Actions,
    private store$: Store<AppState>,
    private metodoIdThbService: MetodoIdThbService
  ) { }

  @Effect()
  GetAll$ = this.actions$
    .pipe(
      ofType(fromMetodoIdThb.actions.GET_ALL),
      switchMap(() => {
        return this.metodoIdThbService.buscarTodos()
          .pipe(
            map(res => {
                sortByAttr(res,'idMembresia')
                addLabelToObjsArr(res, 'label', false, 'idMetodoIdThb', 'descripcionMetodoIdThb');
              return new fromMetodoIdThb.GetAllMetodoIdThbSuccess(res);
            }),
            catchError((err) => {
              return of(new fromMetodoIdThb.GetAllMetodoIdThbFail(err));
            })
          )
      })
    );

    @Effect()
    GetXMembresia$ = this.actions$
      .pipe(
        ofType(fromMetodoIdThb.actions.GET_X_MEMBRESIA),
        switchMap( (action: fromMetodoIdThb.GetMetodoIdThbXMembresia) =>{
          return this.metodoIdThbService.buscarPorMembresias(action.payload)
        .pipe(
              map(res => {
                sortByAttr(res,'idMetodoIdThb')
                addLabelToObjsArr(res, 'label', false, 'idMetodoIdThb', 'descripcionMetodoIdThb');
                return new fromMetodoIdThb.GetMetodoIdThbXMembresiaSuccess(res);
              }),
              catchError((err) => {
                return of(new fromMetodoIdThb.GetMetodoIdThbXMembresiaFail(err));
            })
        )
      })
    );

  @Effect()
  AddMetodoIdThb$ = this.actions$
    .pipe(
      ofType(fromMetodoIdThb.actions.ADD),
      withLatestFrom(this.store$.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromMetodoIdThb.AddMetodoIdThb, GlobalMessages]) => {
        return this.metodoIdThbService.registrar(action.payload)
          .pipe(
            map(res => {
              return new fromMetodoIdThb.AddMetodoIdThbSuccess({ data: res, message: messages.ADD_SUCCESS });
            }),
            catchError((err: HttpErrorResponse) => {
              return of(new fromMetodoIdThb.AddMetodoIdThbFail(err))
            })
          )
      })
    );

  @Effect()
  UpdateMetodoIdThb$ = this.actions$
    .pipe(
      ofType(fromMetodoIdThb.actions.UPDATE),
      withLatestFrom(this.store$.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromMetodoIdThb.UpdateMetodoIdThb, GlobalMessages]) => {
        return this.metodoIdThbService.actualizar(action.payload)
          .pipe(
            map(res => {
              return new fromMetodoIdThb.UpdateMetodoIdThbSuccess({ data: res, message: messages.UPDATE_SUCCESS });
            }),
            catchError((err: HttpErrorResponse) => {
              return of(new fromMetodoIdThb.UpdateMetodoIdThbFail(err))
            })
          )
      })
    );

  @Effect()
  DeleteMetodoIdThb$ = this.actions$
    .pipe(
      ofType(fromMetodoIdThb.actions.DELETE),
      withLatestFrom(this.store$.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromMetodoIdThb.DeleteMetodoIdThb, GlobalMessages]) => {
        return this.metodoIdThbService.eliminar(action.payload)
          .pipe(
            map(res => {
              return new fromMetodoIdThb.DeleteMetodoIdThbSuccess({ message: messages.DELETE_SUCCESS });
            }),
            catchError((err: HttpErrorResponse) => {
              return of(new fromMetodoIdThb.DeleteMetodoIdThbFail(err))
            })
          )
      })
    );
    @Effect()
    Export$ = this.actions$
      .pipe(
        ofType(fromMetodoIdThb.actions.DOWNLOAD),
        withLatestFrom(this.store$.select('globalData', 'messages')),
        switchMap(([action, messages]: [fromMetodoIdThb.DownloadMetodoIdThb, GlobalMessages]) => {
          return this.metodoIdThbService.exportar()
            .pipe(
              map(res => new fromMetodoIdThb.DownloadMetodoIdThbSuccess({ message: messages.DOWNLOAD_SUCCESS })),
              catchError((err: HttpErrorResponse) => of(new fromMetodoIdThb.DownloadMetodoIdThbFail(err)))
            )
        })
      );

}
