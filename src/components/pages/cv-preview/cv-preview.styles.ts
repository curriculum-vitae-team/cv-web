import { Typography, styled } from '@mui/material'

export const Page = styled('div')({
  display: 'grid',
  gridTemplateColumns: '200px 1fr',
  color: '#353535'
})

export const Head = styled('section')({
  gridColumn: 'span 2',
  marginBottom: 32
})

export const Position = styled(Typography)({
  textTransform: 'uppercase'
})

export const Left = styled('section')({
  paddingRight: 32
})

export const Main = styled('section')({
  paddingLeft: 32,
  paddingBottom: 16,
  borderLeft: '1px #c63030 solid',
  marginBottom: 32
})

export const Title = styled(Typography)({
  fontWeight: 'bold',
  marginTop: 16,
  marginBottom: 8
})
