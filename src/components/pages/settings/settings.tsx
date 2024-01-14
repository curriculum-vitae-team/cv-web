import { ChangeEvent } from 'react'
import { MenuItem, TextField } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { useReactiveVar } from '@apollo/client'
import { themeService } from 'graphql/theme/theme.service'
import * as Styled from './settings.styles'

const Settings = () => {
  const { t } = useTranslation()
  const theme$ = useReactiveVar(themeService.theme$)

  const handleTheme = (event: ChangeEvent<HTMLInputElement>) => {
    themeService.setTheme(event.target.value)
  }

  return (
    <Styled.Page>
      <TextField value={theme$} select label={t('Appearance')} onChange={handleTheme}>
        <MenuItem value="light">{t('Light')}</MenuItem>
        <MenuItem value="dark">{t('Dark')}</MenuItem>
        <MenuItem value="device">{t('Device settings')}</MenuItem>
      </TextField>
    </Styled.Page>
  )
}

export default Settings
