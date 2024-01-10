import { memo } from 'react'
import { NewProfileSkill } from '@molecules/new-skill'
import { useProfileSkills } from 'hooks/use-profile'
import { useAuth } from 'hooks/use-auth'
import { ProfileSkillsGroup } from '@molecules/skills-group'
import * as Styled from './user-skills.styles'

const UserSkills = () => {
  const { profileId } = useAuth()
  const { groups, loading } = useProfileSkills(profileId)

  if (loading) {
    return null
  }

  return (
    <Styled.Page>
      <NewProfileSkill />
      {Object.entries(groups).map(([category, skills]) => (
        <ProfileSkillsGroup key={category} category={category} skills={skills} />
      ))}
    </Styled.Page>
  )
}

export default memo(UserSkills)
