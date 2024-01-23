import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { useController, useFormContext } from 'react-hook-form'
import { MenuItem, TextField } from '@mui/material'
import { useSkills } from 'hooks/use-skills'
import { SkillMasteryFormValues } from '@dialogs/skill-mastery/skill-mastery.types'
import { SkillSelectProps } from './skill-select.types'

const SkillSelect = ({ ownSkills, disabled }: SkillSelectProps) => {
  const { t } = useTranslation()
  const { skills, loading } = useSkills()
  const { setValue } = useFormContext<SkillMasteryFormValues>()
  const { field } = useController<SkillMasteryFormValues>({ name: 'name' })

  return (
    <TextField
      {...field}
      sx={{ width: '100%' }}
      select
      disabled={disabled || loading}
      label={t('Skill')}
    >
      {skills
        .filter(({ name }) => disabled || !ownSkills.includes(name))
        .map(({ id, name, category }) => (
          <MenuItem key={id} value={name} onClick={() => setValue('category', category || '')}>
            {name}
          </MenuItem>
        ))}
    </TextField>
  )
}

export default memo(SkillSelect)
