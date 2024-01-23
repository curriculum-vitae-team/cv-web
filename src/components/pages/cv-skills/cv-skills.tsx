import { useParams } from 'react-router-dom'
import { SkillMastery } from 'cv-graphql'
import { NewSkillCard } from '@molecules/new-skill-card'
import { useCvSkillAdd, useCvSkillDelete, useCvSkillUpdate, useCvSkills } from 'hooks/use-cvs'
import { SkillsGroup } from '@molecules/skills-group'
import { PageLoader } from '@atoms/page-loader'
import { BulkDeletion } from '@features/bulk-deletion'
import { useSkillMasteryDialog } from '@dialogs/skill-mastery'
import * as Styled from './cv-skills.styles'

const CvSkills = () => {
  const { cvId = '' } = useParams()
  const { groups, skills, loading } = useCvSkills(cvId)
  const [openSkillMasteryDialog] = useSkillMasteryDialog()
  const ownSkills = skills.map((skills) => skills.name)
  const [addCvSkill] = useCvSkillAdd()
  const [updateCvSkill] = useCvSkillUpdate()
  const [deleteCvSkill] = useCvSkillDelete()

  const handleAdd = () => {
    openSkillMasteryDialog({
      title: 'Add skill',
      ownSkills,
      onConfirm({ name, category, mastery }) {
        return addCvSkill({
          variables: {
            skill: {
              cvId,
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
        return updateCvSkill({
          variables: {
            skill: {
              cvId,
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
    return deleteCvSkill({
      variables: {
        skill: {
          cvId,
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

export default CvSkills
