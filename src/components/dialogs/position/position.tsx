import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { Button, DialogActions, DialogTitle, TextField } from '@mui/material'
import { useState } from 'react'
import { createDialogHook } from 'helpers/create-dialog-hook.helper'
import { PositionFormValues, PositionProps } from './position.types'
import * as Styled from './position.styles'

const Position = ({ title, confirmText, position, onConfirm, closeDialog }: PositionProps) => {
  const {
    formState: { errors, isDirty },
    register,
    handleSubmit
  } = useForm<PositionFormValues>({
    defaultValues: {
      name: position?.name || ''
    }
  })
  const { t } = useTranslation()
  const [isLoading, setIsLoading] = useState(false)

  const onSubmit = (values: PositionFormValues) => {
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

export const usePositionDialog = createDialogHook<PositionProps>(
  (props) => () => <Position {...props} />,
  { maxWidth: 'sm', fullWidth: true }
)
