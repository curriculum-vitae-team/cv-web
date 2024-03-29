import { Controller, FormProvider, useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { parseISO } from 'date-fns'
import { Button, DialogActions, DialogTitle, TextField } from '@mui/material'
import { useState } from 'react'
import { DatePicker } from '@molecules/date-picker'
import { createDialogHook } from 'helpers/create-dialog-hook.helper'
import { requiredValidation, teamSizeValidation } from 'helpers/validation.helper'
import { DayMonthYear } from 'constants/format.constant'
import { ProjectSelect } from '@molecules/project-select'
import * as Styled from './cv-project.styles'
import { CvProjectDialogProps, CvProjectFormValues } from './cv-project.types'

const CvProject = ({
  title,
  confirmText,
  item,
  availableProjects,
  createNewProject,
  onConfirm,
  closeDialog
}: CvProjectDialogProps) => {
  const methods = useForm<CvProjectFormValues>({
    defaultValues: {
      projectId: item?.project.id || '',
      name: item?.name || '',
      internal_name: item?.internal_name || '',
      description: item?.description || '',
      domain: item?.domain || '',
      start_date: item?.start_date ? parseISO(item.start_date) : null,
      end_date: item?.end_date ? parseISO(item.end_date) : null,
      team_size: String(item?.team_size || 1),
      roles: item?.roles || [],
      responsibilities: item?.responsibilities || []
    }
  })
  const {
    control,
    formState: { errors, isDirty },
    register,
    handleSubmit
  } = methods
  const { t } = useTranslation()
  const [isLoading, setIsLoading] = useState(false)
  const disabled = !createNewProject

  const onSubmit = (values: CvProjectFormValues) => {
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
          {createNewProject ? (
            <TextField
              {...register('name', { validate: requiredValidation })}
              autoFocus
              label={t('Name')}
              error={!!errors.name}
              helperText={errors.name?.message}
            />
          ) : (
            <ProjectSelect disabled={!!item} availableProjects={availableProjects} />
          )}
          <Controller
            control={control}
            name="internal_name"
            render={({ field }) => (
              <TextField {...field} disabled={disabled} label={t('Internal Name')} />
            )}
          />
          <Controller
            control={control}
            name="domain"
            render={({ field }) => <TextField {...field} disabled={disabled} label={t('Domain')} />}
          />
          <TextField
            {...register('team_size', { validate: teamSizeValidation })}
            disabled={disabled}
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
          {/* <Controller
            control={control}
            name="responsibilities"
            render={({ field }) => (
              <Styled.Description {...field} label={t('Responsibilities')} multiline rows={3} />
            )}
          /> */}
          <Controller
            control={control}
            name="description"
            render={({ field }) => (
              <Styled.Description
                {...field}
                disabled={disabled}
                label={t('Description')}
                multiline
                rows={5}
              />
            )}
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

export const useCvProjectDialog = createDialogHook<CvProjectDialogProps>(
  (props) => () => <CvProject {...props} />,
  { maxWidth: 'md', fullWidth: true }
)
