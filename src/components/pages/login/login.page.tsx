import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { Typography, Button, TextField } from '@mui/material'
import { useState } from 'react'
import { setSession } from 'graphql/auth/session'
import { PasswordInput } from '@molecules/password-input'
import { requiredValidation } from 'helpers/validation.helper'
import { routes } from 'constants/routes'
import { addNotification } from 'graphql/notifications'
import { login } from 'hooks/use-auth'
import * as Styled from './login.styles'
import { LoginFormValues } from './login.types'

const Login = () => {
  const {
    formState: { errors },
    register,
    handleSubmit
  } = useForm<LoginFormValues>({
    defaultValues: {
      email: '',
      password: ''
    }
  })
  const navigate = useNavigate()
  const { t } = useTranslation()
  const [loading, setLoading] = useState(false)

  const onSubmit = ({ email, password }: LoginFormValues) => {
    setLoading(true)
    login({ variables: { auth: { email, password } } })
      .then(({ data }) => setSession(data.login))
      .then(() => navigate(routes.root))
      .catch((error) => addNotification(error.message, 'error'))
      .finally(() => setLoading(false))
  }

  return (
    <Styled.Form onSubmit={handleSubmit(onSubmit)}>
      <Typography variant="h4" textAlign="center">
        {t('Welcome back')}
      </Typography>
      <Typography variant="body1" textAlign="center">
        {t('Hello again! Log in to continue')}
      </Typography>
      <TextField
        {...register('email', { validate: requiredValidation })}
        label={t('Email')}
        placeholder="example@mail.com"
        autoFocus
        error={!!errors.email}
        helperText={t(errors.email?.message || '')}
      />
      <PasswordInput
        {...register('password', { validate: requiredValidation })}
        label={t('Password')}
        placeholder={t('Enter your password') || ''}
        error={!!errors.password}
        helperText={t(errors.password?.message || '')}
      />
      <Styled.Actions>
        <Button variant="contained" type="submit" disabled={loading}>
          {t('Log in')}
        </Button>
        <Button color="secondary" onClick={() => navigate(routes.forgotPassword)}>
          {t('Forgot password')}
        </Button>
      </Styled.Actions>
    </Styled.Form>
  )
}

export default Login
