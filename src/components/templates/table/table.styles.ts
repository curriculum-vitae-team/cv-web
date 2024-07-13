import { styled, TableCell } from '@mui/material'

export const ToolBar = styled(TableCell)(({ theme }) => ({
  top: 108,
  height: 64,
  padding: '0 20px',
  backgroundColor: theme.palette.background.default,
  borderBottom: 'none',

  '& > div': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
}))
