import { AuthEffects } from './auth/auth.effects';
import { AuthSistemaEffects } from './auth/auth-sistema.effects';
// Mantenimientos
import { BinEffects } from './mantenimiento/bin.effects';
import { ClaseTransaccionEffects } from './mantenimiento/clase-transaccion.effects';
import { InstitucionEffects } from './mantenimiento/institucion.effects';
import { CodigoTransaccionEffects } from './mantenimiento/codigo-transaccion.effects';
import { AtmRedUnicardEffects } from './mantenimiento/atm-red-unicard.effects';
import { AtmRedAsociadaEffects } from './mantenimiento/atm-red-asociada.effects';
import { TransaccionXinstitucionEffects } from './mantenimiento/transaccion-x-institucion.effects';
import { MonedaEffects } from './mantenimiento/moneda.effects';
import { ServicioEffects } from './mantenimiento/servicio.effects';
import { ParametroSistemaEffects } from './mantenimiento/parametro-sistema.effects';
import { MembresiaEffects } from './mantenimiento/membresia.effects';
import { CanalEffects } from './mantenimiento/canal.effects';
import { ProductoEffects } from './mantenimiento/producto.effects';
import { ModoEntradaPosEffects } from './mantenimiento/modo-entrada-pos.effects';
import { OrigenEffects } from './mantenimiento/origen.effects';
import { CodigoRptaSwitchEffects } from './mantenimiento/codigo-rpta-switch.effects';
import { CodigoRptaMembresiaEffects } from './mantenimiento/codigo-rpta-membresia.effects';
import { CodigoRazonCobroVisaEffects} from './mantenimiento/codigo-razon-cobro-visa.effects';
import { CodigoFacturacionEffects } from './facturacion/codigo-facturacion.effects';
import { PortafolioEffects } from './facturacion/portafolio.effects';
import { MultitabCabEffects } from './mantenimiento/multitab-cab.effects';
import { MultitabDetEffects } from './mantenimiento/multitab-det.effects';
import { TipoTarifaEffects } from './tarifario/tipo-tarifa.effects';
import { EscenarioContableEffects } from './tarifario/escenario-contable.effects';
import { EsquemaTarifarioEffects } from './tarifario/esquema-tarifario.effects';
import { TarifarioEmisorEffects } from './tarifario/tarifario-emisor.effects';
import { TarifarioMiembroEffects } from './tarifario/tarifario-miembro.effects';
import { TarifarioVISAEffects } from './tarifario/tarifario-visa.effects';
import { GrupoBinTarifaEffects } from './tarifario/grupo-bin-tarifa.effects';
import { TarifarioAdquirenteEffects } from './tarifario/tarifario-adquirente.effects';
import { TarifarioSurchargeEffects } from './tarifario/tarifario-surcharge.effects';
import { DistribucionComisionEffects } from './mantenimiento/distribucion-comision.effects';
import { DistribucionFondoEffects } from './mantenimiento/distribucion-fondo.effects';
import { TransaccionMarcaIntEffects } from './mantenimiento/transaccion-marca-int.effects';
import { TipoCuentaCompensacionEffects } from './mantenimiento/tipo-cuenta-comepnsacion.effects';
import { TipoComisionEffects } from './mantenimiento/tipo-comision.effects';
import { CodigoProcesoSwitchEffects } from './mantenimiento/codigo-proceso-switch.effects';
import { MetodoIdThbEffects } from './mantenimiento/metodo-id-thb.effects';
import { TipoTerminalPosEffects } from './mantenimiento/tipo-terminal-pos.effects';
import { IndicadorCorreoTelefonoEffects } from './mantenimiento/indicador-correo-telefono.effects';
import { PaisEffects } from './mantenimiento/pais.effects';
import { IndLimitePisoEffects } from './mantenimiento/ind-limite-piso.effects';
import { RolTransaccionEffects } from './mantenimiento/rol-transaccion.effects';
import { CategoriaNegocioEffects } from './mantenimiento/categoria-negocio.effects';
import { GiroNegocioEffects } from './mantenimiento/giro-negocio.effects';
import { ParametroConsultaEffects } from './mantenimiento/parametro-consulta.effects';
import { ReglasCompensacionEffects } from './mantenimiento/reglas-compensacion.effects';
import { OrigenArchivoEffects } from './mantenimiento/origen-archivo.effects';
import { TasaInteresPasivaEffects } from './mantenimiento/tasa-interes-pasiva.effects';
import { ProgramaBinEffects } from './mantenimiento/programa-bin.effects';
import { LiberacionMarcaEffects } from './mantenimiento/liberacion-marca.effects';
import { EventosVisaEffects } from './mantenimiento/eventos-visa.effects';
import { EventosTransaccionVisaEffects } from './mantenimiento/eventos-transaccion-visa.effects';
import { EventosInstitucionVisaEffects } from './mantenimiento/eventos-institucion-visa.effects';
import { EventosMastercardEffects } from './mantenimiento/eventos-mastercard.effects';
import { EventosTransaccionMastercardEffects } from './mantenimiento/eventos-transaccion-mastercard.effects';
import { EventosInstitucionMastercardEffects } from './mantenimiento/eventos-institucion-mastercard.effects';
import { TipoIrregularEffects } from './mantenimiento/tipo-irregular.effects';
import { RegionEffects } from './mantenimiento/region.effects';
import { DistribucionVisaEventosEffects } from './mantenimiento/distribucion-visa-eventos.effects';
import { DistribucionMcEventosEffects} from './mantenimiento/distribucion-mc-eventos.effects';

