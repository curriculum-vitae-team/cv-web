import { useForm, FormProvider } from 'react-hook-form'
import { useMutation } from '@apollo/client'
import { Button, MenuItem, TextField } from '@mui/material'
import { EmployeeProfileFormProps, EmployeeProfileFormValues } from './employee-profile-form.types'
import * as Styled from './employee-profile-form.styles'
import { FormField } from '../../molecules/form-field'
import { UPDATE_USER } from '../../../graphql/users'
import { UpdateUserInput, UpdateUserResult } from '../../../graphql/users/users.types'
import { authService } from '../../../graphql/auth/auth.service'
import { UserRole } from '../../../constants/user-role.constants'
import { IUser } from '../../../interfaces/user.interface'

export const EmployeeProfileForm = ({ user, departments, positions }: EmployeeProfileFormProps) => {
  const [updateUser, { loading }] = useMutation<UpdateUserResult, UpdateUserInput>(UPDATE_USER)
  // const canEdit = user.id === authService.user$()!.id || user.role === UserRole.Admin

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
            last_name: values.last_name,
            // TODO: make fields optional
            languages: user.profile.languages.map(({ language_name, proficiency }) => ({
              language_name,
              proficiency
            })),
            skills: user.profile.skills.map(({ skill_name, mastery }) => ({ skill_name, mastery }))
          },
          cvsIds: user.cvs.map((cv) => cv.id),
          departmentId: values.department,
          positionId: values.position
        }
      }
    }).then(({ data }) => data && reset(setDefaultValues(data.updateUser)))
  }

  return (
    <FormProvider {...methods}>
      <Styled.Form onSubmit={handleSubmit(onSubmit)}>
        <TextField {...register('first_name')} label="First Name" />
        <TextField {...register('last_name')} label="Last Name" inputProps={{ readOnly: true }} />
        <FormField select name="department" label="Department">
          <MenuItem value="">No Department</MenuItem>
          {departments.map(({ id, name }) => (
            <MenuItem key={id} value={id}>
              {name}
            </MenuItem>
          ))}
        </FormField>
        <FormField select name="position" label="Position">
          <MenuItem value="">No Position</MenuItem>
          {positions.map(({ id, name }) => (
            <MenuItem key={id} value={id}>
              {name}
            </MenuItem>
          ))}
        </FormField>
        <Button
          type="submit"
          variant="contained"
          disabled={!formState.isDirty}
          sx={{ gridColumn: 2 }}
        >
          Beer go brrr
        </Button>
      </Styled.Form>
    </FormProvider>
  )
}
