import { PaletteMode, createTheme } from '@mui/material'
import { palette } from './mui-palette'

export const getTheme = (mode: PaletteMode) => {
  return createTheme({
    palette: palette[mode],
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          ':root': {
            colorScheme: 'light dark',
            fontSynthesis: 'none',
            textRendering: 'optimizeLegibility',
            WebkitFontSmoothing: 'antialiased',
            MozOsxFontSmoothing: 'grayscale'
          },
          '::-webkit-scrollbar': {
            width: 2,
            height: 2
          },
          '::-webkit-scrollbar-thumb': {
            backgroundColor: '#bdbdbd'
          },
          '::-webkit-scrollbar-track': {
            backgroundColor: 'transparent'
          },
          html: {
            height: '100%'
          },
          body: {
            height: '100%',
            margin: 0
          },
          '#root': {
            height: '100%'
          },
          form: {
            '& > .MuiTextField-root': {
              marginBottom: 20
            }
          }
        }
      },
      MuiTabs: {
        styleOverrides: {
          root: {
            height: 56,
            paddingTop: 6
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
            borderRadius: 40,
            height: 48,
            minWidth: 220
          }
        }
      },
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            height: 48,
            padding: '12px',
            borderRadius: 0,

            '&:hover > fieldset': {
              borderColor: '#2e2e2e'
            }
          },
          input: {
            padding: 0,
            boxSizing: 'border-box',
            boxShadow: `0 0 0 30px ${palette[mode].background?.default} inset !important`,
            borderRadius: '0px !important'
          },
          notchedOutline: {
            borderWidth: '1px !important',
            transition: 'border 200ms'
          }
        }
      },
      MuiInputLabel: {
        styleOverrides: {
          root: {
            transform: 'translate(12px, 12px) scale(1)'
          },
          shrink: {
            transform: 'translate(12px, -9px) scale(0.75)'
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
            '& .MuiTableCell-root:last-child': {
              width: 20
            },
            '& > tr:last-child > .MuiTableCell-root': {
              background: `linear-gradient(180deg, ${palette[mode].background?.default} 50%, transparent 100%)`,
              backdropFilter: 'blur(0.5px)'
            }
          }
        }
      },
      MuiTableBody: {
        styleOverrides: {
          root: {
            '& > tr:last-child > .MuiTableCell-root': {
              borderBottom: 'none'
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
