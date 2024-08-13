import { styled, Typography } from '@mui/material'

export { Row } from '../projects-table-head/projects-table-head.styles'

export const Description = styled(Typography)({
  opacity: 0.5,

  '&:not(:last-child)': {
    marginBottom: 16
  }
})

export const Environment = styled('div')({
  display: 'flex',
  flexWrap: 'wrap',
  gap: 8
})