// Consultas
import { SwdmplogEffects } from './consultas/swdmplog.effects';
import { BulkfileMcEffects } from './consultas/bulkfile-mc.effects';
import { IpmMcEffects } from './consultas/ipm-mc.effects';
import { IncomingVisaTC5Effects } from './consultas/incoming-visa-tc5.effects';
import { IncomingVisaTC5TCR0Effects } from './consultas/incoming-visa-tc5-tcr0.effects';
import { IncomingVisaTC5TCR1Effects } from './consultas/incoming-visa-tc5-tcr1.effects';
import { IncomingVisaTC5TCR3Effects } from './consultas/incoming-visa-tc5-tcr3.effects';
import { IncomingVisaTC5TCR4Effects } from './consultas/incoming-visa-tc5-tcr4.effects';
import { IncomingVisaTC5TCR5Effects } from './consultas/incoming-visa-tc5-tcr5.effects';
import { IncomingVisaTC10TCR0Effects } from './consultas/incoming-visa-tc10-tcr0.effects';
import { IncomingVisaTC48Effects } from './consultas/incoming-visa-tc48.effects';
import { IncomingVisaTC48TCR0Effects } from './consultas/incoming-visa-tc48-tcr0.effects';
import { IncomingVisaTC48TCR1Effects } from './consultas/incoming-visa-tc48-tcr1.effects';
import { CompensacionEffects } from './consultas/compensacion.effects';
import { ComisCompensacionEffects } from './consultas/comis-compensacion.effects';
import { ObservadaEffects } from './consultas/observada.effects';
import { LiberacionEffects } from './consultas/liberacion.effects';
import { TipoCambioSBSEffects } from './consultas/tipo-cambio-sbs.effects';
import { TipoCambioMembEffects } from './consultas/tipo-cambio-memb.effects';
import { BinVisaEffects } from './consultas/bin-visa.effects';
import { RangoBinMCEffects } from './consultas/rango-bin-mc.effects';
import { RangoBinVisaEffects } from './consultas/rango-bin-visa.effects';
import { DcinChargeEffects } from './consultas/dcin-charge.effects';
import { IrregularEffects } from './consultas/irregular.effects';
import { OutgoingVisaTC5Effects } from './consultas/outgoing-visa-tc5.effects';
import { OutgoingVisaTC5TCR0Effects } from './consultas/outgoing-visa-tc5-tcr0.effects';
import { OutgoingVisaTC5TCR1Effects } from './consultas/outgoing-visa-tc5-tcr1.effects';
import { OutgoingVisaTC5TCR5Effects } from './consultas/outgoing-visa-tc5-tcr5.effects';
import { OutgoingVisaTC10TCR0Effects } from './consultas/outgoing-visa-tc10-tcr0.effects';
import { FacturacionIrregularVisaEffects } from './consultas/facturacion-irregular-visa.effects';
import { FacturaVisaEffects } from './consultas/factura-visa.effects';
import { FacturaMCEffects } from './consultas/factura-mc.effects';
import { EstablecimientoDcpEffects } from './consultas/establecimiento-dcp.effects';
import { IatasEffects } from './consultas/iatas.effects';

