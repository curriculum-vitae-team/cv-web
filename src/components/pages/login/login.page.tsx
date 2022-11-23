import { useForm } from 'react-hook-form'
import { useLazyQuery } from '@apollo/client'
import { useNavigate } from 'react-router-dom'
import { Typography, Button, TextField } from '@mui/material'
import { LoginFormValues } from './login.types'
import { LoginResult } from '../../../graphql/auth/auth.types'
import { LOGIN } from '../../../graphql/auth'
import { authService } from '../../../graphql/auth/auth.service'
import * as Styled from './login.styles'
import { PasswordInput } from '../../molecules/password-input'

const Login = () => {
  const { register, handleSubmit } = useForm<LoginFormValues>({
    defaultValues: {
      email: '',
      password: ''
    }
  })
  const [login, { loading }] = useLazyQuery<LoginResult>(LOGIN)
  const navigate = useNavigate()

  const onSubmit = async (values: LoginFormValues) => {
    const { data } = await login({ variables: values })
    if (data) {
      const { user, access_token } = data.login
      authService.writeToStorage(user, access_token)
      navigate('/employees')
    }
  }

  return (
    <Styled.Form onSubmit={handleSubmit(onSubmit)}>
      <Typography variant="h4" textAlign="center" sx={{ mb: 3 }}>
        Welcome Back
      </Typography>
      <Typography variant="body1" textAlign="center" sx={{ mb: 5 }}>
        Hello again! Sign in to continue.
      </Typography>
      <TextField {...register('email')} />
      <PasswordInput {...register('password')} />
      <Button variant="contained" type="submit" disabled={loading}>
        Sign In
      </Button>
      <Button type="button" sx={{ mt: 2 }}>
        Reset Password
      </Button>
    </Styled.Form>
  )
}

export default Login
