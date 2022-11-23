import { AppBar, styled } from '@mui/material'

export const Header = styled(AppBar)({
  flexDirection: 'row',
  '& > .MuiContainer-root': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
})

export const LeftPart = styled('div')({
  display: 'flex',
  alignItems: 'center'
})

export const RightPart = styled('div')({
  display: 'flex',
  alignItems: 'center'
})
