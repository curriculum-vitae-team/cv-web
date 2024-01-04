import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { useController, useFormContext } from 'react-hook-form'
import { MenuItem, TextField } from '@mui/material'
import { SkillMastery } from 'constants/skill-mastery.constants'

const SkillMasterySelect = () => {
  const { t } = useTranslation()
  const { watch } = useFormContext()
  const { field } = useController({ name: 'mastery' })
  const skillName = watch('skill_name')

  return (
    <TextField
      {...field}
      sx={{ width: '100%' }}
      select
      disabled={!skillName}
      label={t('Skill mastery')}
    >
      {Object.values(SkillMastery).map((mastery) => (
        <MenuItem key={mastery} value={mastery}>
          {t(mastery)}
        </MenuItem>
      ))}
    </TextField>
  )
}

export default memo(SkillMasterySelect)
