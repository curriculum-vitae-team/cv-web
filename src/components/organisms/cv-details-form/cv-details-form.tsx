import { Controller, useForm } from 'react-hook-form'
import { Button, TextField } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { memo } from 'react'
import { useCvUpdate } from 'hooks/use-cvs'
import { useAuth } from 'hooks/use-auth'
import { requiredValidation } from 'helpers/validation.helper'
import * as Styled from './cv-details-form.styles'
import { CvDetailsFormProps, CvFormValues } from './cv-details-form.types'

const CvDetailsForm = ({ cv }: CvDetailsFormProps) => {
  const { t } = useTranslation()
  const { isAdmin, userId } = useAuth()
  const {
    formState: { errors, isDirty },
    control,
    reset,
    register,
    handleSubmit
  } = useForm<CvFormValues>({
    defaultValues: {
      name: cv.name,
      education: cv.education || '',
      description: cv.description
    }
  })

  const [updateCv, { loading }] = useCvUpdate()

  const onSubmit = ({ name, education, description }: CvFormValues) => {
    updateCv({
      variables: {
        cv: {
          cvId: cv.id,
          name,
          education,
          description,
          projectsIds: cv.projects?.map((project) => project.id) || []
        }
      }
    }).then(() => reset({ name, education, description }))
  }

  return (
    <Styled.Form onSubmit={handleSubmit(onSubmit)}>
      <TextField
        {...register('name', { validate: requiredValidation })}
        autoFocus
        label={t('Name')}
        error={!!errors.name}
        helperText={errors.name?.message || ''}
      />
      <TextField {...register('education')} label={t('Education')} />
      <Controller
        name="description"
        control={control}
        render={({ field }) => <TextField {...field} label={t('Description')} multiline rows={7} />}
      />
      {(isAdmin || userId === cv.user?.id) && (
        <Button type="submit" variant="contained" disabled={!isDirty || loading}>
          {t('Update')}
        </Button>
      )}
    </Styled.Form>
  )
}

export default memo(CvDetailsForm)
