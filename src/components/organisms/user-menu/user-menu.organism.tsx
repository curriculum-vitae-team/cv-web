import { memo, MouseEvent, useCallback, useEffect, useState } from 'react'
import { generatePath, NavLink, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Avatar, Divider, ListItemIcon, MenuItem } from '@mui/material'
import { AccountCircle, Settings, Logout } from '@mui/icons-material'
import { authService } from 'graphql/auth/auth.service'
import { useAuth } from 'hooks/use-auth'
import { useProfile } from 'hooks/use-profile'
import { routes } from 'constants/routes'
import * as Styled from './user-menu.styles'

const UserMenu = () => {
  const location = useLocation()
  const { t } = useTranslation()
  const { user$, userId, profileId } = useAuth()
  const { profile } = useProfile(profileId)
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null)
  const open = Boolean(anchorEl)

  const handleClick = useCallback((event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }, [])

  const handleClose = useCallback(() => {
    setAnchorEl(null)
  }, [])

  useEffect(() => {
    handleClose()
  }, [location, handleClose])

  const handleLogout = useCallback(() => {
    authService.logout()
  }, [])

  return (
    <>
      <Styled.Name color="white">{profile?.full_name || user$?.email}</Styled.Name>
      <Avatar
        src={profile?.avatar || ''}
        sx={{ backgroundColor: '#c63031', cursor: 'pointer' }}
        onClick={handleClick}
      >
        {profile?.full_name?.[0] || user$?.email[0]}
      </Avatar>
      <Styled.Menu
        anchorEl={anchorEl}
        open={open}
        disableScrollLock
        onClose={handleClose}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
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
        <MenuItem onClick={handleLogout}>
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
