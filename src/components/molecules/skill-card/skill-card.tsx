import { MouseEvent, memo } from 'react'
import { LinearProgress, Typography } from '@mui/material'
import { Mastery } from 'cv-graphql'
import { useReactiveVar } from '@apollo/client'
import { getMasteryColor } from 'helpers/get-mastery-color'
import { bulkDeletionService } from '@features/bulk-deletion'
import { SkillCardProps } from './skill-card.types'
import * as Styled from './skill-card.styles'

const SkillCard = ({ skill, onUpdate }: SkillCardProps) => {
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
    onUpdate(skill)
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

export default memo(SkillCard)
