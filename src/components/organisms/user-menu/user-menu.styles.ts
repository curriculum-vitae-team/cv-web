import { Typography, Menu as MuiMenu, styled } from '@mui/material'

export const Name = styled(Typography)(({ theme }) => ({
  marginRight: 16,
  maxWidth: 250,
  overflowX: 'hidden',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
  [theme.breakpoints.down('md')]: {
    maxWidth: 150
  },
  [theme.breakpoints.down('sm')]: {
    maxWidth: 100
  }
}))

export const Menu = styled(MuiMenu)(({ theme }) => ({
  '& .MuiPaper-root': {
    minWidth: 200,
    overflow: 'visible',
    marginTop: 8,
    '&:before': {
      content: '""',
      display: 'block',
      position: 'absolute',
      top: 0,
      right: 14,
      width: 10,
      height: 10,
      backgroundColor: theme.palette.mode === 'light' ? '#ffffff' : '#2f2f2f',
      transform: 'translateY(-50%) rotate(45deg)',
      zIndex: 0
    }
  }
}))
