import { useParams } from 'react-router-dom'
import { NewCvSkill } from '@molecules/new-skill'
import { useCvSkillDelete, useCvSkills } from 'hooks/use-cvs'
import { CvSkillsGroup } from '@molecules/skills-group'
import { PageLoader } from '@atoms/page-loader'
import { BulkDeletion } from '@features/bulk-deletion'
import * as Styled from './cv-skills.styles'

const CvSkills = () => {
  const { cvId = '' } = useParams()
  const { groups, loading } = useCvSkills(cvId)
  const [deleteCvSkill] = useCvSkillDelete()

  const handleDelete = (entityIds: string[]) => {
    return deleteCvSkill({
      variables: { skill: { cvId, name: entityIds } }
    })
  }

  if (loading) {
    return <PageLoader />
  }

  return (
    <Styled.Page maxWidth="md">
      <BulkDeletion onDelete={handleDelete}>
        <NewCvSkill />
        {Object.entries(groups).map(([category, skills]) => (
          <CvSkillsGroup key={category} category={category} skills={skills} />
        ))}
      </BulkDeletion>
    </Styled.Page>
  )
}

export default CvSkills
