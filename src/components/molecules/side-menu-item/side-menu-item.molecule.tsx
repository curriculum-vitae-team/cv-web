import { NavLink, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { SideMenuItemProps } from './side-menu-item.types'
import * as Styled from './side-menu-item.styles'

export const SideMenuItem = ({ IconComponent, name, to }: SideMenuItemProps) => {
  const { t } = useTranslation()
  const { pathname } = useLocation()
  const isActive = to === '/' ? pathname === to : pathname.startsWith(to)

  return (
    <Styled.Item disablePadding isActive={isActive}>
      <ListItemButton component={NavLink} to={to}>
        {IconComponent && (
          <ListItemIcon>
            <IconComponent />
          </ListItemIcon>
        )}
        <ListItemText primary={t(name)} />
      </ListItemButton>
    </Styled.Item>
  )
}