import { EstablecimientoVisanetEffects } from './consultas/establecimiento-visanet.effects';
import { EstablecimientoVisanetComisEffects } from './consultas/establecimiento-visanet-comis.effects';
// Reportes
import { FacturacionIrregularMasterCardEffects } from './consultas/facturacion-irregular-master-card.effects';
import { PMPEffects } from './consultas/pmp.effects';
import { DcioutChargeEffects } from './consultas/dciout-charge.effects';
// Reportes
import { IataEffects } from './consultas/iata.effects';
// Reportes
import { TablasForaneasEffects } from './reportes/tablas-foraneas.effects';
import { TablaEffects } from './reportes/tabla.effects';
import { OperadorEffects } from './reportes/operador.effects';
import { PerfilRepEffects } from './reportes/perfil-rep.effects';
import { ParametroRepEffects } from './reportes/parametro-rep.effects';
import { PerfilCampoEffects } from './reportes/perfil-campo.effects';
import { PerfilUsuarioEffects } from './reportes/perfil-usuario.effects';
import { CampoEffects } from './reportes/campo.effects';
import { UsuarioEffects } from './reportes/usuario.effects';
import { PermisoUsuarioEffects } from './reportes/permiso-usuario.effects';
import { ReporteEffects } from './reportes/reporte.effects';
import { TablaQueryEffects } from './reportes/tabla-query.effects';
import { CampoQueryEffects } from './reportes/campo-query.effects';
import { CondicionQueryEffects } from './reportes/condicion.effects';
import { OperadorTipoDatoEffects } from './reportes/operador-tipo-dato.effects';
import { FuncionGrupoEffects } from './reportes/funcion-grupo.effects';
// Conciliacion
import { PaqueteEffects } from './conciliacion/paquete.effects';
import { ConciliacionEffects } from './conciliacion/conciliacion.effects';
import { ConciliacionTablasEffects } from './conciliacion/conciliacion-tablas.effects';
import { CampoMatchingEffects } from './conciliacion/campo-matching.effects';
import { CampoDiferenciaEffects } from './conciliacion/campo-diferencia.effects';
import { CampoActualizarEffects } from './conciliacion/campo-actualizar.effects';
import { CampoInsertarObservadaEffects } from './conciliacion/campo-insertar-observada.effects';
// Seguridad
import { SistemaEffects } from './seguridad/sistema.effects';
import { UsuarioSegEffects } from './seguridad/usuario-seg.effects';
import { TipoAutenticacionEffects } from './seguridad/tipo-autenticacion.effects';
import { ParametroSeguridadEffects } from './seguridad/parametro-seguridad.effects';
import { CategoriaRecursoEffects } from './seguridad/categoria-recurso.effects';
import { AccionEffects } from './seguridad/accion.effects';
import { RecursoEffects } from './seguridad/recurso.effects';
import { MenuEffects } from './seguridad/menu.effects';
import { TipoMenuEffects } from './seguridad/tipo-menu.effects';
import { PerfilEffects } from './seguridad/perfil.effects';
import { UsuarioPerfilEffects } from './seguridad/usuario-perfil-seg.effects';
import { AsignacionPermisosEffects } from './seguridad/asignacion-permisos.effects';
import { MenuRecursoEffects } from './seguridad/menu-recurso.effects';
// Procesos
import { ProcesoEffects } from './procesos/mantenimiento/proceso.effects';
import { ProgramaEffects } from './procesos/mantenimiento/programa.effects';
import { SubprogramaEffects } from './procesos/mantenimiento/subprograma.effects';
import { TipoSubprogramaEffects } from './procesos/mantenimiento/tipo-subprograma.effects';
import { ArchivoEffects } from './procesos/mantenimiento/archivo.effects';
import { ArchivoCampoEffects } from './procesos/mantenimiento/archivo-campo.effects';
import { HeaderTrailerEffects } from './procesos/mantenimiento/header-trailer.effects';
import { BatchMultitabCabEffects } from './procesos/mantenimiento/batch-multitab-cab.effects';
import { BatchMultitabDetEffects } from './procesos/mantenimiento/batch-multitab-det.effects';
import { EjecucionManualEffects } from './procesos/ejecucion-manual.effects';
import { LogControlProgramaEffects } from './procesos/consultas/log-control.effects';
import { GeneracionLogEffects } from './procesos/consultas/generacion-log.effects';
import { ParametroBatchEffects } from './procesos/mantenimiento/parametro-batch.effects';
import { CargaMiscVisaEffects } from './procesos/carga-manual/carga-misc-visa.effects';
import { CargaMiscMCEffects } from './procesos/carga-manual/carga-misc-mc.effects';
import { SubProgramaCargaArchivoEffects } from './procesos/mantenimiento/subprograma-carga-archivo.effects';
import { SubProgramaGeneraArchivoEffects } from './procesos/mantenimiento/subprograma-genera-archivo.effects';
import { SubProgramaProcedimientoSqlEffects } from './procesos/mantenimiento/subprograma-procedimiento-sql.effects';

