import { Component, OnInit, OnDestroy, ViewChild, AfterViewInit, AfterViewChecked, ChangeDetectorRef } from '@angular/core';
import { FormModalComponent, ConfirmModalComponent, TemplateMantenimientoComponent, MdFormOpts, MdConfirmOpts, ButtonsCellRendererComponent } from '../../../shared';
import { TYPES, Type, RESOURCE_ACTIONS, getContextMenuItemsMantenimiento, DEFAULT_SEPARATOR, joinWords, commonConfigTablaMantenimiento, enableControls, updateGrid, configFormMd, manageCrudState } from '../../../shared/utils';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { GridOptions, GridApi, ColDef } from 'ag-grid-community';
import { ToastrService } from 'ngx-toastr';
import { AppState } from '../../../shared/store/app.reducers';
import { Store } from '@ngrx/store';
import { ErrorService } from '../../../shared/services/errors/error.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AsignacionEspaciosFacade } from '../../facade/asignacion-espacios.facade';

@Component({
  selector: 'app-asignacion-espacios',
  templateUrl: './asignacion-espacios.component.html',
  styleUrls: ['./asignacion-espacios.component.scss']
})
export class AsignacionEspaciosComponent implements OnInit, AfterViewInit, OnDestroy, AfterViewChecked {

  @ViewChild('template') template: TemplateMantenimientoComponent;
  @ViewChild('mdDelete') mdDelete: ConfirmModalComponent;
  @ViewChild('mdSave') mdSave: FormModalComponent;

  private ngUnsubscribe: Subject<void> = new Subject<void>();

  type: Type;
  mdConfirmOpts: MdConfirmOpts;
  mdRegisterOpts: MdFormOpts;
  mdUpdateOpts: MdFormOpts;
  mdFormOpts: MdFormOpts;
  form:FormGroup;
  gridOptions: GridOptions;
  gridApi: GridApi;
  private gridColumnApi;
  templateHtmlMsg:string;
  constructor(
    private asignacionEspaciosFacade: AsignacionEspaciosFacade,
    private toastr: ToastrService,
    private store: Store<AppState>,
    private errorService: ErrorService,
    private cdRef : ChangeDetectorRef
  ) {
    this.type = TYPES.ASIG_ESPACIOS;
  }

  ngOnInit() {
    this.mdConfirmOpts = configFormMd.getDeleteMdOpts(this.templateHtmlMsg);
    this.mdRegisterOpts = configFormMd.getRegisterMdOpts(this.type);
    this.mdUpdateOpts = configFormMd.getUpdateMdOpts(this.type);
    this.form = new FormGroup({
      'periodo': new FormControl('', [Validators.required ,Validators.min(0), Validators.min(0), Validators.max(99)]),
      'ciclo': new FormControl('', [Validators.required, Validators.maxLength(30)]),
      'curso': new FormControl('', [Validators.required, Validators.maxLength(30)]),
      'matriculados': new FormControl('', [Validators.required, Validators.maxLength(30)]),
      'tipoHorario': new FormControl('', [Validators.required, Validators.maxLength(30)]),
      'idPabellon': new FormControl('', [Validators.required, Validators.maxLength(30)]),
      'idEspacioAcademico': new FormControl('', [Validators.required, Validators.maxLength(30)]),
    })
    this.mdFormOpts = this.mdRegisterOpts;
    this.gridOptions = {
      ...commonConfigTablaMantenimiento,
      getRowNodeId: (data) => {
        return data.idOrigen;
      },
      onGridReady: (params) => {
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;
        params.api.sizeColumnsToFit();
      },
      getContextMenuItems: (params) => {
        return getContextMenuItemsMantenimiento(params,this.type,this.template.permisoExportacion);
      }
    }
  }

  ngAfterViewChecked() {
    this.cdRef.detectChanges();
  }

