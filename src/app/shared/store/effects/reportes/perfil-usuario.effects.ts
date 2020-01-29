import { Injectable } from '@angular/core';
import { PerfilUsuarioService } from '../../../../reportes/admin/services/perfil-usuario.service';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as fromPerfilUsuario from '../../actions/reportes/perfil-usuario.actions';
import { switchMap, map, catchError, withLatestFrom } from 'rxjs/operators';
import { of, Observable, forkJoin } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import { GlobalMessages } from '../../reducers/global.reducer';
import { HttpErrorResponse } from '@angular/common/http';
import {addLabelToObjsArr} from "../../../utils";

@Injectable()
export class PerfilUsuarioEffects {

  constructor(
    private actions$: Actions,
    private store$: Store<AppState>,
    private perfilUsuarioService: PerfilUsuarioService
  ) { }

  @Effect()
  GetAll$ = this.actions$
    .pipe(
      ofType(fromPerfilUsuario.actions.GET_ALL),
      switchMap(() => {
        return this.perfilUsuarioService.buscarTodos()
          .pipe(
            map(res => {
              console.log(res);
              return new fromPerfilUsuario.GetAllPerfilUsuarioSuccess(res);
            }),
            catchError((err) => {
              console.log(err);
              return of(new fromPerfilUsuario.GetAllPerfilUsuarioFail(err));
            })
          )
      })
    );


    @Effect()
    GetCriterio$ = this.actions$
      .pipe(
        ofType(fromPerfilUsuario.actions.GET_CRITERIO),
        switchMap((action: fromPerfilUsuario.GetCriterioPerfilUsuario) => {
          return this.perfilUsuarioService.buscarPorCriterios(action.payload)
            .pipe(
              map(res => {
                console.log(res)
                return new fromPerfilUsuario.GetCriterioPerfilUsuarioSuccess(res);
              }),
              catchError((err) => of(new fromPerfilUsuario.GetCriterioPerfilUsuarioFail(err)))
            )
        })
      );
    
  @Effect()
  AddPerfilUsuario$ = this.actions$
    .pipe(
      ofType(fromPerfilUsuario.actions.ADD),
      withLatestFrom(this.store$.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromPerfilUsuario.AddPerfilUsuario, GlobalMessages]) => {
        return this.perfilUsuarioService.registrar(action.payload)
          .pipe(
            map(res => {
              return new fromPerfilUsuario.AddPerfilUsuarioSuccess({ data: res, message: messages.ADD_SUCCESS });
            }),
            catchError((err: HttpErrorResponse) => {
              return of(new fromPerfilUsuario.AddPerfilUsuarioFail(err))
            })
          )
      })
    );

  @Effect()
  UpdatePerfilUsuario$ = this.actions$
    .pipe(
      ofType(fromPerfilUsuario.actions.UPDATE),
      withLatestFrom(this.store$.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromPerfilUsuario.UpdatePerfilUsuario, GlobalMessages]) => {
        return this.perfilUsuarioService.actualizar(action.payload)
          .pipe(
            map(res => {
              return new fromPerfilUsuario.UpdatePerfilUsuarioSuccess({ data: res, message: messages.UPDATE_SUCCESS });
            }),
            catchError((err: HttpErrorResponse) => {
              return of(new fromPerfilUsuario.UpdatePerfilUsuarioFail(err))
            })
          )
      })
    );

  @Effect()
  DeletePerfilUsuario$ = this.actions$
    .pipe(
      ofType(fromPerfilUsuario.actions.DELETE),
      withLatestFrom(this.store$.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromPerfilUsuario.DeletePerfilUsuario, GlobalMessages]) => {
        return this.perfilUsuarioService.eliminar(action.payload)
          .pipe(
            map(res => {
              return new fromPerfilUsuario.DeletePerfilUsuarioSuccess({ message: messages.DELETE_SUCCESS });
            }),
            catchError((err: HttpErrorResponse) => {
              return of(new fromPerfilUsuario.DeletePerfilUsuarioFail(err))
            })
          )
      })
    );

    @Effect()
    UpdateAllPerfilUsuario$ = this.actions$
      .pipe(
        ofType(fromPerfilUsuario.actions.UPDATE_ALL),
        withLatestFrom(this.store$.select('globalData', 'messages')),
        switchMap(([action, messages]: [fromPerfilUsuario.UpdateAllPerfilUsuario, GlobalMessages]) => {
          let parametros =action.payload.parametro;
          let modificaciones = action.payload.modificaciones;
          let observables: Observable<any>[] = [];
          for(let index=0;index<modificaciones.length;index++){
            parametros.listaModificacion=parametros.listaModificacion+modificaciones[index].accion;
            if((index+1)%7==0 || (index+1)==modificaciones.length){
              observables.push(this.perfilUsuarioService.actualizarTodos(JSON.parse(JSON.stringify(parametros))));
              parametros.listaModificacion="";
            } 
          }
          return forkJoin(...observables)
            .pipe(
              map(res => {
                console.log(res)
                return new fromPerfilUsuario.UpdateAllPerfilUsuarioSuccess({ data: res, message: messages.UPDATE_SUCCESS });
              }),
              catchError((err: HttpErrorResponse) => {
                return of(new fromPerfilUsuario.UpdateAllPerfilUsuarioFail(err))
              })
            )
        })
      );


}
