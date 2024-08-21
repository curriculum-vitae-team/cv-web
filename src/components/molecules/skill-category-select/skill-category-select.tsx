import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { useController } from 'react-hook-form'
import { MenuItem, TextField } from '@mui/material'
import { useSkillCategories } from 'hooks/use-skills'
import { SkillMasteryFormValues } from '@dialogs/skill-mastery/skill-mastery.types'
import { SkillCategorySelectProps } from './skill-category-select.types'

const SkillCategorySelect = ({ disabled }: SkillCategorySelectProps) => {
  const { t } = useTranslation()
  const { field } = useController<SkillMasteryFormValues>({ name: 'categoryId' })
  const { categories, loading } = useSkillCategories()
  const selected = categories.find((category) => category.id === field.value)

  return (
    <TextField
      {...field}
      value={selected?.id || ''}
      disabled={disabled || loading}
      sx={{ width: '100%' }}
      select
      label={t('Category')}
    >
      <MenuItem value="">{t('No category')}</MenuItem>
      {categories.map(({ id, name }) => (
        <MenuItem key={name} value={id}>
          {t(name)}
        </MenuItem>
      ))}
    </TextField>
  )
}

export default memo(SkillCategorySelect)
