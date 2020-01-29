import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { SubprogramaService } from '../../../../../procesos/services';
import * as fromSubprograma from '../../../actions/procesos/mantenimiento/subprograma.actions';
import { catchError, map, switchMap, withLatestFrom } from "rxjs/operators";
import { of } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../../app.reducers';
import { GlobalMessages } from '../../../reducers/global.reducer';
import { addLabelToObjsArr } from '../../../../utils';

@Injectable()
export class SubprogramaEffects {
  constructor(private actions$: Actions, private store$: Store<AppState>,
    private subprogramaService: SubprogramaService) { }

  @Effect()
  GetAll$ = this.actions$.pipe(ofType(fromSubprograma.actions.GET_ALL), switchMap(() => {
    return this.subprogramaService.buscarTodos().pipe(
      map(res => {
        addLabelToObjsArr(res, 'label', false, 'idSubPrograma', 'descripcionSubPrograma');
        return new fromSubprograma.GetAllSubprogramaSuccess(res);
      }),
      catchError((err) => {
        return of(new fromSubprograma.GetAllSubprogramaFail(err));
      }));
  }));

  @Effect()
  GetByPrograma$ = this.actions$.pipe(ofType(fromSubprograma.actions.GET_BY_PROGRAMA),
    switchMap((action: fromSubprograma.GetSubprogramasByPrograma) => {
      return this.subprogramaService.buscarPorPrograma(action.payload.idProceso, action.payload.idPrograma)
        .pipe(
          map(res => {
            addLabelToObjsArr(res, 'label', false, 'idSubPrograma', 'descripcionSubPrograma');
            return new fromSubprograma.GetSubprogramasByProgramaSuccess(res);
          }),
          catchError((err) => {
            return of(new fromSubprograma.GetSubprogramasByProgramaFail(err));
          }));
    }));

  @Effect()
  AddSubprograma$ = this.actions$.pipe(ofType(fromSubprograma.actions.ADD),
    withLatestFrom(this.store$.select('globalData', 'messages')),
    switchMap(
      ([action, messages]: [fromSubprograma.AddSubprograma, GlobalMessages]) => {
        return this.subprogramaService.registrar(action.payload).pipe(
          map(res => {
            return new fromSubprograma.AddSubprogramaSuccess(
              { data: res, message: messages.ADD_SUCCESS });
          }),
          catchError((err) => of(new fromSubprograma.AddSubprogramaFail(err)))
        );
      }));

  @Effect()
  UpdateSubprograma$ = this.actions$.pipe(ofType(fromSubprograma.actions.UPDATE),
    withLatestFrom(this.store$.select('globalData', 'messages')),
    switchMap(
      ([action, messages]: [fromSubprograma.UpdateSubprograma, GlobalMessages]) => {
        return this.subprogramaService.actualizar(
          action.payload).pipe(
            map(res => {
              return new fromSubprograma.UpdateSubprogramaSuccess(
                { data: res, message: messages.UPDATE_SUCCESS });
            }),
            catchError((err) => of(new fromSubprograma.UpdateSubprogramaFail(err)))
          );
      }));

  @Effect()
  DeleteSubprograma$ = this.actions$.pipe(ofType(fromSubprograma.actions.DELETE),
    withLatestFrom(this.store$.select('globalData', 'messages')),
    switchMap(
      ([action, messages]: [fromSubprograma.DeleteSubprograma, GlobalMessages]) => {
        return this.subprogramaService.eliminar(action.payload).pipe(
          map(res => {
            return new fromSubprograma.DeleteSubprogramaSuccess(
              { message: messages.DELETE_SUCCESS });
          }),
          catchError((err) => of(new fromSubprograma.DeleteSubprogramaFail(err)))
        );
      }));
}