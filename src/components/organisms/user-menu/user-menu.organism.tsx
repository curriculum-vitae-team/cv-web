import { memo, MouseEvent, useCallback, useEffect, useState } from 'react'
import { generatePath, NavLink, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Avatar, Divider, ListItemIcon, MenuItem } from '@mui/material'
import { AccountCircle, Settings, Logout } from '@mui/icons-material'
import { logout } from 'graphql/auth/session'
import { useAuth } from 'hooks/use-auth'
import { useProfile } from 'hooks/use-profile'
import { routes } from 'constants/routes'
import * as Styled from './user-menu.styles'

const UserMenu = () => {
  const location = useLocation()
  const { t } = useTranslation()
  const { session, userId } = useAuth()
  const { profile } = useProfile(userId)
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null)
  const isOpen = Boolean(anchorEl)

  const handleOpen = useCallback((event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }, [])

  const handleClose = useCallback(() => {
    setAnchorEl(null)
  }, [])

  useEffect(() => {
    handleClose()
  }, [location, handleClose])

  return (
    <>
      <Styled.Button color="secondary" onClick={handleOpen}>
        <Avatar
          src={profile?.avatar || ''}
          sx={{ backgroundColor: '#c63031', width: 40, height: 40 }}
        >
          {profile?.full_name?.[0] || session?.email[0]}
        </Avatar>
        <Styled.Name>{profile?.full_name || session?.email}</Styled.Name>
      </Styled.Button>
      <Styled.Menu
        anchorEl={anchorEl}
        open={isOpen}
        disableScrollLock
        onClose={handleClose}
        transformOrigin={{ horizontal: 'left', vertical: 'bottom' }}
        anchorOrigin={{ horizontal: 'left', vertical: 'top' }}
      >
        <MenuItem component={NavLink} to={generatePath(routes.users.profile, { userId })}>
          <ListItemIcon>
            <AccountCircle />
          </ListItemIcon>
          {t('Profile')}
        </MenuItem>
        <MenuItem component={NavLink} to={routes.settings}>
          <ListItemIcon>
            <Settings />
          </ListItemIcon>
          {t('Settings')}
        </MenuItem>
        <Divider />
        <MenuItem onClick={logout}>
          <ListItemIcon>
            <Logout />
          </ListItemIcon>
          {t('Logout')}
        </MenuItem>
      </Styled.Menu>
    </>
  )
}

export default memo(UserMenu)
