import { Button, TextField, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { routes } from 'constants/routes'
import { requiredValidation } from 'helpers/validation.helper'
import { useForgotPassword } from 'hooks/use-auth'
import { addNotification } from 'graphql/notifications'
import * as Styled from './forgot_password.styles'
import { ForgotPasswordFormValues } from './forgot_password.types'

const ForgotPassword = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const {
    formState: { errors, isDirty },
    register,
    handleSubmit
  } = useForm<ForgotPasswordFormValues>({
    defaultValues: {
      email: ''
    }
  })
  const [forgotPassword, { loading }] = useForgotPassword()

  const onSubmit = ({ email }: ForgotPasswordFormValues) => {
    forgotPassword({ variables: { auth: { email } } })
      .then(() => navigate(routes.auth.login))
      .then(() => addNotification('Check your email inbox'))
      .catch((error: Error) => addNotification(error.message, 'error'))
  }

  return (
    <>
      <Styled.Header />
      <Styled.Form onSubmit={handleSubmit(onSubmit)}>
        <Typography variant="h4" textAlign="center">
          {t('Forgot password')}
        </Typography>
        <Typography variant="body1" textAlign="center">
          {t('We will sent you an email with further instructions')}
        </Typography>
        <TextField
          {...register('email', { validate: requiredValidation })}
          label={t('Email')}
          placeholder="example@mail.com"
          autoFocus
          error={!!errors.email}
          helperText={t(errors.email?.message || '')}
        />
        <Styled.Actions>
          <Button variant="contained" type="submit" disabled={loading || !isDirty}>
            {t('Reset password')}
          </Button>
          <Button color="secondary" onClick={() => navigate(routes.auth.login)}>
            {t('Cancel')}
          </Button>
        </Styled.Actions>
      </Styled.Form>
    </>
  )
}

export default ForgotPassword
