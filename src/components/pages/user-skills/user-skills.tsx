import { memo } from 'react'
import { NewSkill } from '@items/new-skill'
import { useProfileSkills } from 'hooks/use-profile'
import { useAuth } from 'hooks/use-auth'
import UserSkillsGroup from '@organisms/user-skills-group/user-skills-group'
import * as Styled from './user-skills.styles'

const UserSkills = () => {
  const { profileId } = useAuth()
  const { groups, loading } = useProfileSkills(profileId)

  if (loading) {
    return null
  }

  return (
    <Styled.Page>
      <Styled.Skills sx={{ mt: 0 }}>
        <NewSkill />
      </Styled.Skills>
      {Object.entries(groups).map(([category, skills]) => (
        <UserSkillsGroup key={category} category={category} skills={skills} />
      ))}
    </Styled.Page>
  )
}

export default memo(UserSkills)
