import { Controller, useForm } from 'react-hook-form'
import { Button, TextField } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { memo } from 'react'
import { useCvUpdate } from 'hooks/use-cvs'
import { requiredValidation } from 'helpers/validation.helper'
import { usePermission } from 'hooks/use_permission'
import * as Styled from './cv-details-form.styles'
import { CvDetailsFormProps, CvFormValues } from './cv-details-form.types'

const CvDetailsForm = ({ cv }: CvDetailsFormProps) => {
  const { t } = useTranslation()
  const { canUpdateCv } = usePermission()
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
          description
        }
      }
    }).then(() => reset({ name, education, description }))
  }

  return (
    <Styled.Form disabled={!canUpdateCv(cv)} onSubmit={handleSubmit(onSubmit)}>
      <TextField
        {...register('name', { validate: requiredValidation })}
        autoFocus={canUpdateCv(cv)}
        label={t('Name')}
        error={!!errors.name}
        helperText={errors.name?.message || ''}
      />
      <TextField {...register('education')} label={t('Education')} />
      <Controller
        name="description"
        control={control}
        render={({ field }) => (
          <Styled.Description {...field} label={t('Description')} multiline minRows={7} />
        )}
      />
      {canUpdateCv(cv) && (
        <Button
          sx={{ gridColumn: 2 }}
          type="submit"
          variant="contained"
          disabled={!isDirty || loading}
        >
          {t('Update')}
        </Button>
      )}
    </Styled.Form>
  )
}

export default memo(CvDetailsForm)
