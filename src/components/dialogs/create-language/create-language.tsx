import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { Button, DialogActions, DialogTitle, TextField } from '@mui/material'
import { DialogProps } from '@graphql/dialogs/dialogs.types'
import { useLanguageCreate } from '@hooks/use-languages.hook'
import { createDialogHook } from '../../../helpers/create-dialog-hook.helper'
import { CreateLanguageFormValues } from './create-language.types'
import * as Styled from './create-language.styles'

const CreateLanguage = ({ closeDialog }: DialogProps) => {
  const {
    formState: { errors, isDirty },
    register,
    handleSubmit
  } = useForm<CreateLanguageFormValues>({
    defaultValues: {
      name: '',
      native_name: '',
      iso2: ''
    }
  })
  const { t } = useTranslation()
  const [createLanguage, loading] = useLanguageCreate()

  const onSubmit = (values: CreateLanguageFormValues) => {
    createLanguage({
      variables: {
        language: values
      }
    }).then(() => closeDialog())
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <DialogTitle>{t('Create Language')}</DialogTitle>
      <Styled.Column>
        <TextField
          {...register('name', { required: true })}
          label={t('Name')}
          error={!!errors.name}
        />
        <TextField
          {...register('native_name')}
          label={t('Native Name')}
          error={!!errors.native_name}
        />
        <TextField
          {...register('iso2', { required: true, minLength: 2, maxLength: 2 })}
          label="ISO2"
          error={!!errors.iso2}
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

export const useCreateLanguageDialog = createDialogHook<DialogProps>(
  (props) => () => <CreateLanguage {...props} />,
  { maxWidth: 'sm', fullWidth: true }
)
