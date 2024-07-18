import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { Typography, Button, TextField } from '@mui/material'
import { authService } from 'graphql/auth/auth.service'
import { PasswordInput } from '@molecules/password-input'
import { requiredValidation } from 'helpers/validation.helper'
import { routes } from 'constants/routes'
import { useLogin } from 'hooks/use-auth'
import { LoginFormValues } from './login.types'
import * as Styled from './login.styles'

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
  const [login, { loading }] = useLogin()
  const navigate = useNavigate()
  const { t } = useTranslation()

  const onSubmit = async ({ email, password }: LoginFormValues) => {
    const { data } = await login({
      variables: {
        auth: {
          email,
          password
        }
      }
    })
    if (data) {
      authService.login(data.login)
      navigate(routes.root)
    }
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
