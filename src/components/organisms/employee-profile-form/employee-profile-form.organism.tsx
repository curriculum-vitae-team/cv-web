import { useForm, FormProvider } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { useMutation } from '@apollo/client'
import { Button, MenuItem, TextField } from '@mui/material'
import { FormField } from '@molecules/form-field'
import { UPDATE_USER } from '@graphql/users'
import { UpdateUserInput, UpdateUserResult } from '@graphql/users/users.types'
import { IUser } from '@interfaces/user.interface'
import { useUser } from '@hooks/use-user.hook'
import { EmployeeProfileFormProps, EmployeeProfileFormValues } from './employee-profile-form.types'
import * as Styled from './employee-profile-form.styles'

export const EmployeeProfileForm = ({ user, departments, positions }: EmployeeProfileFormProps) => {
  const [updateUser, { loading }] = useMutation<UpdateUserResult, UpdateUserInput>(UPDATE_USER)
  const { user$, isAdmin } = useUser()
  const { t } = useTranslation()

  const setDefaultValues = (user: IUser) => ({
    first_name: user.profile.first_name || '',
    last_name: user.profile.last_name || '',
    department: user.department?.id || '',
    position: user.position?.id || ''
  })

  const methods = useForm<EmployeeProfileFormValues>({
    defaultValues: setDefaultValues(user)
  })
  const { formState, register, handleSubmit, reset } = methods

  const onSubmit = (values: EmployeeProfileFormValues) => {
    updateUser({
      variables: {
        id: user.id,
        user: {
          profile: {
            first_name: values.first_name,
            last_name: values.last_name
          },
          departmentId: values.department,
          positionId: values.position
        }
      }
    }).then(({ data }) => data && reset(setDefaultValues(data.updateUser)))
  }

  return (
    <FormProvider {...methods}>
      <Styled.Form onSubmit={handleSubmit(onSubmit)}>
        <TextField {...register('first_name')} label={t('First Name')} />
        <TextField {...register('last_name')} label={t('Last Name')} />
        <FormField select name="department" label={t('Department')}>
          <MenuItem value="">{t('No Department')}</MenuItem>
          {departments.map(({ id, name }) => (
            <MenuItem key={id} value={id}>
              {name}
            </MenuItem>
          ))}
        </FormField>
        <FormField select name="position" label={t('Position')}>
          <MenuItem value="">{t('No Position')}</MenuItem>
          {positions.map(({ id, name }) => (
            <MenuItem key={id} value={id}>
              {name}
            </MenuItem>
          ))}
        </FormField>
        {(isAdmin || user$?.id === user.id) && (
          <Button
            type="submit"
            variant="contained"
            disabled={!formState.isDirty || loading}
            sx={{ gridColumn: 2 }}
          >
            {t('Update')}
          </Button>
        )}
      </Styled.Form>
    </FormProvider>
  )
}
