import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { Button, DialogActions, DialogTitle, TextField } from '@mui/material'
import { createDialogHook } from 'helpers/create-dialog-hook.helper'
import { useCvCreate } from 'hooks/use-cvs'
import { requiredValidation } from 'helpers/validation.helper'
import { addNotification } from 'graphql/notifications'
import { CvFormValues, CvProps } from './cv.types'
import * as Styled from './cv.styles'

const Cv = ({ userId, closeDialog }: CvProps) => {
  const {
    formState: { errors, isDirty },
    register,
    handleSubmit
  } = useForm<CvFormValues>({
    defaultValues: {
      name: '',
      education: '',
      description: ''
    }
  })
  const { t } = useTranslation()
  const [createCv, { loading }] = useCvCreate()

  const onSubmit = ({ name, education, description }: CvFormValues) => {
    createCv({
      variables: {
        cv: {
          name,
          education,
          description,
          userId
        }
      }
    })
      .then(closeDialog)
      .then(() => addNotification('CV was created'))
      .catch((error) => addNotification(error.message, 'error'))
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <DialogTitle>{t('Create CV')}</DialogTitle>
      <Styled.Column>
        <TextField
          {...register('name', { validate: requiredValidation })}
          autoFocus
          label={t('Name')}
          error={!!errors.name}
          helperText={t(errors.name?.message || '')}
        />
        <TextField {...register('education')} label={t('Education')} />
        <Styled.Description
          {...register('description', { validate: requiredValidation })}
          label={t('Description')}
          multiline
          minRows={7}
          error={!!errors.description}
          helperText={t(errors.description?.message || '')}
        />
      </Styled.Column>
      <DialogActions>
        <Button variant="outlined" color="secondary" onClick={closeDialog}>
          {t('Cancel')}
        </Button>
        <Button variant="contained" color="primary" type="submit" disabled={loading || !isDirty}>
          {t('Create')}
        </Button>
      </DialogActions>
    </form>
  )
}

export const useCvDialog = createDialogHook<CvProps>((props) => () => <Cv {...props} />, {
  maxWidth: 'sm',
  fullWidth: true
})
