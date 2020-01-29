import { Injectable } from '@angular/core';
import { ServicioService } from '../../../../mantenimiento/services/servicio.service';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as fromServicio from '../../actions/mantenimiento/servicio.actions';
import { switchMap, map, catchError, withLatestFrom } from 'rxjs/operators';
import { of } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import { GlobalMessages } from '../../reducers/global.reducer';
import { HttpErrorResponse } from '@angular/common/http';
import { addLabelToObjsArr, sortByAttr } from '../../../utils';

@Injectable()
export class ServicioEffects {

  constructor(
    private actions$: Actions,
    private store$: Store<AppState>,
    private servicioService: ServicioService
  ) { }

  @Effect()
  GetAll$ = this.actions$
    .pipe(
      ofType(fromServicio.actions.GET_ALL),
      switchMap(() => {
        return this.servicioService.buscarTodos()
          .pipe(
            map(res => {
              sortByAttr(res,"idMembresia")
              addLabelToObjsArr(res, 'label', false, 'idServicio', 'descripcionServicio');
              return new fromServicio.GetAllServicioSuccess(res);
            }),
            catchError((err) => {
              return of(new fromServicio.GetAllServicioFail(err));
            })
          )
      })
    );

  @Effect()
  GetByMembresia = this.actions$
    .pipe(
      ofType(fromServicio.actions.GET_BY_MEMBRESIA),
      map((action: fromServicio.GetByMembresia) => action.payload),
      switchMap(payload => {
        return this.servicioService.buscarPorMembresia(payload)
          .pipe(
            map(res => {
              sortByAttr(res,"idServicio")
              addLabelToObjsArr(res, 'label', false, 'idServicio', 'descripcionServicio');
              return new fromServicio.GetByMembresiaSuccess(res);
            }),
            catchError((err: HttpErrorResponse) => {
              return of(new fromServicio.GetByMembresiaFail(err));
            })
          )
      })
    )

  @Effect()
  AddServicio$ = this.actions$
    .pipe(
      ofType(fromServicio.actions.ADD),
      withLatestFrom(this.store$.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromServicio.AddServicio, GlobalMessages]) => {
        return this.servicioService.registrar(action.payload)
          .pipe(
            map(res => {
              return new fromServicio.AddServicioSuccess({ data: res, message: messages.ADD_SUCCESS });
            }),
            catchError((err: HttpErrorResponse) => {
              return of(new fromServicio.AddServicioFail(err))
            })
          )
      })
    );

  @Effect()
  UpdateServicio$ = this.actions$
    .pipe(
      ofType(fromServicio.actions.UPDATE),
      withLatestFrom(this.store$.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromServicio.UpdateServicio, GlobalMessages]) => {
        return this.servicioService.actualizar(action.payload)
          .pipe(
            map(res => {
              return new fromServicio.UpdateServicioSuccess({ data: res, message: messages.UPDATE_SUCCESS });
            }),
            catchError((err: HttpErrorResponse) => {
              return of(new fromServicio.UpdateServicioFail(err))
            })
          )
      })
    );

  @Effect()
  DeleteServicio$ = this.actions$
    .pipe(
      ofType(fromServicio.actions.DELETE),
      withLatestFrom(this.store$.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromServicio.DeleteServicio, GlobalMessages]) => {
        return this.servicioService.eliminar(action.payload)
          .pipe(
            map(res => {
              return new fromServicio.DeleteServicioSuccess({ message: messages.DELETE_SUCCESS });
            }),
            catchError((err: HttpErrorResponse) => {
              return of(new fromServicio.DeleteServicioFail(err))
            })
          )
      })
    );

  @Effect()
  Export$ = this.actions$
    .pipe(
      ofType(fromServicio.actions.DOWNLOAD),
      withLatestFrom(this.store$.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromServicio.DownloadServicio, GlobalMessages]) => {
        return this.servicioService.exportar()
          .pipe(
            map(res => new fromServicio.DownloadServicioSuccess({ message: messages.DOWNLOAD_SUCCESS })),
            catchError((err: HttpErrorResponse) => of(new fromServicio.DownloadServicioFail(err)))
          )
      })
    );

}
