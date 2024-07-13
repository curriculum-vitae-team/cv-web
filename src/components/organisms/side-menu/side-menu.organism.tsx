import { memo, useState } from 'react'
import { KeyboardArrowLeft } from '@mui/icons-material'
import { SideMenuItem } from '@molecules/side-menu-item'
import { StorageKeys } from 'constants/storage.constants'
import { LIST_ITEMS } from './side-menu.constants'
import * as Styled from './side-menu.styles'

const SideMenu = () => {
  const [isOpen, setIsOpen] = useState<boolean>(!!localStorage.getItem(StorageKeys.Navigation))

  const toggleNavigation = () => {
    setIsOpen((prevState) => {
      localStorage.setItem(StorageKeys.Navigation, prevState ? '' : 'true')

      return !prevState
    })
  }

  return (
    <>
      <Styled.Drawer anchor="left" open={isOpen} variant="permanent">
        <Styled.List>
          {LIST_ITEMS.map(({ IconComponent, DividerComponent, name, to }) => {
            if (DividerComponent) {
              return <DividerComponent key={name} />
            }
            return <SideMenuItem key={name} IconComponent={IconComponent} name={name} to={to} />
          })}
        </Styled.List>
      </Styled.Drawer>
      <Styled.Icon onClick={toggleNavigation}>
        <KeyboardArrowLeft sx={{ transform: `rotate(${isOpen ? 0 : -180}deg)` }} />
      </Styled.Icon>
    </>
  )
}

export default memo(SideMenu)
