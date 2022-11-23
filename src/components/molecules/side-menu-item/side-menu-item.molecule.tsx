import { NavLink } from 'react-router-dom'
import { ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { SideMenuItemProps } from './side-menu-item.types'

export const SideMenuItem = ({ IconComponent, name, to, onClick }: SideMenuItemProps) => {
  return (
    <ListItem disablePadding>
      <ListItemButton component={NavLink} to={to} onClick={onClick}>
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
