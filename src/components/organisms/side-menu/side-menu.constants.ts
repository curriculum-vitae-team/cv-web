import {
  ContactPageOutlined,
  Domain,
  FolderCopyOutlined,
  Group,
  Translate,
  TrendingUp,
  WorkOutline
} from '@mui/icons-material'
import { Divider } from '@mui/material'

export const LIST_ITEMS = [
  {
    IconComponent: Group,
    name: 'employees',
    to: '/employees'
  },
  {
    IconComponent: FolderCopyOutlined,
    name: 'projects',
    to: '/projects'
  },
  {
    IconComponent: ContactPageOutlined,
    name: 'cvs',
    to: '/cvs'
  },
  {
    DividerComponent: Divider
  },
  {
    IconComponent: Domain,
    name: 'departments',
    to: '/departments'
  },
  {
    IconComponent: WorkOutline,
    name: 'positions',
    to: '/positions'
  },
  {
    IconComponent: TrendingUp,
    name: 'skills',
    to: '/skills'
  },
  {
    IconComponent: Translate,
    name: 'languages',
    to: '/languages'
  }
]
