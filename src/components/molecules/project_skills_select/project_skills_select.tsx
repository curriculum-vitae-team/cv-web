import { useController, useFormContext } from 'react-hook-form'
import { Chip, TextField } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { useSkills } from 'hooks/use-skills'
import * as Styled from './project_skills_select.styles'

export const ProjectSkillsSelect = () => {
  const { t } = useTranslation()
  const { skills } = useSkills()
  const { control, setValue } = useFormContext()
  const { field } = useController({ control, name: 'environment' })

  return (
    <Styled.Skills
      value={field.value}
      multiple
      options={skills
        .filter((skill) => !field.value.includes(skill.name))
        .map((skill) => skill.name)}
      renderTags={(value, getTagProps) =>
        value.map((option, index) => (
          <Chip {...getTagProps({ index })} key={option} label={option} size="small" />
        ))
      }
      renderInput={(params) => (
        <TextField {...params} label={t('Environment')} placeholder={t('Add skill')} />
      )}
      onChange={(_, newValue) => {
        setValue('environment', newValue, { shouldDirty: true })
      }}
    />
  )
}
