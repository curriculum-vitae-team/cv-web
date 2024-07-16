import { useReactiveVar } from '@apollo/client'
import { ThemeProvider as MuiThemeProvider, CssBaseline } from '@mui/material'
import { PropsWithChildren, useEffect, useMemo, useState } from 'react'
import { themeService } from 'graphql/theme/theme.service'
import { getTheme } from './mui-theme'

export const ThemeProvider = ({ children }: PropsWithChildren) => {
  const theme$ = useReactiveVar(themeService.theme$)
  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
  const [isDark, setIsDark] = useState(mediaQuery.matches)

  useEffect(() => {
    mediaQuery.onchange = (event) => {
      setIsDark(event.matches)
    }
  }, [mediaQuery])

  const theme = useMemo(() => {
    if (theme$ === 'device' && isDark) {
      return getTheme('dark')
    }
    if (theme$ === 'dark') {
      return getTheme('dark')
    }
    return getTheme('light')
  }, [theme$, isDark])

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  )
}
