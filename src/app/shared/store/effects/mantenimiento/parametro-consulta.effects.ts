import { Injectable } from '@angular/core';
import { ParametroConsultaService } from '../../../../mantenimiento/services/parametro-consulta.service';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as fromParametroConsulta from '../../actions/mantenimiento/parametro-consulta.actions';
import { switchMap, map, catchError, withLatestFrom } from 'rxjs/operators';
import { of } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import { GlobalMessages } from '../../reducers/global.reducer';
import { HttpErrorResponse } from '@angular/common/http';
import { addLabelToObjsArr } from '../../../utils';

@Injectable()
export class ParametroConsultaEffects {

  constructor(
    private actions$: Actions,
    private store$: Store<AppState>,
    private parametroConsultaService: ParametroConsultaService
  ) { }

  @Effect()
  GetAll$ = this.actions$
    .pipe(
      ofType(fromParametroConsulta.actions.GET_ALL),
      switchMap(() => {
        return this.parametroConsultaService.buscarTodos()
          .pipe(
            map(res => {
              return new fromParametroConsulta.GetAllParametroConsultaSuccess(res);
            }),
            catchError((err) => {
              return of(new fromParametroConsulta.GetAllParametroConsultaFail(err));
            })
          )
      })
    );

}
