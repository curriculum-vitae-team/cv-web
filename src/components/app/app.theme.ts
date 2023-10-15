import { createTheme } from '@mui/material'

export const theme = createTheme({
  palette: {
    primary: {
      main: '#c63031'
    },
    secondary: {
      main: '#767676'
    },
    error: {
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
        html: {
          height: '100%',
          width: '100%'
        },
        body: {
          margin: 0,
          backgroundColor: '#f5f5f7',
          height: '100%',
          width: '100%'
        },
        '#root': {
          height: '100%',
          width: '100%',
          paddingTop: 104
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
    MuiFab: {
      styleOverrides: {
        root: {
          background: 'none',
          border: '1px solid #c63031',
          color: '#c63031',
          boxShadow: 'none',
          '&:hover': {
            background: 'none'
          }
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
            top: 104 + 64
          },
          '& .MuiTableCell-root:last-child': {
            width: 20
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
    },
    MuiTableSortLabel: {
      styleOverrides: {
        root: {
          whiteSpace: 'nowrap'
        }
      }
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          backgroundColor: '#f5f5f7'
        }
      }
    },
    MuiDialogContent: {
      styleOverrides: {
        root: {
          paddingTop: '16px !important'
        }
      }
    }
  }
})
