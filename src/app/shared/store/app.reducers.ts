import { ActionReducerMap } from '@ngrx/store';

import * as fromGlobalData from './reducers/global.reducer';
import * as fromUi from './reducers/ui.reducer';
import * as fromAuth from './reducers/auth/auth.reducer';
import * as fromHelp from './reducers/help.reducer';
/*Mantenimientos*/
import * as fromBin from './reducers/mantenimiento/bin.reducer';
import * as fromAtmRedUnicard from './reducers/mantenimiento/atm-red-unicard.reducer';
import * as fromAtmRedAsociada from './reducers/mantenimiento/atm-red-asociada.reducer';
import * as fromClasesTransaccion from './reducers/mantenimiento/clase-transaccion.reducer';
import * as fromInstitucion from './reducers/mantenimiento/institucion.reducer';
import * as fromCodigoTransaccion from './reducers/mantenimiento/codigo-transaccion.reducer';
import * as fromTransaccionXinstitucion from './reducers/mantenimiento/transaccion-x-institucion.reducer';
import * as fromMoneda from './reducers/mantenimiento/moneda.reducer';
import * as fromServicio from './reducers/mantenimiento/servicio.reducer';
import * as fromParametroSistema from './reducers/mantenimiento/parametro-sistema.reducer';
import * as fromMembresia from './reducers/mantenimiento/membresia.reducer';
import * as fromCanal from './reducers/mantenimiento/canal.reducer';
import * as fromProducto from './reducers/mantenimiento/producto.reducer';
import * as fromCodigoRptaSwitch from './reducers/mantenimiento/codigo-rpta-switch.reducer';
import * as fromCodigoRptaMembresia from './reducers/mantenimiento/codigo-rpta-membresia.reducer';
import * as fromCodigoProcesoSwitch from './reducers/mantenimiento/codigo-proceso-switch.reducer';
import * as fromCodigoRazonCobroVisa from './reducers/mantenimiento/codigo-razon-cobro-visa.reducer';
import * as fromCodigoFacturacion from './reducers/facturacion/codigo-facturacion.reducer';
import * as fromPortafolio from './reducers/facturacion/portafolio.reducer';
import * as fromOrigen from './reducers/mantenimiento/origen.reducer';
import * as fromMultitabCab from './reducers/mantenimiento/multitab-cab.reducer';
import * as fromMultitabDet from './reducers/mantenimiento/multitab-det.reducer';
import * as fromDistribucionComision from './reducers/mantenimiento/distribucion-comision.reducer';
import * as fromDistribucionFondo from './reducers/mantenimiento/distribucion-fondo.reducer';
import * as fromTransaccionMarcaInt from './reducers/mantenimiento/transaccion-marca-int.reducer';
import * as fromTipoCuentaCompensacio from './reducers/mantenimiento/tipo-cuenta-compensacion.reduer';
import * as fromTipoComision from './reducers/mantenimiento/tipo-comision.reducer';
import * as fromModoEntradaPos from './reducers/mantenimiento/modo-entrada-pos.reducer';
import * as fromMetodoIdThb from './reducers/mantenimiento/metodo-id-thb.reducer';
import * as fromTipoTerminalPos from './reducers/mantenimiento/tipo-terminal-pos.reducer';
import * as fromIndicadorCorreoTelefono from './reducers/mantenimiento/indicador-correo-telefono.reducer';
import * as fromPais from './reducers/mantenimiento/pais.reducer';
import * as fromIndLimitePiso from './reducers/mantenimiento/ind-limite-piso.reducer';
import * as fromRolTransaccion from './reducers/mantenimiento/rol-transaccion.reducer';
import * as fromCategoriaNegocio from './reducers/mantenimiento/categoria-negocio.reducer';
import * as fromGiroNegocio from './reducers/mantenimiento/giro-negocio.reducer';
import * as fromParametroConsulta from './reducers/mantenimiento/parametro-consulta.reducer';
import * as fromReglasCompensacion from './reducers/mantenimiento/reglas-compensacion.reducer';
import * as fromOrigenArchivo from './reducers/mantenimiento/origen-archivo.reducer';
import * as fromTasaInteresPasiva from './reducers/mantenimiento/tasa-interes-pasiva.reducer';
import * as fromProgramaBin from './reducers/mantenimiento/programa-bin.reducer';
import * as fromLiberacionMarca from './reducers/mantenimiento/liberacion-marca.reducer';
import * as fromEventosVisa from './reducers/mantenimiento/eventos-visa.reducer';
import * as fromEventosTransaccionVisa from './reducers/mantenimiento/eventos-transaccion-visa.reducer';
import * as fromEventosInstitucionVisa from './reducers/mantenimiento/eventos-institucion-visa.reducer';
import * as fromTipoIrregular from './reducers/mantenimiento/tipo-irregular.reducer';

import * as fromDistribucionVisaEventos from './reducers/mantenimiento/distribucion-visa-eventos.reducer';
import * as fromDistribucionMcEventos from './reducers/mantenimiento/distribucion-mc-eventos.reducers';

