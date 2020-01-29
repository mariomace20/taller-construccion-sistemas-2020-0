import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { RolTransaccionService } from '../../../../mantenimiento/services';
import * as fromRolTransaccion from '../../actions/mantenimiento/rol-transaccion.actions';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import {addLabelToObjsArr} from "../../../utils";

@Injectable()
export class RolTransaccionEffects {

  constructor(
    private actions$: Actions,
    private store$: Store<AppState>,
    private rolTransaccionService: RolTransaccionService
  ){}

  @Effect()
  GetAll$ = this.actions$
    .pipe(
      ofType(fromRolTransaccion.actions.GET_ALL),
      switchMap(() => {
        return this.rolTransaccionService.buscarTodos()
          .pipe(
            map( res=>{  addLabelToObjsArr(res, 'label', false, 'idRol', 'descripcionRol');
            return new fromRolTransaccion.GetAllRolTransaccionSuccess(res);
        }),
            catchError(err => of(new fromRolTransaccion.GetAllRolTransaccionFail(err)))
          )
      })
    )
}
