import { FormProvider, useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { parseISO } from 'date-fns'
import { Button, DialogActions, DialogTitle, TextField } from '@mui/material'
import { useState } from 'react'
import { DatePicker } from '@molecules/date-picker'
import { createDialogHook } from 'helpers/create-dialog-hook.helper'
import { requiredValidation, teamSizeValidation } from 'helpers/validation.helper'
import { DayMonthYear } from 'constants/format.constant'
import * as Styled from './project.styles'
import { ProjectFormValues, ProjectDialogProps } from './project.types'

const Project = ({ title, confirmText, item, onConfirm, closeDialog }: ProjectDialogProps) => {
  const methods = useForm<ProjectFormValues>({
    defaultValues: {
      name: item?.name || '',
      internal_name: item?.internal_name || '',
      description: item?.description || '',
      domain: item?.domain || '',
      start_date: item?.start_date ? parseISO(item.start_date) : null,
      end_date: item?.end_date ? parseISO(item.end_date) : null,
      team_size: String(item?.team_size || 1)
    }
  })
  const {
    formState: { errors, isDirty },
    register,
    handleSubmit
  } = methods
  const { t } = useTranslation()
  const [isLoading, setIsLoading] = useState(false)

  const onSubmit = (values: ProjectFormValues) => {
    setIsLoading(true)
    onConfirm(values)
      .then(closeDialog)
      .catch(() => setIsLoading(false))
  }

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <DialogTitle>{t(title)}</DialogTitle>
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
            rules={{ required: true }}
            label={t('Start Date')}
            error={!!errors.start_date}
            helperText={errors.start_date?.message}
            format={DayMonthYear}
          />
          <DatePicker
            name="end_date"
            label={t('End Date')}
            error={!!errors.end_date}
            helperText={errors.end_date?.message}
            format={DayMonthYear}
          />
          <Styled.Description
            {...register('description')}
            label={t('Description')}
            multiline
            rows={5}
          />
        </Styled.Column>
        <DialogActions>
          <Button variant="outlined" color="secondary" onClick={closeDialog}>
            {t('Cancel')}
          </Button>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            disabled={isLoading || !isDirty}
          >
            {t(confirmText)}
          </Button>
        </DialogActions>
      </form>
    </FormProvider>
  )
}

export const useProjectDialog = createDialogHook<ProjectDialogProps>(
  (props) => () => <Project {...props} />,
  { maxWidth: 'md', fullWidth: true }
)
