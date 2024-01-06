import { memo } from 'react'
import { LinearProgress, Typography } from '@mui/material'
import { SkillMastery } from 'constants/skill-mastery.constants'
import { useSkillMasteryDialog } from '@dialogs/skill-mastery'
import { useProfileSkillUpdate } from 'hooks/use-profile'
import { useAuth } from 'hooks/use-auth'
import { SkillProps } from './skill.types'
import * as Styled from './skill.styles'

const Skill = ({ skill }: SkillProps) => {
  const { profileId } = useAuth()
  const index = Object.values(SkillMastery).indexOf(skill.mastery as SkillMastery)
  const value = (index + 1) * 20
  const [updateProfileSkill] = useProfileSkillUpdate()
  const [openSkillMasteryDialog] = useSkillMasteryDialog()

  const handleClick = () => {
    openSkillMasteryDialog({
      title: 'Update Skill',
      skillMastery: skill,
      disableSkillSelect: true,
      onConfirm({ skill_name, mastery }) {
        return updateProfileSkill({
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
      <LinearProgress variant="determinate" value={value} />
      <Typography textAlign="left">{skill.skill_name}</Typography>
    </Styled.Card>
  )
}

export default memo(Skill)
