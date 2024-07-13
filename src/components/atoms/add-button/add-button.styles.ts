import { Button as MuiButton, styled } from '@mui/material'

export const Button = styled(MuiButton)(({ theme }) => ({
  minWidth: 0,
  height: 40,
  [theme.breakpoints.down('md')]: {
    aspectRatio: '1/1'
  }
}))

export const Label = styled('span')(({ theme }) => ({
  marginLeft: 8,
  [theme.breakpoints.down('md')]: {
    display: 'none'
  }
}))
