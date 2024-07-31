import { styled } from '@mui/material'

export const Form = styled('form')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  maxWidth: 560,
  width: '90%',
  height: 'calc(100% - 56px)',
  margin: '0 auto',

  '& > .MuiTypography-h4': {
    marginBottom: 24
  },

  '& > .MuiTypography-body1': {
    marginBottom: 40
  }
})

export const Actions = styled('div')({
  maxWidth: 220,
  margin: '40px auto 0',
  display: 'flex',
  flexDirection: 'column',
  gap: 8
})
