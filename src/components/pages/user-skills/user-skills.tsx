import { memo } from 'react'
import { useParams } from 'react-router-dom'
import { NewProfileSkill } from '@molecules/new-skill'
import { useProfileSkillDelete, useProfileSkills } from 'hooks/use-profile'
import { ProfileSkillsGroup } from '@molecules/skills-group'
import { PageLoader } from '@atoms/page-loader'
import { BulkDeletion } from '@features/bulk-deletion'
import * as Styled from './user-skills.styles'

const UserSkills = () => {
  const { userId = '' } = useParams()
  const { groups, loading } = useProfileSkills(userId)
  const [deleteProfileSkill] = useProfileSkillDelete()

  const handleDelete = (entityIds: string[]) => {
    return deleteProfileSkill({
      variables: { skill: { userId, name: entityIds } }
    })
  }

  if (loading) {
    return <PageLoader />
  }

  return (
    <Styled.Page maxWidth="md">
      <BulkDeletion onDelete={handleDelete}>
        <NewProfileSkill />
        {Object.entries(groups).map(([category, skills]) => (
          <ProfileSkillsGroup key={category} category={category} skills={skills} />
        ))}
      </BulkDeletion>
    </Styled.Page>
  )
}

export default memo(UserSkills)
