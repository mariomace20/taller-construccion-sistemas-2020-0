import { Injectable } from '@angular/core';
import { PermisoUsuarioService } from '../../../../reportes/admin/services/permiso-usuario.service';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as fromPermisoUsuario from '../../actions/reportes/permiso-usuario.actions';
import { switchMap, map, catchError, withLatestFrom } from 'rxjs/operators';
import { of, Observable, forkJoin } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import { GlobalMessages } from '../../reducers/global.reducer';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class PermisoUsuarioEffects {

  constructor(
    private actions$: Actions,
    private store$: Store<AppState>,
    private permisoUsuarioService: PermisoUsuarioService
  ) { }

  @Effect()
  GetAll$ = this.actions$
    .pipe(
      ofType(fromPermisoUsuario.actions.GET_ALL),
      switchMap(() => {
        return this.permisoUsuarioService.buscarTodos()
          .pipe(
            map(res => {
              //console.log(res);
              return new fromPermisoUsuario.GetAllPermisoUsuarioSuccess(res);
            }),
            catchError((err) => {
              //console.log(err);
              return of(new fromPermisoUsuario.GetAllPermisoUsuarioFail(err));
            })
          )
      })
    );

    @Effect()
    GetCriterio$ = this.actions$
      .pipe(
        ofType(fromPermisoUsuario.actions.GET_CRITERIO),
        switchMap((action: fromPermisoUsuario.GetCriterioPermisoUsuario) => {
          return this.permisoUsuarioService.buscarPorCriterios(action.payload)
            .pipe(
              map(res => {
                //console.log(res)
                return new fromPermisoUsuario.GetCriterioPermisoUsuarioSuccess(res);
              }),
              catchError((err) => of(new fromPermisoUsuario.GetCriterioPermisoUsuarioFail(err)))
            )
        })
      );

      @Effect()
      GetTablasPermitidas$ = this.actions$
        .pipe(
          ofType(fromPermisoUsuario.actions.GET_TABLAS_PERMITIDAS),
          switchMap((action: fromPermisoUsuario.GetTablasPermitidas) => {
            return this.permisoUsuarioService.buscarTablasPermitidasPorUsuario()
              .pipe(
                map(res => {
                  //console.log(res)
                  return new fromPermisoUsuario.GetTablasPermitidasSuccess(res);
                }),
                catchError((err) => of(new fromPermisoUsuario.GetTablasPermitidasFail(err)))
              )
          })
        );

  @Effect()
  AddPermisoUsuario$ = this.actions$
    .pipe(
      ofType(fromPermisoUsuario.actions.ADD),
      withLatestFrom(this.store$.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromPermisoUsuario.AddPermisoUsuario, GlobalMessages]) => {
        return this.permisoUsuarioService.registrar(action.payload)
          .pipe(
            map(res => {
              return new fromPermisoUsuario.AddPermisoUsuarioSuccess({ data: res, message: messages.ADD_SUCCESS });
            }),
            catchError((err: HttpErrorResponse) => {
              return of(new fromPermisoUsuario.AddPermisoUsuarioFail(err))
            })
          )
      })
    );

  @Effect()
  UpdatePermisoUsuario$ = this.actions$
    .pipe(
      ofType(fromPermisoUsuario.actions.UPDATE),
      withLatestFrom(this.store$.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromPermisoUsuario.UpdatePermisoUsuario, GlobalMessages]) => {
        return this.permisoUsuarioService.actualizar(action.payload)
          .pipe(
            map(res => {
              return new fromPermisoUsuario.UpdatePermisoUsuarioSuccess({ data: res, message: messages.UPDATE_SUCCESS });
            }),
            catchError((err: HttpErrorResponse) => {
              return of(new fromPermisoUsuario.UpdatePermisoUsuarioFail(err))
            })
          )
      })
    );

  @Effect()
  DeletePermisoUsuario$ = this.actions$
    .pipe(
      ofType(fromPermisoUsuario.actions.DELETE),
      withLatestFrom(this.store$.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromPermisoUsuario.DeletePermisoUsuario, GlobalMessages]) => {
        return this.permisoUsuarioService.eliminar(action.payload)
          .pipe(
            map(res => {
              return new fromPermisoUsuario.DeletePermisoUsuarioSuccess({ message: messages.DELETE_SUCCESS });
            }),
            catchError((err: HttpErrorResponse) => {
              return of(new fromPermisoUsuario.DeletePermisoUsuarioFail(err))
            })
          )
      })
    );

  @Effect()
  Export$ = this.actions$
    .pipe(
      ofType(fromPermisoUsuario.actions.DOWNLOAD),
      withLatestFrom(this.store$.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromPermisoUsuario.DownloadPermisoUsuario, GlobalMessages]) => {
        return this.permisoUsuarioService.exportar()
          .pipe(
            map(res => new fromPermisoUsuario.DownloadPermisoUsuarioSuccess({ message: messages.DOWNLOAD_SUCCESS })),
            catchError((err: HttpErrorResponse) => of(new fromPermisoUsuario.DownloadPermisoUsuarioFail(err)))
          )
      })
    );
    @Effect()
  UpdateAllPermisosUsuario$ = this.actions$
    .pipe(
      ofType(fromPermisoUsuario.actions.UPDATE_ALL),
      withLatestFrom(this.store$.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromPermisoUsuario.UpdateAllPermisosUsuario, GlobalMessages]) => {
        //console.log('Effect', action.payload);
        let parametros = action.payload.parametro;
        let modificaciones = action.payload.modificaciones;
        let observables: Observable<any>[] = [];
        for(let index=0;index<modificaciones.length;index++){
          parametros.listaModificacion=parametros.listaModificacion+modificaciones[index].accion;
          if((index+1)%7==0 || (index+1)==modificaciones.length){
            //console.log(parametros.listaModificacion);
            observables.push(this.permisoUsuarioService.actualizarTodos(JSON.parse(JSON.stringify(parametros))));
            parametros.listaModificacion="";
          } 
        }
        return forkJoin(...observables)
          .pipe(
            map(res => {
              //console.log(res)
              return new fromPermisoUsuario.UpdateAllPermisosUsuarioSuccess({ data: res, message: messages.UPDATE_SUCCESS });
            }),
            catchError((err: HttpErrorResponse) => {
              return of(new fromPermisoUsuario.UpdateAllPermisosUsuarioFail(err))
            })
          )
      })
    );

}
