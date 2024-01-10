import { memo } from 'react'
import { LinearProgress, Typography } from '@mui/material'
import { Mastery } from 'cv-graphql'
import { useSkillMasteryDialog } from '@dialogs/skill-mastery'
import { useProfileSkillUpdate } from 'hooks/use-profile'
import { useAuth } from 'hooks/use-auth'
import { ProfileSkillProps } from './profile-skill.types'
import * as Styled from './profile-skill.styles'

const ProfileSkill = ({ skill }: ProfileSkillProps) => {
  const { profileId } = useAuth()
  const index = Object.keys(Mastery).indexOf(skill.mastery)
  const value = (index + 1) * 20
  const [updateProfileSkill] = useProfileSkillUpdate()
  const [openSkillMasteryDialog] = useSkillMasteryDialog()

  const handleClick = () => {
    openSkillMasteryDialog({
      title: 'Update Skill',
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

  return (
    <Styled.Card color="secondary" onClick={handleClick}>
      <LinearProgress variant="determinate" value={value} />
      <Typography textAlign="left">{skill.name}</Typography>
    </Styled.Card>
  )
}

export default memo(ProfileSkill)
