import { memo, MouseEvent, useCallback, useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { useReactiveVar } from '@apollo/client'
import { Avatar, Divider, ListItemIcon, Menu, MenuItem, Typography } from '@mui/material'
import { AccountCircle, Settings, Logout } from '@mui/icons-material'
import { authService } from '@graphql/auth/auth.service'

const UserMenu = () => {
  const location = useLocation()
  const user = useReactiveVar(authService.user$)
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
    authService.clearStorage()
  }, [])

  return (
    <>
      <Typography color="white" sx={{ mr: 2 }}>
        {user?.profile.full_name || user?.email}
      </Typography>
      <Avatar
        src={user?.profile.avatar}
        sx={{ backgroundColor: '#c63031', cursor: 'pointer' }}
        onClick={handleClick}
      >
        {user?.profile.full_name?.[0] || user?.email[0]}
      </Avatar>
      <Menu
        anchorEl={anchorEl}
        open={open}
        disableScrollLock
        onClose={handleClose}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        PaperProps={{
          sx: {
            minWidth: 200,
            overflow: 'visible',
            mt: 1.5,
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0
            }
          }
        }}
      >
        <MenuItem component={NavLink} to={`/employees/${user?.id}/profile`}>
          <ListItemIcon>
            <AccountCircle />
          </ListItemIcon>
          Profile
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Settings />
          </ListItemIcon>
          Settings
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleLogout}>
          <ListItemIcon>
            <Logout />
          </ListItemIcon>{' '}
          Logout
        </MenuItem>
      </Menu>
    </>
  )
}

export default memo(UserMenu)