export const effectsArr = [
  AuthEffects,
  AuthSistemaEffects,
  // Mantenimientos
  BinEffects,
  ClaseTransaccionEffects,
  InstitucionEffects,
  CodigoTransaccionEffects,
  AtmRedUnicardEffects,
  AtmRedAsociadaEffects,
  TransaccionXinstitucionEffects,
  MonedaEffects,
  ServicioEffects,
  ParametroSistemaEffects,
  CargaMiscVisaEffects,
  MembresiaEffects,
  CanalEffects,
  ProductoEffects,
  ModoEntradaPosEffects,
  OrigenEffects,
  CodigoRptaSwitchEffects,
  CodigoRptaMembresiaEffects,
  CodigoRazonCobroVisaEffects,
  CodigoFacturacionEffects,
  PortafolioEffects,
  MultitabCabEffects,
  MultitabDetEffects,
  DistribucionComisionEffects,
  DistribucionFondoEffects,
  TransaccionMarcaIntEffects,
  TipoCuentaCompensacionEffects,
  TipoComisionEffects,
  CodigoProcesoSwitchEffects,
  MetodoIdThbEffects,
  TipoTerminalPosEffects,
  IndicadorCorreoTelefonoEffects,
  PaisEffects,
  IndLimitePisoEffects,
  RolTransaccionEffects,
  CategoriaNegocioEffects,
  GiroNegocioEffects,
  ParametroConsultaEffects,
  ReglasCompensacionEffects,
  OrigenArchivoEffects,
  TasaInteresPasivaEffects,
  ProgramaBinEffects,
  LiberacionMarcaEffects,
  EventosVisaEffects,
  EventosTransaccionVisaEffects,
  EventosInstitucionVisaEffects,
  DistribucionVisaEventosEffects,
  DistribucionMcEventosEffects,
  EventosMastercardEffects,
  EventosTransaccionMastercardEffects,
  EventosInstitucionMastercardEffects,
  TipoIrregularEffects,
  RegionEffects,
  // Tarifario
  GrupoBinTarifaEffects,
  TipoTarifaEffects,
  EscenarioContableEffects,
  EsquemaTarifarioEffects,
  TarifarioEmisorEffects,
  TarifarioAdquirenteEffects,
  TarifarioSurchargeEffects,
  TarifarioMiembroEffects,
  TarifarioVISAEffects,
  // Consultas
  SwdmplogEffects,
  RangoBinMCEffects,
  BulkfileMcEffects,
  IpmMcEffects,
  RangoBinMCEffects,
  IncomingVisaTC5Effects,
  IncomingVisaTC5TCR0Effects,
  IncomingVisaTC5TCR1Effects,
  IncomingVisaTC5TCR3Effects,
  IncomingVisaTC5TCR4Effects,
  IncomingVisaTC5TCR5Effects,
  IncomingVisaTC10TCR0Effects,
  IncomingVisaTC48Effects,
  IncomingVisaTC48TCR0Effects,
  IncomingVisaTC48TCR1Effects,
  CompensacionEffects,
  ComisCompensacionEffects,
  ObservadaEffects,
  LiberacionEffects,
  TipoCambioSBSEffects,
  TipoCambioMembEffects,
  BinVisaEffects,
  RangoBinVisaEffects,
  DcinChargeEffects,
  IrregularEffects,
  IataEffects,
  PMPEffects,
  OutgoingVisaTC5Effects,
  OutgoingVisaTC5TCR0Effects,
  OutgoingVisaTC5TCR1Effects,
  OutgoingVisaTC5TCR5Effects,
  OutgoingVisaTC10TCR0Effects,
  FacturacionIrregularMasterCardEffects,
  FacturacionIrregularVisaEffects,
  FacturaVisaEffects,
  FacturaMCEffects,
  EstablecimientoDcpEffects,
  IatasEffects,
  EstablecimientoVisanetEffects,
  EstablecimientoVisanetComisEffects,
  // Reportes
  DcioutChargeEffects,
  // Reportes
  TablasForaneasEffects,
  TablaEffects,
  OperadorEffects,
  PerfilRepEffects,
  ParametroRepEffects,
  PerfilCampoEffects,
  PerfilUsuarioEffects,
  CampoEffects,
  UsuarioEffects,
  PermisoUsuarioEffects,
  ReporteEffects,
  TablaQueryEffects,
  CampoQueryEffects,
  FuncionGrupoEffects,
  CondicionQueryEffects,
  OperadorTipoDatoEffects,
  // Conciliacion
  PaqueteEffects,
  ConciliacionEffects,
  ConciliacionTablasEffects,
  CampoMatchingEffects,
  CampoDiferenciaEffects,
  CampoActualizarEffects,
  CampoInsertarObservadaEffects,
  // Seguridad
  SistemaEffects,
  UsuarioSegEffects,
  TipoAutenticacionEffects,
  ParametroSeguridadEffects,
  CategoriaRecursoEffects,
  AccionEffects,
  RecursoEffects,
  MenuEffects,
  TipoMenuEffects,
  PerfilEffects,
  UsuarioPerfilEffects,
  AsignacionPermisosEffects,
  MenuRecursoEffects,
  // Procesos
  ProcesoEffects,
  ProgramaEffects,
  SubprogramaEffects,
  TipoSubprogramaEffects,
  ArchivoEffects,
  ArchivoCampoEffects,
  HeaderTrailerEffects,
  BatchMultitabCabEffects,
  BatchMultitabDetEffects,
  EjecucionManualEffects,
  LogControlProgramaEffects,
  GeneracionLogEffects,
  ParametroBatchEffects,
  CargaMiscMCEffects,
  CargaMiscVisaEffects,
  SubProgramaCargaArchivoEffects,
  SubProgramaGeneraArchivoEffects,
  SubProgramaProcedimientoSqlEffects
];

