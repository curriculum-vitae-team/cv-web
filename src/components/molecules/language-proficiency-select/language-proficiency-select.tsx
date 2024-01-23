import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { useController, useFormContext } from 'react-hook-form'
import { MenuItem, TextField } from '@mui/material'
import { Proficiency } from 'cv-graphql'
import { LanguageProficiencyFormValues } from '@dialogs/language-proficiency/language-proficiency.types'

const LanguageProficiencySelect = () => {
  const { t } = useTranslation()
  const { watch } = useFormContext<LanguageProficiencyFormValues>()
  const { field } = useController<LanguageProficiencyFormValues>({ name: 'proficiency' })
  const languageName = watch('name')

  return (
    <TextField
      {...field}
      sx={{ width: '100%' }}
      select
      disabled={!languageName}
      label={t('Language proficiency')}
    >
      {Object.keys(Proficiency).map((proficiency) => (
        <MenuItem key={proficiency} value={proficiency}>
          {t(proficiency)}
        </MenuItem>
      ))}
    </TextField>
  )
}

export default memo(LanguageProficiencySelect)
