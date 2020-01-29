import { Injectable } from '@angular/core';
import { UsuarioService } from '../../../../reportes/admin/services/usuario.service';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as fromUsuario from '../../actions/reportes/usuario.actions';
import { switchMap, map, catchError, withLatestFrom } from 'rxjs/operators';
import { of } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import { GlobalMessages } from '../../reducers/global.reducer';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class UsuarioEffects {

  constructor(
    private actions$: Actions,
    private store$: Store<AppState>,
    private UsuarioService: UsuarioService
  ) { }
  @Effect()
  GetAll$ = this.actions$
    .pipe(
      ofType(fromUsuario.actions.GET_ALL),
      switchMap(() => {
        return this.UsuarioService.buscarTodos()
          .pipe(
            map(res => {
              return new fromUsuario.GetAllUsuariosSuccess(res);
            }),
            catchError((err) => {
              //console.log(err);
              return of(new fromUsuario.GetAllUsuariosFail(err));
            })
          )
      })
    );

}
