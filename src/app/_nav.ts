export interface NavData {
  id?: number,
  name?: string;
  url?: string;
  icon?: string;
  badge?: any;
  title?: boolean;
  children?: NavData[];
  variant?: string;
  attributes?: object;
  divider?: boolean;
  class?: string;
  permissions?: string[]
}

/**
 * Temporal, debe venir del backend
 * Solo aparecerá si en su env, auth es false
 */
export const navItems: NavData[] = [
  {
    name: 'Inicio',
    url: '/dashboard',
    icon: 'fa fa-home nivel-0'
  },
  {
    name: 'Mantenimientos',
    icon: 'fa fa-table nivel-0',
    children: [
      {
        name: 'Generales',
        icon: 'fa fa-table nivel-1',
        children: [
          {
            name: 'Parámetro Sistema',
            icon: 'fa fa-puzzle-piece nivel-2',
            url: '/mantenimiento/parametroSistema',
            permissions: ['MANT_PARSIS']
          },
          {
            name: 'Institución',
            icon: 'fa fa-puzzle-piece nivel-2',
            url: '/mantenimiento/institucion',
            permissions: ['MANT_INSTIT']
          },
          {
            name: 'BIN',
            url: '/mantenimiento/bin',
            icon: 'fa fa-puzzle-piece nivel-2',
            permissions: ['MANT_BIN']
          },
          {
            name: 'ATMs',
            icon: 'fa fa-puzzle-piece nivel-2',
            children: [
              {
                name: 'ATM Red Asociada',
                url: '/mantenimiento/atmRedAsociada',
                icon: 'fa fa-puzzle-piece nivel-3',
                permissions: ['MANT_ATREAS']
              }, {
                name: 'ATM Red Unicard',
                url: '/mantenimiento/atmRedUnicard',
                icon: 'fa fa-puzzle-piece nivel-3',
                permissions: ['MANT_ATREUN']
              }
            ]
          },
          {
            name: 'Tabla de tablas',
            url: '/mantenimiento/multitab',
            icon: 'fa fa-puzzle-piece nivel-2',
            permissions: ['MANT_MULCAB', 'MANT_MULDET']
          }
        ]
      }, {
        name: 'Procesamiento',
        icon: 'fa fa-table nivel-1',
        children: [
          {
            name: 'Marcas Internacionales',
            icon: 'fa fa-puzzle-piece nivel-2',
            children: [
              {
                name: 'Switch',
                icon: 'fa fa-puzzle-piece nivel-3',
                children: [
                  {
                    name: 'Códigos Respuestas',
                    url: '/mantenimiento/codigoRptaSwitch',
                    icon: 'fa fa-puzzle-piece nivel-4',
                    permissions: ['MANT_CORPSW']
                  }, {
                    name: 'Códigos Procesos',
                    url: '/mantenimiento/codigoProcesoSwitch',
                    icon: 'fa fa-puzzle-piece nivel-4',
                    permissions: ['MANT_COPRSW']
                  }
                ]
              },
              {
                name: 'Membresía',
                icon: 'fa fa-puzzle-piece nivel-3',
                children: [
                  {
                    name: 'Compensación',
                    icon: 'fa fa-puzzle-piece nivel-4',
                    children: [
                      {
                        name: 'Método Id THB',
                        url: '/mantenimiento/metodoIdThb',
                        icon: 'fa fa-puzzle-piece nivel-5',
                        permissions: ['MANT_METIDTHB']
                      }, {
                        name: 'Modo Entrada POS',
                        url: '/mantenimiento/modoEntradaPos',
                        icon: 'fa fa-puzzle-piece nivel-5',
                        permissions: ['MANT_MODENTPOS']
                      }, {
                        name: 'Capacidad Terminal POS',
                        url: '/mantenimiento/capacidadTerminalPos',
                        icon: 'fa fa-puzzle-piece nivel-5',
                        permissions: ['MANT_CAPTERPOS']
                      }, {
                        name: 'Indicador Correo Teléfono',
                        url: '/mantenimiento/indicadorCorreoTelefono',
                        icon: 'fa fa-puzzle-piece nivel-5',
                        permissions: ['MANT_INDCORRTELF']
                      }
                    ]
                  },
                  {
                    name: 'Códigos Respuesta',
                    url: '/mantenimiento/codigoRptaMembresia',
                    icon: 'fa fa-puzzle-piece nivel-4',
                    permissions: ['MANT_CODRPTAMEMB']
                  }
                ]
              }
            ]
          }]
      },
      {
        name: 'Compensación',
        icon: 'fa fa-table nivel-1',
        children: [
          {
            name: 'Membresías',
            url: '/mantenimiento/membresia',
            icon: 'fa fa-puzzle-piece nivel-2',
            permissions: ['MANT_MEMBRE']
          }, {
            name: 'Servicio',
            url: '/mantenimiento/servicio',
            icon: 'fa fa-puzzle-piece nivel-2',
            permissions: ['MANT_SERVIC']
          }, {
            name: 'Canales',
            url: '/mantenimiento/canal',
            icon: 'fa fa-puzzle-piece nivel-2',
            permissions: ['MANT_CANAL']
          }, {
            name: 'Origen',
            url: '/mantenimiento/origen',
            icon: 'fa fa-puzzle-piece nivel-2',
            permissions: ['MANT_ORIGEN']
          },
          {
            name: 'Clase Transacción',
            url: '/mantenimiento/claseTransaccion',
            icon: 'fa fa-puzzle-piece nivel-2',
            permissions: ['MANT_CLATRA']
          },
          {
            name: 'Código Transacción',
            url: '/mantenimiento/codigoTransaccion',
            icon: 'fa fa-puzzle-piece nivel-2',
            permissions: ['MANT_CODTRA']
          },
          {
            name: 'Transacción x Institución',
            url: '/mantenimiento/transaccionXinstitucion',
            icon: 'fa fa-puzzle-piece nivel-2',
            permissions: ['MANT_INSTRA']
          },
          {
            name: 'Distribución Comisión',
            url: '/mantenimiento/distribucionComision',
            icon: 'fa fa-puzzle-piece nivel-2',
            permissions: ['MANT_REGCOMPCOM']
          },
          {
            name: 'Distribución Fondo',
            url: '/mantenimiento/distribucionFondo',
            icon: 'fa fa-puzzle-piece nivel-2',
            permissions: ['MANT_REGCOMPFOND']
          }
        ]
      },
    ]
  },
  {
    name: 'Consultas',
    icon: 'fa fa-columns nivel-0',
    children: [
      {
        name: 'VISA',
        icon: 'fa fa-cc-visa nivel-1',
        children: [
          {
            name: 'Incoming',
            url: '/consulta/visa/incoming',
            icon: 'fa fa-file nivel-2',
            permissions: ['CON_INCOMVISA']
          } , {
            name: 'Bines',
            url: '/consulta/visa/bines',
            icon: 'fa fa-file nivel-2',
            permissions: ['CON_BIN_VISA']
          }
        ]
      },
      {
        name: 'MasterCard',
        icon: 'fa fa fa-cc-mastercard nivel-1',
        children: [
          {
            name: 'Bulkfile',
            url: '/consulta/mastercard/bulkfile',
            icon: 'fa fa-file nivel-2',
            permissions: ['CON_BULKFILEMC']
          },
          {
            name: 'Bines Mastercard',
            url: '/consulta/mastercard/bin-mc',
            icon: 'fa fa-file nivel-2',
            permissions: ['CON_BIN_MC']
          }
        ]
      },
      {
        name: 'UNIBANCA',
        icon: 'fa fa-university nivel-1',
        children: [
          {
            name: 'SWDMPLOG',
            url: '/consulta/unibanca/swdmplog',
            icon: 'fa fa-file nivel-2',
            permissions: ['CON_SWDMPLOG']
          },
          {
            name: 'Log Contable',
            url: '/consulta/unibanca/compensacion',
            icon: 'fa fa-file nivel-2',
            permissions: ['CON_COMPENSACION']
          }
        ]
      },
      {
        name: 'Diners',
        icon: 'fa fa-cc-visa nivel-1',
        children: [
          {
            name: 'Incoming',
            url: '/consulta/diners/incoming',
            icon: 'fa fa-file nivel-2',
            permissions: ['CON_INCOMDINERS']
          } , {
            name: 'Outgoing',
            url: '/consulta/diners/outgoing',
            icon: 'fa fa-file nivel-2',
            permissions: ['CON_OUTDINERS']
          }
        ]
      }
    ]
  },
  {
    name: 'Facturación',
    icon: 'fa fa-file nivel-0',
    children: [
      {
        name: 'Código Facturación',
        url: '/facturacion/codigoFacturacion',
        icon: 'fa fa-puzzle-piece nivel-1',
        permissions: ['MANT_CODFAC']
      },
      {
        name: 'Portafolio',
        url: '/facturacion/portafolio',
        icon: 'fa fa-puzzle-piece nivel-1',
        permissions: ['MANT_PORTAF']
      }
    ]
  },
  {
    name: 'Tarifarios',
    icon: 'fa fa-file nivel-0',
    children: [{
      name: 'Tipos Tarifas',
      icon: 'fa fa-puzzle-piece nivel-1',
      url: '/tarifario/tipoTarifa',
      permissions: ['MANT_TIPTAR']
    },
    {
      name: 'Escenarios Contables',
      icon: 'fa fa-puzzle-piece nivel-1',
      url: '/tarifario/escenarioContable',
      permissions: ['MANT_ESCCONT']
    },
    {
      name: 'Tarifarios',
      icon: 'fa fa-puzzle-piece nivel-1',
      children: [
        {
          name: 'Tarifario Emisor',
          url: '/tarifario/tarifarioEmisor',
          icon: 'fa fa-puzzle-piece nivel-2',
          permissions: ['MANT_TAREMI']
        },
        {
          name: 'Tarifario Adquirente',
          url: '/tarifario/tarifarioAdquirente',
          icon: 'fa fa-puzzle-piece nivel-2',
          permissions: ['MANT_TARADQ']
        },
        {
          name: 'Tarifario Surcharge',
          url: '/tarifario/tarifarioSurcharge',
          icon: 'fa fa-puzzle-piece nivel-2',
          permissions: ['MANT_TARSUR']
        }
      ]
    }
    ]
  },
  {
    name: 'Reportes',
    icon: 'fa fa-list-alt nivel-0',
    children: [{
      name: 'Reportes Avanzados',
      icon: 'fa fa-window-maximize nivel-1',
      children: [
        {
          name: 'Generar Reportes',
          icon: 'fa fa-file-text nivel-2',
          url: '/reporte/generar-reporte',
          permissions: ['REP_GENCON','REP_MISREP', 'MANT_PERFIL_REP_CAMPO', 'MANT_TABLA', 'MANT_REPORTEADOR']
        },
        {
          name: 'Mis Reportes',
          icon: 'fa fa-file-text nivel-2',
          url: '/reporte/mis-reportes',
          permissions: ['REP_MISREP']
        },
        {
          name: 'Gestión de Perfiles',
          icon: 'fa fa-user-secret nivel-2',
          url: '/reporte/admin-permisos',
          permissions: ['MANT_GESPER']
        },
        {
          name: 'Configuraciones',
          icon: 'fa fa-table nivel-2',
          url: '/reporte/configuraciones-generales',
          permissions: ['MANT_CONGENCON']
        }
      ]
    }]
  },
  {
    name: 'Procesos',
    icon: 'fa fa-tasks nivel-0',
    children: [
      {
        name: 'Carga de Archivos',
        icon: 'fa fa-files-o nivel-1',
        children: [
          {
            name: 'Cobros/Desembolsos',
            icon: 'fa fa-money nivel-2',
            children: [
              {
                name: 'VISA',
                icon: 'fa fa-cc-visa nivel-3',
                url: '/procesos/cobrosMiscelaneosVisa',
                permissions: ['PROC_COBDESVISA']

              }, {
                name: 'MasterCard',
                icon: 'fa fa-cc-mastercard nivel-3',
                url: '/procesos/cobrosMiscelaneosMC',
                permissions: ['PROC_COBDESMAST']
              }
            ]
          },
          {
            name: 'Ejecucion manual',
            icon: 'fa fa-file nivel-1',
            url: '/procesos/ejecucion-manual'
          },
          {
            name: 'Mantenimientos',
            icon: 'fa fa-file nivel-1',
            children: [
              {
                name: 'Procesos',
                icon: 'fa fa-file',
                url: '/procesos/mantenimiento/proceso'
              },
              {
                name: 'Programa',
                icon: 'fa fa-file',
                url: '/procesos/mantenimiento/programa'
              },
              {
                name: 'Subprograma',
                icon: 'fa fa-file',
                url: '/procesos/mantenimiento/subprograma'
              },
              {
                name: 'Tipo subprograma',
                icon: 'fa fa-file',
                url: '/procesos/mantenimiento/tipo-subprograma'
              },
              {
                name: 'Archivo',
                icon: 'fa fa-file',
                url: '/procesos/mantenimiento/archivo'
              },
              {
                name: 'Tabla de tablas batch',
                icon: 'fa fa-file',
                url: '/procesos/mantenimiento/multitab-batch'
              }
            ]
          },
          {
            name: 'Consultas',
            icon: 'fa fa-file nivel-1',
            children: [
              {
                name: 'Log Control',
                icon: 'fa fa-file nivel-2',
                url: '/procesos/consultas/log-control'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: 'Seguridad',
    icon: 'fa fa-shield nivel-0',
    children: [
      {
        name: 'Usuario',
        url: '/seguridad/usuarios',
        icon: 'fa fa-user nivel-1',
        permissions: ['MANT_USUARI']
      },
      {
        name: 'Parámetros de Seguridad',
        url: '/seguridad/parametros-seguridad',
        icon: 'fa fa-suitcase nivel-1',
        permissions: ['MANT_PARSEG']
      },
      {
        name: 'Categoría de Recursos',
        url: '/seguridad/categorias-recursos',
        icon: 'fa fa-cogs nivel-1',
        permissions: ['MANT_CATREC']
      },
      {
        name: 'Sistemas',
        url: '/seguridad/sistemas',
        icon: 'fa fa-university nivel-1',
        permissions: ['MANT_SISTEM']
      },
      {
        name: 'Tipos Autenticación',
        url: '/seguridad/tipos-autenticaciones',
        icon: 'fa fa-users nivel-1',
        permissions: ['MANT_TIPAUT']
      }
    ]
  }
];
