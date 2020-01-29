import { Injectable } from '@angular/core';
import { BinService } from '../../../../mantenimiento/services';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as fromBin from '../../actions/mantenimiento/bin.actions';
import { switchMap, map, catchError, withLatestFrom } from 'rxjs/operators';
import { of } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import { GlobalMessages } from '../../reducers/global.reducer';
import { HttpErrorResponse } from '@angular/common/http';
import { addLabelToObjsArr, sortByAttr } from '../../../utils';

@Injectable()
export class BinEffects {

  constructor(
    private actions$: Actions,
    private store$: Store<AppState>,
    private binService: BinService
  ) { }

  @Effect()
  GetAll$ = this.actions$
    .pipe(
      ofType(fromBin.actions.GET_ALL),
      switchMap(() => {
        return this.binService.buscarTodos()
          .pipe(
            map(res => {
              sortByAttr(res,"idBIN")
              sortByAttr(res,"idInstitucion")
              addLabelToObjsArr(res,'label',false,'idBIN','descripcionBIN')
              return new fromBin.GetAllBinSuccess(res);
            }),
            catchError((err) => {
              return of(new fromBin.GetAllBinFail(err));
            })
          )
      })
    );

    @Effect()
    GetXInstitucion$ = this.actions$
      .pipe(
        ofType(fromBin.actions.GET_X_INSTITUCION),
        switchMap((action: fromBin.GetBinXInstitucion) => {
          return this.binService.buscarPorInstituciones(action.payload)
            .pipe(
              map(res => {
                sortByAttr(res,"idBIN")
                sortByAttr(res,"idInstitucion")
                addLabelToObjsArr(res,'label',false,'idBIN','descripcionBIN');
                return new fromBin.GetBinXInstitucionSuccess(res);
              }),
              catchError((err) => {

                return of(new fromBin.GetBinXInstitucionFail(err));
              })
            )
        })
      );


  @Effect()
  AddBin$ = this.actions$
    .pipe(
      ofType(fromBin.actions.ADD),
      withLatestFrom(this.store$.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromBin.AddBin, GlobalMessages]) => {
        return this.binService.registrar(action.payload)
          .pipe(
            map(res => {
              return new fromBin.AddBinSuccess({ data: res, message: messages.ADD_SUCCESS });
            }),
            catchError((err: HttpErrorResponse) => {
              return of(new fromBin.AddBinFail(err))
            })
          )
      })
    );

  @Effect()
  UpdateBin$ = this.actions$
    .pipe(
      ofType(fromBin.actions.UPDATE),
      withLatestFrom(this.store$.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromBin.UpdateBin, GlobalMessages]) => {
        return this.binService.actualizar(action.payload)
          .pipe(
            map(res => {
              return new fromBin.UpdateBinSuccess({ data: res, message: messages.UPDATE_SUCCESS });
            }),
            catchError((err: HttpErrorResponse) => {
              return of(new fromBin.UpdateBinFail(err))
            })
          )
      })
    );

  @Effect()
  DeleteBin$ = this.actions$
    .pipe(
      ofType(fromBin.actions.DELETE),
      withLatestFrom(this.store$.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromBin.DeleteBin, GlobalMessages]) => {
        return this.binService.eliminar(action.payload)
          .pipe(
            map(res => {
              return new fromBin.DeleteBinSuccess({ message: messages.DELETE_SUCCESS });
            }),
            catchError((err: HttpErrorResponse) => {
              return of(new fromBin.DeleteBinFail(err))
            })
          )
      })
    );

    @Effect()
  Export$ = this.actions$
    .pipe(
      ofType(fromBin.actions.DOWNLOAD),
      withLatestFrom(this.store$.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromBin.DownloadBin, GlobalMessages]) => {
        return this.binService.exportar()
          .pipe(
            map(res => new fromBin.DownloadBinSuccess({ message: messages.DOWNLOAD_SUCCESS })),
            catchError((err: HttpErrorResponse) => of(new fromBin.DownloadBinFail(err)))
          )
      })
    );

}
