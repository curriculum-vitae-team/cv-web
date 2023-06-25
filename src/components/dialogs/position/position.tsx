import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { Button, DialogActions, DialogTitle, TextField } from '@mui/material'
import { usePositionCreate, usePositionUpdate } from '@hooks/use-positions.hook'
import { createDialogHook } from '../../../helpers/create-dialog-hook.helper'
import { PositionFormValues, PositionProps } from './position.types'
import * as Styled from './position.styles'

const defaultValues = {
  name: ''
}

const Position = ({ item, closeDialog }: PositionProps) => {
  const {
    formState: { errors, isDirty },
    register,
    handleSubmit
  } = useForm<PositionFormValues>({
    defaultValues: item || defaultValues
  })
  const { t } = useTranslation()
  const [createPosition, loading] = usePositionCreate()
  const [updatePosition, updating] = usePositionUpdate()

  const onSubmit = (values: PositionFormValues) => {
    if (item) {
      updatePosition({
        variables: {
          id: item.id,
          position: {
            name: values.name
          }
        }
      }).then(() => closeDialog())
      return
    }
    createPosition({
      variables: {
        position: values
      }
    }).then(() => closeDialog())
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <DialogTitle>{item ? t('Update position') : t('Create position')}</DialogTitle>
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
        <Button
          variant="contained"
          color="primary"
          type="submit"
          disabled={loading || updating || !isDirty}
        >
          {item ? t('Update') : t('Create')}
        </Button>
      </DialogActions>
    </form>
  )
}

export const usePositionDialog = createDialogHook<PositionProps>(
  (props) => () => <Position {...props} />,
  { maxWidth: 'sm', fullWidth: true }
)
