import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { useController, useFormContext } from 'react-hook-form'
import { MenuItem, TextField } from '@mui/material'
import { Mastery } from 'cv-graphql'
import { SkillMasteryFormValues } from '@dialogs/skill-mastery/skill-mastery.types'

const SkillMasterySelect = () => {
  const { t } = useTranslation()
  const { watch } = useFormContext<SkillMasteryFormValues>()
  const { field } = useController<SkillMasteryFormValues>({ name: 'mastery' })
  const skillName = watch('name')

  return (
    <TextField
      {...field}
      sx={{ width: '100%' }}
      select
      disabled={!skillName}
      label={t('Skill mastery')}
    >
      {Object.keys(Mastery).map((mastery) => (
        <MenuItem key={mastery} value={mastery}>
          {t(mastery)}
        </MenuItem>
      ))}
    </TextField>
  )
}

export default memo(SkillMasterySelect)
