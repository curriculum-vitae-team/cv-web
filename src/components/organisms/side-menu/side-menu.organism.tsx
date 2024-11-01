import { memo, useState } from 'react'
import { KeyboardArrowLeft } from '@mui/icons-material'
import { SideMenuItem } from '@molecules/side-menu-item'
import { StorageKeys } from 'constants/storage.constants'
import { UserMenu } from '@organisms/user-menu'
import { useAuth } from 'hooks/use-auth'
import { adminLinks, userLinks } from './side-menu.constants'
import * as Styled from './side-menu.styles'

const SideMenu = () => {
  const { isAdmin } = useAuth()
  const [isOpen, setIsOpen] = useState<boolean>(!!localStorage.getItem(StorageKeys.Navigation))

  const toggleNavigation = () => {
    setIsOpen((prevState) => {
      localStorage.setItem(StorageKeys.Navigation, prevState ? '' : 'true')

      return !prevState
    })
  }

  const renderAdminLinks = () => {
    return adminLinks.map(({ IconComponent, DividerComponent, name, to }) => {
      if (DividerComponent) {
        return <DividerComponent key={name} />
      }

      return <SideMenuItem key={name} IconComponent={IconComponent} name={name} to={to} />
    })
  }

  const renderUserLinks = () => {
    return userLinks.map(({ IconComponent, name, to }) => {
      return <SideMenuItem key={name} IconComponent={IconComponent} name={name} to={to} />
    })
  }

  return (
    <Styled.Aside isOpen={isOpen}>
      <Styled.Nav>{isAdmin ? renderAdminLinks() : renderUserLinks()}</Styled.Nav>
      <UserMenu />
      <Styled.Icon onClick={toggleNavigation}>
        <KeyboardArrowLeft sx={{ transform: `rotate(${isOpen ? 0 : -180}deg)` }} />
      </Styled.Icon>
    </Styled.Aside>
  )
}

export default memo(SideMenu)
