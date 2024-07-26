import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { Typography, Button, TextField } from '@mui/material'
import { useState } from 'react'
import { authService } from 'graphql/auth/auth.service'
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
      .then(({ data }) => authService.login(data.login))
      .then(() => navigate(routes.root))
      .catch((error) => addNotification(error.message, 'error'))
      .finally(() => setLoading(false))
  }

  return (
    <Styled.Form onSubmit={handleSubmit(onSubmit)}>
      <Typography variant="h4" textAlign="center" sx={{ mb: 3 }}>
        {t('Welcome Back')}
      </Typography>
      <Typography variant="body1" textAlign="center" sx={{ mb: 5 }}>
        {t('Hello again! Sign in to continue.')}
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
          {t('Sign in')}
        </Button>
        <Button type="button" onClick={() => navigate(routes.auth.signup)}>
          {t("I don't have an account")}
        </Button>
      </Styled.Actions>
    </Styled.Form>
  )
}

export default Login
