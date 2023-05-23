import { Group, Translate } from '@mui/icons-material'
import { Divider } from '@mui/material'

export const LIST_ITEMS = [
  {
    IconComponent: Group,
    name: 'employees',
    to: '/employees'
  },
  {
    name: 'projects',
    to: '/projects'
  },
  {
    name: 'cvs',
    to: '/cvs'
  },
  {
    DividerComponent: Divider
  },
  {
    name: 'departments',
    to: '/departments'
  },
  {
    name: 'positions',
    to: '/positions'
  },
  {
    name: 'skills',
    to: '/skills'
  },
  {
    IconComponent: Translate,
    name: 'languages',
    to: '/languages'
  }
]
