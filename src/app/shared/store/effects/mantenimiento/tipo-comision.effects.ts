import { Injectable } from '@angular/core';
import { TipoComisionService } from '../../../../mantenimiento/services';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as fromTipoComision from '../../actions/mantenimiento/tipo-comision.action';
import { switchMap, map, catchError, withLatestFrom } from 'rxjs/operators';
import { of } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import { GlobalMessages } from '../../reducers/global.reducer';
import { addLabelToObjsArr } from '../../../utils';

@Injectable()
export class TipoComisionEffects {

  constructor(
    private actions$: Actions,
    private store$: Store<AppState>,
    private tipoComisionService: TipoComisionService
  ) { }

  @Effect()
  GetAll$ = this.actions$
    .pipe(
      ofType(fromTipoComision.actions.GET_ALL),
      switchMap(() => {
        return this.tipoComisionService.buscarTodos()
          .pipe(
            map(res => {
              addLabelToObjsArr(res, 'label', false, 'idTipoComision', 'descripcionTipoComision');
              return new fromTipoComision.GetAllTipoComisionSuccess(res);
            }),
            catchError((err) => {
              return of(new fromTipoComision.GetAllTipoComisionFail(err));
            })
          )
      })
    );

    @Effect()
    GetById$ = this.actions$
      .pipe(
        ofType(fromTipoComision.actions.GET_BY_ID),
          map((action: fromTipoComision.GetByIdTipoComision) => action.payload),
        switchMap(payload => {
          return this.tipoComisionService.buscarPorId(payload)
            .pipe(
              map(res => {
                addLabelToObjsArr(res, 'label', false, 'idTipoComision', 'descripcionTipoComision');
                return new fromTipoComision.GetByIdTipoTipoComisionSuccess(res);
              }),
              catchError((err) => {
                return of(new fromTipoComision.GetByIdTipoComisionFail(err));
              })
            )
        })
      );

}