import * as fromEventosMastercard from './reducers/mantenimiento/eventos-mastercard.reducer';
import * as fromEventosTransaccionMastercard from './reducers/mantenimiento/eventos-transaccion-mastercard.reducer';
import * as fromEventosInstitucionMastercard from './reducers/mantenimiento/eventos-institucion-mastercard.reducer';
import * as fromRegion from './reducers/mantenimiento/region.reducer';
/* Tarifario */
import * as fromEscenarioContable from './reducers/tarifario/escenario-contable.reducer';
import * as fromTipoTarifa from './reducers/tarifario/tipo-tarifa.reducer';
import * as fromTarifarioEmisor from './reducers/tarifario/tarifario-emisor.reducer';
import * as fromTarifarioAdquirente from './reducers/tarifario/tarifario-adquirente.reducer';
import * as fromTarifarioSurcharge from './reducers/tarifario/tarifario-surcharge.reducer';
import * as fromTarifarioMiembro from './reducers/tarifario/tarifario-miembro.reducer';
import * as fromTarifarioVISA from './reducers/tarifario/tarifario-visa.reducer';
import * as fromEsquemaTarifario from './reducers/tarifario/esquema-tarifario.reducer';
import * as fromGrupoBinTarifa from './reducers/tarifario/grupo-bin-tarifa.reducer';
/*Consultas*/
import * as fromIncomingVisaTC5 from './reducers/consultas/incoming-visa-tc5.reducer';
import * as fromIncomingVisaTC5TCR0 from './reducers/consultas/incoming-visa-tc5-tcr0.reducer';
import * as fromIncomingVisaTC5TCR1 from './reducers/consultas/incoming-visa-tc5-tcr1.reducer';
import * as fromIncomingVisaTC5TCR3 from './reducers/consultas/incoming-visa-tc5-tcr3.reducer';
import * as fromIncomingVisaTC5TCR4 from './reducers/consultas/incoming-visa-tc5-tcr4.reducer';
import * as fromIncomingVisaTC5TCR5 from './reducers/consultas/incoming-visa-tc5-tcr5.reducer';
import * as fromSwdmplog from './reducers/consultas/swdmplog.reducer';
import * as fromBulkfileMc from './reducers/consultas/bulkfile-mc.reducer';
import * as fromIpmMc from './reducers/consultas/ipm-mc.reducer';
import * as fromCompensacion from './reducers/consultas/compensacion.reducer';
import * as fromComisCompensacion from './reducers/consultas/comis-compensacion.reducer';
import * as fromIncomingVisaTC10TCR0 from './reducers/consultas/incoming-visa-tc10-tcr0.reducer';
import * as fromIncomingVisaTC48 from './reducers/consultas/incoming-visa-tc48.reducer';
import * as fromIncomingVisaTC48TCR0 from './reducers/consultas/incoming-visa-tc48-tcr0.reducer';
import * as fromIncomingVisaTC48TCR1 from './reducers/consultas/incoming-visa-tc48-tcr1.reducer';
import * as fromObservada from './reducers/consultas/observada.reducer';
import * as fromLiberacion from './reducers/consultas/liberacion.reducer';
import * as fromTipoCambioSBS from './reducers/consultas/tipo-cambio-sbs.reducer';
import * as fromTipoCambioMemb from './reducers/consultas/tipo-cambio-memb.reducer';
import * as fromBinVisa from './reducers/consultas/bin-visa.reducer';
import * as fromRangoBinVisa from './reducers/consultas/rango-bin-visa.reducer';
import * as fromDcinCharge from './reducers/consultas/dcin-charge.reducer';
import * as fromIrregular from './reducers/consultas/irregular.reducer';
import * as fromFacturacionIrregularVisa from './reducers/consultas/facturacion-irregular-visa.reducer';
import * as fromFacturacionIrregularMasterCard from './reducers/consultas/facturacion-irregular-master-card.reducer';
import * as fromOutgoingVisaTC5 from './reducers/consultas/outgoing-visa-tc5.reducer';
import * as fromOutgoingVisaTC5TCR0 from './reducers/consultas/outgoing-visa-tc5-tcr0.reducer';
import * as fromOutgoingVisaTC5TCR1 from './reducers/consultas/outgoing-visa-tc5-tcr1.reducer';
import * as fromOutgoingVisaTC5TCR5 from './reducers/consultas/outgoing-visa-tc5-tcr5.reducer';
import * as fromOutgoingVisaTC10TCR0 from './reducers/consultas/outgoing-visa-tc10-tcr0.reducer';
import * as fromFacturaVisa from './reducers/consultas/factura-visa.reducer';
import * as fromFacturaMC from './reducers/consultas/factura-mc.reducer';
import * as fromIata from './reducers/consultas/iata.reducer';
import * as fromPMP from './reducers/consultas/pmp.reducer';
import * as fromDcioutCharge from './reducers/consultas/dciout-charge.reducer';
import * as fromRangoBinMC from './reducers/consultas/rango-bin-mc.reducer';
import * as fromEstablecimientoDcp from './reducers/consultas/establecimiento-dcp.reducer';
import * as fromIatas from './reducers/consultas/iatas.reducer';

