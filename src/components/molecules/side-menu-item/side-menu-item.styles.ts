import { ListItem, styled } from '@mui/material'

type ItemProps = {
  isActive?: boolean
}

export const Item = styled(ListItem)<ItemProps>(({ theme, isActive }) => ({
  color: isActive ? theme.palette.primary.main : undefined,
  '& .MuiListItemIcon-root': {
    color: isActive ? theme.palette.primary.light : undefined
  }
}))
