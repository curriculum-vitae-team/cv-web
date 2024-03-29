import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Button, TextField, Typography } from '@mui/material'
import { authService } from 'graphql/auth/auth.service'
import { PasswordInput } from '@molecules/password-input'
import { requiredValidation, passwordValidation } from 'helpers/validation.helper'
import { routes } from 'constants/routes'
import { useSignup } from 'hooks/use-auth'
import { SignupFormValues } from './signup.types'
import * as Styled from '../login/login.styles'

const Signup = () => {
  const {
    formState: { errors },
    register,
    handleSubmit
  } = useForm<SignupFormValues>({
    defaultValues: {
      email: '',
      password: ''
    }
  })

  const [signup, { loading }] = useSignup()
  const navigate = useNavigate()
  const { t } = useTranslation()

  const onSubmit = async ({ email, password }: SignupFormValues) => {
    const { data } = await signup({
      variables: {
        auth: {
          email,
          password
        }
      }
    })
    if (data) {
      const { user, access_token } = data.signup
      authService.login(user, access_token)
      navigate(routes.root)
    }
  }

  return (
    <Styled.Form onSubmit={handleSubmit(onSubmit)}>
      <Typography variant="h4" textAlign="center" sx={{ mb: 3 }}>
        {t('Register Now')}
      </Typography>
      <Typography variant="body1" textAlign="center" sx={{ mb: 5 }}>
        {t('Welcome! Sign up to continue.')}
      </Typography>
      <TextField
        {...register('email', { validate: requiredValidation })}
        label={t('Email')}
        autoFocus
        error={!!errors.email}
        helperText={t(errors.email?.message || '')}
      />
      <PasswordInput
        {...register('password', { validate: passwordValidation })}
        label={t('Password')}
        error={!!errors.password}
        helperText={t(errors.password?.message || '')}
      />
      <Button variant="contained" type="submit" disabled={loading}>
        {t('Sign up')}
      </Button>
      <Button type="button" sx={{ mt: 2 }} onClick={() => navigate(routes.auth.login)}>
        {t('I have an account')}
      </Button>
    </Styled.Form>
  )
}

export default Signup
