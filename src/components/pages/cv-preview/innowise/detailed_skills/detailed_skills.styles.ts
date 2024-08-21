import { styled } from '@mui/material'
import { palette } from '@features/theme-provider/mui-palette'

export { Title } from '../../cv-preview.styles'

export const Table = styled('table')({
  width: '100%',
  borderSpacing: 0
})

export const Th = styled('th')(({ theme }) => ({
  padding: '8px 16px',
  verticalAlign: 'top',
  borderBottom: `1px ${theme.palette.primary.main} solid`,
  textTransform: 'uppercase',
  fontWeight: 500,
  fontSize: 14,
  color: theme.palette.text.primary,

  '@media print': {
    color: palette.light.text?.primary
  }
}))

export const Row = styled('tr')<{ separator: boolean }>(({ theme, separator }) => ({
  borderBottom: separator ? `1px ${theme.palette.grey[400]} solid` : undefined,
  // borderBottom: separator ? `1px ${theme.palette.primary.main} solid` : undefined,

  '&:last-of-type': {
    borderBottom: `1px ${theme.palette.grey[400]} solid`
  }
}))

export const Td = styled('td')({
  padding: '8px 16px',
  verticalAlign: 'top',
  borderBottom: 'inherit',
  textAlign: 'center',
  fontSize: 14,

  '@media print': {
    color: palette.light.text?.primary
  }
})

const shouldForwardProp = (prop: string) => prop !== 'isLast'

export const Category = styled(Td, { shouldForwardProp })<{ isLast: boolean }>(
  ({ theme, isLast }) => ({
    width: 240,
    borderBottom: `1px ${theme.palette.grey[400]} solid`,
    // borderBottom: `1px ${isLast ? theme.palette.grey[400] : theme.palette.primary.main} solid`,
    color: theme.palette.primary.main,
    textAlign: 'left',
    fontWeight: 500,

    '@media print': {
      color: theme.palette.primary.main
    }
  })
)

export const Skill = styled(Td)({
  textAlign: 'left',
  fontWeight: 500
})
