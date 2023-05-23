import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { SideMenuItemProps } from './side-menu-item.types'

export const SideMenuItem = ({ IconComponent, name, to }: SideMenuItemProps) => {
  const { t } = useTranslation()

  return (
    <ListItem disablePadding>
      <ListItemButton component={NavLink} to={to}>
        {IconComponent && (
          <ListItemIcon>
            <IconComponent />
          </ListItemIcon>
        )}
        <ListItemText primary={t(name)} />
      </ListItemButton>
    </ListItem>
  )
}
