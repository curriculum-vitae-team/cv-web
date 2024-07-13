import { useContext } from 'react'
import { useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { NavigateNext } from '@mui/icons-material'
import { Link } from '@atoms/link'
import { BreadcrumbsContext } from '../breadcrumbs-context'
import * as Styled from './breadcrumbs.styles'

export const Breadcrumbs = () => {
  const location = useLocation()
  const { t } = useTranslation()
  const links = location.pathname
    .split('/')
    .filter((link) => link)
    .map((name, index, array) => ({ name, to: '/' + array.slice(0, index + 1).join('/') }))

  const { config } = useContext(BreadcrumbsContext)

  return (
    <Styled.Breadcrumbs separator={<NavigateNext fontSize="small" color="disabled" />}>
      {links.map(({ name, to }) => {
        const replacement = config[to]

        return (
          <Link
            key={name}
            to={replacement?.to || to}
            color={replacement?.color}
            Icon={replacement?.Icon}
          >
            {replacement?.text || t(name)}
          </Link>
        )
      })}
    </Styled.Breadcrumbs>
  )
}
