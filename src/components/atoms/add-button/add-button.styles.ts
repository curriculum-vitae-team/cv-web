import { Button as MuiButton, styled } from '@mui/material'

export const Button = styled(MuiButton)(({ theme }) => ({
  height: 40,
  [theme.breakpoints.down('md')]: {
    minWidth: 0,
    aspectRatio: '1/1'
  }
}))

export const Label = styled('span')(({ theme }) => ({
  marginLeft: 8,
  [theme.breakpoints.down('md')]: {
    display: 'none'
  }
}))
