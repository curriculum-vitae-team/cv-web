import { ChangeEvent, useState } from 'react'
import { MenuItem } from '@mui/material'
import { Language } from '@mui/icons-material'
import * as Styled from './language-select.styles'

export const LanguageSelect = () => {
  const [language, setLanguage] = useState('EN')

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setLanguage(event.target.value)
  }

  return (
    <Styled.Select
      value={language}
      select
      InputProps={{ startAdornment: <Language color="secondary" /> }}
      inputProps={{ renderValue: (value: string) => value }}
      onChange={handleChange}
    >
      <MenuItem value="EN">English</MenuItem>
      <MenuItem value="RU">Русский</MenuItem>
    </Styled.Select>
  )
}
