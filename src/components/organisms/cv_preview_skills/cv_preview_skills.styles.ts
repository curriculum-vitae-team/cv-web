import { styled } from '@mui/material'

export { Title } from '@pages/cv-preview/cv-preview.styles'

export const Table = styled('table')({
  width: '100%',
  borderSpacing: 0
})

export const Th = styled('th')(({ theme }) => ({
  padding: '8px 16px',
  verticalAlign: 'top',
  borderBottom: `2px ${theme.palette.primary.main} solid`,
  textTransform: 'uppercase',
  fontWeight: 500,
  fontSize: 14,
  color: theme.palette.text.primary
}))

export const Row = styled('tr')<{ separator: boolean }>(({ theme, separator }) => ({
  borderBottom: separator ? `1px ${theme.palette.primary.main} solid` : undefined,

  '&:last-of-type': {
    borderBottom: `1px ${theme.palette.grey[400]} solid`
  }
}))

export const Td = styled('td')({
  padding: '8px 16px',
  verticalAlign: 'top',
  borderBottom: 'inherit',
  textAlign: 'center',
  fontSize: 14
})

export const Category = styled(Td)<{ last: boolean }>(({ theme, last }) => ({
  width: 240,
  borderBottom: `1px ${last ? theme.palette.grey[400] : theme.palette.primary.main} solid`,
  color: theme.palette.primary.main,
  textAlign: 'left',
  fontWeight: 500
}))

export const Skill = styled(Td)({
  textAlign: 'left',
  fontWeight: 500
})
