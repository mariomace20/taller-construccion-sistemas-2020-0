import { Injectable } from '@angular/core';
import { RegionService } from '../../../../mantenimiento/services/region.service';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as fromRegion from '../../actions/mantenimiento/region.actions';
import { switchMap, map, catchError, withLatestFrom } from 'rxjs/operators';
import { of } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import { GlobalMessages } from '../../reducers/global.reducer';
import { HttpErrorResponse } from '@angular/common/http';
import { addLabelToObjsArr, sortByAttr } from '../../../utils';

@Injectable()
export class RegionEffects {

  constructor(
    private actions$: Actions,
    private store$: Store<AppState>,
    private regionService: RegionService
  ) { }

  @Effect()
  GetAll$ = this.actions$
    .pipe(
      ofType(fromRegion.actions.GET_ALL),
      switchMap(() => {

        return this.regionService.buscarTodos()
          .pipe(
            map(res => {
              sortByAttr(res,'nombre')
              addLabelToObjsArr(res, 'label', false, 'idRegion','descRegion');
              console.log(res);
              return new fromRegion.GetAllRegionSuccess(res);
            }),
            catchError((err) => {
              return of(new fromRegion.GetAllRegionFail(err));
            })
          )
      })
    );

  @Effect()
  AddRegion$ = this.actions$
    .pipe(
      ofType(fromRegion.actions.ADD),
      withLatestFrom(this.store$.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromRegion.AddRegion, GlobalMessages]) => {
        return this.regionService.registrar(action.payload)
          .pipe(
            map(res => {
              return new fromRegion.AddRegionSuccess({ data: res, message: messages.ADD_SUCCESS });
            }),
            catchError((err: HttpErrorResponse) => {
              return of(new fromRegion.AddRegionFail(err))
            })
          )
      })
    );

  @Effect()
  UpdateRegion$ = this.actions$
    .pipe(
      ofType(fromRegion.actions.UPDATE),
      withLatestFrom(this.store$.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromRegion.UpdateRegion, GlobalMessages]) => {
        return this.regionService.actualizar(action.payload)
          .pipe(
            map(res => {
              return new fromRegion.UpdateRegionSuccess({ data: res, message: messages.UPDATE_SUCCESS });
            }),
            catchError((err: HttpErrorResponse) => {
              return of(new fromRegion.UpdateRegionFail(err))
            })
          )
      })
    );

  @Effect()
  DeleteRegion$ = this.actions$
    .pipe(
      ofType(fromRegion.actions.DELETE),
      withLatestFrom(this.store$.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromRegion.DeleteRegion, GlobalMessages]) => {
        return this.regionService.eliminar(action.payload)
          .pipe(
            map(res => {
              return new fromRegion.DeleteRegionSuccess({ message: messages.DELETE_SUCCESS });
            }),
            catchError((err: HttpErrorResponse) => {
              return of(new fromRegion.DeleteRegionFail(err))
            })
          )
      })
    );

  @Effect()
  Export$ = this.actions$
    .pipe(
      ofType(fromRegion.actions.DOWNLOAD),
      withLatestFrom(this.store$.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromRegion.DownloadRegion, GlobalMessages]) => {
        return this.regionService.exportar()
          .pipe(
            map(res => new fromRegion.DownloadRegionSuccess({ message: messages.DOWNLOAD_SUCCESS })),
            catchError((err: HttpErrorResponse) => of(new fromRegion.DownloadRegionFail(err)))
          )
      })
    );

}
