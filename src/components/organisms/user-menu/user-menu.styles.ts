import { Button as MuiButton, Typography, Menu as MuiMenu, styled } from '@mui/material'

export const Button = styled(MuiButton)(({ theme }) => ({
  padding: '0 8px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  borderRadius: '0 200px 200px 0',
  height: 56,
  minHeight: 56,
  minWidth: 56,
  width: '100%',
  maxWidth: '100%',
  overflowX: 'hidden',
  textTransform: 'none',

  [theme.breakpoints.down('md')]: {
    borderRadius: 200,
    height: 40,
    minHeight: 40,
    alignSelf: 'center',
    paddingLeft: 0
  }
}))

export const Name = styled(Typography)(({ theme }) => ({
  marginLeft: 8,
  width: '100%',
  overflowX: 'hidden',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
  color: theme.palette.text.primary
}))

export const Menu = styled(MuiMenu)(({ theme }) => ({
  '& .MuiPaper-root': {
    minWidth: 200,
    overflow: 'visible',
    backgroundImage: 'none',
    backgroundColor: theme.palette.background.default
  }
}))
