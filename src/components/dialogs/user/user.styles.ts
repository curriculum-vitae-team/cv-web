import { styled, DialogContent } from '@mui/material'

export const Column = styled(DialogContent)({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  columnGap: 32,
  rowGap: 32
})
