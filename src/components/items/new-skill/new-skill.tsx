import { Add } from '@mui/icons-material'
import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { Typography } from '@mui/material'
import { useSkillMasteryDialog } from '@dialogs/skill-mastery'
import { useProfileSkillAdd } from 'hooks/use-profile.hook'
import { useAuth } from 'hooks/use-auth.hook'
import * as Styled from './new-skill.styles'

const NewSkill = () => {
  const { profileId } = useAuth()
  const { t } = useTranslation()
  const [addProfileSkill] = useProfileSkillAdd()
  const [openSkillMasteryDialog] = useSkillMasteryDialog()

  const handleClick = () => {
    openSkillMasteryDialog({
      title: 'Add Skill',
      onConfirm({ skill_name, mastery }) {
        return addProfileSkill({
          variables: {
            skill: {
              profileId,
              skill_name,
              mastery
            }
          }
        })
      }
    })
  }

  return (
    <Styled.Card color="secondary" onClick={handleClick}>
      <Add sx={{ m: '0 auto' }} /> <Typography textAlign="left">{t('Add Skill')}</Typography>
    </Styled.Card>
  )
}

export default memo(NewSkill)
