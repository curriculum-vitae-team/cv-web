import { Button, Typography, styled } from '@mui/material'
import { palette } from '@features/theme-provider/mui-palette'

export const Document = styled('div')(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '200px 1fr',
  color: palette[theme.palette.mode === 'dark' ? 'light' : 'dark'].background?.default
}))

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
