import { createTheme } from '@mui/material'

export const theme = createTheme({
  palette: {
    primary: {
      main: '#c63031'
    }
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '::-webkit-scrollbar': {
          width: 10,
          height: 10
        },
        '::-webkit-scrollbar-thumb': {
          backgroundColor: '#bdbdbd'
        },
        '::-webkit-scrollbar-track': {
          backgroundColor: '#f5f5f7'
        },
        body: {
          margin: 0,
          backgroundColor: '#f5f5f7'
        },
        '#root': {
          display: 'flex',
          flexDirection: 'column',
          height: '100vh',
          paddingTop: 64
        },
        form: {
          '& > .MuiTextField-root': {
            marginBottom: 20
          }
        }
      }
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#2e2e2e',
          height: 64
        }
      }
    },
    MuiTabs: {
      styleOverrides: {
        root: {
          marginTop: 'auto'
        }
      }
    },
    MuiTab: {
      styleOverrides: {
        root: {
          color: '#f5f5f7',
          minWidth: 150,
          '&.active': {
            fontWeight: 600
          }
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 0
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          '&:hover > fieldset': {
            borderColor: '#2e2e2e'
          }
        },
        input: {
          boxShadow: '0 0 0 30px #f5f5f7 inset !important'
        },
        notchedOutline: {
          borderWidth: '1px !important'
        }
      }
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          textTransform: 'uppercase'
        }
      }
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          '& .MuiTableRow-root': {
            top: 144
          }
        }
      }
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          top: 'inherit'
        }
      }
    }
  }
})
