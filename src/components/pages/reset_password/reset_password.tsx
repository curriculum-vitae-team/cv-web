import { useTranslation } from 'react-i18next'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { Button, TextField, Typography } from '@mui/material'
import { useState } from 'react'
import * as Styled from '@pages/forgot_password/forgot_password.styles'
import { addNotification } from 'graphql/notifications'
import { passwordValidation } from 'helpers/validation.helper'
import { routes } from 'constants/routes'
import { resetPassword } from 'hooks/use-auth'
import { ResetPasswordFormValues } from './reset_password.types'

const ResetPassword = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const {
    formState: { errors, isDirty },
    register,
    handleSubmit
  } = useForm<ResetPasswordFormValues>({
    defaultValues: {
      newPassword: ''
    }
  })
  const [loading, setLoading] = useState(false)

  const onSubmit = ({ newPassword }: ResetPasswordFormValues) => {
    const token = searchParams.get('token')!

    setLoading(true)
    resetPassword({ variables: { auth: { newPassword } } }, token)
      .then(() => navigate(routes.auth.login))
      .then(() => addNotification('Password has been reset'))
      .catch((error: Error) => {
        if (error.message === 'Action expired') {
          navigate(routes.auth.login)
        }

        addNotification(error.message, 'error')
      })
      .finally(() => setLoading(false))
  }

  return (
    <>
      <Styled.Header />
      <Styled.Form onSubmit={handleSubmit(onSubmit)}>
        <Typography variant="h4" textAlign="center">
          {t('Set a new password')}
        </Typography>
        <Typography variant="body1" textAlign="center">
          {t('Now create a new password.')}
        </Typography>
        <TextField
          {...register('newPassword', { validate: passwordValidation })}
          label={t('New password')}
          placeholder={t('Enter new password')}
          autoFocus
          error={!!errors.newPassword}
          helperText={t(errors.newPassword?.message || '')}
        />
        <Styled.Actions>
          <Button variant="contained" type="submit" disabled={loading || !isDirty}>
            {t('Submit')}
          </Button>
          <Button color="secondary" onClick={() => navigate(routes.auth.login)}>
            {t('Back to Login')}
          </Button>
        </Styled.Actions>
      </Styled.Form>
    </>
  )
}

export default ResetPassword
