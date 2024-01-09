import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { useController } from 'react-hook-form'
import { MenuItem, TextField } from '@mui/material'

const categories = [
  'Programming languages',
  'Programming technologies',
  'Integrated development environment',
  'Source control systems',
  'Database management system'
]

const SkillCategorySelect = () => {
  const { t } = useTranslation()
  const { field } = useController({ name: 'category' })

  return (
    <TextField {...field} sx={{ width: '100%' }} select label={t('Category')}>
      {categories.map((category) => (
        <MenuItem key={category} value={category}>
          {t(category)}
        </MenuItem>
      ))}
    </TextField>
  )
}

export default memo(SkillCategorySelect)
