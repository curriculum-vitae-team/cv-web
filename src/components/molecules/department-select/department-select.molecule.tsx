import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { Controller } from 'react-hook-form'
import { MenuItem, TextField } from '@mui/material'
import { useDepartments } from '@hooks/use-departments.hook'
import { DepartmentSelectProps } from './department-select.types'

const DepartmentSelect = ({ name, ...props }: DepartmentSelectProps) => {
  const { t } = useTranslation()
  const [departments, loading] = useDepartments()

  return (
    <Controller
      name={name}
      render={({ field }) => (
        <TextField {...props} {...field} select disabled={loading} label={t('Department')}>
          <MenuItem value="">{t('No Department')}</MenuItem>
          {departments.map(({ id, name }) => (
            <MenuItem key={id} value={id}>
              {name}
            </MenuItem>
          ))}
        </TextField>
      )}
    />
  )
}

export default memo(DepartmentSelect)
