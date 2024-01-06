import { useForm, FormProvider } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { TextField } from '@mui/material'
import { DepartmentSelect } from '@molecules/department-select'
import { PositionSelect } from '@molecules/position-select'
import { useUserUpdate } from 'hooks/use-users'
import { useProfileUpdate } from 'hooks/use-profile'
import { useAuth } from 'hooks/use-auth.hook'
import { EmployeeProfileFormProps, UserProfileFormValues } from './employee-profile-form.types'
import * as Styled from './employee-profile-form.styles'

export const EmployeeProfileForm = ({ user }: EmployeeProfileFormProps) => {
  const [updateUser, { loading }] = useUserUpdate()
  const [updateProfile] = useProfileUpdate()
  const { isAdmin, userId } = useAuth()
  const { t } = useTranslation()

  const methods = useForm<UserProfileFormValues>({
    defaultValues: {
      profile: {
        first_name: user.profile.first_name || '',
        last_name: user.profile.last_name || ''
      },
      department: user.department?.id || '',
      position: user.position?.id || ''
    }
  })
  const { formState, register, handleSubmit, reset } = methods

  const onSubmit = (values: UserProfileFormValues) => {
    Promise.all([
      updateProfile({
        variables: {
          profile: {
            profileId: user.profile.id,
            first_name: values.profile.first_name,
            last_name: values.profile.last_name
          }
        }
      }),
      updateUser({
        variables: {
          user: {
            userId: user.id,
            departmentId: values.department,
            positionId: values.position,
            role: user.role
          }
        }
      })
    ]).then(() => reset(values))
  }

  return (
    <FormProvider {...methods}>
      <Styled.Form onSubmit={handleSubmit(onSubmit)}>
        <TextField {...register('profile.first_name')} autoFocus label={t('First Name')} />
        <TextField {...register('profile.last_name')} label={t('Last Name')} />
        <DepartmentSelect name="department" />
        <PositionSelect name="position" />
        {(isAdmin || userId === user.id) && (
          <Styled.SubmitButton
            type="submit"
            variant="contained"
            disabled={!formState.isDirty || loading}
          >
            {t('Update')}
          </Styled.SubmitButton>
        )}
      </Styled.Form>
    </FormProvider>
  )
}
