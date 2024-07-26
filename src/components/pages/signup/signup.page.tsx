import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Button, TextField, Typography } from '@mui/material'
import { authService } from 'graphql/auth/auth.service'
import { PasswordInput } from '@molecules/password-input'
import { requiredValidation, passwordValidation } from 'helpers/validation.helper'
import { routes } from 'constants/routes'
import { useSignup } from 'hooks/use-auth'
import { addNotification } from 'graphql/notifications'
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

  const onSubmit = ({ email, password }: SignupFormValues) => {
    signup({
      variables: {
        auth: {
          email,
          password
        }
      }
    })
      .then(({ data }) => data && authService.login(data.signup))
      .then(() => navigate(routes.root))
      .catch((error) => addNotification(error.message, 'error'))
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
        placeholder="example@mail.com"
        autoFocus
        error={!!errors.email}
        helperText={t(errors.email?.message || '')}
      />
      <PasswordInput
        {...register('password', { validate: passwordValidation })}
        label={t('Password')}
        placeholder={t('Enter your password') || ''}
        error={!!errors.password}
        helperText={t(errors.password?.message || '')}
      />
      <Styled.Actions>
        <Button variant="contained" type="submit" disabled={loading}>
          {t('Sign up')}
        </Button>
        <Button type="button" onClick={() => navigate(routes.auth.login)}>
          {t('I have an account')}
        </Button>
      </Styled.Actions>
    </Styled.Form>
  )
}

export default Signup
