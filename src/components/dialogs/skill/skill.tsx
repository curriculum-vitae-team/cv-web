import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { Button, DialogActions, DialogTitle, TextField } from '@mui/material'
import { useSkillCreate, useSkillUpdate } from 'hooks/use-skills.hook'
import { createDialogHook } from 'helpers/create-dialog-hook.helper'
import { SkillFormValues, SkillProps } from './skill.types'
import * as Styled from './skill.styles'

const defaultValues = {
  name: ''
}

const Skill = ({ item, closeDialog }: SkillProps) => {
  const {
    formState: { errors, isDirty },
    register,
    handleSubmit
  } = useForm<SkillFormValues>({
    defaultValues: item || defaultValues
  })
  const { t } = useTranslation()
  const [createSkill, loading] = useSkillCreate()
  const [updateSkill, updating] = useSkillUpdate()

  const onSubmit = (values: SkillFormValues) => {
    if (item) {
      updateSkill({
        variables: {
          id: item.id,
          skill: {
            name: values.name
          }
        }
      }).then(() => closeDialog())
      return
    }
    createSkill({
      variables: {
        skill: values
      }
    }).then(() => closeDialog())
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <DialogTitle>{item ? t('Update skill') : t('Create skill')}</DialogTitle>
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
        <Button
          variant="contained"
          color="primary"
          type="submit"
          disabled={loading || updating || !isDirty}
        >
          {item ? t('Update') : t('Create')}
        </Button>
      </DialogActions>
    </form>
  )
}

export const useSkillDialog = createDialogHook<SkillProps>((props) => () => <Skill {...props} />, {
  maxWidth: 'sm',
  fullWidth: true
})
