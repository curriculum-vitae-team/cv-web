import { PaletteMode, createTheme } from '@mui/material'
import { palette } from './mui-palette'

export const getTheme = (mode: PaletteMode) => {
  return createTheme({
    palette: palette[mode],
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
            backgroundColor: mode === 'light' ? '#2e2e2e' : '#121212',
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
            color: mode === 'light' ? '#2e2e2e' : '#f5f5f7',
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
            boxShadow: `0 0 0 30px ${palette[mode].background?.default} inset !important`
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
            background: palette[mode].background?.default
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
}