import * as fromEstablecimientoVisanet from './reducers/consultas/establecimiento-visanet.reducer';
import * as fromEstablecimientoVisanetComis from './reducers/consultas/establecimiento-visanet-comis.reducer';
/*Reportes*/
import * as fromTablasForaneas from './reducers/reportes/tablas-foraneas.reducer';
import * as fromTabla from './reducers/reportes/tabla.reducer';
import * as fromReporteEstado from './reducers/reportes/reporte-estado.reducer';
import * as fromReportes from './reducers/reportes/reporte.reducer';
import * as fromPerfilRep from './reducers/reportes/perfil-rep.reducer';
import * as fromParametroRep from './reducers/reportes/parametro-rep.reducer';
import * as fromPerfilCampo from './reducers/reportes/perfil-campo.reducer';
import * as fromPerfilUsuario from './reducers/reportes/perfil-usuario.reducer';
import * as fromCampo from './reducers/reportes/campo.reducer';
import * as fromPermisoUsuario from './reducers/reportes/permiso-usuario.reducer';
import * as fromUsuario from './reducers/reportes/usuario.reducer';
import * as fromOperadores from './reducers/reportes/operador.reducer';
import * as fromOperadoresTipoDato from './reducers/reportes/operador-tipo-dato.reducer';
/*Conciliacion*/
import * as fromPaquete from './reducers/conciliacion/paquete.reducer';
import * as fromConciliacion from './reducers/conciliacion/conciliacion.reducer';
import * as fromConciliacionTablas from './reducers/conciliacion/conciliacion-tablas.reducer';
import * as fromCampoMatching from './reducers/conciliacion/campo-matching.reducer';
import * as fromCampoDiferencia from './reducers/conciliacion/campo-diferencia.reducer';
import * as fromCampoActualizar from './reducers/conciliacion/campo-actualizar.reducer';
import * as fromCampoInsertarObservada from './reducers/conciliacion/campo-insertar-observada.reducer';
/*Seguridad*/
import * as fromSistema from './reducers/seguridad/sistema.reducer';
import * as fromUsuarioSeg from './reducers/seguridad/usuario.reducer';
import * as fromTipoAutenticacion from './reducers/seguridad/tipo-autenticacion.reducer';
import * as fromParametroSeguridad from './reducers/seguridad/parametro-seguridad.reducer';
import * as fromAccion from './reducers/seguridad/accion.reducer';
import * as fromCategoriaRecurso from './reducers/seguridad/categoria-recurso.reducer';
import * as fromRecursos from './reducers/seguridad/recurso.reducer';
import * as fromMenu from './reducers/seguridad/menu.reducer';
import * as fromTipoMenu from './reducers/seguridad/tipo-menu.reducer';
import * as fromRecursoGrilla from './reducers/seguridad/menu-recurso.reducer';
import * as fromPerfilSeg from './reducers/seguridad/perfil.reducer';
import * as fromUsuarioPerfilSeg from './reducers/seguridad/usuario-perfil.reducer';
import * as fromAsignacionPermisos from './reducers/seguridad/asignacion-permisos.reducer';
import * as fromRecursoAsignacionGrilla from './reducers/seguridad/asignacion-permisos-grilla.reducer';
/*Procesos*/
import * as fromProcesos from './reducers/procesos/mantenimiento/proceso.reducer';
import * as fromProgramas from './reducers/procesos/mantenimiento/programa.reducer';
import * as fromSubprogramas from './reducers/procesos/mantenimiento/subprograma.reducer';
import * as fromTipoSubprograma from './reducers/procesos/mantenimiento/tipo-subprograma.reducer';
import * as fromArchivo from './reducers/procesos/mantenimiento/archivo.reducer';
import * as fromArchivoCampo from './reducers/procesos/mantenimiento/archivo-campo.reducer';
import * as fromHeaderTrailer from './reducers/procesos/mantenimiento/header-trailer.reducer';
import * as fromBatchMultitabCab from './reducers/procesos/mantenimiento/batch-multitab-cab.reducer';
import * as fromBatchMultitabDet from './reducers/procesos/mantenimiento/batch-multitab-det.reducer';
import * as fromEjecucionManual from './reducers/procesos/ejecucion-manual.reducer';
import * as fromConsultaLogControlPrograma from './reducers/procesos/consultas/log-control.reducer';
import * as fromConsultaGeneracionLog from './reducers/procesos/consultas/generacion-log.reducer';
import * as fromParametroBatch from './reducers/procesos/mantenimiento/parametro-batch.reducer';
import * as fromCargaManualVisa from './reducers/procesos/carga-manual/carga-misc-visa.reducer';
import * as fromCargaManualMC from './reducers/procesos/carga-manual/carga-misc-mc.reducer';
import * as fromSubProgramaCargaArchivo from './reducers/procesos/mantenimiento/subprograma-carga-archivo.reducer';
import * as fromSubProgramaGeneraArchivo from './reducers/procesos/mantenimiento/subprograma-genera-archivo.reducer';
import * as fromSubProgramaProcedimientoSql from './reducers/procesos/mantenimiento/subprograma-procedimiento-sql.reducer';

