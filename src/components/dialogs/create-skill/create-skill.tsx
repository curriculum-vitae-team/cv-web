import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { Button, DialogActions, DialogTitle, TextField } from '@mui/material'
import { DialogProps } from '@graphql/dialogs/dialogs.types'
import { useSkillCreate } from '@hooks/use-skills.hook'
import { createDialogHook } from '../../../helpers/create-dialog-hook.helper'
import { CreateSkillFormValues } from './create-skill.types'
import * as Styled from './create-skill.styles'

const CreateSkill = ({ closeDialog }: DialogProps) => {
  const {
    formState: { errors, isDirty },
    register,
    handleSubmit
  } = useForm<CreateSkillFormValues>({
    defaultValues: {
      name: ''
    }
  })
  const { t } = useTranslation()
  const [createSkill, loading] = useSkillCreate()

  const onSubmit = (values: CreateSkillFormValues) => {
    createSkill({
      variables: {
        skill: values
      }
    }).then(() => closeDialog())
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <DialogTitle>{t('Create Skill')}</DialogTitle>
      <Styled.Column>
        <TextField
          {...register('name', { required: true })}
          autoFocus
          label={t('Name')}
          error={!!errors.name}
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
  )
}

export const useCreateSkillDialog = createDialogHook<DialogProps>(
  (props) => () => <CreateSkill {...props} />,
  { maxWidth: 'sm', fullWidth: true }
)
