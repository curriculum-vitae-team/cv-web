import { styled, Drawer as MuiDrawer, IconButton } from '@mui/material'

export const Drawer = styled(MuiDrawer)(({ theme, open }) => ({
  display: 'flex',
  gridColumn: 1,
  gridRow: 2,
  zIndex: 1000,

  '& .MuiPaper-root': {
    height: 'fit-content',
    position: 'sticky',
    top: 64,
    zIndex: 2000,
    width: open ? 200 : 56,
    transition: 'width 0.3s',
    overflowX: 'hidden',
    background: 'none',
    border: 'none'
  },

  [theme.breakpoints.down('md')]: {
    gridRow: 3,
    position: 'sticky',
    bottom: 0,
    zIndex: 2,

    '& .MuiPaper-root': {
      height: 56,
      borderTop: '1px solid #515151',
      background: theme.palette.background.default
    }
  }
}))

export const Icon = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  left: 8,
  bottom: 16,
  zIndex: 1300,

  '& > svg': {
    transition: 'transform 200ms'
  },

  [theme.breakpoints.down('md')]: {
    display: 'none'
  }
}))

export const List = styled('nav')(({ theme }) => ({
  width: '100%',
  padding: 0,
  display: 'grid',
  marginTop: 14,
  gap: 14,
  gridTemplateColumns: '1fr',

  '& .MuiDivider-root': {
    marginTop: 8,
    marginBottom: 8
  },

  [theme.breakpoints.down('md')]: {
    marginTop: 0,
    height: '100%',
    gridTemplateColumns: 'repeat(3, 1fr)',
    alignItems: 'center',
    padding: '0 16px',

    '.MuiDivider-root': {
      display: 'none'
    },

    'a:not(:nth-of-type(-n + 3))': {
      display: 'none'
    }
  }
}))
