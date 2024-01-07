import { Button, Typography, styled } from '@mui/material'

export const Document = styled('div')({
  display: 'grid',
  gridTemplateColumns: '200px 1fr',
  color: '#353535'
})

export const PageBreak = styled('div')({
  pageBreakAfter: 'always'
})

export const Head = styled('section')({
  display: 'grid',
  gridTemplateColumns: '1fr auto',
  gridColumn: 'span 2',
  marginBottom: 32
})

export const Position = styled(Typography)({
  textTransform: 'uppercase',
  gridColumn: 1
})

export const Export = styled(Button)({
  gridColumn: 2,
  gridRow: 1,
  '@media print': {
    display: 'none'
  }
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
