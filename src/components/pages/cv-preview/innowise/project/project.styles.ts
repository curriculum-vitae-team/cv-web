import { styled, Typography } from '@mui/material'
export { Left, Main, Title } from '../../cv-preview.styles'

export const Project = styled('div')({
  display: 'grid',
  gridTemplateColumns: '260px 1fr',
  marginBottom: 32
})

export const Name = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontWeight: 'bold',
  textTransform: 'uppercase',
  marginTop: 16,
  marginBottom: 8
}))

export const Responsibilities = styled('ul')(({ theme }) => ({
  margin: 0,
  paddingLeft: 20,

  '& > li::marker': {
    color: theme.palette.primary.main
  }
}))
