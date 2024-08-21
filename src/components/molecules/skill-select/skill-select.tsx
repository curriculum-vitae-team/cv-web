import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { useController, useFormContext } from 'react-hook-form'
import { Autocomplete, TextField } from '@mui/material'
import { useSkills } from 'hooks/use-skills'
import { SkillMasteryFormValues } from '@dialogs/skill-mastery/skill-mastery.types'
import { SkillSelectProps } from './skill-select.types'

const SkillSelect = ({ ownSkills, disabled }: SkillSelectProps) => {
  const { t } = useTranslation()
  const { skills, loading } = useSkills()
  const { setValue } = useFormContext<SkillMasteryFormValues>()
  const { field } = useController<SkillMasteryFormValues>({ name: 'name' })

  const options = skills
    .filter(({ name }) => disabled || !ownSkills.includes(name))
    .sort((a, b) => {
      if (!a.category?.order || !b.category?.order) {
        return 0
      }

      if (a.category.order > b.category.order) {
        return 1
      }

      return -1
    })

  return (
    <Autocomplete
      autoHighlight
      disabled={disabled || loading}
      {...field}
      value={options.find((option) => option.name === field.value) || null}
      onChange={(_, option) => {
        setValue('name', option?.name || '', { shouldDirty: true })
        setValue('categoryId', option?.category?.id || '')
      }}
      options={options}
      groupBy={(option) => option.category_parent_name || option.category_name || 'Other'}
      getOptionLabel={(option) => option.name}
      renderInput={(params) => <TextField {...params} label={t('Skill')} />}
    />
  )
}

export default memo(SkillSelect)
