import { Injectable } from '@angular/core';
import { CargaMiscVisaService } from '../../../../../procesos/services/carga-manual/carga-misc-visa.service';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as fromCargaMiscVisa from '../../../actions/procesos/carga-manual/carga-misc-visa.actions';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../../app.reducers';

@Injectable()
export class CargaMiscVisaEffects {

  constructor(
    private actions$: Actions,
    private store$: Store<AppState>,
    private cargaMiscVisaService: CargaMiscVisaService
  ) {
  }

  @Effect()
  Upload$ = this.actions$
    .pipe(
      ofType(fromCargaMiscVisa.actions.UPLOAD),
      switchMap((action: fromCargaMiscVisa.UploadCargaMiscVisa) => {
        return this.cargaMiscVisaService.saveData(action.payload)
          .pipe(
            map(res => {
              return new fromCargaMiscVisa.UploadCargaMiscVisaSuccess(res);
            }),
            catchError((err) => {
              return of(new fromCargaMiscVisa.UploadCargaMiscVisaFail(err));
            })
          )
      })
    );


}
