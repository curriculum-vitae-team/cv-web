import { styled } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'

export const Link = styled(RouterLink)<{ color?: MuiColor }>(({ theme, color }) => ({
  position: 'relative',
  color: color ? theme.palette[color].main : 'inherit',
  textDecoration: 'none',
  textTransform: 'capitalize',
  '&:hover': {
    textDecoration: 'underline'
  },
  '& > svg': {
    position: 'absolute',
    marginRight: 4
  }
}))
