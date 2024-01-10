import { Add } from '@mui/icons-material'
import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { Typography } from '@mui/material'
import { useParams } from 'react-router-dom'
import { useSkillMasteryDialog } from '@dialogs/skill-mastery'
import { useCvSkillAdd } from 'hooks/use-cvs'
import * as Styled from './new-cv-skill.styles'

const NewCvSkill = () => {
  const { cvId = '' } = useParams()
  const { t } = useTranslation()
  const [addCvSkill] = useCvSkillAdd()
  const [openSkillMasteryDialog] = useSkillMasteryDialog()

  const handleClick = () => {
    openSkillMasteryDialog({
      title: 'Add Skill',
      onConfirm({ name, category, mastery }) {
        return addCvSkill({
          variables: {
            skill: {
              cvId,
              name,
              category,
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

export default memo(NewCvSkill)
