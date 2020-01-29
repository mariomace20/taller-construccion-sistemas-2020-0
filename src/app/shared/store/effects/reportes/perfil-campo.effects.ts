import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as fromPerfilCampo from '../../actions/reportes/perfil-campo.actions';
import { switchMap, map, catchError, withLatestFrom } from 'rxjs/operators';
import { of, Observable, forkJoin } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import { GlobalMessages } from '../../reducers/global.reducer';
import { HttpErrorResponse } from '@angular/common/http';
import { PerfilCampoService } from '../../../../reportes/admin/services';

@Injectable()
export class PerfilCampoEffects {

  constructor(
    private actions$: Actions,
    private store$: Store<AppState>,
    private perfilCampoService: PerfilCampoService
  ) { }
  @Effect()
  AddPerfilCampo$ = this.actions$
    .pipe(
      ofType(fromPerfilCampo.actions.ADD),
      withLatestFrom(this.store$.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromPerfilCampo.AddPerfilCampo, GlobalMessages]) => {
        return this.perfilCampoService.registrar(action.payload)
          .pipe(
            map(res => {
              return new fromPerfilCampo.AddPerfilCampoSuccess({ data: res, message: messages.ADD_SUCCESS });
            }),
            catchError((err: HttpErrorResponse) => {
              return of(new fromPerfilCampo.AddPerfilCampoFail(err))
            })
          )
      })
    );
  @Effect()
  GetAll$ = this.actions$
    .pipe(
      ofType(fromPerfilCampo.actions.GET_ALL),
      switchMap(() => {
        return this.perfilCampoService.buscarTodos()
          .pipe(
            map(res => {
              //console.log(res);
              return new fromPerfilCampo.GetAllPerfilCampoSuccess(res);
            }),
            catchError((err) => {
              //console.log(err);
              return of(new fromPerfilCampo.GetAllPerfilCampoFail(err));
            })
          )
      })
    );

  @Effect()
  GetCriterio$ = this.actions$
    .pipe(
      ofType(fromPerfilCampo.actions.GET_CRITERIO),
      switchMap((action: fromPerfilCampo.GetCriterioPerfilCampo) => {
        return this.perfilCampoService.buscarPorCriterios(action.payload)
          .pipe(
            map(res => {
              //console.log(res)
              return new fromPerfilCampo.GetCriterioPerfilCampoSuccess(res);
            }),
            catchError((err) => of(new fromPerfilCampo.GetCriterioPerfilCampoFail(err)))
          )
      })
    );

  @Effect()
  UpdateAllCamposPerfil$ = this.actions$
    .pipe(
      ofType(fromPerfilCampo.actions.UPDATE),
      withLatestFrom(this.store$.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromPerfilCampo.UpdateAllCamposPerfil, GlobalMessages]) => {
        //console.log('Effect', action.payload);
        let parametros = action.payload.parametro;
        let modificaciones = action.payload.modificaciones;
        let observables: Observable<any>[] = [];
        for(let index=0;index<modificaciones.length;index++){
          parametros.listaModificacion=parametros.listaModificacion+modificaciones[index].accion;
          if((index+1)%7==0 || (index+1)==modificaciones.length){
            //console.log(parametros.listaModificacion);
            observables.push(this.perfilCampoService.actualizarTodos(JSON.parse(JSON.stringify(parametros))));
            parametros.listaModificacion="";
          } 
        }
        return forkJoin(...observables)
          .pipe(
            map(res => {
              //console.log(res)
              return new fromPerfilCampo.UpdateAllCamposPerfilSuccess({ data: res, message: messages.UPDATE_SUCCESS });
            }),
            catchError((err: HttpErrorResponse) => {
              return of(new fromPerfilCampo.UpdateAllCamposPerfilFail(err))
            })
          )
      })
    );

}
