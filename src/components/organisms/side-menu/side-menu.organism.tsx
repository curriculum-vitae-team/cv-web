import { memo, useCallback, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Divider, Drawer, IconButton } from '@mui/material'
import { Menu, Close } from '@mui/icons-material'
import { SideMenuItem } from '@molecules/side-menu-item'
import { LIST_ITEMS } from './side-menu.constants'
import * as Styled from './side-menu.styles'

const SideMenu = () => {
  const location = useLocation()
  const [open, setOpen] = useState(false)

  const handleOpen = useCallback(() => {
    setOpen(true)
  }, [])

  const handleClose = useCallback(() => {
    setOpen(false)
  }, [])

  useEffect(() => {
    handleClose()
  }, [location, handleClose])

  return (
    <>
      <IconButton sx={{ mr: 'auto' }} color="primary" onClick={handleOpen}>
        <Menu />
      </IconButton>
      <Drawer anchor="left" open={open} keepMounted onClose={handleClose}>
        <Styled.ToolBar>
          <IconButton sx={{ ml: 'auto' }} color="primary" onClick={handleClose}>
            <Close />
          </IconButton>
        </Styled.ToolBar>
        <Divider />
        <Styled.List>
          {LIST_ITEMS.map(({ IconComponent, DividerComponent, name, to }) => {
            if (DividerComponent) {
              return <DividerComponent key={name} />
            }
            return <SideMenuItem key={name} IconComponent={IconComponent} name={name} to={to} />
          })}
        </Styled.List>
      </Drawer>
    </>
  )
}

export default memo(SideMenu)
