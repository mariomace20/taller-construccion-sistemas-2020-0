import { Action } from '@ngrx/store';

export const actions = {
  ADD: 'ADD',
  ADD_SUCCESS: 'ADD_SUCCESS',
  ADD_FAIL: 'ADD_FAIL',
  UPDATE: 'UPDATE',
  UPDATE_SUCCESS: 'UPDATE_SUCCESS',
  UPDATE_FAIL: 'UPDATE_FAIL',
  DELETE: 'DELETE',
  DELETE_SUCCESS: 'DELETE_SUCCESS',
  DELETE_FAIL: 'DELETE_FAIL',
  GET_ALL: 'GET_ALL',
  GET_BY_ID: 'GET_BY_ID'
};

export const entityActions = {
  ADD: '[Entidad] Agregar',
  ADD_SUCCESS: '[Entidad] Agregación correcta',
  ADD_FAIL: '[Entidad] Error agregación',
  UPDATE: '[Entidad] Actualizar',
  UPDATE_SUCCESS: '[Entidad] Actualización correcta',
  UPDATE_FAIL: '[Entidad] Error actualización',
  DELETE: '[Entidad] Eliminar',
  DELETE_SUCCESS: '[Entidad] Eliminación correcta',
  DELETE_FAIL: '[Entidad] Error eliminación',
  GET_ALL: '[Entidad] Obtener todos',
  GET_BY_ID: '[Entidad] Obtener por Id'
};

export function getActionName(entityName: string, action: string) {
  return entityActions[action].replace(/Entidad/gi, entityName);
}

/*
export class PayloadAction implements Action {
  type: '';
  constructor(public payload?: any) {
  }
}
*/

export class EntityAction<T> implements Action {
  type = ''
  constructor() {
  }
}

export class AddEntityAction<T> extends EntityAction<T> implements Action {
  type = entityActions.ADD;
  constructor(public payload: any) {
    super();
  };
}
export class AddSuccessEntityAction<T> extends EntityAction<T> implements Action {
  type = entityActions.ADD_SUCCESS;
  constructor(public payload: any) {
    super();
  };
}
export class AddFailEntityAction<T> extends EntityAction<T> implements Action {
  type = entityActions.ADD_FAIL;
  constructor(public payload: any) {
    super();
  };
}

export class UpdateEntityAction<T> extends EntityAction<T> implements Action {
  type = entityActions.UPDATE;
  constructor(public payload: any) {
    super();
  };
}
export class UpdateSuccessEntityAction<T> extends EntityAction<T> implements Action {
  type = entityActions.UPDATE_SUCCESS;
  constructor(public payload: any) {
    super();
  };
}
export class UpdateFailEntityAction<T> extends EntityAction<T> implements Action {
  type = entityActions.UPDATE_FAIL;
  constructor(public payload: any) {
    super();
  };
}

export class DeleteEntityAction<T> extends EntityAction<T> implements Action {
  type = entityActions.DELETE;
  constructor(public payload: any) {
    super();
  };
}
export class DeleteSuccessEntityAction<T> extends EntityAction<T> implements Action {
  type = entityActions.DELETE_SUCCESS;
  constructor(public payload: any) {
    super();
  };
}
export class DeleteFailEntityAction<T> extends EntityAction<T> implements Action {
  type = entityActions.DELETE_FAIL;
  constructor(public payload: any) {
    super();
  };
}

export class GetAllEntityAction<T> extends EntityAction<T> implements Action {
  type = entityActions.GET_ALL;
  constructor(public payload: any) {
    super();
  };
}
