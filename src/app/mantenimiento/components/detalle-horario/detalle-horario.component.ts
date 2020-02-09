import { Component, OnInit, OnDestroy, ViewChild, AfterViewInit } from '@angular/core';
import { ConsultaModalComponent, TemplateMantenimientoComponent } from '../../../shared';
import { TYPES, Type, getContextMenuItemsMantenimiento, removeElementArr, MESSAGE_BODY_CARGA_SUCCESS, MESSAGE_TITLE_CARGA_SUCCESS, MESSAGE_BODY_CARGA_DUPLICADA_ERROR, MESSAGE_TITLE_CARGA_ERROR, FA_ICON_UPLOAD, DEFAULT_SEPARATOR, joinWords, commonConfigTablaMantenimiento, updateGrid } from '../../../shared/utils';
import { NgxDropzoneChangeEvent } from 'ngx-dropzone';
import { GridOptions, GridApi, ColDef } from 'ag-grid-community';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { DetalleHorarioFacade } from '../../facade';

@Component({
  selector: 'app-detalle-horario',
  templateUrl: './detalle-horario.component.html',
  styleUrls: ['./detalle-horario.component.scss']
})
export class DetalleHorarioComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild('template') template: TemplateMantenimientoComponent;

  @ViewChild('md') md: ConsultaModalComponent;

  private ngUnsubscribe: Subject<void> = new Subject<void>();

  type: Type;
  gridOptions: GridOptions;
  gridApi: GridApi;
  private gridColumnApi;

  configCarga: any ={
    accept: '.xlsx',
    multiple: false,
    maxFileSize: 20971520, //20MB
    expandable: true,
    loading: false,
    class: FA_ICON_UPLOAD
  }
  files: File[] = [];
  cargando: boolean = false;

  filesNamesAdded: string[] = [];

  constructor(
    private cursoFacade: DetalleHorarioFacade,
    private toasterService: ToastrService,
  ) {
    this.type = TYPES.DETALLE_HORARIO;
  }

  ngOnInit() {
    this.template.permisoRegistro = false;
    this.template.permisoCarga = true;
    this.template.permisoExportacion = true;
    this.gridOptions = {
      ...commonConfigTablaMantenimiento,
      getRowNodeId: (data) => {
        return data.idDetalleHorario;
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

  ngAfterViewInit(){
    this.gridOptions.api.setColumnDefs(this.initColumnDefs());
    this.cursoFacade.buscarTodos().pipe(takeUntil(this.ngUnsubscribe)).subscribe(data => {
      updateGrid(this.gridOptions,data,this.gridColumnApi,true,true);
    });;
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  onSelect(event: NgxDropzoneChangeEvent) {
    event.addedFiles.filter(e=>{
      if(this.filesNamesAdded.indexOf(e.name)==-1){
          this.files.push(e);
          this.filesNamesAdded.push(e.name);
      }else{
        this.toasterService.error(MESSAGE_BODY_CARGA_DUPLICADA_ERROR.replace('name',e.name),MESSAGE_TITLE_CARGA_ERROR);
      }
    });
	}

	onRemove(event) {
		removeElementArr(this.filesNamesAdded,event.name);
    this.files.splice(this.files.indexOf(event), 1);
  }

  onClickCarga(){
    this.md.show();
  }

  cargarArchivo(){
    this.configCarga.loading = true;
    this.cursoFacade.buscarTodos().pipe(takeUntil(this.ngUnsubscribe)).subscribe(data => {
      this.toasterService.success(MESSAGE_BODY_CARGA_SUCCESS, MESSAGE_TITLE_CARGA_SUCCESS);
      this.configCarga.loading = false;
    });;
  }

  initColumnDefs(): ColDef[] {
    return [
      {
        headerName: "Curso",
        field: "idCurso",
        cellClass: 'ob-type-string-center',
        filter: 'agTextColumnFilter',
        valueGetter: (params) => {
          return !params.data ? '' : joinWords(DEFAULT_SEPARATOR, params.data.idCurso, params.data.descripcionCurso);
        },
        filterParams: { newRowsAction: "keep" },
      },
      {
        headerName: "Sección",
        field: "seccion",
        cellClass: 'ob-type-string-center',
        filter: 'agTextColumnFilter',
        filterParams: { newRowsAction: "keep" },
      },
      {
        headerName: "Horario",
        field: "idHorario",
        cellClass: 'ob-type-string-center',
        filter: 'agTextColumnFilter',
        valueGetter: (params) => {
          return !params.data ? '' : joinWords(DEFAULT_SEPARATOR, params.data.idHorario, params.data.descripcionHorario);
        },
        filterParams: { newRowsAction: "keep" },
      },
      {
        headerName: "Tipo",
        field: "idTipoHorario",
        cellClass: 'ob-type-string-center',
        filter: 'agTextColumnFilter',
        valueGetter: (params) => {
          return !params.data ? '' : joinWords(DEFAULT_SEPARATOR, params.data.idTipoHorario, params.data.descripcionTipoHorario);
        },
        filterParams: { newRowsAction: "keep" },
      },
      {
        headerName: "Inicio",
        field: 'horarioInicio',
        cellClass: 'ob-type-string',
        filter: 'agTextColumnFilter',
        filterParams: { newRowsAction: "keep" }
      },
      {
        headerName: "Fin",
        field: 'horarioFin',
        cellClass: 'ob-type-string',
        filter: 'agTextColumnFilter',
        filterParams: { newRowsAction: "keep" }
      }
    ];
  }

}
