import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useMutation } from '@apollo/client'
import { Button, TextField, Typography } from '@mui/material'
import { SIGNUP } from '../../../graphql/auth'
import { SignupResult } from '../../../graphql/auth/auth.types'
import { SignupFormValues } from './signup.types'
import { PasswordInput } from '../../molecules/password-input'
import * as Styled from '../login/login.styles'
import { authService } from '../../../graphql/auth/auth.service'

const Signup = () => {
  const { register, handleSubmit } = useForm<SignupFormValues>({
    defaultValues: {
      email: '',
      password: ''
    }
  })

  const [signup, { loading }] = useMutation<SignupResult>(SIGNUP)
  const navigate = useNavigate()

  const onSubmit = async (values: SignupFormValues) => {
    const { data } = await signup({ variables: values })
    if (data) {
      const { user, access_token } = data.signup
      authService.writeToStorage(user, access_token)
      navigate('/employees')
    }
  }

  return (
    <Styled.Form onSubmit={handleSubmit(onSubmit)}>
      <Typography variant="h4" textAlign="center" sx={{ mb: 3 }}>
        Register Now
      </Typography>
      <Typography variant="body1" textAlign="center" sx={{ mb: 5 }}>
        Welcome! Sign up to continue.
      </Typography>
      <TextField {...register('email')} />
      <PasswordInput {...register('password')} />
      <Button variant="contained" type="submit" disabled={loading}>
        Sign Up
      </Button>
      <Button type="button" sx={{ mt: 2 }} onClick={() => navigate('login')}>
        I don't have an account
      </Button>
    </Styled.Form>
  )
}

export default Signup
