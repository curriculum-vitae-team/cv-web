import { AppBar, styled } from '@mui/material'

export const Header = styled(AppBar)({
  gridColumn: 'span 2',
  flexDirection: 'row',

  '& > .MuiContainer-root': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'end'
  }
})
