import { styled } from '@mui/material'

export const Form = styled('form')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  maxWidth: 560,
  width: '90%',
  height: 'calc(100% - 64px)',
  margin: '0 auto'
})

export const Actions = styled('div')({
  maxWidth: 220,
  margin: '40px auto 0',
  display: 'flex',
  flexDirection: 'column',
  gap: 8
})
