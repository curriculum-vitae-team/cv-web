import { FormProvider, useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { Button, DialogActions, DialogTitle, TextField } from '@mui/material'
import { DepartmentSelect } from '@molecules/department-select'
import { PositionSelect } from '@molecules/position-select'
import { RoleSelect } from '@molecules/role-select'
import { DialogProps } from 'graphql/dialogs/dialogs.types'
import { useUserCreate } from 'hooks/use-users.hook'
import { createDialogHook } from 'helpers/create-dialog-hook.helper'
import { passwordValidation, requiredValidation } from 'helpers/validation.helper'
import { CreateUserFormValues } from './create-user.types'
import * as Styled from './create-user.styles'

const CreateUser = ({ closeDialog }: DialogProps) => {
  const methods = useForm<CreateUserFormValues>({
    defaultValues: {
      auth: {
        email: '',
        password: ''
      },
      profile: {
        first_name: '',
        last_name: ''
      },
      departmentId: '',
      positionId: '',
      role: 'employee'
    }
  })
  const {
    formState: { errors, isDirty },
    register,
    handleSubmit
  } = methods
  const { t } = useTranslation()
  const [createUser, loading] = useUserCreate()

  const onSubmit = (values: CreateUserFormValues) => {
    createUser({
      variables: {
        user: {
          ...values,
          cvsIds: []
        }
      }
    }).then(() => closeDialog())
  }

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <DialogTitle>{t('Create user')}</DialogTitle>
        <Styled.Column>
          <TextField
            {...register('auth.email', { validate: requiredValidation })}
            autoFocus
            label={t('Email')}
            error={!!errors.auth?.email}
            helperText={errors.auth?.email?.message}
          />
          <TextField
            {...register('auth.password', { validate: passwordValidation })}
            label={t('Password')}
            error={!!errors.auth?.password}
            helperText={errors.auth?.password?.message}
          />
          <TextField {...register('profile.first_name')} label={t('First Name')} />
          <TextField {...register('profile.last_name')} label={t('Last Name')} />
          <DepartmentSelect name="departmentId" />
          <PositionSelect name="positionId" />
          <RoleSelect name="role" />
        </Styled.Column>
        <DialogActions>
          <Button variant="outlined" color="secondary" onClick={closeDialog}>
            {t('Cancel')}
          </Button>
          <Button variant="contained" color="primary" type="submit" disabled={loading || !isDirty}>
            {t('Create')}
          </Button>
        </DialogActions>
      </form>
    </FormProvider>
  )
}

export const useCreateUserDialog = createDialogHook<DialogProps>(
  (props) => () => <CreateUser {...props} />,
  { maxWidth: 'md', fullWidth: true }
)
