import { Button, DialogActions, DialogContent, DialogTitle } from '@mui/material'
import { FormProvider, useForm } from 'react-hook-form'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Proficiency } from 'cv-graphql'
import { createDialogHook } from 'helpers/create-dialog-hook.helper'
import { LanguageSelect } from '@molecules/language-select'
import { LanguageProficiencySelect } from '@molecules/language-proficiency-select'
import {
  LanguageProficiencyFormValues,
  LanguageProficiencyProps
} from './language-proficiency.types'

const LanguageProficiency = ({
  title,
  ownLanguages,
  languageProficiency,
  disableLanguageSelect,
  onConfirm,
  closeDialog
}: LanguageProficiencyProps) => {
  const { t } = useTranslation()
  const [isLoading, setIsLoading] = useState(false)
  const methods = useForm<LanguageProficiencyFormValues>({
    defaultValues: {
      name: languageProficiency?.name || '',
      proficiency: languageProficiency?.proficiency || Proficiency.A1
    }
  })
  const { formState, handleSubmit } = methods

  const onSubmit = (values: LanguageProficiencyFormValues) => {
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
          <LanguageSelect ownLanguages={ownLanguages} disabled={disableLanguageSelect} />
          <LanguageProficiencySelect />
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

export const useLanguageProficiencyDialog = createDialogHook<LanguageProficiencyProps>(
  (props) => () => <LanguageProficiency {...props} />,
  { maxWidth: 'sm', fullWidth: true }
)
