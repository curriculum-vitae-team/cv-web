import { memo } from 'react'
import { Skill } from '@items/skill'
import { NewSkill } from '@items/new-skill'
import { useProfileSkills } from 'hooks/use-profile'
import { useAuth } from 'hooks/use-auth'
import * as Styled from './employee-skills.styles'

const EmployeeSkills = () => {
  const { profileId } = useAuth()
  const { skills, loading } = useProfileSkills(profileId)

  if (loading) {
    return null
  }

  return (
    <Styled.Page>
      {skills.map((skill) => (
        <Skill key={skill.name} skill={skill} />
      ))}
      <NewSkill />
    </Styled.Page>
  )
}

export default memo(EmployeeSkills)
