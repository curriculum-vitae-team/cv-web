import { memo } from 'react'
import { LinearProgress, Typography } from '@mui/material'
import { Mastery } from 'cv-graphql'
import { useParams } from 'react-router-dom'
import { useSkillMasteryDialog } from '@dialogs/skill-mastery'
import { useProfileSkillUpdate } from 'hooks/use-profile'
import { useAuth } from 'hooks/use-auth'
import { useCvSkillUpdate } from 'hooks/use-cvs'
import { SkillCardProps, SkillProps } from './skill.types'
import * as Styled from './skill.styles'

const SkillCard = ({ skill, onClick }: SkillCardProps) => {
  const index = Object.keys(Mastery).indexOf(skill.mastery)
  const value = (index + 1) * 20

  return (
    <Styled.Card color="secondary" onClick={onClick}>
      <LinearProgress variant="determinate" value={value} />
      <Typography textAlign="left">{skill.name}</Typography>
    </Styled.Card>
  )
}

const ProfileSkillComponent = ({ skill }: SkillProps) => {
  const { profileId } = useAuth()
  const [updateProfileSkill] = useProfileSkillUpdate()
  const [openSkillMasteryDialog] = useSkillMasteryDialog()

  const handleClick = () => {
    openSkillMasteryDialog({
      title: 'Update skill',
      skillMastery: skill,
      disableSkillSelect: true,
      onConfirm({ name, mastery }) {
        return updateProfileSkill({
          variables: {
            skill: {
              profileId,
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
