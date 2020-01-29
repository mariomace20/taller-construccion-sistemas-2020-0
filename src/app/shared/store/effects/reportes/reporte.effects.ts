import { Injectable } from '@angular/core';
import { ReporteService } from '../../../../reportes/user/services/reporte.service';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as fromReporte from '../../actions/reportes/reporte-estado.actions';
import { switchMap, map, catchError, withLatestFrom } from 'rxjs/operators';
import { of } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import { GlobalMessages } from '../../reducers/global.reducer';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class ReporteEffects {

  constructor(
    private actions$: Actions,
    private store$: Store<AppState>,
    private reporteService: ReporteService
  ) { }

  @Effect()
  GetAll$ = this.actions$
    .pipe(
      ofType(fromReporte.actions.GET_ALL),
      switchMap(() => {
        return this.reporteService.buscarTodos()
          .pipe(
            map(res => {
              //console.log(res);
              return new fromReporte.GetAllReporteSuccess(res);
            }),
            catchError((err) => {
              //console.log(err);
              return of(new fromReporte.GetAllReporteFail(err));
            })
          )
      })
    );
  
  @Effect()
    GetCriterio$ = this.actions$
      .pipe(
        ofType(fromReporte.actions.GET_CRITERIO),
        switchMap((action: fromReporte.GetCriterioReporte) => {
          return this.reporteService.buscarPorCriterios(action.payload)
            .pipe(
              map(res => {
                //console.log(res)
                return new fromReporte.GetCriterioReporteSuccess(res);
              }),
              catchError((err) => of(new fromReporte.GetCriterioReporteFail(err)))
            )
        })
      );

  @Effect()
  GetReporte$ = this.actions$
    .pipe(
      ofType(fromReporte.actions.GET_REPORTE),
      switchMap((action:fromReporte.GetReporte) => {
        return this.reporteService.obtenerReporte(action.payload)
          .pipe(
            map(res => {
              //console.log(res);
              return new fromReporte.GetReporteSuccess(res);
            }),
            catchError((err) => {
              //console.log(err);
              return of(new fromReporte.GetReporteFail(err));
            })
          )
      })
    );


  @Effect()
  AddReporte$ = this.actions$
    .pipe(
      ofType(fromReporte.actions.ADD),
      withLatestFrom(this.store$.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromReporte.AddReporte, GlobalMessages]) => {
        return this.reporteService.registrar(action.payload)
          .pipe(
            map(res => {
              return new fromReporte.AddReporteSuccess({ data: res, message: messages.ADD_SUCCESS });
            }),
            catchError((err: HttpErrorResponse) => {
              return of(new fromReporte.AddReporteFail(err))
            })
          )
      })
    );

    @Effect()
    VisualizarReporte$ = this.actions$
      .pipe(
        ofType(fromReporte.actions.VISUALIZAR_REPORTE),
        switchMap((action:fromReporte.VisualizarReporte) => {
          return this.reporteService.consultar(action.payload.reporte, action.payload.page)
            .pipe(
              map(res => {
                //console.log(res);
                return new fromReporte.VisualizarReporteSuccess(res);
              }),
              catchError((err) => {
                //console.log(err);
                return of(new fromReporte.VisualizarReporteFail(err));
              })
            )
        })
      );

  @Effect()
  UpdateReporte$ = this.actions$
    .pipe(
      ofType(fromReporte.actions.UPDATE),
      withLatestFrom(this.store$.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromReporte.UpdateReporte, GlobalMessages]) => {
        return this.reporteService.actualizar(action.payload)
          .pipe(
            map(res => {
              return new fromReporte.UpdateReporteSuccess({ data: res, message: messages.UPDATE_SUCCESS });
            }),
            catchError((err: HttpErrorResponse) => {
              return of(new fromReporte.UpdateReporteFail(err))
            })
          )
      })
    );

  @Effect()
  DeleteReporte$ = this.actions$
    .pipe(
      ofType(fromReporte.actions.DELETE),
      withLatestFrom(this.store$.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromReporte.DeleteReporte, GlobalMessages]) => {
        return this.reporteService.eliminar(action.payload)
          .pipe(
            map(res => {
              return new fromReporte.DeleteReporteSuccess({ message: messages.DELETE_SUCCESS });
            }),
            catchError((err: HttpErrorResponse) => {
              return of(new fromReporte.DeleteReporteFail(err))
            })
          )
      })
    );

  @Effect()
  Export$ = this.actions$
    .pipe(
      ofType(fromReporte.actions.DOWNLOAD),
      withLatestFrom(this.store$.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromReporte.DownloadReporte, GlobalMessages]) => {
        return this.reporteService.exportar(action.payload)
          .pipe(
            map(res => new fromReporte.DownloadReporteSuccess({ message: messages.DOWNLOAD_SUCCESS })),
            catchError((err: HttpErrorResponse) => of(new fromReporte.DownloadReporteFail(err)))
          )
      })
    );

}
