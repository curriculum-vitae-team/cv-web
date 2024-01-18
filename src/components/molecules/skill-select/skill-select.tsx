import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { useController, useFormContext } from 'react-hook-form'
import { MenuItem, TextField } from '@mui/material'
import { useSkills } from 'hooks/use-skills'
import { useProfileSkills } from 'hooks/use-profile'
import { SkillMasteryFormValues } from '@dialogs/skill-mastery/skill-mastery.types'
import { useCvSkills } from 'hooks/use-cvs'
import { CvSkillSelectProps, ProfileSkillSelectProps, SkillSelectProps } from './skill-select.types'

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

const ProfileSkillSelectComponent = ({ userId, ...props }: ProfileSkillSelectProps) => {
  const { skills } = useProfileSkills(userId)
  const ownSkills = skills.map((skill) => skill.name) || []

  return <SkillSelect {...props} ownSkills={ownSkills} />
}

export const ProfileSkillSelect = memo(ProfileSkillSelectComponent)

const CvSkillSelectComponent = ({ cvId, ...props }: CvSkillSelectProps) => {
  const { skills } = useCvSkills(cvId)
  const ownSkills = skills.map((skill) => skill.name) || []

  return <SkillSelect {...props} ownSkills={ownSkills} />
}

export const CvSkillSelect = memo(CvSkillSelectComponent)
