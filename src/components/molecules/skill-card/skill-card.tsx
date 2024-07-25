import { memo } from 'react'
import { LinearProgress, Typography } from '@mui/material'
import { Mastery } from 'cv-graphql'
import { getMasteryColor } from 'helpers/get-mastery-color'
import { bulkDeletionService } from '@features/bulk-deletion'
import { useBulkDeletion } from 'hooks/use_bulk_deletion'
import { SkillCardProps } from './skill-card.types'
import * as Styled from './skill-card.styles'

const SkillCard = ({ skill, onUpdate }: SkillCardProps) => {
  const index = Object.keys(Mastery).indexOf(skill.mastery)
  const value = (index + 1) * 20
  const color = getMasteryColor(skill.mastery)
  const { isActive$, selectedIds$ } = useBulkDeletion()
  const isSelected = selectedIds$.includes(skill.name)

  const handleClick = () => {
    if (isActive$) {
      bulkDeletionService.setEntityId(skill.name)
      return
    }

    onUpdate(skill)
  }

  return (
    <Styled.Card color="secondary" isSelected={isSelected} onClick={handleClick}>
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
