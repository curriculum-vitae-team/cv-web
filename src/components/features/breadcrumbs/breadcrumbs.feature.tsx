import { useContext } from 'react'
import { useLocation } from 'react-router-dom'
import { HomeOutlined, NavigateNext } from '@mui/icons-material'
import { Link } from '@atoms/link'
import { BreadcrumbsContext } from '../breadcrumbs-context'
import * as Styled from './breadcrumbs.styles'

export const Breadcrumbs = () => {
  const location = useLocation()
  const links = location.pathname
    .split('/')
    .filter((link) => link)
    .map((name, index, array) => ({ name, to: array.slice(0, index + 1).join('/') }))

  const { config } = useContext(BreadcrumbsContext)

  return (
    <Styled.Breadcrumbs separator={<NavigateNext fontSize="small" color="disabled" />}>
      <Link to="/employees" Icon={HomeOutlined}>
        Home
      </Link>
      {links.map(({ name, to }) => {
        const replacement = config[to]
        return (
          <Link
            key={name}
            to={replacement?.to || to}
            color={replacement?.color}
            Icon={replacement?.Icon}
          >
            {replacement?.text || name}
          </Link>
        )
      })}
    </Styled.Breadcrumbs>
  )
}
