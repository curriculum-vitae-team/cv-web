import { Divider, Drawer, IconButton } from '@mui/material'
import { Menu, Close } from '@mui/icons-material'
import { useCallback, useState } from 'react'
import { LIST_ITEMS } from './side-menu.constants'
import * as Styled from './side-menu.styles'
import { SideMenuItem } from '../../molecules/side-menu-item'

export const SideMenu = () => {
  const [open, setOpen] = useState(false)

  const handleOpen = useCallback(() => {
    setOpen(true)
  }, [])

  const handleClose = useCallback(() => {
    setOpen(false)
  }, [])

  return (
    <>
      <IconButton color="primary" onClick={handleOpen}>
        <Menu />
      </IconButton>
      <Drawer anchor="left" open={open} onClose={handleClose}>
        <Styled.ToolBar>
          <IconButton sx={{ ml: 'auto' }} color="primary" onClick={handleClose}>
            <Close />
          </IconButton>
        </Styled.ToolBar>
        <Divider />
        <Styled.List>
          {LIST_ITEMS.map(({ IconComponent, DividerComponent, name, to }) => {
            if (DividerComponent) {
              return <DividerComponent key="divider" />
            }
            return (
              <SideMenuItem
                key={name}
                IconComponent={IconComponent}
                name={name}
                to={to}
                onClick={handleClose}
              />
            )
          })}
        </Styled.List>
      </Drawer>
    </>
  )
}
