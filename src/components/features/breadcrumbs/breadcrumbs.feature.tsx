import { useContext } from 'react'
import { useLocation, Link } from 'react-router-dom'
import { Breadcrumbs as MuiBreadcrumbs, Link as MuiLink } from '@mui/material'
import { BreadcrumbsContext } from '../breadcrumbs-context'

export const Breadcrumbs = () => {
  const location = useLocation()
  const links = location.pathname
    .split('/')
    .filter((link) => link)
    .map((name, index, array) => ({ name, to: array.slice(0, index + 1).join('/') }))

  const { config } = useContext(BreadcrumbsContext)

  return (
    <MuiBreadcrumbs>
      <MuiLink underline="hover" color="inherit" component={Link} to="/employees">
        Home
      </MuiLink>
      {links.map(({ name, to }) => (
        <MuiLink
          key={name}
          underline="hover"
          color="inherit"
          component={Link}
          to={to}
          textTransform="capitalize"
        >
          {config[to] || name}
        </MuiLink>
      ))}
    </MuiBreadcrumbs>
  )
}
