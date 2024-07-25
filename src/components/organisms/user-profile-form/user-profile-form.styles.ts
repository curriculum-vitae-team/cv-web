import { Button, styled } from '@mui/material'

export const Form = styled('form')<{ disabled?: boolean }>(({ theme, disabled }) => ({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  columnGap: 32,
  rowGap: 16,
  pointerEvents: disabled ? 'none' : 'auto',

  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: '1fr'
  }
}))

export const SubmitButton = styled(Button)(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    gridColumn: 2
  }
}))
