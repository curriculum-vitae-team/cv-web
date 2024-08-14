import { FormProvider, useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { Button, DialogActions, DialogTitle, TextField } from '@mui/material'
import { type User, UserRole } from 'cv-graphql'
import { DepartmentSelect } from '@molecules/department-select'
import { PositionSelect } from '@molecules/position-select'
import { RoleSelect } from '@molecules/role-select'
import { useUserCreate, useUserUpdate } from 'hooks/use-users'
import { createDialogHook } from 'helpers/create-dialog-hook.helper'
import { passwordValidation, requiredValidation } from 'helpers/validation.helper'
import { useProfileUpdate } from 'hooks/use-profile'
import { useAuth } from 'hooks/use-auth'
import { addNotification } from 'graphql/notifications'
import { UserFormValues, UserProps } from './user.types'
import * as Styled from './user.styles'

const User = ({ title = 'Create user', saveText = 'Create', item, closeDialog }: UserProps) => {
  const { isAdmin } = useAuth()
  const methods = useForm<UserFormValues>({
    defaultValues: {
      auth: {
        email: item?.email || '',
        password: item ? '**********' : ''
      },
      profile: {
        first_name: item?.profile.first_name || '',
        last_name: item?.profile.last_name || ''
      },
      departmentId: item?.department?.id || '',
      positionId: item?.position?.id || '',
      role: item?.role || UserRole.Employee
    }
  })
  const {
    formState: { errors, isDirty },
    register,
    handleSubmit
  } = methods
  const { t } = useTranslation()
  const [createUser, { loading }] = useUserCreate()
  const [updateUser, { loading: updating }] = useUserUpdate()
  const [updateProfile] = useProfileUpdate()

  const onSubmit = ({ auth, profile, departmentId, positionId, role }: UserFormValues) => {
    if (item) {
      updateProfile({
        variables: {
          profile: {
            userId: item.id,
            first_name: profile.first_name,
            last_name: profile.last_name
          }
        }
      })
        .then(() =>
          updateUser({
            variables: {
              user: {
                userId: item.id,
                departmentId,
                positionId,
                role
              }
            }
          })
        )
        .then(closeDialog)
        .then(() => addNotification('User was updated'))
        .catch((error: Error) => addNotification(error.message, 'error'))

      return
    }
    createUser({
      variables: {
        user: {
          auth,
          profile,
          cvsIds: [],
          departmentId,
          positionId,
          role
        }
      }
    })
      .then(closeDialog)
      .then(() => addNotification('User was created'))
      .catch((error: Error) => addNotification(error.message, 'error'))
  }

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <DialogTitle>{t(title)}</DialogTitle>
        <Styled.Column>
          <TextField
            {...register('auth.email', { validate: requiredValidation })}
            autoFocus
            label={t('Email')}
            disabled={!!item}
            error={!!errors.auth?.email}
            helperText={errors.auth?.email?.message}
          />
          <TextField
            {...register('auth.password', { validate: item ? undefined : passwordValidation })}
            label={t('Password')}
            disabled={!!item}
            error={!!errors.auth?.password}
            helperText={errors.auth?.password?.message}
          />
          <TextField {...register('profile.first_name')} label={t('First Name')} />
          <TextField {...register('profile.last_name')} label={t('Last Name')} />
          <DepartmentSelect name="departmentId" />
          <PositionSelect name="positionId" />
          <RoleSelect name="role" disabled={!isAdmin} />
        </Styled.Column>
        <DialogActions>
          <Button variant="outlined" color="secondary" onClick={closeDialog}>
            {t('Cancel')}
          </Button>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            disabled={loading || updating || !isDirty}
          >
            {t(saveText)}
          </Button>
        </DialogActions>
      </form>
    </FormProvider>
  )
}

export const useUserDialog = createDialogHook<UserProps>((props) => () => <User {...props} />, {
  maxWidth: 'md',
  fullWidth: true
})
