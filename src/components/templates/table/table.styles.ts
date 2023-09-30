import { styled, TableCell } from '@mui/material'

export const ToolBar = styled(TableCell)({
  top: 104,
  height: 64,
  padding: '0 20px',
  backgroundColor: '#f5f5f7',
  borderBottom: 'none',
  '& > div': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
})
