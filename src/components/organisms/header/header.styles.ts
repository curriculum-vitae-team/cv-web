import { AppBar, styled } from '@mui/material'

export const Header = styled(AppBar)({
  flexDirection: 'row',
  '& > .MuiContainer-root': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'end'
  }
})
