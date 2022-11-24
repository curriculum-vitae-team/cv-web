import { NavLink } from 'react-router-dom'
import { ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { SideMenuItemProps } from './side-menu-item.types'

export const SideMenuItem = ({ IconComponent, name, to }: SideMenuItemProps) => {
  return (
    <ListItem disablePadding>
      <ListItemButton component={NavLink} to={to}>
        {IconComponent && (
          <ListItemIcon>
            <IconComponent />
          </ListItemIcon>
        )}
        <ListItemText primary={name} />
      </ListItemButton>
    </ListItem>
  )
}
