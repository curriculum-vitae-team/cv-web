import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { Button, DialogActions, DialogTitle, TextField } from '@mui/material'
import { useLanguageCreate, useLanguageUpdate } from 'hooks/use-languages.hook'
import { createDialogHook } from 'helpers/create-dialog-hook.helper'
import { LanguageFormValues, LanguageProps } from './language.types'
import * as Styled from './language.styles'

const defaultValues = {
  name: '',
  native_name: '',
  iso2: ''
}

const Language = ({ item, closeDialog }: LanguageProps) => {
  const {
    formState: { errors, isDirty },
    register,
    handleSubmit
  } = useForm<LanguageFormValues>({
    defaultValues: item || defaultValues
  })
  const { t } = useTranslation()
  const [createLanguage, { loading }] = useLanguageCreate()
  const [updateLanguage, { loading: updating }] = useLanguageUpdate()

  const onSubmit = (values: LanguageFormValues) => {
    if (item) {
      updateLanguage({
        variables: {
          language: {
            languageId: item.id,
            iso2: values.iso2,
            name: values.name,
            native_name: values.native_name
          }
        }
      }).then(closeDialog)
      return
    }
    createLanguage({
      variables: {
        language: values
      }
    }).then(closeDialog)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <DialogTitle>{item ? t('Update language') : t('Create language')}</DialogTitle>
      <Styled.Column>
        <TextField
          {...register('name', { required: true })}
          autoFocus
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

export const useLanguageDialog = createDialogHook<LanguageProps>(
  (props) => () => <Language {...props} />,
  { maxWidth: 'sm', fullWidth: true }
)
