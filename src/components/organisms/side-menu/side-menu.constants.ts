import { Group, Translate } from '@mui/icons-material'
import { Divider } from '@mui/material'

export const LIST_ITEMS = [
  {
    IconComponent: Group,
    name: 'Employees',
    to: '/employees'
  },
  {
    name: 'Projects',
    to: '/projects'
  },
  {
    name: 'CVs',
    to: '/cvs'
  },
  {
    DividerComponent: Divider
  },
  {
    name: 'Departments',
    to: '/departments'
  },
  {
    name: 'Positions',
    to: '/positions'
  },
  {
    name: 'Skills',
    to: '/skills'
  },
  {
    IconComponent: Translate,
    name: 'Languages',
    to: '/languages'
  }
]
