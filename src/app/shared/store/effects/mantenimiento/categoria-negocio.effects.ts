import { Injectable } from '@angular/core';
import { CategoriaNegocioService } from '../../../../mantenimiento/services/categoria-negocio.service';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as fromCategoriaNegocio from '../../actions/mantenimiento/categoria-negocio.actions';
import { switchMap, map, catchError, withLatestFrom } from 'rxjs/operators';
import { of } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import { GlobalMessages } from '../../reducers/global.reducer';
import { HttpErrorResponse } from '@angular/common/http';
import { addLabelToObjsArr } from '../../../utils';

@Injectable()
export class CategoriaNegocioEffects {

  constructor(
    private actions$: Actions,
    private store$: Store<AppState>,
    private categoriaNegocioService: CategoriaNegocioService
  ) { }

  @Effect()
  GetAll$ = this.actions$
    .pipe(
      ofType(fromCategoriaNegocio.actions.GET_ALL),
      switchMap(() => {

        return this.categoriaNegocioService.buscarTodos()
          .pipe(
            map(res => {
              //console.log(res);
              addLabelToObjsArr(res, 'label', false, 'idCategoriaNegocio', 'descripcion');
              return new fromCategoriaNegocio.GetAllCategoriaNegocioSuccess(res);
            }),
            catchError((err) => {
              return of(new fromCategoriaNegocio.GetAllCategoriaNegocioFail(err));
            })
          )
      })
    );

}
