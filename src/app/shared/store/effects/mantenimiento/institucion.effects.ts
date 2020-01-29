import { Injectable } from '@angular/core';
import { InstitucionService } from '../../../../mantenimiento/services/institucion.service';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as fromInstitucion from '../../actions/mantenimiento/institucion.actions';
import { switchMap, map, catchError, withLatestFrom } from 'rxjs/operators';
import { of } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import { GlobalMessages } from '../../reducers/global.reducer';
import { HttpErrorResponse } from '@angular/common/http';
import { addLabelToObjsArr, sortByAttr } from '../../../utils';

@Injectable()
export class InstitucionEffects {

  constructor(
    private actions$: Actions,
    private store$: Store<AppState>,
    private institucionService: InstitucionService
  ) { }

  @Effect()
  GetAll$ = this.actions$
    .pipe(
      ofType(fromInstitucion.actions.GET_ALL),
      switchMap(() => {
        return this.institucionService.buscarTodos()
          .pipe(
            map(res => {
              sortByAttr(res,"idInstitucion")
              addLabelToObjsArr(res, 'label', false, 'idInstitucion', 'descripcionCorta');
              return new fromInstitucion.GetAllInstitucionSuccess(res);
            }),
            catchError((err) => of(new fromInstitucion.GetAllInstitucionFail(err)))
          )
      })
    );

    @Effect()
    GetInstitucionesUba$ = this.actions$
      .pipe(
        ofType(fromInstitucion.actions.GET_INSTITUCIONES_UBA),
        switchMap(() => {
          return this.institucionService.buscarInstitucionesUba()
            .pipe(
              map(res => {
                sortByAttr(res,"idInstitucion");
                addLabelToObjsArr(res, 'label', false, 'idInstitucion', 'descripcionCorta');
                return new fromInstitucion.GetInstitucionesUbaSuccess(res);
              }),
              catchError((err) => of(new fromInstitucion.GetInstitucionesUbaFail(err)))
            )
        })
      );

      @Effect()
      GetInstitucionesNoUba$ = this.actions$
        .pipe(
          ofType(fromInstitucion.actions.GET_INSTITUCIONES_NO_UBA),
          switchMap(() => {
            return this.institucionService.buscarInstitucionesNoUba()
              .pipe(
                map(res => {
                  sortByAttr(res,"idInstitucion");
                  addLabelToObjsArr(res, 'label', false, 'idInstitucion', 'descripcionCorta');
                  return new fromInstitucion.GetInstitucionesNoUbaSuccess(res);
                }),
                catchError((err) => of(new fromInstitucion.GetInstitucionesNoUbaFail(err)))
              )
          })
        );




  @Effect()
  AddInstiticion$ = this.actions$
    .pipe(
      ofType(fromInstitucion.actions.ADD),
      withLatestFrom(this.store$.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromInstitucion.AddInstitucion, GlobalMessages]) => {
        return this.institucionService.registrar(action.payload)
          .pipe(
            map(res => {
              return new fromInstitucion.AddInstitucionSuccess({ data: res, message: messages.ADD_SUCCESS });
            }),
            catchError((err: HttpErrorResponse) => of(new fromInstitucion.AddInstitucionFail(err)))
          )
      })
    );

  @Effect()
  UpdateInstitucion$ = this.actions$
    .pipe(
      ofType(fromInstitucion.actions.UPDATE),
      withLatestFrom(this.store$.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromInstitucion.UpdateInstitucion, GlobalMessages]) => {
        return this.institucionService.actualizar(action.payload)
          .pipe(
            map(res => {
              return new fromInstitucion.UpdateInstitucionSuccess({ data: res, message: messages.UPDATE_SUCCESS });
            }),
            catchError((err: HttpErrorResponse) => of(new fromInstitucion.UpdateInstitucionFail(err)))
          )
      })
    );

  @Effect()
  DeleteInstitucion$ = this.actions$
    .pipe(
      ofType(fromInstitucion.actions.DELETE),
      withLatestFrom(this.store$.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromInstitucion.DeleteInstitucion, GlobalMessages]) => {
        return this.institucionService.eliminar(action.payload)
          .pipe(
            map(res => {
              return new fromInstitucion.DeleteInstitucionSuccess({ message: messages.DELETE_SUCCESS });
            }),
            catchError((err: HttpErrorResponse) => of(new fromInstitucion.DeleteInstitucionFail(err)))
          )
      })
    );

  @Effect()
  Export$ = this.actions$
    .pipe(
      ofType(fromInstitucion.actions.DOWNLOAD),
      withLatestFrom(this.store$.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromInstitucion.DownloadInstitucion, GlobalMessages]) => {
        return this.institucionService.exportar()
          .pipe(
            map(res => new fromInstitucion.DownloadInstitucionSuccess({ message: messages.DOWNLOAD_SUCCESS })),
            catchError((err: HttpErrorResponse) => of(new fromInstitucion.DownloadInstitucionFail(err)))
          )
      })
    );

}
