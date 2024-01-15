import { memo } from 'react'
import { useParams } from 'react-router-dom'
import { NewProfileSkill } from '@molecules/new-skill'
import { useProfileSkills } from 'hooks/use-profile'
import { ProfileSkillsGroup } from '@molecules/skills-group'
import { PageLoader } from '@atoms/page-loader'
import * as Styled from './user-skills.styles'

const UserSkills = () => {
  const { userId = '' } = useParams()
  const { groups, loading } = useProfileSkills(userId)

  if (loading) {
    return <PageLoader />
  }

  return (
    <Styled.Page maxWidth="md">
      <NewProfileSkill />
      {Object.entries(groups).map(([category, skills]) => (
        <ProfileSkillsGroup key={category} category={category} skills={skills} />
      ))}
    </Styled.Page>
  )
}

export default memo(UserSkills)
