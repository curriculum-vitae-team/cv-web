import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { useController } from 'react-hook-form'
import { MenuItem, TextField } from '@mui/material'
import { useSkillCategories } from 'hooks/use-skills'
import { SkillMasteryFormValues } from '@dialogs/skill-mastery/skill-mastery.types'
import { SkillCategorySelectProps } from './skill-category-select.types'

const SkillCategorySelect = ({ disabled }: SkillCategorySelectProps) => {
  const { t } = useTranslation()
  const { field } = useController<SkillMasteryFormValues>({ name: 'category' })
  const { categories, loading } = useSkillCategories()

  return (
    <TextField
      {...field}
      disabled={disabled || loading}
      sx={{ width: '100%' }}
      select
      label={t('Category')}
    >
      <MenuItem value="">{t('No Category')}</MenuItem>
      {categories.map((category) => (
        <MenuItem key={category} value={category}>
          {t(category)}
        </MenuItem>
      ))}
    </TextField>
  )
}

export default memo(SkillCategorySelect)