/* Mantenimientos */
import {
  AtmRedAsociada,
  AtmRedUnicard,
  Bin,
  Canal,
  Producto,
  ClaseTransaccion,
  CodigoProcesoSwitch,
  CodigoRptaMembresia,
  CodigoRptaSwitch,
  CodigoRazonCobroVisa,
  CodigoTransaccion,
  DistribucionComision,
  DistribucionFondo,
  IndicadorCorreoTelefono,
  IndLimitePiso,
  Institucion,
  Membresia,
  MetodoIdThb,
  ModoEntradaPos,
  Moneda,
  MultitabCab,
  MultitabDet,
  Origen,
  Pais,
  ParametroSistema,
  RolTransaccion,
  Servicio,
  TipoComision,
  TipoCuentaCompensacion,
  TipoTerminalPos,
  TransaccionMarcaInt,
  TransaccionXinstitucion,
  CategoriaNegocio,
  GiroNegocio,
  ParametroConsulta,
  ReglasCompensacion,
  OrigenArchivo,
  TasaInteresPasiva,
  LiberacionMarca,
  EventosVisa,
  EventosTransaccionVisa,
  EventosInstitucionVisa,
  DistribucionVisaEventos,
  DistribucionMcEventos,
  EventosMastercard,
  EventosTransaccionMastercard,
  EventosInstitucionMastercard,
  TipoIrregular,
  Region
} from '../../mantenimiento/models';
/* Facturacion */
import {
  CodigoFacturacion,
  Portafolio
} from '../../facturacion/models';
/* Tarifario */
import {
  EscenarioContable,
  EsquemaTarifario,
  GrupoBinTarifa,
  TarifarioAdquirente,
  TarifarioSurcharge,
  TarifarioEmisor,
  TarifarioMiembro,
  TarifarioVISA,
  TipoTarifa
} from '../../tarifario/models';
/* Consultas */
import {
  IncomingVisaTC5,
  IncomingVisaTC5TCR0,
  IncomingVisaTC5TCR1,
  IncomingVisaTC5TCR3,
  IncomingVisaTC5TCR4,
  IncomingVisaTC5TCR5,
  Swdmplog,
  BulkfileMc,
  IpmMc,
  Compensacion,
  ComisCompensacion,
  IncomingVisaTC10TCR0,
  IncomingVisaTC48,
  IncomingVisaTC48TCR0,
  IncomingVisaTC48TCR1,
  Observada,
  Liberacion,
  TipoCambioSBS,
  TipoCambioMemb,
  BinVisa,
  RangoBinVisa,
  DcinCharge,
  Irregular,
  FacturacionIrregularVisa,
  FacturacionIrregularMasterCard,
  OutgoingVisaTC5,
  OutgoingVisaTC5TCR0,
  OutgoingVisaTC5TCR1,
  OutgoingVisaTC5TCR5,
  OutgoingVisaTC10TCR0,
  FacturaVisa,
  Iata,
  PMP,
  DcioutCharge,
  RangoBinMC,
  FacturaMC,
  EstablecimientoDcp,
  Iatas,
  EstablecimientoVisanet,
  EstablecimientoVisanetComis
} from '../../consultas/models';
/* Conciliacion */
import {
  Paquete,
  Conciliacion,
  ConciliacionTablas,
  CampoMatching,
  CampoDiferencia,
  CampoActualizar,
  CampoInsertarObservada
} from '../../conciliacion/models';
/* Seguridad */
import {
  UsuarioSeg,
  ParametroSeguridad,
  Accion,
  CategoriaRecurso,
  RecursoSeg,
  Menu,
  TipoMenu,
  MenuRecurso,
  Perfil,
  UsuarioPerfil,
  PerfilMenuRecursoNodo
} from '../../seguridad/models';
import {
  Proceso,
  Programa,
  Subprograma,
  TipoSubprograma,
  Archivo,
  ArchivoCampo,
  BatchMultitabCab,
  BatchMultitabDet,
  LogControlPrograma,
  GeneracionLog,
  ParametroBatch,
  CargaMiscVisa,
  CargaMiscMC,
  SubProgramaCargaArchivo,
  SubProgramaGeneraArchivo,
  SubProgramaProcedimientoSql
} from '../../procesos/models';
import { Operador, Tabla, TablasForaneas, OperadorTipoDato } from '../../reportes/user/models';
import { Campo, Usuario, PerfilUsuario, PermisoUsuario, PerfilCampo } from '../../reportes/admin/models';
import { CargaState, ConsultaState, ComisCompensacionState, DetalleConsultaState, ReporteAvanzadoState, State } from './reducers/entity-state.model';
import { PerfilRep } from '../../reportes/admin/models/perfil-rep.model';
import { ParametroRep } from '../../reportes/config-generales/models/parametro-rep.model';
import { TipoAutenticacion } from '../../seguridad/models/tipo-autenticacion.model';
import { EjecucionManualState } from './reducers/procesos/ejecucion-manual.reducer';
import {ProgramaBin} from '../../mantenimiento/models/programa-bin.model';

