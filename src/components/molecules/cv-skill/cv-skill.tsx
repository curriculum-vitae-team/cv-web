import { memo } from 'react'
import { LinearProgress, Typography } from '@mui/material'
import { Mastery } from 'cv-graphql'
import { useParams } from 'react-router-dom'
import { useSkillMasteryDialog } from '@dialogs/skill-mastery'
import { useCvSkillUpdate } from 'hooks/use-cvs'
import { CvSkillProps } from './cv-skill.types'
import * as Styled from './cv-skill.styles'

const CvSkill = ({ skill }: CvSkillProps) => {
  const { cvId = '' } = useParams()
  const index = Object.keys(Mastery).indexOf(skill.mastery)
  const value = (index + 1) * 20
  const [updateCvSkill] = useCvSkillUpdate()
  const [openSkillMasteryDialog] = useSkillMasteryDialog()

  const handleClick = () => {
    openSkillMasteryDialog({
      title: 'Update Skill',
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

  return (
    <Styled.Card color="secondary" onClick={handleClick}>
      <LinearProgress variant="determinate" value={value} />
      <Typography textAlign="left">{skill.name}</Typography>
    </Styled.Card>
  )
}

export default memo(CvSkill)
