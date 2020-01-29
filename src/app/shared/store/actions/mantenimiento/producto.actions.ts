import { Action } from '@ngrx/store';
import { Producto } from '../../../../mantenimiento/models';
import { getCommonCrudActions } from '../common-actions';

export const actions = {
  ...getCommonCrudActions('Producto')
};

export class ResetProducto implements Action {
  readonly  type = actions.RESET;
  constructor(public payload: any = null) {}
}
export class AddProducto implements Action {
  readonly type = actions.ADD;
  constructor(public payload: any) {}
}
export class AddProductoSuccess implements Action {
  readonly type = actions.ADD_SUCCESS;
  constructor(public payload: any) {}
}
export class AddProductoFail implements Action {
  readonly type = actions.ADD_FAIL;
  constructor(public payload: any) {}
}

export class UpdateProducto implements Action {
  readonly type = actions.UPDATE;
  constructor(public payload: any) {}
}
export class UpdateProductoSuccess implements Action {
  readonly type = actions.UPDATE_SUCCESS;
  constructor(public payload: any) {}
}
export class UpdateProductoFail implements Action {
  readonly type = actions.UPDATE_FAIL;
  constructor(public payload: any) {}
}

export class DeleteProducto implements Action {
  readonly type = actions.DELETE;
  constructor(public payload: any) {}
}
export class DeleteProductoSuccess implements Action {
  readonly type = actions.DELETE_SUCCESS;
  constructor(public payload: any) {}
}
export class DeleteProductoFail implements Action {
  readonly type = actions.DELETE_FAIL;
  constructor(public payload: any) {}
}

export class GetAllProducto implements Action {
  readonly type = actions.GET_ALL;
  constructor(public payload = null) {}
}
export class GetAllProductoSuccess implements Action {
  readonly type = actions.GET_ALL_SUCCESS;
  constructor(public payload: Producto[]) {}
}
export class GetAllProductoFail implements Action {
  readonly type = actions.GET_ALL_FAIL;
  constructor(public payload: any) {}
}

export class DownloadProducto implements Action {
  readonly type = actions.DOWNLOAD;
  constructor(public payload: any = null) { }
}
export class DownloadProductoSuccess implements Action {
  readonly type = actions.DOWNLOAD_SUCCESS;
  constructor(public payload: any) { }
}
export class DownloadProductoFail implements Action {
  readonly type = actions.DOWNLOAD_FAIL;
  constructor(public payload: any) { }
}

export type ProductoActions
  = AddProducto
  | AddProductoSuccess
  | AddProductoFail
  | UpdateProducto
  | UpdateProductoSuccess
  | UpdateProductoFail
  | DeleteProducto
  | DeleteProductoSuccess
  | DeleteProductoFail
  | GetAllProducto
  | GetAllProductoSuccess
  | GetAllProductoFail
  | DownloadProducto
  | DownloadProductoSuccess
  | DownloadProductoFail
  | ResetProducto;
