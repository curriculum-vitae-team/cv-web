import { FormProvider, useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { Button, DialogActions, DialogTitle, TextField } from '@mui/material'
import { DepartmentSelect } from '@molecules/department-select'
import { PositionSelect } from '@molecules/position-select'
import { RoleSelect } from '@molecules/role-select'
import { useUserCreate, useUserUpdate } from 'hooks/use-users.hook'
import { createDialogHook } from 'helpers/create-dialog-hook.helper'
import { passwordValidation, requiredValidation } from 'helpers/validation.helper'
import { UserFormValues, UserProps } from './user.types'
import * as Styled from './user.styles'

const defaultValues = {
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

const User = ({ item, closeDialog }: UserProps) => {
  const methods = useForm<UserFormValues>({
    defaultValues: item
      ? {
          auth: {
            email: item.email,
            password: '**********'
          },
          profile: {
            first_name: item.profile.first_name,
            last_name: item.profile.last_name
          },
          departmentId: item.department?.id || '',
          positionId: item.position?.id || '',
          role: item.role
        }
      : defaultValues
  })
  const {
    formState: { errors, isDirty },
    register,
    handleSubmit
  } = methods
  const { t } = useTranslation()
  const [createUser, loading] = useUserCreate()
  const [updateUser, updating] = useUserUpdate()

  const onSubmit = (values: UserFormValues) => {
    if (item) {
      updateUser({
        variables: {
          id: item.id,
          user: {
            profile: {
              ...values.profile
            },
            departmentId: values.departmentId,
            positionId: values.positionId,
            role: values.role
          }
        }
      }).then(closeDialog)
      return
    }
    createUser({
      variables: {
        user: {
          ...values,
          cvsIds: []
        }
      }
    }).then(closeDialog)
  }

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <DialogTitle>{item ? t('Update user') : t('Create user')}</DialogTitle>
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
          <RoleSelect name="role" />
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
            {item ? t('Update') : t('Create')}
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
