import { memo } from 'react'
import { useParams } from 'react-router-dom'
import { CircularProgress } from '@mui/material'
import { Skill } from '@items/skill'
import { NewSkill } from '@items/new-skill'
import { useProfileSkills } from 'hooks/use-profile.hook'
import * as Styled from './employee-skills.styles'

const EmployeeSkills = () => {
  const { userId } = useParams()
  const { data, loading } = useProfileSkills(userId || '')
  const skills = data?.profile.skills || []

  if (loading || !data) {
    return <CircularProgress />
  }

  return (
    <Styled.Page>
      {skills.map((skill) => (
        <Skill key={skill.skill_name} skill={skill} />
      ))}
      <NewSkill />
    </Styled.Page>
  )
}

export default memo(EmployeeSkills)
