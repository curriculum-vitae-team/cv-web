import { useForm } from 'react-hook-form'
import { Button, TextField } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { generatePath, useNavigate } from 'react-router-dom'
import { useMailVerify } from 'hooks/use-mail'
import { otpValidation } from 'helpers/validation.helper'
import { routes } from 'constants/routes'
import { useAuth } from 'hooks/use-auth'
import { VerifyEmailFormValues } from './verify-email.types'

const VerifyEmail = () => {
  const { t } = useTranslation()
  const { userId } = useAuth()
  const navigate = useNavigate()
  const { formState, register, handleSubmit } = useForm<VerifyEmailFormValues>({
    defaultValues: {
      otp: ''
    }
  })
  const [verifyMail, { loading }] = useMailVerify()

  const onSubmit = ({ otp }: VerifyEmailFormValues) => {
    verifyMail({
      variables: {
        mail: { otp }
      }
    }).then(() => navigate(generatePath(routes.users.profile, { userId })))
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          {...register('otp', { validate: otpValidation })}
          label={t('One time password code')}
          error={!!formState.errors.otp}
          helperText={formState.errors.otp?.message}
        />
        <Button type="submit" disabled={loading || !formState.isDirty}>
          {t('Verify')}
        </Button>
      </form>
    </div>
  )
}

export default VerifyEmail
