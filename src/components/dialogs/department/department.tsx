import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { Button, DialogActions, DialogTitle, TextField } from '@mui/material'
import { useState } from 'react'
import { createDialogHook } from 'helpers/create-dialog-hook.helper'
import { DepartmentFormValues, DepartmentProps } from './department.types'
import * as Styled from './department.styles'

const Department = ({
  title,
  confirmText,
  department,
  onConfirm,
  closeDialog
}: DepartmentProps) => {
  const {
    formState: { errors, isDirty },
    register,
    handleSubmit
  } = useForm<DepartmentFormValues>({
    defaultValues: {
      name: department?.name || ''
    }
  })
  const { t } = useTranslation()
  const [isLoading, setIsLoading] = useState(false)

  const onSubmit = (values: DepartmentFormValues) => {
    setIsLoading(true)
    onConfirm(values)
      .then(closeDialog)
      .catch(() => setIsLoading(false))
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <DialogTitle>{t(title)}</DialogTitle>
      <Styled.Column>
        <TextField
          {...register('name', { required: true })}
          autoFocus
          label={t('Name')}
          error={!!errors.name}
        />
      </Styled.Column>
      <DialogActions>
        <Button variant="outlined" color="secondary" onClick={closeDialog}>
          {t('Cancel')}
        </Button>
        <Button variant="contained" color="primary" type="submit" disabled={isLoading || !isDirty}>
          {t(confirmText)}
        </Button>
      </DialogActions>
    </form>
  )
}

export const useDepartmentDialog = createDialogHook<DepartmentProps>(
  (props) => () => <Department {...props} />,
  { maxWidth: 'sm', fullWidth: true }
)
