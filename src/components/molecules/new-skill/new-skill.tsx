import { Add } from '@mui/icons-material'
import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { Typography } from '@mui/material'
import { useParams } from 'react-router-dom'
import { useSkillMasteryDialog } from '@dialogs/skill-mastery'
import { useProfileSkillAdd } from 'hooks/use-profile'
import { useAuth } from 'hooks/use-auth'
import { useCvSkillAdd } from 'hooks/use-cvs'
import * as Styled from './new-skill.styles'
import { NewSkillCardProps } from './new-skill.types'

const NewSkillCard = ({ onClick }: NewSkillCardProps) => {
  const { t } = useTranslation()

  return (
    <Styled.Card color="secondary" onClick={onClick}>
      <Add sx={{ m: '0 auto' }} /> <Typography textAlign="left">{t('Add skill')}</Typography>
    </Styled.Card>
  )
}

const NewProfileSkillComponent = () => {
  const { profileId } = useAuth()
  const [addProfileSkill] = useProfileSkillAdd()
  const [openSkillMasteryDialog] = useSkillMasteryDialog()

  const handleClick = () => {
    openSkillMasteryDialog({
      title: 'Add skill',
      onConfirm({ name, category, mastery }) {
        return addProfileSkill({
          variables: {
            skill: {
              profileId,
              name,
              category,
              mastery
            }
          }
        })
      }
    })
  }

  return <NewSkillCard onClick={handleClick} />
}

export const NewProfileSkill = memo(NewProfileSkillComponent)

const NewCvSkillComponent = () => {
  const { cvId = '' } = useParams()
  const [addCvSkill] = useCvSkillAdd()
  const [openSkillMasteryDialog] = useSkillMasteryDialog()

  const handleClick = () => {
    openSkillMasteryDialog({
      title: 'Add skill',
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

  return <NewSkillCard onClick={handleClick} />
}

export const NewCvSkill = memo(NewCvSkillComponent)
