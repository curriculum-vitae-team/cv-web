import { ChangeEvent, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { MenuItem } from '@mui/material'
import { Language } from '@mui/icons-material'
import { languageService } from 'graphql/languages/languages.service'
import * as Styled from './language-select.styles'
import { LanguageSelectProps } from './language-select.types'

export const LanguageSelect = (props: LanguageSelectProps) => {
  const { i18n } = useTranslation()
  const [language, setLanguage] = useState(i18n.language)

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setLanguage(event.target.value)
    languageService.changeLanguage(event.target.value)
  }

  return (
    <Styled.Select
      {...props}
      value={language}
      select
      InputProps={{ startAdornment: <Language color="secondary" /> }}
      inputProps={{ renderValue: (value: string) => value.toUpperCase() }}
      onChange={handleChange}
    >
      <MenuItem value="en">English</MenuItem>
      <MenuItem value="ru">Русский</MenuItem>
    </Styled.Select>
  )
}
