import { Injectable } from '@angular/core';
import { TipoIrregularService } from '../../../../mantenimiento/services/tipo-irregular.service';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as fromTipoIrregular from '../../actions/mantenimiento/tipo-irregular.actions';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { addLabelToObjsArr, sortByAttr } from '../../../utils';

@Injectable()
export class TipoIrregularEffects {

  constructor(
    private actions$: Actions,
    private origenArchivoService: TipoIrregularService
  ) { }

  @Effect()
  GetAll$ = this.actions$
    .pipe(
      ofType(fromTipoIrregular.actions.GET_ALL),
      switchMap(() => {
        return this.origenArchivoService.buscarTodos()
          .pipe(
            map(res => {
              sortByAttr(res,"idTipoIrregular")
              addLabelToObjsArr(res,'label',false,'idTipoIrregular','descripcion')
              return new fromTipoIrregular.GetAllTipoIrregularSuccess(res);
            }),
            catchError((err) => {
              return of(new fromTipoIrregular.GetAllTipoIrregularFail(err));
            })
          )
      })
    );



}