export interface AppState {
  // General
  globalData: fromGlobalData.State,
  ui: fromUi.State,
  auth: fromAuth.State,
  help: fromHelp.PageState,
  // Mantenimientos
  bines: State<Bin>,
  instituciones: State<Institucion>,
  institucionesUba: State<Institucion>,
  institucionesNoUba: State<Institucion>,
  atmsRedUnicard: State<AtmRedUnicard>,
  atmsRedAsociada: State<AtmRedAsociada>,
  clasesTransaccion: State<ClaseTransaccion>,
  codigosTransaccion: State<CodigoTransaccion>,
  transaccionesXinstitucion: State<TransaccionXinstitucion>,
  monedas: State<Moneda>,
  servicios: State<Servicio>,
  parametrosSistema: State<ParametroSistema>,
  membresias: State<Membresia>,
  canales: State<Canal>,
  productos: State<Producto>,
  codigosRptaSwitch: State<CodigoRptaSwitch>,
  codigosProcesoSwitch: State<CodigoProcesoSwitch>,
  codigosRptaMembresia: State<CodigoRptaMembresia>,
  codigosRazonCobroVisa: State<CodigoRazonCobroVisa>,
  modosEntradaPos: State<ModoEntradaPos>,
  metodosIdThb: State<MetodoIdThb>,
  origenes: State<Origen>,
  portafolios: State<Portafolio>,
  codigosFacturacion: State<CodigoFacturacion>,
  multitabCabs: State<MultitabCab>,
  multitabDets: State<MultitabDet>,
  multitabDetsB: State<MultitabDet>,
  estadosTransaccion: State<MultitabDet>,
  distribucionesComision: State<DistribucionComision>,
  distribucionesFondo: State<DistribucionFondo>,
  transaccionMarcaInt: State<TransaccionMarcaInt>,
  tiposCuentaCompensacion: State<TipoCuentaCompensacion>,
  tiposComision: State<TipoComision>,
  tiposTerminalPos: State<TipoTerminalPos>,
  indicadoresCorreoTelefono: State<IndicadorCorreoTelefono>,
  paises: State<Pais>,
  indsLimitesPisos: State<IndLimitePiso>,
  rolTransaccion: State<RolTransaccion>,
  categoriasNegocios: State<CategoriaNegocio>,
  girosNegocios: State<GiroNegocio>,
  parametrosConsulta: State<ParametroConsulta>,
  reglasCompensacion: State<ReglasCompensacion>,
  origenesArchivos: State<OrigenArchivo>,
  origenesArchivosConciliados: State<OrigenArchivo>
  tasaInteresPasiva: State<TasaInteresPasiva>,
  programaBin: State<ProgramaBin>,
  liberacionesMarcas : State<LiberacionMarca>,
  eventosVisa: State<EventosVisa>,
  eventosTransaccionVisa: State<EventosTransaccionVisa>,
  eventosInstitucionVisa: State<EventosInstitucionVisa>,
  distribucionVisaEventos: State<DistribucionVisaEventos>,
  distribucionMcEventos: State<DistribucionMcEventos>,
  eventosMastercard: State<EventosMastercard>,
  eventosTransaccionMastercard: State<EventosTransaccionMastercard>,
  eventosInstitucionMastercard: State<EventosInstitucionMastercard>,
  tiposIrregular: State<TipoIrregular>,
  regiones: State<Region>,
  // Tarifario
  tarifariosEmisores: State<TarifarioEmisor>,
  tarifariosAdquirentes: State<TarifarioAdquirente>,
  tarifariosSurcharges: State<TarifarioSurcharge>,
  tarifariosMiembros: State<TarifarioMiembro>,
  tarifariosVISA: State<TarifarioVISA>,
  esquemasTarifarios: State<EsquemaTarifario>,
  grupoBinesTarifas: State<GrupoBinTarifa>,
  escenariosContable: State<EscenarioContable>,
  tiposTarifa: State<TipoTarifa>,
  // Consultas
  incomingVisaTC5: ConsultaState<IncomingVisaTC5>,
  incomingVisaTC5TCR0: ConsultaState<IncomingVisaTC5TCR0>,
  incomingVisaTC5TCR1: ConsultaState<IncomingVisaTC5TCR1>,
  incomingVisaTC5TCR3: ConsultaState<IncomingVisaTC5TCR3>,
  incomingVisaTC5TCR4: ConsultaState<IncomingVisaTC5TCR4>,
  incomingVisaTC5TCR5: ConsultaState<IncomingVisaTC5TCR5>,
  swdmplog: ConsultaState<Swdmplog>,
  bulkfileMc: ConsultaState<BulkfileMc>,
  ipmMc: ConsultaState<IpmMc>,
  compensaciones: ConsultaState<Compensacion>,
  comisCompensaciones: ComisCompensacionState<ComisCompensacion>,
  incomingVisaTC10TCR0: ConsultaState<IncomingVisaTC10TCR0>,
  incomingVisaTC48TCR0: ConsultaState<IncomingVisaTC48TCR0>,
  incomingVisaTC48TCR1: ConsultaState<IncomingVisaTC48TCR1>,
  incomingVisaTC48: ConsultaState<IncomingVisaTC48>,
  observada: ConsultaState<Observada>,
  liberacion: ConsultaState<Liberacion>,
  tipoCambioSBS: State<TipoCambioSBS>,
  tipoCambioMemb: State<TipoCambioMemb>,
  binesVisa: ConsultaState<BinVisa>,
  rangoBinesVisa: ConsultaState<RangoBinVisa>,
  dcinCharge: ConsultaState<DcinCharge>,
  irregular: ConsultaState<Irregular>,
  facturacionIrregularVisa: ConsultaState<FacturacionIrregularVisa>,
  facturacionIrregularMasterCard: ConsultaState<FacturacionIrregularMasterCard>,
  outgoingVisaTC5: ConsultaState<OutgoingVisaTC5>,
  outgoingVisaTC5TCR0: ConsultaState<OutgoingVisaTC5TCR0>,
  outgoingVisaTC5TCR1: ConsultaState<OutgoingVisaTC5TCR1>,
  outgoingVisaTC5TCR5: ConsultaState<OutgoingVisaTC5TCR5>,
  outgoingVisaTC10TCR0: ConsultaState<OutgoingVisaTC10TCR0>,
  facturaVisa: ConsultaState<FacturaVisa>,
  facturaMC: ConsultaState<FacturaMC>,
  establecimientoDcp: ConsultaState<EstablecimientoDcp>,
  iatas:  ConsultaState<Iatas>,
  establecimientosVisanet: ConsultaState<EstablecimientoVisanet>,
  establecimientosVisanetComis: DetalleConsultaState<EstablecimientoVisanetComis>,
  // Reportes
  iata: ConsultaState<Iata>,
  pmp: ConsultaState<PMP>,
  dcioutCharge: ConsultaState<DcioutCharge>,
  rangoBinMC: ConsultaState<RangoBinMC>,
  // Reportes
  tablasForaneas: State<TablasForaneas>,
  tabla: State<Tabla>,
  operadores: State<Operador>,
  reporteEstado: ReporteAvanzadoState,
  reportes: State<ReporteAvanzadoState>,
  perfilRep: State<PerfilRep>,
  parametroRep: State<ParametroRep>,
  perfilCampo: State<PerfilCampo>,
  perfilUsuario: State<PerfilUsuario>,
  campo: State<Campo>,
  permisoUsuario: State<PermisoUsuario>,
  usuario: State<Usuario>,
  operadoresTipoDato: State<OperadorTipoDato>,
  // Conciliacion
  paquetes : State<Paquete>,
  conciliaciones : State<Conciliacion>,
  conciliacionesTablas : State<ConciliacionTablas>,
  camposMatching : State<CampoMatching>,
  camposDiferencias : State<CampoDiferencia>,
  camposActualizar : State<CampoActualizar>,
  camposInsertarObservadas : State<CampoInsertarObservada>,
  // Seguridad
  sistema: fromSistema.SistemaSegState,
  usuariosSeg: State<UsuarioSeg>,
  tiposAutenticacion: State<TipoAutenticacion>,
  parametrosSeguridad: State<ParametroSeguridad>,
  acciones: State<Accion>,
  categoriasRecurso: State<CategoriaRecurso>,
  recursos: State<RecursoSeg>,
  menus: fromMenu.MenuState,
  tiposMenu: State<TipoMenu>,
  menuRecursos: State<MenuRecurso>,
  perfilesSeg: State<Perfil>,
  usuariosPerfilesSeg: State<UsuarioPerfil>,
  asignacionPermisos: State<PerfilMenuRecursoNodo>,
  asignacionPermisosGrilla: fromRecursoAsignacionGrilla.RecursoAsignacionState,
  // Procesos
  procesos: State<Proceso>,
  programas: State<Programa>,
  subprogramas: State<Subprograma>,
  tiposSubprogramas: State<TipoSubprograma>,
  archivos: State<Archivo>,
  archivosCampos: State<ArchivoCampo>,
  headersTrailers: fromHeaderTrailer.HeaderTrailerState,
  batchMultitabCabs: State<BatchMultitabCab>,
  batchMultitabDets: State<BatchMultitabDet>,
  batchMultitabDetsB: State<BatchMultitabDet>,
  ejecucionManual: EjecucionManualState,
  logControlPrograma: ConsultaState<LogControlPrograma>,
  generacionLog: ConsultaState<GeneracionLog>,
  parametrosBatch: State<ParametroBatch>,
  cargaManualVisa: CargaState<CargaMiscVisa>,
  cargaManualMC: CargaState<CargaMiscMC>,
  subProgramasCargaArchivo: State<SubProgramaCargaArchivo>,
  subProgramasGeneraArchivo: State<SubProgramaGeneraArchivo>,
  subProgramasProcedimientoSql: State<SubProgramaProcedimientoSql>
}

