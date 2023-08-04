import { FormProvider, useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { Button, DialogActions, DialogTitle, TextField } from '@mui/material'
import { DialogProps } from 'graphql/dialogs/dialogs.types'
import { DatePicker } from '@molecules/date-picker'
import { useProjectCreate } from 'hooks/use-projects.hook'
import { createDialogHook } from 'helpers/create-dialog-hook.helper'
import { requiredValidation, teamSizeValidation } from 'helpers/validation.helper'
import * as Styled from './create-project.styles'
import { CreateProjectFormValues } from './create-project.types'

const CreateProject = ({ closeDialog }: DialogProps) => {
  const methods = useForm<CreateProjectFormValues>({
    defaultValues: {
      name: '',
      internal_name: '',
      description: '',
      domain: '',
      start_date: null,
      end_date: null,
      team_size: 1
    }
  })
  const {
    formState: { errors, isDirty },
    register,
    handleSubmit
  } = methods
  const { t } = useTranslation()
  const [createProject, loading] = useProjectCreate()

  const onSubmit = (values: CreateProjectFormValues) => {
    createProject({
      variables: {
        project: {
          ...values,
          skillsIds: []
        }
      }
    }).then(() => closeDialog())
  }

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <DialogTitle>{t('Create project')}</DialogTitle>
        <Styled.Column>
          <TextField
            {...register('name', { validate: requiredValidation })}
            autoFocus
            label={t('Name')}
            error={!!errors.name}
            helperText={errors.name?.message}
          />
          <TextField {...register('internal_name')} label={t('Internal Name')} />
          <TextField {...register('domain')} label={t('Domain')} />
          <TextField
            {...register('team_size', { validate: teamSizeValidation })}
            label={t('Team Size')}
            type="number"
            error={!!errors.team_size}
            helperText={errors.team_size?.message}
          />
          <DatePicker
            name="start_date"
            label={t('Start Date')}
            error={!!errors.start_date}
            helperText={errors.start_date?.message}
          />

          <DatePicker
            name="end_date"
            label={t('End Date')}
            error={!!errors.end_date}
            helperText={errors.end_date?.message}
          />
          <TextField
            {...register('description')}
            label={t('Description')}
            multiline
            rows={3}
            sx={{ gridColumn: 'span 2' }}
          />
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

export const useCreateProjectDialog = createDialogHook<DialogProps>(
  (props) => () => <CreateProject {...props} />,
  { maxWidth: 'md', fullWidth: true }
)
