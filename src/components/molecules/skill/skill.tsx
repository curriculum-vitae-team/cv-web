import { MouseEvent, memo } from 'react'
import { LinearProgress, Typography } from '@mui/material'
import { Mastery } from 'cv-graphql'
import { useParams } from 'react-router-dom'
import { useReactiveVar } from '@apollo/client'
import { useSkillMasteryDialog } from '@dialogs/skill-mastery'
import { useProfileSkillUpdate } from 'hooks/use-profile-skills'
import { useCvSkillUpdate } from 'hooks/use-cvs'
import { getMasteryColor } from 'helpers/get-mastery-color'
import { bulkDeletionService } from '@features/bulk-deletion'
import { SkillCardProps, SkillProps } from './skill.types'
import * as Styled from './skill.styles'

const SkillCard = ({ skill, onClick }: SkillCardProps) => {
  const index = Object.keys(Mastery).indexOf(skill.mastery)
  const value = (index + 1) * 20
  const color = getMasteryColor(skill.mastery)
  const entityIds$ = useReactiveVar(bulkDeletionService.entityIds$)
  const isSelected = entityIds$.includes(skill.name)

  const handleClick = () => {
    if (entityIds$.length) {
      bulkDeletionService.setEntityId(skill.name)
      return
    }
    onClick && onClick()
  }

  const handleContextMenu = (event: MouseEvent) => {
    event.preventDefault()
    bulkDeletionService.setEntityId(skill.name)
  }

  return (
    <Styled.Card
      color="secondary"
      isSelected={isSelected}
      onClick={handleClick}
      onContextMenu={handleContextMenu}
    >
      <LinearProgress
        variant="determinate"
        color={isSelected ? 'secondary' : color}
        value={isSelected ? 0 : value}
      />
      <Typography>{skill.name}</Typography>
    </Styled.Card>
  )
}

const ProfileSkillComponent = ({ skill }: SkillProps) => {
  const { userId = '' } = useParams()
  const [updateProfileSkill] = useProfileSkillUpdate()
  const [openSkillMasteryDialog] = useSkillMasteryDialog()

  const handleClick = () => {
    openSkillMasteryDialog({
      title: 'Update skill',
      userId,
      skillMastery: skill,
      disableSkillSelect: true,
      onConfirm({ name, mastery }) {
        return updateProfileSkill({
          variables: {
            skill: {
              userId,
              name,
              mastery
            }
          }
        })
      }
    })
  }

  return <SkillCard skill={skill} onClick={handleClick} />
}

export const ProfileSkill = memo(ProfileSkillComponent)

const CvSkillComponent = ({ skill }: SkillProps) => {
  const { cvId = '' } = useParams()
  const [updateCvSkill] = useCvSkillUpdate()
  const [openSkillMasteryDialog] = useSkillMasteryDialog()

  const handleClick = () => {
    openSkillMasteryDialog({
      title: 'Update skill',
      cvId,
      skillMastery: skill,
      disableSkillSelect: true,
      onConfirm({ name, mastery }) {
        return updateCvSkill({
          variables: {
            skill: {
              cvId,
              name,
              mastery
            }
          }
        })
      }
    })
  }

  return <SkillCard skill={skill} onClick={handleClick} />
}

export const CvSkill = memo(CvSkillComponent)
