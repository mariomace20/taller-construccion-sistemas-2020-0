import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import {AppState} from '../../app.reducers';
import * as fromProgramaBin from '../../actions/mantenimiento/programa-bin.actions';
import {catchError, map, switchMap, withLatestFrom} from 'rxjs/operators';
import {addLabelToObjsArr, sortByAttr} from '../../../utils';
import {of} from 'rxjs';
import {GlobalMessages} from '../../reducers/global.reducer';
import {HttpErrorResponse} from '@angular/common/http';
import {ProgramaBinService} from '../../../../mantenimiento/services';

@Injectable()
export class ProgramaBinEffects {

  constructor(
    private actions$: Actions,
    private store$: Store<AppState>,
    private programaBinService: ProgramaBinService
  ) { }

  @Effect()
  GetAll$ = this.actions$
    .pipe(
      ofType(fromProgramaBin.actions.GET_ALL),
      switchMap(() => {
        return this.programaBinService.buscarTodos()
          .pipe(
            map(res => {
              sortByAttr(res, 'idPrograma');
              addLabelToObjsArr(
                res,
                'label',
                false,
                'idPrograma',
                'descripcionPrograma',
              );
              return new fromProgramaBin.GetAllProgramaBinSuccess(res);
            }),

            catchError((err) => {
              return of(new fromProgramaBin.GetAllProgramaBinFail(err));
            })
          );
      })
    );

  @Effect()
  GetByMembresiaProducto$ = this.actions$
    .pipe(
      ofType(fromProgramaBin.actions.GET_BY_MEMBRESIA_PRODUCTO),
      switchMap((action: fromProgramaBin.GetProgramasBinPorMembresiaYProducto) => {
        return this.programaBinService.buscarPorMembresiaYProducto(action.payload.idMembresia, action.payload.idProducto)
          .pipe(
            map(res => {
              sortByAttr(res, "idMembresia");
              sortByAttr(res,"idProducto");
              sortByAttr(res,"idPrograma");
              addLabelToObjsArr(res,'label',false,'idPrograma','descripcionPrograma');
              return new fromProgramaBin.GetProgramasBinPorMembresiaYProductoSuccess(res);
            }),
            catchError((err) => {
              return of(new fromProgramaBin.GetProgramasBinPorMembresiaYProductoFail(err));
            })
          )
      })
    );

  @Effect()
  AddProgramaBin$ = this.actions$
    .pipe(
      ofType(fromProgramaBin.actions.ADD),
      withLatestFrom(this.store$.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromProgramaBin.AddProgramaBin, GlobalMessages]) => {
        return this.programaBinService.registrar(action.payload)
          .pipe(
            map(res => {
              return new fromProgramaBin.AddProgramaBinSuccess({ data: res, message: messages.ADD_SUCCESS });
            }),
            catchError((err: HttpErrorResponse) => {
              return of(new fromProgramaBin.AddProgramaBinFail(err));
            })
          );
      })
    );

  @Effect()
  UpdateTasaInteresPasiva$ = this.actions$
    .pipe(
      ofType(fromProgramaBin.actions.UPDATE),
      withLatestFrom(this.store$.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromProgramaBin.UpdateProgramaBin, GlobalMessages]) => {
        return this.programaBinService.actualizar(action.payload)
          .pipe(
            map(res => {
              return new fromProgramaBin.UpdateProgramaBinSuccess({ data: res, message: messages.UPDATE_SUCCESS });
            }),
            catchError((err: HttpErrorResponse) => {
              return of(new fromProgramaBin.UpdateProgramaBinFail(err));
            })
          );
      })
    );

  @Effect()
  DeleteTasaInteresPasiva$ = this.actions$
    .pipe(
      ofType(fromProgramaBin.actions.DELETE),
      withLatestFrom(this.store$.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromProgramaBin.DeleteProgramaBin, GlobalMessages]) => {
        return this.programaBinService.eliminar(action.payload)
          .pipe(
            map(res => {
              return new fromProgramaBin.DeleteProgramaBinSuccess({ message: messages.DELETE_SUCCESS });
            }),
            catchError((err: HttpErrorResponse) => {
              return of(new fromProgramaBin.DeleteProgramaBinFail(err));
            })
          );
      })
    );

  // @Effect()
  // Export$ = this.actions$
  //   .pipe(
  //     ofType(fromProgramaBin.actions.DOWNLOAD),
  //     withLatestFrom(this.store$.select('globalData', 'messages')),
  //     switchMap(([action, messages]: [fromProgramaBin.DownloadProgramaBin, GlobalMessages]) => {
  //       return this.programaBinService.exportar()
  //         .pipe(
  //           map(res => new fromTasaInteresPasiva.DownloadTasaInteresPasivaSuccess({ message: messages.DOWNLOAD_SUCCESS })),
  //           catchError((err: HttpErrorResponse) => of(new fromTasaInteresPasiva.DownloadTasaInteresPasivaFail(err)))
  //         );
  //     })
  //   );
}
