import { ListItem, styled } from '@mui/material'

type ItemProps = {
  isActive?: boolean
}

const shouldForwardProp = (prop: string) => prop !== 'isActive'

export const Item = styled(ListItem, { shouldForwardProp })<ItemProps>(({ theme, isActive }) => ({
  color: isActive ? theme.palette.primary.main : undefined,
  '& .MuiListItemIcon-root': {
    color: isActive ? theme.palette.primary.light : undefined
  }
}))
