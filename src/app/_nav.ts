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
        name: 'Solicitantes',
        icon: 'fa fa-table nivel-1',
        url: '/mantenimiento/parametroSistema',
        permissions: ['MANT_CORPSW']
      },
      {
        name: 'Generales',
        icon: 'fa fa-table nivel-1',
        url: '/mantenimiento/parametroSistema',
        permissions: ['MANT_CORPSW']
      },
    ]
  },
  {
    name: 'Consultas',
    icon: 'fa fa-columns nivel-0',
    children: [

    ]
  },
];
