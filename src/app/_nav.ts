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
    name: 'Mantenimientos',
    icon: 'fa fa-table nivel-0',
    children: [
      {
        name: 'Docentes',
        icon: 'fa fa-table nivel-1',
        url: '/mantenimiento/docente',
        permissions: ['MANT_DOCENTE']
      },
      {
        name: 'Cursos',
        icon: 'fa fa-table nivel-1',
        url: '/mantenimiento/cursos',
        permissions: ['MANT_CURSO']
      },
      {
        name: 'Horario',
        icon: 'fa fa-table nivel-1',
        url: '/mantenimiento/horario',
        permissions: ['MANT_HORARIO']
      },
      {
        name: 'Detalle Horario',
        icon: 'fa fa-table nivel-1',
        url: '/mantenimiento/detalle-horario',
        permissions: ['MANT_DETHORARIO']
      },
      {
        name: 'Plan Académico',
        icon: 'fa fa-table nivel-1',
        url: '/mantenimiento/plan-academico',
        permissions: ['MANT_PLANACADEMICO']
      },
      {
        name: 'Programación Académica',
        icon: 'fa fa-table nivel-1',
        url: '/mantenimiento/programacion-academica',
        permissions: ['MANT_PROGACEDEMICA']
      },
    ]
  },
  {
    name: 'Procesos',
    icon: 'fa fa-columns nivel-0',
    children: [
      {
        name: 'Asignación de espacios',
        icon: 'fa fa-table nivel-1',
        url: '/proceso/asignacion-espacios',
        permissions: ['EJEC_ASIGESPAC']
      },
    ]
  },
];
