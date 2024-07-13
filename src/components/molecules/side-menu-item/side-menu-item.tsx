import { useTranslation } from 'react-i18next'
import { SideMenuItemProps } from './side-menu-item.types'
import * as Styled from './side-menu-item.styles'

export const SideMenuItem = ({ IconComponent, name, to }: SideMenuItemProps) => {
  const { t } = useTranslation()

  return (
    <Styled.Item to={to}>
      {IconComponent && <IconComponent />}
      <span>{t(name)}</span>
    </Styled.Item>
  )
}
