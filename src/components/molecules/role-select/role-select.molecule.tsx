import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { Controller } from 'react-hook-form'
import { MenuItem, TextField } from '@mui/material'
import { UserRole } from 'cv-graphql'
import { RoleSelectProps } from './role-select.types'

const RoleSelect = ({ name, ...props }: RoleSelectProps) => {
  const { t } = useTranslation()

  return (
    <Controller
      name={name}
      render={({ field }) => (
        <TextField {...field} {...props} select label={t('Role')}>
          <MenuItem value={UserRole.Employee}>{t('Employee')}</MenuItem>
          <MenuItem value={UserRole.Admin}>{t('Admin')}</MenuItem>
        </TextField>
      )}
    />
  )
}

export default memo(RoleSelect)
