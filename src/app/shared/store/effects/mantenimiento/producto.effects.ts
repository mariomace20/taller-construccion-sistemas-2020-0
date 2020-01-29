import { Injectable } from '@angular/core';
import { ProductoService } from '../../../../mantenimiento/services/producto.service';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as fromProducto from '../../actions/mantenimiento/producto.actions';
import { switchMap, map, catchError, withLatestFrom } from 'rxjs/operators';
import { of } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import { GlobalMessages } from '../../reducers/global.reducer';
import { HttpErrorResponse } from '@angular/common/http';
import {addLabelToObjsArr, sortByAttr} from '../../../utils';

@Injectable()
export class ProductoEffects {

  constructor(
    private actions$: Actions,
    private store$: Store<AppState>,
    private productoService: ProductoService
  ) { }

  @Effect()
  GetAll$ = this.actions$
    .pipe(
      ofType(fromProducto.actions.GET_ALL),
      switchMap(() => {
        return this.productoService.buscarTodos()
          .pipe(

            map(res => {
              sortByAttr(res, 'idProducto')
              addLabelToObjsArr(res, 'label', false, 'idProducto', 'descripcionProducto');

              return new fromProducto.GetAllProductoSuccess(res);
            }),
            catchError((err) => {

              return of(new fromProducto.GetAllProductoFail(err));
            })
          );
      })
    );

  @Effect()
  AddProducto$ = this.actions$
    .pipe(
      ofType(fromProducto.actions.ADD),
      withLatestFrom(this.store$.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromProducto.AddProducto, GlobalMessages]) => {
        return this.productoService.registrar(action.payload)
          .pipe(
            map(res => {
              return new fromProducto.AddProductoSuccess({ data: res, message: messages.ADD_SUCCESS });
            }),
            catchError((err: HttpErrorResponse) => {
              return of(new fromProducto.AddProductoFail(err));
            })
          );
      })
    );

  @Effect()
  UpdateProducto$ = this.actions$
    .pipe(
      ofType(fromProducto.actions.UPDATE),
      withLatestFrom(this.store$.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromProducto.UpdateProducto, GlobalMessages]) => {
        return this.productoService.actualizar(action.payload)
          .pipe(
            map(res => {
              return new fromProducto.UpdateProductoSuccess({ data: res, message: messages.UPDATE_SUCCESS });
            }),
            catchError((err: HttpErrorResponse) => {
              return of(new fromProducto.UpdateProductoFail(err));
            })
          );
      })
    );

  @Effect()
  DeleteProducto$ = this.actions$
    .pipe(
      ofType(fromProducto.actions.DELETE),
      withLatestFrom(this.store$.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromProducto.DeleteProducto, GlobalMessages]) => {
        return this.productoService.eliminar(action.payload)
          .pipe(
            map(res => {
              return new fromProducto.DeleteProductoSuccess({ message: messages.DELETE_SUCCESS });
            }),
            catchError((err: HttpErrorResponse) => {
              return of(new fromProducto.DeleteProductoFail(err));
            })
          )
      })
    );

  @Effect()
  Export$ = this.actions$
    .pipe(
      ofType(fromProducto.actions.DOWNLOAD),
      withLatestFrom(this.store$.select('globalData', 'messages')),
      switchMap(([action, messages]: [fromProducto.DownloadProducto, GlobalMessages]) => {
        return this.productoService.exportar()
          .pipe(
            map(res => new fromProducto.DownloadProductoSuccess({ message: messages.DOWNLOAD_SUCCESS })),
            catchError((err: HttpErrorResponse) => of(new fromProducto.DownloadProductoFail(err)))
          );
      })
    );

}