export const appReducers: ActionReducerMap<AppState> = {
  globalData: fromGlobalData.globalReducer,
  ui: fromUi.uiReducer,
  auth: fromAuth.authReducer,
  help: fromHelp.helpReducer,
  // Mantenimientos
  bines: fromBin.binReducer,
  instituciones: fromInstitucion.institucionReducer,
  institucionesUba: fromInstitucion.institucionesUbaReducer,
  institucionesNoUba: fromInstitucion.institucionesNoUbaReducer,
  atmsRedUnicard: fromAtmRedUnicard.atmRedUnicardReducer,
  atmsRedAsociada: fromAtmRedAsociada.atmRedAsociadaReducer,
  clasesTransaccion: fromClasesTransaccion.claseTransaccionReducer,
  codigosTransaccion: fromCodigoTransaccion.codigoTransaccionReducer,
  transaccionesXinstitucion: fromTransaccionXinstitucion.txnXinstitucionReducer,
  monedas: fromMoneda.monedaReducer,
  servicios: fromServicio.servicioReducer,
  parametrosSistema: fromParametroSistema.parametroSistemaReducer,
  membresias: fromMembresia.membresiaReducer,
  canales: fromCanal.canalReducer,
  productos: fromProducto.productoReducer,
  codigosRptaSwitch: fromCodigoRptaSwitch.codigoRptaSwitchReducer,
  codigosProcesoSwitch: fromCodigoProcesoSwitch.codigoProcesoSwitchReducer,
  codigosRptaMembresia: fromCodigoRptaMembresia.codigoRptaMembresiaReducer,
  codigosRazonCobroVisa: fromCodigoRazonCobroVisa.codigoRazonCobroVisaReducer,
  modosEntradaPos: fromModoEntradaPos.modoEntradaPosReducer,
  metodosIdThb: fromMetodoIdThb.metodoIdThbReducer,
  origenes: fromOrigen.origennReducer,
  portafolios: fromPortafolio.portafolioReducer,
  codigosFacturacion: fromCodigoFacturacion.codigoFacturacionReducer,
  multitabCabs: fromMultitabCab.multitabCabReducer,
  multitabDets: fromMultitabDet.multitabDetReducer,
  multitabDetsB: fromMultitabDet.multitabDetBReducer,
  estadosTransaccion: fromMultitabDet.estadoTransaccionReducer,
  distribucionesComision: fromDistribucionComision.distribucionComisionReducer,
  distribucionesFondo: fromDistribucionFondo.distribucionFondoReducer,
  transaccionMarcaInt: fromTransaccionMarcaInt.transaccionMarcaIntReducer,
  tiposCuentaCompensacion: fromTipoCuentaCompensacio.tipoCuentaCompensacionReducer,
  tiposComision: fromTipoComision.tipoComisionReducer,
  tiposTerminalPos: fromTipoTerminalPos.tipoTerminalPosReducer,
  indicadoresCorreoTelefono: fromIndicadorCorreoTelefono.indicadorCorreoTelefonoReducer,
  paises: fromPais.paisReducer,
  indsLimitesPisos: fromIndLimitePiso.indLimitePisoReducer,
  rolTransaccion: fromRolTransaccion.rolTransaccionReducer,
  categoriasNegocios: fromCategoriaNegocio.categoriaNegocioReducer,
  parametrosConsulta: fromParametroConsulta.parametroConsultaReducer,
  reglasCompensacion: fromReglasCompensacion.reglasCompensacionReducer,
  origenesArchivos: fromOrigenArchivo.origenArchivoReducer,
  origenesArchivosConciliados: fromOrigenArchivo.origenesArchivosConciliadosReducer,
  tasaInteresPasiva: fromTasaInteresPasiva.tasaInteresPasivaReducer,
  programaBin: fromProgramaBin.programaBinReducer,
  liberacionesMarcas : fromLiberacionMarca.LiberacionMarcaReducer,
  eventosVisa: fromEventosVisa.eventosVisaReducer,
  eventosTransaccionVisa: fromEventosTransaccionVisa.eventosTransaccionVisaReducer,
  eventosInstitucionVisa: fromEventosInstitucionVisa.eventosInstitucionVisaReducer,
  distribucionVisaEventos: fromDistribucionVisaEventos.distribucionVisaEventosReducer,
  distribucionMcEventos: fromDistribucionMcEventos.distribucionMcEventosReducer,
  eventosMastercard: fromEventosMastercard.eventosMastercardReducer,
  eventosTransaccionMastercard: fromEventosTransaccionMastercard.eventosTransaccionMastercardReducer,
  eventosInstitucionMastercard: fromEventosInstitucionMastercard.eventosInstitucionMastercardReducer,
  tiposIrregular: fromTipoIrregular.tipoIrregularReducer,
  regiones: fromRegion.regionReducer,
  // Tarifario
  tarifariosEmisores: fromTarifarioEmisor.tarifarioEmisorReducer,
  tarifariosAdquirentes: fromTarifarioAdquirente.tarifarioAdquirenteReducer,
  tarifariosSurcharges: fromTarifarioSurcharge.tarifarioSurchargeReducer,
  tarifariosMiembros: fromTarifarioMiembro.tarifarioMiembroReducer,
  tarifariosVISA: fromTarifarioVISA.tarifarioVISAReducer,
  esquemasTarifarios: fromEsquemaTarifario.esquemaTarifarioReducer,
  grupoBinesTarifas: fromGrupoBinTarifa.grupoBinTarifaReducer,
  escenariosContable: fromEscenarioContable.escenarioContableReducer,
  tiposTarifa: fromTipoTarifa.tipoTarifaReducer,
  girosNegocios: fromGiroNegocio.giroNegocioReducer,
  // Consultas
  incomingVisaTC5: fromIncomingVisaTC5.incomingVisaTC5Reducer,
  incomingVisaTC5TCR0: fromIncomingVisaTC5TCR0.incomingVisaTC5TCR0Reducer,
  incomingVisaTC5TCR1: fromIncomingVisaTC5TCR1.incomingVisaTC5TCR1Reducer,
  incomingVisaTC5TCR3: fromIncomingVisaTC5TCR3.incomingVisaTC5TCR3Reducer,
  incomingVisaTC5TCR4: fromIncomingVisaTC5TCR4.incomingVisaTC5TCR4Reducer,
  incomingVisaTC5TCR5: fromIncomingVisaTC5TCR5.incomingVisaTC5TCR5Reducer,
  swdmplog: fromSwdmplog.consultaSwdmplogReducer,
  bulkfileMc: fromBulkfileMc.consultaBulkfileMcReducer,
  ipmMc: fromIpmMc.ipmMcReducer,
  compensaciones: fromCompensacion.consultaCompensacionReducer,
  comisCompensaciones: fromComisCompensacion.consultaComisCompensacionReducer,
  incomingVisaTC10TCR0: fromIncomingVisaTC10TCR0.incomingVisaTC10TCR0Reducer,
  incomingVisaTC48: fromIncomingVisaTC48.incomingVisaTC48Reducer,
  incomingVisaTC48TCR0: fromIncomingVisaTC48TCR0.incomingVisaTC48TCR0Reducer,
  incomingVisaTC48TCR1: fromIncomingVisaTC48TCR1.incomingVisaTC48TCR1Reducer,
  observada: fromObservada.consultaObservadaReducer,
  liberacion: fromLiberacion.consultaLiberacionReducer,
  tipoCambioSBS: fromTipoCambioSBS.tipoCambioSBSReducer,
  tipoCambioMemb: fromTipoCambioMemb.tipoCambioMembReducer,
  binesVisa: fromBinVisa.binVisaReducer,
  rangoBinesVisa: fromRangoBinVisa.rangoBinVisaReducer,
  dcinCharge: fromDcinCharge.dcinChargeReducer,
  irregular: fromIrregular.irregularReducer,
  facturacionIrregularVisa: fromFacturacionIrregularVisa.facturacionIrregularVisaReducer,
  facturacionIrregularMasterCard: fromFacturacionIrregularMasterCard.facturacionIrregularMasterCardReducer,
  outgoingVisaTC5: fromOutgoingVisaTC5.outgoingVisaTC5Reducer,
  outgoingVisaTC5TCR0: fromOutgoingVisaTC5TCR0.outgoingVisaTC5TCR0Reducer,
  outgoingVisaTC5TCR1: fromOutgoingVisaTC5TCR1.outgoingVisaTC5TCR1Reducer,
  outgoingVisaTC5TCR5: fromOutgoingVisaTC5TCR5.outgoingVisaTC5TCR5Reducer,
  outgoingVisaTC10TCR0: fromOutgoingVisaTC10TCR0.outgoingVisaTC10TCR0Reducer,
  facturaVisa: fromFacturaVisa.consultaFacturaVisaReducer,
  facturaMC: fromFacturaMC.consultaFacturaMCReducer,
  establecimientoDcp: fromEstablecimientoDcp.establecimientoDcpReducer,
  iatas:  fromIatas.iatasReducer,
  establecimientosVisanet: fromEstablecimientoVisanet.consultaEstablecimientoVisanetReducer,
  establecimientosVisanetComis: fromEstablecimientoVisanetComis.consultaEstablecimientoVisanetComisReducer,
  // liberacion: fromLiberacion.liberacionReduce,
  // Reportes
  pmp: fromPMP.pmpReducer,
  dcioutCharge: fromDcioutCharge.dcioutChargeReducer,
  rangoBinMC: fromRangoBinMC.rangoBinMCReducer,
  // liberacion: fromLiberacion.liberacionReduce,
  // Reportes
  iata: fromIata.iataReducer,
  // liberacion: fromLiberacion.liberacionReduce,
  // Reportes
  tablasForaneas: fromTablasForaneas.tablasForaneasReducer,
  tabla: fromTabla.tablaReducer,
  operadores: fromOperadores.operadorReducer,
  reporteEstado: fromReporteEstado.reporteEstadoReducer,
  reportes: fromReportes.reporteReducer,
  perfilRep: fromPerfilRep.PerfilRepReducer,
  parametroRep: fromParametroRep.ParametroRepReducer,
  perfilCampo: fromPerfilCampo.perfilCampoReducer,
  perfilUsuario: fromPerfilUsuario.perfilUsuarioReducer,
  campo: fromCampo.campoReducer,
  permisoUsuario: fromPermisoUsuario.PermisoUsuarioReducer,
  usuario: fromUsuario.usuarioReducer,
  operadoresTipoDato: fromOperadoresTipoDato.operadorTipoDatoReducer,
  // Conciliacion
  paquetes : fromPaquete.paqueteReducer,
  conciliaciones : fromConciliacion.conciliacionReducer,
  conciliacionesTablas : fromConciliacionTablas.conciliacionTablasReducer,
  camposMatching : fromCampoMatching.campoMatchingReducer,
  camposDiferencias : fromCampoDiferencia.campoDiferenciaReducer,
  camposActualizar : fromCampoActualizar.campoActualizarReducer,
  camposInsertarObservadas : fromCampoInsertarObservada.campoInsertarObservadaReducer,
  // Seguridad
  sistema: fromSistema.sistemaReducer,
  usuariosSeg: fromUsuarioSeg.usuarioReducer,
  tiposAutenticacion: fromTipoAutenticacion.tipoAutenticacionReducer,
  parametrosSeguridad: fromParametroSeguridad.parametroSeguridadReducer,
  acciones: fromAccion.accionReducer,
  categoriasRecurso: fromCategoriaRecurso.categoriaRecursoReducer,
  recursos: fromRecursos.recursoReducer,
  menus: fromMenu.menuReducer,
  tiposMenu: fromTipoMenu.tipoMenuReducer,
  menuRecursos: fromRecursoGrilla.menuRecursoReducer,
  perfilesSeg: fromPerfilSeg.perfilSegReducer,
  usuariosPerfilesSeg: fromUsuarioPerfilSeg.usuarioPerfilReducer,
  asignacionPermisos: fromAsignacionPermisos.asignacionPermisosReducer,
  asignacionPermisosGrilla: fromRecursoAsignacionGrilla.asignacionPermisosGrillaReducer,
  // Procesos
  procesos: fromProcesos.procesoReducer,
  programas: fromProgramas.programaReducer,
  subprogramas: fromSubprogramas.subprogramaReducer,
  tiposSubprogramas: fromTipoSubprograma.tipoSubprogramaReducer,
  archivos: fromArchivo.archivoReducer,
  archivosCampos: fromArchivoCampo.archivoCampoReducer,
  headersTrailers: fromHeaderTrailer.headerTrailerReducer,
  batchMultitabCabs: fromBatchMultitabCab.batchMultitabCabReducer,
  batchMultitabDets: fromBatchMultitabDet.batchMultitabDetReducer,
  batchMultitabDetsB: fromBatchMultitabDet.batchMultitabDetBReducer,
  ejecucionManual: fromEjecucionManual.ejecucionManualReducer,
  logControlPrograma: fromConsultaLogControlPrograma.logControlProgramaReducer,
  generacionLog: fromConsultaGeneracionLog.generacionLogReducer,
  parametrosBatch: fromParametroBatch.parametroBatchReducer,
  cargaManualVisa: fromCargaManualVisa.cargaMiscVisaReducer,
  cargaManualMC: fromCargaManualMC.cargaMiscMCReducer,
  subProgramasCargaArchivo: fromSubProgramaCargaArchivo.subProgramaCargaArchivoReducer,
  subProgramasGeneraArchivo: fromSubProgramaGeneraArchivo.subProgramaGeneraArchivoReducer,
  subProgramasProcedimientoSql: fromSubProgramaProcedimientoSql.subProgramaProcedimientoSqlReducer
};
