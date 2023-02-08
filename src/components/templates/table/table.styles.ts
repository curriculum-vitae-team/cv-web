import { styled, TableCell } from '@mui/material'

export const ToolBar = styled(TableCell)({
  top: 128,
  height: 64,
  padding: '0 20px 20px 20px',
  backgroundColor: '#f5f5f7',
  borderBottom: 'none',
  '& > div': {
    display: 'flex',
    justifyContent: 'space-between'
  }
})
