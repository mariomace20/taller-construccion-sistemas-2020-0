import { HelpText, HELPS } from './help.util';

export interface Type {
    name: string,
    title: string,
    otherTitle?: string, //Mario: si se desea aniadir un titulo diferente al normal en los mantenimientos
    resource: string,
    fileNameExport?: string,
    module?: string,
    helpText?: HelpText,
}

export const MODULE = {
  MANTENIMIENTO: '1',
  CONSULTAS: '2',
  REPORTES: '3',
  PROCESOS: '4',
  SEGURIDAD: '5'
};

export const TYPES = {
  /* Mantenimientos */
  BIN: { name: 'BIN', title: 'BIN', resource: 'MANT_BIN', fileNameExport:"BINs", module: MODULE.MANTENIMIENTO},
  ATM_RED_ASOCIADA: { name: 'ATM Red Asociada', title: 'ATM Red Asociada', resource: 'MANT_ATREAS', fileNameExport:"ATMsRedAsociada", module: MODULE.MANTENIMIENTO },
  ATM_RED_UNICARD: { name: 'ATM Red Unicard', title: 'ATM Red Unicard', resource: 'MANT_ATREUN', fileNameExport:"ATMsRedUnicard", module: MODULE.MANTENIMIENTO},
  INSTITUCION: { name: 'Institución', title: 'Institución', resource: 'MANT_INSTIT', fileNameExport:"Instituciones", module: MODULE.MANTENIMIENTO },
  CLASE_TRANSACCION: { name: 'Clase Transacción', title: 'Clase Transacción', resource: 'MANT_CLATRA', fileNameExport:"ClasesTransaccion", module: MODULE.MANTENIMIENTO},
  CODIGO_TRANSACCION: { name: 'Código Transacción', title: 'Código Transacción', resource: 'MANT_CODTRA', fileNameExport:"CodigosTransaccion", module: MODULE.MANTENIMIENTO },
  TXN_X_INSTITUCION: { name: 'Txn por Institución', title: 'Transacción x Institución', resource: 'MANT_INSTRA', fileNameExport:"TransaccionesInstitucion", module: MODULE.MANTENIMIENTO },
  SERVICIO: { name: 'Servicio', title: 'Servicio', resource: 'MANT_SERVIC', fileNameExport:"ServiciosInstitucion", module: MODULE.MANTENIMIENTO },
  PARAMETRO_SISTEMA: { name: 'Parámetro Sistema', title: 'Parámetro Sistema', resource: 'MANT_PARSIS',  fileNameExport:"ParametroSistema", module: MODULE.MANTENIMIENTO },
  MEMBRESIA: { name: 'Membresía', title: 'Membresía', resource: 'MANT_MEMBRE', fileNameExport:"Membresías", module: MODULE.MANTENIMIENTO },
  CANAL: { name: 'Canal', title: 'Canal', resource: 'MANT_CANAL', fileNameExport:"Canales", module: MODULE.MANTENIMIENTO },
  PRODUCTO: { name: 'Producto', title: 'Producto', resource: 'MANT_PRODUCTO', fileNameExport: "Productos", module: MODULE.MANTENIMIENTO},
  CODIGO_FACTURACION: { name: 'Código Facturación', title: 'Código Facturación', resource: 'MANT_CODFAC', fileNameExport:"CodigosFacturacion" , module: MODULE.MANTENIMIENTO},
  CODIGO_RPTA_SWITCH: { name: 'Código Respuesta Switch', title: 'Código Respuesta Switch', resource: 'MANT_CORPSW', fileNameExport:"CodigosRptaSwitch", module: MODULE.MANTENIMIENTO },
  PORTAFOLIO: { name: 'Portafolio', title: 'Portafolio', resource: 'MANT_PORTAF', fileNameExport:"Portafolios" , module: MODULE.MANTENIMIENTO},
  CODIGO_PROCESO_SWITCH: { name: 'Código Proceso Switch', title: 'Código Proceso Switch', resource: 'MANT_COPRSW', fileNameExport:"CodigosProcesoSwitch", module: MODULE.MANTENIMIENTO},
  CODIGO_RPTA_MEMBRESIA: { name: 'Código Respuesta Marca Internacional', title: 'Código Respuesta Marca Internacional', resource: 'MANT_CODRPTAMEMB', fileNameExport:"CodigosRptaMarcaInt", module: MODULE.MANTENIMIENTO },
  CODIGO_RAZON_COBRO_VISA: { name: 'Código Razón Cobro VISA', title: 'Código Razón Cobro VISA', resource: 'MANT_CODRAZ_VISA', fileNameExport: 'CodigosRazonCobroVisa', module: MODULE.MANTENIMIENTO },
  METODO_ID_THB:{name:'Método ID THB',title:'Método ID THB',resource:'MANT_METIDTHB', fileNameExport:"MetodosIDTHB", module: MODULE.MANTENIMIENTO},
  MODO_ENTRADA_POS:{name:'Modo Entrada POS',title:'Modo Entrada POS',resource:'MANT_MODENTPOS', fileNameExport:"ModosEntradaPOS", module: MODULE.MANTENIMIENTO},
  TIPO_TERM_POS:{name:'Capacidad Terminal POS',title:'Capacidad Terminal POS',resource:'MANT_CAPTERPOS' , fileNameExport:"CapacidadTerminalPOS", module: MODULE.MANTENIMIENTO},
  IND_CORREO_TELEFONO:{name:'Indicador Correo Teléfono',title:'Indicador Correo Teléfono',resource:'MANT_INDCORRTELF', fileNameExport:"IndicadoresCorreoTelefono", module: MODULE.MANTENIMIENTO},
  ORIGEN: { name: 'Origen', title: 'Origen', resource: 'MANT_ORIGEN', fileNameExport:"Origenes" , module: MODULE.MANTENIMIENTO},
  MULTITAB_CAB: { name: 'Tabla de Tablas', title: 'Tabla de Tablas', resource: 'MANT_MULCAB', fileNameExport:"Multitablas" , module: MODULE.MANTENIMIENTO},
  MULTITAB_DET: { name: 'Tabla de Tablas Detalle', title: 'Tabla de Tablas Detalle', resource: 'MANT_MULDET', fileNameExport:"MultitablasDetalle", module: MODULE.MANTENIMIENTO },
  DISTRIBUCION_COMISION: { name: 'Distribución de Comisiones', title: 'Distribución de Comisiones', resource: 'MANT_REGCOMPCOM', fileNameExport:"DistribucionesComision", module: MODULE.MANTENIMIENTO},
  DISTRIBUCION_FONDO: { name: 'Distribución de Fondos', title: 'Distribución de Fondos', resource: 'MANT_REGCOMPFOND', fileNameExport:"DistribucionesFondos", module: MODULE.MANTENIMIENTO },
  TRANSACCION_MARCA_INT : { name: 'Transaccion Marca Internacional', title: 'Transaccion Marca Internacional', resource: 'MANT_TXN_MARCA_INT', fileNameExport:"TxnsMarcasInternacionales", module: MODULE.MANTENIMIENTO},
  TIPO_CUENTA_COMPENSACION: { name: 'Tipo Cuenta Compensación', title: 'Tipo Cuenta Compensación', resource: 'MANT_TIPO_CUENTA_COMP' , fileNameExport:"TiposCuentaCompensacion", module: MODULE.MANTENIMIENTO},
  TIPO_COMISION: { name: 'Tipo Comisión', title: 'TipoComisión', resource: 'MANT_TIPO_COMISION', fileNameExport:"TiposComision" , module: MODULE.MANTENIMIENTO},
  PAIS:{name:'Pais', title: 'Pais', resource: 'MANT_PAIS', fileNameExport:"Paises", module: MODULE.MANTENIMIENTO},
  REGLAS_COMPENSACION:{name: 'Reglas Compensación', title: 'Reglas Compensación', resource: 'MANT_REGLAS_COMPENSACION', fileNameExport:"Reglas Compensacion", module: MODULE.MANTENIMIENTO},
  TASA_INTERES_PASIVA: {name: 'Tasa de Interés Legal', title: 'Tasa Interés Legal', resource: 'MANT_TASA_INTERES_PASIVA', fileNameExport: 'Tasa Interes Legal', module: MODULE.MANTENIMIENTO},
  PROGRAMA_BIN: {name: 'Programa BIN', title: 'Programa BIN', resource: 'MANT_PROGRAMA_BIN', fileNameExport: 'Programa BIN', module: MODULE.MANTENIMIENTO},
  LIBERACION_MARCA: {name: 'Liberación Marca', title: 'Liberación Marca', resource: 'MANT_LIBMAR', fileNameExport: 'LiberacionMarca', module: MODULE.MANTENIMIENTO},
  EVENTOS_VISA_PADRE: {name: 'Eventos VISA', otherTitle: 'Eventos VISA', title: 'Eventos VISA', resource: 'MANT_BILLING_VISA', fileNameExport: 'EventosVisa', module: MODULE.MANTENIMIENTO},
  EVENTOS_VISA_TAB: {name: 'Eventos VISA', title: 'Eventos VISA', otherTitle: 'Consulta de Eventos VISA', resource: 'MANT_BILLING_VISA', fileNameExport: 'EventosVisa', module: MODULE.MANTENIMIENTO},
  EVENTOS_VISA_X_TRANSACCION_TAB: {name: 'Eventos VISA por Transacción', title: 'Eventos VISA por Transacción', resource: 'MANT_BILLING_TXN_VISA', fileNameExport: 'EventosTransaccionesVisa', module: MODULE.MANTENIMIENTO},
  EVENTOS_VISA_X_INSTITUCION_TAB: {name: 'Eventos VISA por Institución', title: 'Eventos VISA por Institución', resource: 'MANT_BILLING_INST_VISA', fileNameExport: 'EventosInstitucionesVisa', module: MODULE.MANTENIMIENTO},
  EVENTOS_MASTERCARD: {name: 'Eventos MasterCard', otherTitle: 'Eventos MasterCard', title: 'Eventos MasterCard', resource: '', fileNameExport: 'EventosMasterCard', module: MODULE.MANTENIMIENTO},
  DISTRIBUCION_VISA_EVENTOS: {name: 'Distribución Eventos VISA', otherTitle: 'Distribución Eventos VISA', title: 'Distribución Eventos VISA Porcentual', resource: 'MANT_DIST_EVENTO_VISA', fileNameExport: 'DistribuciónEventosVisa', module: MODULE.MANTENIMIENTO},
  DISTRIBUCION_MC_EVENTOS: {name: 'Distribución Eventos MaterCard', otherTitle: 'Distribución Eventos MasterCard', title: 'Distribución Eventos MasterCard Porcentual', resource: 'MANT_DIST_EVENTO_MC', fileNameExport: 'DistribuciónEventosMasterCard', module: MODULE.MANTENIMIENTO},
  EVENTOS_MASTERCARD_PADRE: {name: 'Eventos MasterCard', otherTitle: 'Eventos MasterCard', title: 'Eventos MasterCard', resource: 'MANT_EVENT_MC', fileNameExport: 'EventosMasterCard', module: MODULE.MANTENIMIENTO},
  EVENTOS_MASTERCARD_TAB: {name: 'Eventos MasterCard', title: 'Eventos MasterCard', otherTitle: 'Consulta de Eventos MasterCard', resource: 'MANT_EVENT_MC', fileNameExport: 'EventosMasterCard', module: MODULE.MANTENIMIENTO},
  EVENTOS_MASTERCARD_X_TRANSACCION_TAB: {name: 'Eventos MasterCard por Transacción', title: 'Eventos MasterCard por Transacción', resource: 'MANT_EVENT_MC', fileNameExport: 'EventosTransaccionesVisa', module: MODULE.MANTENIMIENTO},
  EVENTOS_MASTERCARD_X_INSTITUCION_TAB: {name: 'Eventos MasterCard por Institución', title: 'Eventos MasterCard por Institución', resource: 'MANT_EVENT_MC', fileNameExport: 'EventosInstitucionesVisa', module: MODULE.MANTENIMIENTO},
  ORIGEN_ARCHIVO: { name: 'Origen Archivo', title: 'Origen Archivo', resource: 'MANT_ORIARC', fileNameExport:"OrigenesArchivos" , module: MODULE.MANTENIMIENTO},
  /* Tarifario */
  TARIFARIO_EMISOR: { name: 'Tarifario Emisor', title: 'Tarifario Emisor', resource: 'MANT_TAREMI', fileNameExport: 'TarifariosEmisor', module: MODULE.MANTENIMIENTO },
  TARIFARIO_ADQUIRENTE: { name: 'Tarifario Adquirente', title: 'Tarifario Adquirente', resource: 'MANT_TARADQ', fileNameExport:"TarifariosAdquirente", module: MODULE.MANTENIMIENTO },
  TARIFARIO_SURCHARGE: { name: 'Tarifario Surcharge', title: 'Tarifario Surcharge', resource: 'MANT_TARSUR', fileNameExport:"TarifariosSurcharge", module: MODULE.MANTENIMIENTO },
  TARIFARIO_MIEMBRO: { name: 'Tarifario Miembro', title: 'TarifarioMiembro', resource: 'MANT_TARIFARIO_MIEMBRO', fileNameExport:"TarifariosMiembro", module: MODULE.MANTENIMIENTO },
  TARIFARIO_VISA: { name: 'Tarifario VISA', title: 'TarifarioVISA', resource: 'MANT_TARIFARIO_VISA', fileNameExport: "TarifariosVISA", module: MODULE.MANTENIMIENTO},
  ESQUEMA_TARIFARIO: { name: 'Esquema Tarifario', title: 'Esquema Tarifario', resource: 'MANT_ESQUEMA_TARIFARIO', fileNameExport:"EsquemasTarifario" , module: MODULE.MANTENIMIENTO},
  TIPO_TARIFA: { name: 'Tipo Tarifa', title: 'Tipo Tarifa', resource: 'MANT_TIPTAR', fileNameExport:"TiposTarifa" },
  ESCENARIO_CONTABLE: { name: 'Escenario Contable', title: 'Escenario Contable', resource: 'MANT_ESCCONT', fileNameExport:"EscenariosContables", module: MODULE.MANTENIMIENTO },
  INDICADOR_LIMITE_PISO: { name: 'Indicador Límite de Piso', title: 'Indicador Límite de Piso', resource: 'MANT_INDLIMPISO', fileNameExport:"IndicadoresLimitePiso", module: MODULE.MANTENIMIENTO },
  /* Consultas */
  INCOMING_VISA: { name: 'Incoming VISA', title: 'Incoming VISA', resource: 'CON_INCOMVISA', fileNameExport:"IncomingVisa", module: MODULE.CONSULTAS },
  BULKFILE_MC: { name: 'Bulk File MasterCard', title: 'Bulk File MasterCard', resource: 'CON_BULKFILEMC', fileNameExport:"BulkFileMC", module: MODULE.CONSULTAS },
  IPM_MC: { name: 'IPM MasterCard', title: 'IPM MasterCard', resource: 'CON_IPM_MC', fileNameExport:"IPMMC", module: MODULE.CONSULTAS },
  SWDMPLOG:  { name: 'SWDMPLOG', title: 'SWDMPLOG', resource: 'CON_SWDMPLOG', fileNameExport:"Swdmplog", module: MODULE.CONSULTAS },
  COMPENSACION:{name:'Log Contable',title: 'Log Contable',resource:'CON_COMPENSACION', fileNameExport:"LogContable", module: MODULE.CONSULTAS},
  AVISO_BASE_I_VISA:{name:'Avisos Base I VISA',title: 'Avisos Base I VISA', resource:'CON_AVISOSBASEI_VISA' , fileNameExport:"AvisosBaseI", module: MODULE.CONSULTAS},
  COBRO_DESM_VISA:{name:'Cobros y Desembolsos VISA', title: 'Cobros y Desembolsos VISA',resource:'CON_COBRODES_VISA', fileNameExport:"CobrosDesembolsos", module: MODULE.CONSULTAS},
  OBSERVADA:{name:'Transacciones Observadas', title: 'Transacciones Observadas',resource:'CON_TXN_OBSERVADA', fileNameExport:"Observadas", module: MODULE.CONSULTAS},
  LIBERACION:{name:'Transacciones Liberadas', title: 'Transacciones Liberadas',resource:'CON_LIBERACION', fileNameExport:"Liberadas", module: MODULE.CONSULTAS},
  ESTABLECIMIENTO_DCP: {name: 'Establecimientos DCP', title: 'Establecimientos DCP', resource: 'CON_ESTABLECIMIENTO_DCP', fileNameExport: 'EstablecimientosDCP', module: MODULE.CONSULTAS},
  ESTABLECIMIENTO_VISANET: {name: 'Establecimientos VisaNet', title: 'Establecimientos VisaNet', resource: 'CON_ESTABLECIMIENTO_VISANET', fileNameExport: 'EstablecimientosVisaNet', module: MODULE.CONSULTAS},
  FACTURACION_IRREGULAR_VISA: {name: 'Facturación Irregular VISA', title: 'Facturación Irregular VISA', otherTitle: 'Facturación Irregular VISA', resource: 'CON_FACTURA_VISA_IRR', fileNameExport: 'FacturacionesIrregularesVisa', module: MODULE.CONSULTAS},
  FACTURACION_IRREGULAR_MASTER_CARD: {name: 'Facturación Irregular Master Card', title: 'Facturación Irregular Master Card', otherTitle: 'Facturación Irregular Master Card', resource: 'CON_FACTURA_MC_IRR', fileNameExport: 'FacturacionesIrregularesMasterCard', module: MODULE.CONSULTAS},
  TIPO_CAMBIO:{name:'Tipo Cambio', otherTitle:'Consulta Tipo de Cambio', title: 'Tipo Cambio',resource:'CON_TIPOCAMBIO', fileNameExport:"Tipo Cambio", module: MODULE.CONSULTAS, helpText: HELPS.TIPO_CAMBIO},
  TIPO_CAMBIO_SBS:{name:'Tipo Cambio SBS', title: 'Tipo Cambio SBS',resource:'CON_TIPOCAMBIO', fileNameExport:"Tipo Cambio SBS", module: MODULE.CONSULTAS},
  TIPO_CAMBIO_MEMB:{name:'Tipo Cambio Membresia', title: 'Tipo Cambio Membresia',resource:'CON_TIPOCAMBIO', fileNameExport:"Tipo Cambio Membresia", module: MODULE.CONSULTAS},
  BIN_VISA: { name: 'Bines VISA', title: 'Bines VISA', resource: 'CON_BIN_VISA', fileNameExport:"BinesVisa", module: MODULE.CONSULTAS},
  RANGO_BIN_VISA: { name: 'Rango Bines VISA', title: 'Rango Bines VISA', resource: 'CON_BIN_VISA', fileNameExport:"RangoBinesVisa", module: MODULE.CONSULTAS},
  BINES_VISA:{name: 'Bines VISA',title:'Bines VISA',resource:'CON_BIN_VISA', module: MODULE.CONSULTAS},
  INCOMING_DINERS:{name: 'Incoming Diners',title:'Incoming Diners',resource:'CON_INCOMDINERS', module: MODULE.CONSULTAS},
  OUTGOING_DINERS:{name: 'Outgoing Diners',title:'Outgoing Diners',resource:'CON_OUTDINERS', module: MODULE.CONSULTAS},
  DCIN: { name: 'Incoming DCIN', title: 'Incoming DCIN', resource: 'CON_INCOMDINERS', fileNameExport:"IncomingDinersDCIN", module: MODULE.CONSULTAS},
  IATA: { name: 'IATA', title: 'IATA', resource: 'CON_INCOMDINERS', fileNameExport:"IncomingDinersIATA", module: MODULE.CONSULTAS},
  PMP: { name: 'PMP', title: 'PMP', resource: 'CON_INCOMDINERS', fileNameExport:"IncomingDinersPMP", module: MODULE.CONSULTAS},
  IRREGULAR: { name: 'Irregular', title: 'Irregular', resource: 'CON_TXN_IRREG', fileNameExport:"Irregular", module: MODULE.CONSULTAS},
  OUTGOING_VISA: { name: 'Outgoing VISA', title: 'Outgoing VISA', resource: 'CON_OUTOMVISA', fileNameExport:"OutgoingVisa", module: MODULE.CONSULTAS },
  COBRO_DESM_OUT_VISA:{name: 'Cobros y Desembolsos Outgoing VISA', title: 'Cobros y Desembolsos Outgoing VISA',resource:'CON_COBRODES_OUT_VISA', fileNameExport:"CobrosDesembolsosOutgoing", module: MODULE.CONSULTAS},
  BIN_MC: { name: 'Bines Mastercard', title: 'Bines Mastercard', resource: 'CON_BIN_MC', fileNameExport:"RangoBINsMC", module: MODULE.CONSULTAS},
  RANGO_BIN_MC: { name: 'Rango de Bines Mastercard', title: 'Rango de Bines Mastercard', resource: 'CON_BIN_MC', module: MODULE.CONSULTAS},
  FACTURA_VISA:{name: 'Consulta Facturas VISA', title: 'Factura VISA', resource:'CON_FACT_VISA_EVENTOS', fileNameExport:"FacturaVisa", module: MODULE.CONSULTAS},
  FACTURA_VISA_PADRE:{name: 'Factura VISA', title: 'Factura Eventos VISA', otherTitle: 'Factura Eventos VISA', resource:'CON_FACT_VISA_EVENTOS', fileNameExport:"FacturaVisa", module: MODULE.CONSULTAS},
  FACTURA_MC:{name: 'Factura Mastercard', title: 'Factura Mastercard', resource:'CON_FACT_MC_EVENTOS', fileNameExport:"FacturaMC", module: MODULE.CONSULTAS},
  FACTURA_MC_PADRE:{name: 'Factura Mastercard', title: 'Factura Eventos Mastercard', otherTitle: 'Factura Eventos Mastercard', resource:'CON_FACT_MC_EVENTOS', fileNameExport:"FacturaMastercard", module: MODULE.CONSULTAS},
  IATAS: { name:'IATA Fraccionado', title:'IATA Fraccionado', resource: 'CON_INCOMDINERS', fileNameExport: 'IncomingDinersIATAS', module: MODULE.CONSULTAS },
  /*Reportes*/
  GENERAR_REPORTE: { name: 'Generar Reportes', title: 'Generar Reportes', resource: 'REP_GENCON', module: MODULE.REPORTES },
  PERMISOS_USUARIO: { name: 'Permisos Usuario', title: 'Permisos Usuario', resource: 'MANT_REPORTEADOR', module: MODULE.REPORTES},
  PERFIL_CAMPO: { name: 'CampoPerfil', title: 'CampoPerfil', resource: 'MANT_PERFIL_REP_CAMPO', module: MODULE.REPORTES },
  TABLA:{ name: 'Tabla', title: 'Tabla', resource: 'MANT_TABLA', module: MODULE.REPORTES},
  TABLA_FORANEA:{ name: 'Relación entre Tablas', title: 'TablasForaneas', resource: 'MANT_TABLAS_FORANEAS', module: MODULE.REPORTES},
  PERFIL_REP:{name:'Perfil',title:'Perfil', resource:'MANT_GESPER', module: MODULE.REPORTES},
  MIS_REPORTES:{name:'Mis Reportes',title:'Mis Reportes', resource:'CON_REPGEN', module: MODULE.REPORTES},
  CONFIGURACIONES_GENERALES:{name: 'Configuraciones Generales',title:'Configuraciones Generales',resource:'MANT_CONGENCON', module: MODULE.REPORTES},
  /*Conciliacion*/
  CONC_PAQUETE: { name: 'Paquete Conciliación', title: 'Paquete Conciliación', resource: 'MANT_CNC_PAQUETE', module: MODULE.PROCESOS },
  CONC_CONCILIACION: { name: 'Procedimiento Conciliación', title: 'Paquete Detalle', resource: 'MANT_CNC_CONCILIA', module: MODULE.PROCESOS },
  CONC_GENE_CONC: { name: 'Generación de Conciliación', title: 'Generación de Conciliación', resource: 'CNC_GENCONC', module: MODULE.PROCESOS },
  /*Seguridad*/
  PERFIL: { name: 'Perfil', title: 'Perfil', resource: 'MANT_PERFIL' , fileNameExport:"Perfiles" , module: MODULE.SEGURIDAD},
  USUARIOSEG : {name: 'Usuario', title: 'Usuario', resource: 'MANT_USUARI' , fileNameExport:"Usuarios" , module: MODULE.SEGURIDAD},
  TIPO_AUTENTICACION : {name: 'Tipo Autenticación', title: 'Tipo Autenticación', resource: 'MANT_TIPAUT' , fileNameExport:"Usuarios", module: MODULE.SEGURIDAD},
  PARAMETRO_SEGURIDAD : {name: 'Parámetro Seguridad', title: 'Parametro Seguridad', resource: 'MANT_PARSEG' , fileNameExport:"ParametrosSeguridad", module: MODULE.SEGURIDAD},
  CATEGORIA_RECURSO : {name: 'Categoría Recurso', title: 'Categoría Recurso', resource: 'MANT_CATREC', fileNameExport:"CategoriasRecursos", module: MODULE.SEGURIDAD},
  SISTEMA : {name: 'Sistema', title: 'Sistema', resource: 'MANT_SISTEM' , fileNameExport:"Sistemas", module: MODULE.SEGURIDAD},
  RECURSO: {name: 'Recurso', title: 'Recurso', resource: 'MANT_RECURS', fileNameExport:"Rercusos", module: MODULE.SEGURIDAD},
  MENU: { name: 'Menú', title: 'Menú', resource: 'MANT_MENU', fileNameExport:"Menu" , module: MODULE.SEGURIDAD},
  CTA_USUARIO: { name: 'Cuenta Usuario', title: 'Cuenta Usuario', resource: 'MANT_CTAUSU', fileNameExport:"CuentaUsuario", module: MODULE.SEGURIDAD},
  ASIG_PERMIS: { name: 'Asignación de permisos', title: 'Asignación de permisos', resource: 'ASIG_PERMIS', module: MODULE.SEGURIDAD },
  MENU_RECURSO: { name: 'Aisgnación de recursos', title: 'Asignación de recursos', resource: 'MANT_MEN_REC', module: MODULE.SEGURIDAD },
  /*Procesos*/
  EJEC_MANUAL: { name: 'Ejecución Manual', title: 'Ejecución Manual', resource: 'EJEC_MANUAL', module: MODULE.PROCESOS },
  CARGA_MANUAL_MISC_VISA: { name: 'Carga Manual Misceláneos VISA', title: 'Carga Manual Misceláneos VISA', resource: 'PROC_COBDESVISA', module: MODULE.PROCESOS },
  CARGA_MANUAL_MISC_MC: { name: 'Carga Manual Misceláneos MasterCard', title: 'Carga Manual Misceláneos MasterCard', resource: 'PROC_COBDESMAST', module: MODULE.PROCESOS },
  PROCESO: { name: 'Proceso', title: 'Proceso', resource: 'MANT_PROCESO', module: MODULE.PROCESOS },
  PROGRAMA: { name: 'Programa', title: 'Programa', resource: 'MANT_PROGRAMA', module: MODULE.PROCESOS },
  SUBPROGRAMA: { name: 'Subprograma', title: 'Subprograma', resource: 'MANT_SUB_PROGRAMA', module: MODULE.PROCESOS },
  TIPO_SUBPROGRAMA: { name: 'Tipo Subprograma', title: 'Tipo de subprograma', resource: 'MANT_TIPO_SUBPROGRAMA', module: MODULE.PROCESOS },
  SUBPROG_CARGA_ARCHIVO: {name: 'SubPrograma Carga Archivo', title: 'SubPrograma Carga de Archivo', resource: 'MANT_SUBPROG_CAR_ARCH', module: MODULE.PROCESOS},
  SUBPROG_GENERA_ARCHIVO: { name: 'SubPrograma Genera Archivo', title: 'SubPrograma Genera Archivo', resource: 'MANT_SUBPROG_GEN_ARCH', module: MODULE.PROCESOS},
  SUBPROG_PROCEDIMIENTO_SQL: { name: 'SubPrograma Procedimiento SQL', title: 'SubPrograma Procedimiento SQL', resource: 'MANT_SUBPROG_PROC_SQL', module: MODULE.PROCESOS },
  ARCHIVO: { name: 'Archivo', title: 'Archivo', resource: 'MANT_ARCHIVO', module: MODULE.PROCESOS },
  ARCHIVO_CAMPO: { name: 'Archivo Campo', title: 'Archivo Campo', resource: 'MANT_ARCHIVO_CAMPO', module: MODULE.PROCESOS },
  CON_LOGCTRLPROG: { name: 'Log Control Programa', title: 'Log Control Programa', resource: 'CON_LOGCTRLELEC', fileNameExport: 'Log Generación de Archivos' , module: MODULE.PROCESOS},
  CON_GENLOGPARCIAL: { name: 'Log Generación de Archivos', title: 'Log Generación de Archivos', resource: 'CON_GENLOGPARCIAL', fileNameExport: 'Consulta Log Control Ejecución' , module: MODULE.PROCESOS},
  BATCH_MULTITAB_CAB: { name: 'Tabla de Tablas Batch', title: 'Tabla de Tablas', resource: 'MANT_BATCH_MULCAB', module: MODULE.PROCESOS },
  BATCH_MULTITAB_DET: { name: 'Tabla de Tablas Batch Detalle', title: 'Tabla de Tablas Detalle', resource: 'MANT_BATCH_MULDET', module: MODULE.PROCESOS },
  BATCH_PARAM_GENERAL: { name: 'Parámetro General Batch', title: 'Parámetro General Batch', resource: 'MANT_BATCH_PARGEN', fileNameExport:"ParametrosGeneralesBatch", module: MODULE.PROCESOS }
};

export const RESOURCE_ACTIONS = {
  REGISTRO: '1',
  ACTUALIZACION: '3',
  CONSULTA: '2',
  ELIMINACION: '4',
  EXPORTACION: '5',
  CONSULTA_DETALLE: '7',
  EJECUCION: '6'
};