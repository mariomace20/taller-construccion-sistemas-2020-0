import { Injectable } from '@angular/core';
import { CargaMiscMCService } from '../../../../../procesos/services/carga-manual/carga-misc-mc.service';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as fromCargaMiscMC from '../../../actions/procesos/carga-manual/carga-misc-mc.actions';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../../app.reducers';

@Injectable()
export class CargaMiscMCEffects {

  constructor(
    private actions$: Actions,
    private store$: Store<AppState>,
    private cargaMiscMCService: CargaMiscMCService
  ) {
  }

  @Effect()
  Upload$ = this.actions$
    .pipe(
      ofType(fromCargaMiscMC.actions.UPLOAD),
      switchMap((action: fromCargaMiscMC.UploadCargaMiscMC) => {
        return this.cargaMiscMCService.saveData(action.payload)
          .pipe(
            map(res => {
              return new fromCargaMiscMC.UploadCargaMiscMCSuccess(res);
            }),
            catchError((err) => {
              return of(new fromCargaMiscMC.UploadCargaMiscMCFail(err));
            })
          )
      })
    );


}
