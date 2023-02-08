import { Typography } from '@mui/material'
import * as Styled from './link.styles'
import { LinkProps } from './link.types'

export const Link = ({ to, children, color, Icon }: LinkProps) => {
  return (
    <Styled.Link to={to} color={color}>
      {Icon && <Icon />}
      <Typography sx={{ ml: Icon ? 4 : 0 }}>{children}</Typography>
    </Styled.Link>
  )
}
