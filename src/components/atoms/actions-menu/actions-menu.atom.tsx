import { memo, MouseEvent, useCallback, useState } from 'react'
import { IconButton, Menu } from '@mui/material'
import { MoreVert } from '@mui/icons-material'
import { ActionsMenuProps } from './actions-menu.types'

const ActionsMenu = ({ children }: ActionsMenuProps) => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null)
  const open = Boolean(anchorEl)

  const handleOpen = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = useCallback(() => {
    setAnchorEl(null)
  }, [])

  return (
    <>
      <IconButton onClick={handleOpen}>
        <MoreVert />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={open}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
        onClick={handleClose}
      >
        {children}
      </Menu>
    </>
  )
}

export default memo(ActionsMenu)
