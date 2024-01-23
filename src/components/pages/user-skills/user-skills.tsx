import { memo } from 'react'
import { useParams } from 'react-router-dom'
import { SkillMastery } from 'cv-graphql'
import { NewSkillCard } from '@molecules/new-skill-card'
import {
  useProfileSkillAdd,
  useProfileSkillDelete,
  useProfileSkillUpdate,
  useProfileSkills
} from 'hooks/use-profile-skills'
import { SkillsGroup } from '@molecules/skills-group'
import { PageLoader } from '@atoms/page-loader'
import { BulkDeletion } from '@features/bulk-deletion'
import { useSkillMasteryDialog } from '@dialogs/skill-mastery'
import * as Styled from './user-skills.styles'

const UserSkills = () => {
  const { userId = '' } = useParams()
  const { groups, skills, loading } = useProfileSkills(userId)
  const [openSkillMasteryDialog] = useSkillMasteryDialog()
  const ownSkills = skills.map((skills) => skills.name)
  const [addProfileSkill] = useProfileSkillAdd()
  const [updateProfileSkill] = useProfileSkillUpdate()
  const [deleteProfileSkill] = useProfileSkillDelete()

  const handleAdd = () => {
    openSkillMasteryDialog({
      title: 'Add skill',
      ownSkills,
      onConfirm({ name, category, mastery }) {
        return addProfileSkill({
          variables: {
            skill: {
              userId,
              name,
              category,
              mastery
            }
          }
        })
      }
    })
  }

  const handleUpdate = (skill: SkillMastery) => {
    openSkillMasteryDialog({
      title: 'Update skill',
      ownSkills,
      skill,
      disableSkillSelect: true,
      onConfirm({ name, category, mastery }) {
        return updateProfileSkill({
          variables: {
            skill: {
              userId,
              name,
              category,
              mastery
            }
          }
        })
      }
    })
  }

  const handleDelete = (entityIds: string[]) => {
    return deleteProfileSkill({
      variables: {
        skill: {
          userId,
          name: entityIds
        }
      }
    })
  }

  if (loading) {
    return <PageLoader />
  }

  return (
    <Styled.Page maxWidth="md">
      <BulkDeletion onDelete={handleDelete}>
        <NewSkillCard onClick={handleAdd} />
        {Object.entries(groups).map(([category, skills]) => (
          <SkillsGroup key={category} category={category} skills={skills} onUpdate={handleUpdate} />
        ))}
      </BulkDeletion>
    </Styled.Page>
  )
}

export default memo(UserSkills)
