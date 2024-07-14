import { styled, IconButton } from '@mui/material'

export const Aside = styled('aside')<{ isOpen: boolean }>(({ theme, isOpen }) => ({
  gridArea: 'navigation',
  width: isOpen ? 200 : 56,
  transition: 'width 0.3s',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  paddingTop: 44,
  paddingBottom: 16,
  overflowX: 'hidden',

  [theme.breakpoints.down('md')]: {
    width: '100%',
    height: 56,
    display: 'grid',
    gridTemplateColumns: '3fr 1fr',
    padding: '0 16px',
    gap: 14,

    '& .MuiPaper-root': {
      height: 56,
      borderTop: '1px solid #515151',
      background: theme.palette.background.default
    }
  }
}))

export const Nav = styled('nav')(({ theme }) => ({
  width: '100%',
  padding: 0,
  display: 'grid',
  gap: 14,
  gridTemplateColumns: '1fr',
  marginBottom: 'auto',

  '& .MuiDivider-root': {
    marginTop: 8,
    marginBottom: 8
  },

  [theme.breakpoints.down('md')]: {
    marginTop: 0,
    height: '100%',
    gridTemplateColumns: 'repeat(3, 1fr)',
    alignItems: 'center',

    '.MuiDivider-root': {
      display: 'none'
    },

    'a:not(:nth-of-type(-n + 3))': {
      display: 'none'
    }
  }
}))

export const Icon = styled(IconButton)(({ theme }) => ({
  marginLeft: 8,
  marginTop: 14,

  '& > svg': {
    transition: 'transform 200ms'
  },

  [theme.breakpoints.down('md')]: {
    display: 'none'
  }
}))
