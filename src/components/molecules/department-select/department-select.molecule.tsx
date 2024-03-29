import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { useController } from 'react-hook-form'
import { MenuItem, TextField } from '@mui/material'
import { useDepartments } from 'hooks/use-departments.hook'
import { DepartmentSelectProps } from './department-select.types'

const DepartmentSelect = ({ name, ...props }: DepartmentSelectProps) => {
  const { t } = useTranslation()
  const { departments, loading } = useDepartments()
  const { field } = useController({ name })
  const value = departments.length ? field.value : ''

  return (
    <TextField
      {...props}
      {...field}
      value={value}
      select
      disabled={loading}
      label={t('Department')}
    >
      <MenuItem value="">{t('No department')}</MenuItem>
      {departments.map(({ id, name }) => (
        <MenuItem key={id} value={id}>
          {name}
        </MenuItem>
      ))}
    </TextField>
  )
}

export default memo(DepartmentSelect)
