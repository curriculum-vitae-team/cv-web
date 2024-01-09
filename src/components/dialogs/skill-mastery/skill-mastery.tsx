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
  skillMastery,
  disableSkillSelect,
  onConfirm,
  closeDialog
}: SkillMasteryProps) => {
  const { t } = useTranslation()
  const [isLoading, setIsLoading] = useState(false)
  const methods = useForm<SkillMasteryFormValues>({
    defaultValues: {
      skill_name: skillMastery?.skill_name || '',
      mastery: skillMastery?.mastery || Mastery.Novice
    }
  })
  const { handleSubmit } = methods

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
          <SkillSelect disabled={disableSkillSelect} />
          <SkillMasterySelect />
        </DialogContent>
        <DialogActions>
          <Button onClick={closeDialog}>Cancel</Button>
          <Button variant="contained" type="submit" disabled={isLoading}>
            Confirm
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
