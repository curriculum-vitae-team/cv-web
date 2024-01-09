import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { useController, useFormContext } from 'react-hook-form'
import { MenuItem, TextField } from '@mui/material'
import { useSkills } from 'hooks/use-skills'
import { useAuth } from 'hooks/use-auth'
import { useProfileSkills } from 'hooks/use-profile'
import { SkillMasteryFormValues } from '@dialogs/skill-mastery/skill-mastery.types'
import { SkillSelectProps } from './skill-select.types'

const SkillSelect = ({ disabled }: SkillSelectProps) => {
  const { t } = useTranslation()
  const { profileId } = useAuth()
  const { skills: allSkills, loading } = useSkills()
  const { setValue } = useFormContext<SkillMasteryFormValues>()
  const { field } = useController<SkillMasteryFormValues>({ name: 'name' })
  const { skills } = useProfileSkills(profileId)

  const ownSkills = skills.map((skill) => skill.name) || []
  const sortedSkills = [...allSkills].sort((a) => {
    if (ownSkills.includes(a.name)) {
      return 1
    }
    return -1
  })

  return (
    <TextField
      {...field}
      sx={{ width: '100%' }}
      select
      disabled={disabled || loading}
      label={t('Skill')}
    >
      {sortedSkills.map(({ id, name, category }) => (
        <MenuItem
          key={id}
          value={name}
          disabled={ownSkills.includes(name)}
          onClick={() => category && setValue('category', category)}
        >
          {name}
        </MenuItem>
      ))}
    </TextField>
  )
}

export default memo(SkillSelect)
