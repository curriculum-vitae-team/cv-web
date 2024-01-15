import { useParams } from 'react-router-dom'
import { NewCvSkill } from '@molecules/new-skill'
import { useCvSkills } from 'hooks/use-cvs'
import { CvSkillsGroup } from '@molecules/skills-group'
import { PageLoader } from '@atoms/page-loader'
import * as Styled from './cv-skills.styles'

const CvSkills = () => {
  const { cvId = '' } = useParams()
  const { groups, loading } = useCvSkills(cvId)

  if (loading) {
    return <PageLoader />
  }

  return (
    <Styled.Page maxWidth="md">
      <NewCvSkill />
      {Object.entries(groups).map(([category, skills]) => (
        <CvSkillsGroup key={category} category={category} skills={skills} />
      ))}
    </Styled.Page>
  )
}

export default CvSkills
