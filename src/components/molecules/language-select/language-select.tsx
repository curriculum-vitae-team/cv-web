import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { useController } from 'react-hook-form'
import { MenuItem, TextField } from '@mui/material'
import { LanguageProficiencyFormValues } from '@dialogs/language-proficiency/language-proficiency.types'
import { useLanguages } from 'hooks/use-languages.hook'
import { LanguageSelectProps } from './language-select.types'

const LanguageSelect = ({ ownLanguages, disabled }: LanguageSelectProps) => {
  const { t } = useTranslation()
  const { languages, loading } = useLanguages()
  const { field } = useController<LanguageProficiencyFormValues>({ name: 'name' })

  return (
    <TextField
      {...field}
      sx={{ width: '100%' }}
      select
      disabled={disabled || loading}
      label={t('Language')}
    >
      {languages
        .filter(({ name }) => disabled || !ownLanguages.includes(name))
        .map(({ id, name }) => (
          <MenuItem key={id} value={name}>
            {name}
          </MenuItem>
        ))}
    </TextField>
  )
}

export default memo(LanguageSelect)
