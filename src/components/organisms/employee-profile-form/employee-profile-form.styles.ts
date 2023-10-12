import { Button, styled } from '@mui/material'

export const Form = styled('form')(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  columnGap: 32,
  rowGap: 32,
  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: '1fr'
  }
}))

export const SubmitButton = styled(Button)(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    gridColumn: 2
  }
}))
