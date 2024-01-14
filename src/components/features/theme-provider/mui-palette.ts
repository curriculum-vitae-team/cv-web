import { PaletteMode, PaletteOptions } from '@mui/material'

export const palette: Record<PaletteMode, PaletteOptions> = {
  light: {
    mode: 'light',
    background: {
      default: '#f5f5f7',
      paper: '#ffffff'
    },
    text: {
      primary: '#2e2e2e'
    },
    primary: {
      main: '#c63031'
    },
    secondary: {
      main: '#767676'
    },
    warning: {
      main: '#ffb800'
    },
    error: {
      main: '#c63031'
    }
  },
  dark: {
    mode: 'dark',
    background: {
      default: '#353535',
      paper: '#121212'
    },
    text: {
      primary: '#ffffff'
    },
    primary: {
      main: '#c63031'
    },
    secondary: {
      main: '#767676'
    },
    warning: {
      main: '#ffb800'
    },
    error: {
      main: '#c63031'
    }
  }
}
