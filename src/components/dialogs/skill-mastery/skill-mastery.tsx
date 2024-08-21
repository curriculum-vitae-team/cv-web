import { Button, DialogActions, DialogContent, DialogTitle } from '@mui/material'
import { FormProvider, useForm } from 'react-hook-form'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Mastery } from 'cv-graphql'
import { createDialogHook } from 'helpers/create-dialog-hook.helper'
import { SkillSelect } from '@molecules/skill-select'
import { SkillMasterySelect } from '@molecules/skill-mastery-select'
import { SkillMasteryFormValues, SkillMasteryProps } from './skill-mastery.types'

const SkillMastery = ({
  title,
  ownSkills,
  skill,
  disableSkillSelect,
  onConfirm,
  closeDialog
}: SkillMasteryProps) => {
  const { t } = useTranslation()
  const [isLoading, setIsLoading] = useState(false)
  const methods = useForm<SkillMasteryFormValues>({
    defaultValues: {
      name: skill?.name || '',
      categoryId: skill?.categoryId || '',
      mastery: skill?.mastery || Mastery.Novice
    }
  })
  const { formState, handleSubmit } = methods

  const onSubmit = (values: SkillMasteryFormValues) => {
    setIsLoading(true)
    onConfirm(values)
      .then(closeDialog)
      .catch(() => setIsLoading(false))
  }

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <DialogTitle>{t(title)}</DialogTitle>
        <DialogContent sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          <SkillSelect ownSkills={ownSkills} disabled={disableSkillSelect} />
          <SkillMasterySelect />
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" color="secondary" onClick={closeDialog}>
            {t('Cancel')}
          </Button>
          <Button variant="contained" type="submit" disabled={isLoading || !formState.isDirty}>
            {t('Confirm')}
          </Button>
        </DialogActions>
      </form>
    </FormProvider>
  )
}

export const useSkillMasteryDialog = createDialogHook<SkillMasteryProps>(
  (props) => () => <SkillMastery {...props} />,
  { maxWidth: 'sm', fullWidth: true }
)