export * from './auth/auth.effects';
export * from './auth/auth-sistema.effects';
// Mantenimientos
export * from './mantenimiento/bin.effects';
export * from './mantenimiento/clase-transaccion.effects';
export * from './mantenimiento/institucion.effects';
export * from './mantenimiento/codigo-transaccion.effects';
export * from './mantenimiento/atm-red-asociada.effects';
export * from './mantenimiento/atm-red-unicard.effects';
export * from './mantenimiento/transaccion-x-institucion.effects';
export * from './mantenimiento/moneda.effects';
export * from './mantenimiento/servicio.effects';
export * from './mantenimiento/parametro-sistema.effects';
export * from './mantenimiento/membresia.effects';
export * from './mantenimiento/canal.effects';
export * from './mantenimiento/producto.effects';
export * from './facturacion/codigo-facturacion.effects';
export * from './mantenimiento/codigo-rpta-switch.effects';
export * from './mantenimiento/codigo-rpta-membresia.effects';
export * from './mantenimiento/codigo-razon-cobro-visa.effects';
export * from './facturacion/portafolio.effects';
export * from './mantenimiento/multitab-cab.effects';
export * from './mantenimiento/multitab-det.effects';
export * from './mantenimiento/distribucion-comision.effects';
export * from './mantenimiento/distribucion-fondo.effects';
export * from './mantenimiento/transaccion-marca-int.effects';
export * from './mantenimiento/tipo-cuenta-comepnsacion.effects';
export * from './mantenimiento/tipo-comision.effects';
export * from './mantenimiento/codigo-proceso-switch.effects';
export * from './mantenimiento/metodo-id-thb.effects';
export * from './mantenimiento/tipo-terminal-pos.effects';
export * from './mantenimiento/indicador-correo-telefono.effects';
export * from './mantenimiento/pais.effects';
export * from './mantenimiento/ind-limite-piso.effects';
export * from './mantenimiento/rol-transaccion.effects';
export * from './mantenimiento/categoria-negocio.effects';
export * from './mantenimiento/giro-negocio.effects';
export * from './mantenimiento/parametro-consulta.effects';
export * from './mantenimiento/reglas-compensacion.effects';
export * from './mantenimiento/origen-archivo.effects';
export * from './mantenimiento/tasa-interes-pasiva.effects';
export * from './mantenimiento/programa-bin.effects';
export * from './mantenimiento/liberacion-marca.effects';
export * from './mantenimiento/eventos-visa.effects';
export * from './mantenimiento/eventos-transaccion-visa.effects';
export * from './mantenimiento/eventos-institucion-visa.effects';
export * from './mantenimiento/eventos-mastercard.effects';
export * from './mantenimiento/eventos-transaccion-mastercard.effects';
export * from './mantenimiento/eventos-institucion-mastercard.effects';
export * from './mantenimiento/tipo-irregular.effects';
export * from './mantenimiento/region.effects';
// Tarifario
export * from './tarifario/tipo-tarifa.effects';
export * from './tarifario/escenario-contable.effects';
export * from './tarifario/esquema-tarifario.effects';
export * from './tarifario/tarifario-emisor.effects';
export * from './tarifario/tarifario-adquirente.effects';
export * from './tarifario/tarifario-surcharge.effects';
export * from './tarifario/grupo-bin-tarifa.effects';
export * from './tarifario/tarifario-miembro.effects';
export * from './tarifario/tarifario-visa.effects';
// Consultas
export * from './consultas/swdmplog.effects';
export * from './consultas/bulkfile-mc.effects';
export * from './consultas/rango-bin-mc.effects';
export * from './consultas/ipm-mc.effects';
export * from './consultas/incoming-visa-tc5.effects';
export * from './consultas/incoming-visa-tc5-tcr0.effects';
export * from './consultas/incoming-visa-tc5-tcr1.effects';
export * from './consultas/incoming-visa-tc5-tcr3.effects';
export * from './consultas/incoming-visa-tc5-tcr4.effects';
export * from './consultas/incoming-visa-tc5-tcr5.effects';
export * from './consultas/incoming-visa-tc10-tcr0.effects';
export * from './consultas/incoming-visa-tc48.effects';
export * from './consultas/incoming-visa-tc48-tcr0.effects';
export * from './consultas/incoming-visa-tc48-tcr1.effects';
export * from './consultas/compensacion.effects';
export * from './consultas/comis-compensacion.effects';
export * from './consultas/observada.effects';
export * from './consultas/liberacion.effects';
export * from './consultas/tipo-cambio-sbs.effects';
export * from './consultas/tipo-cambio-memb.effects';
export * from './consultas/bin-visa.effects';
export * from './consultas/rango-bin-visa.effects';
export * from './consultas/dcin-charge.effects';
export * from './consultas/irregular.effects';
export * from './consultas/outgoing-visa-tc5.effects';
export * from './consultas/outgoing-visa-tc5-tcr0.effects';
export * from './consultas/outgoing-visa-tc5-tcr1.effects';
export * from './consultas/outgoing-visa-tc5-tcr5.effects';
export * from './consultas/outgoing-visa-tc10-tcr0.effects';
export * from './consultas/facturacion-irregular-visa.effects';
export * from './consultas/factura-visa.effects';
export * from './consultas/factura-mc.effects';
export * from './consultas/facturacion-irregular-master-card.effects';
export * from './consultas/iata.effects';
export * from './consultas/pmp.effects';
export * from './consultas/dciout-charge.effects';
export * from './consultas/establecimiento-dcp.effects';
export * from './consultas/iata.effects';
export * from './consultas/establecimiento-visanet.effects';
export * from './consultas/establecimiento-visanet-comis.effects';
// Reportes
export * from './reportes/tablas-foraneas.effects';
export * from './reportes/tabla.effects';
export * from './reportes/perfil-rep.effects';
export * from './reportes/parametro-rep.effects';
export * from './reportes/perfil-campo.effects';
export * from './reportes/campo.effects';
export * from './reportes/permiso-usuario.effects';
export * from './reportes/usuario.effects';
export * from './reportes/reporte.effects';
export * from './reportes/tabla-query.effects';
export * from './reportes/campo-query.effects';
export * from './reportes/funcion-grupo.effects';
export * from './reportes/condicion.effects';
export * from './reportes/operador-tipo-dato.effects';
// Conciliacion
export * from './conciliacion/paquete.effects';
export * from './conciliacion/conciliacion.effects';
export * from './conciliacion/conciliacion-tablas.effects';
export * from './conciliacion/campo-matching.effects';
export * from './conciliacion/campo-diferencia.effects';
export * from './conciliacion/campo-actualizar.effects';
export * from './conciliacion/campo-insertar-observada.effects';
// Seguridad
export * from './seguridad/sistema.effects';
export * from './seguridad/usuario-seg.effects';
export * from './seguridad/tipo-autenticacion.effects';
export * from './seguridad/parametro-seguridad.effects';
export * from './seguridad/categoria-recurso.effects';
export * from './seguridad/accion.effects';
export * from './seguridad/recurso.effects';
export * from './seguridad/menu.effects';
export * from './seguridad/tipo-menu.effects';
export * from './seguridad/perfil.effects';
export * from './seguridad/usuario-perfil-seg.effects';
export * from './seguridad/asignacion-permisos.effects';
export * from './seguridad/menu-recurso.effects';
// Procesos
export * from './procesos/mantenimiento/proceso.effects';
export * from './procesos/mantenimiento/programa.effects';
export * from './procesos/mantenimiento/subprograma.effects';
export * from './procesos/mantenimiento/tipo-subprograma.effects';
export * from './procesos/mantenimiento/archivo.effects';
export * from './procesos/mantenimiento/archivo-campo.effects';
export * from './procesos/mantenimiento/header-trailer.effects';
export * from './procesos/mantenimiento/batch-multitab-cab.effects';
export * from './procesos/mantenimiento/batch-multitab-det.effects';
export * from './procesos/ejecucion-manual.effects';
export * from './procesos/consultas/log-control.effects';
export * from './procesos/consultas/generacion-log.effects';
export * from './procesos/mantenimiento/parametro-batch.effects';
export * from './procesos/carga-manual/carga-misc-visa.effects';
export * from './procesos/mantenimiento/subprograma-carga-archivo.effects';
export * from './procesos/mantenimiento/subprograma-genera-archivo.effects';
export * from './procesos/mantenimiento/subprograma-procedimiento-sql.effects';