  ngAfterViewInit(){
    this.template.permisoRegistro = false;
    this.template.permisoCarga = false;
    this.template.permisoExportacion = true;
    this.template.permisoProcesar = true;
    this.gridOptions.api.setColumnDefs(this.initColumnDefs());
    this.asignacionEspaciosFacade.initData();
    this.manageState();
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  manageState() {
    this.store.select('asignacionEspacios').pipe(takeUntil(this.ngUnsubscribe)).subscribe((state) => {
      manageCrudState(state, this.form, this.template, this.mdFormOpts, this.mdSave, this.mdConfirmOpts, this.mdDelete, this.toastr,
        this.errorService, () => {
          updateGrid(this.gridOptions, state.data, this.gridColumnApi);
        });
    });
  }

  showMdUpdate(params){
    let data: any = params.node.data;
    this.mdFormOpts = this.mdUpdateOpts;
    enableControls(this.form, false, 'periodo');
    enableControls(this.form, false, 'ciclo');
    enableControls(this.form, false, 'curso');
    enableControls(this.form, false, 'matriculados');
    enableControls(this.form, false, 'tipoHorario');
    this.mdSave.show(data, RESOURCE_ACTIONS.ACTUALIZACION);
  }

  save() {
    const action = this.mdSave.action;
    switch (action) {
      case RESOURCE_ACTIONS.ACTUALIZACION:
        this.asignacionEspaciosFacade.actualizar(this.form.getRawValue());
        break;
    }
  }

  initColumnDefs(): ColDef[] {
    return [
      {
        headerName: "Periodo",
        field: "idPeriodo",
        cellClass: 'ob-type-string-center',
        filter: 'agTextColumnFilter',
        filterParams: { newRowsAction: "keep" },

      },
      {
        headerName: "Ciclo",
        field: 'ciclo',
        cellClass: 'ob-type-string',
        filter: 'agTextColumnFilter',
        filterParams: { newRowsAction: "keep" }
      },
      {
        headerName: "Sección",
        field: 'seccion',
        cellClass: 'ob-type-string',
        filter: 'agTextColumnFilter',
        filterParams: { newRowsAction: "keep" }
      },
      {
        headerName: "Docente",
        field: 'docente',
        cellClass: 'ob-type-string',
        filter: 'agTextColumnFilter',
        filterParams: { newRowsAction: "keep" }
      },
      {
        headerName: "Tope",
        field: 'tope',
        cellClass: 'ob-type-string',
        filter: 'agTextColumnFilter',
        filterParams: { newRowsAction: "keep" }
      },
      {
        headerName: "Matriculados",
        field: 'matriculados',
        cellClass: 'ob-type-string',
        filter: 'agTextColumnFilter',
        filterParams: { newRowsAction: "keep" }
      },
      {
        headerName: "Turno",
        field: 'turno',
        cellClass: 'ob-type-string',
        filter: 'agTextColumnFilter',
        filterParams: { newRowsAction: "keep" }
      },
      {
        headerName: "Tipo Horario",
        field: 'tipoHorario',
        cellClass: 'ob-type-string',
        filter: 'agTextColumnFilter',
        filterParams: { newRowsAction: "keep" }
      },
      {
        headerName: "Día",
        field: 'tipoHorario',
        cellClass: 'ob-type-string',
        filter: 'agTextColumnFilter',
        filterParams: { newRowsAction: "keep" }
      },
      {
        headerName: "Inicio",
        field: 'horaInicio',
        cellClass: 'ob-type-string',
        filter: 'agTextColumnFilter',
        filterParams: { newRowsAction: "keep" }
      },
      {
        headerName: "Fin",
        field: 'horaFin',
        cellClass: 'ob-type-string',
        filter: 'agTextColumnFilter',
        filterParams: { newRowsAction: "keep" }
      },
      {
        headerName: "Espacio",
        field: 'espacioAcademico',
        cellClass: 'ob-type-string',
        filter: 'agTextColumnFilter',
        filterParams: { newRowsAction: "keep" }
      },
      {
        headerName: 'Acción',
        cellStyle: { 'text-align': "center" },
        cellRendererFramework: ButtonsCellRendererComponent,
        cellRendererParams: {
          edit: {
            visible: this.template.permisoActualizacion,
            action: this.showMdUpdate.bind(this)
          }
        },
        filter: false,
        sortable: false
      }
    ];
  }

}
