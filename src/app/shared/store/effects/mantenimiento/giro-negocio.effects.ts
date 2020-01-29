import { Injectable } from '@angular/core';
import { GiroNegocioService } from '../../../../mantenimiento/services/giro-negocio.service';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as fromGiroNegocio from '../../actions/mantenimiento/giro-negocio.actions';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import { addLabelToObjsArr, sortByAttr } from '../../../utils';

@Injectable()
export class GiroNegocioEffects {

  constructor(
    private actions$: Actions,
    private store$: Store<AppState>,
    private giroNegocioService: GiroNegocioService,
  ) { }

/*@Effect()
  GetAll$ = this.actions$
    .pipe(
      ofType(fromGiroNegocio.actions.GET_ALL),
      switchMap((action: fromGiroNegocio.GetAllGiroNegocio) => {
        return this.giroNegocioService.buscarTodos()
          .pipe(
            map(res => {
              addLabelToObjsArr(res, 'label', false, 'idGiroNegocio', 'descripcion');
              return new fromGiroNegocio.GetAllGiroNegocioSuccess(res);
            }),
            catchError((err) => {
              return of(new fromGiroNegocio.GetAllGiroNegocioFail(err));
          })
      )
    })
  );*/

    @Effect()
    GetXMembresia$ = this.actions$
      .pipe(
        ofType(fromGiroNegocio.actions.GET_X_MEMBRESIA),
        switchMap((action: fromGiroNegocio.GetGiroNegocioXMembresia) =>{
          return this.giroNegocioService.buscarPorMembresias(action.payload)
          .pipe(
              map(res => {
                sortByAttr(res,'idGiroNegocio')
                addLabelToObjsArr(res, 'label', false, 'idGiroNegocio', 'descripcion');
                return new fromGiroNegocio.GetGiroNegocioXMembresiaSuccess(res);
              }),
              catchError((err) => {
                return of(new fromGiroNegocio.GetGiroNegocioXMembresiaFail(err));
              })
            )
        })
      );


}
