import { useParams } from 'react-router-dom'
import { SkillMastery } from 'cv-graphql'
import { Button } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { Add, DeleteForever } from '@mui/icons-material'
import { useCvSkillAdd, useCvSkillDelete, useCvSkillUpdate, useCvSkills } from 'hooks/use-cvs'
import { SkillsGroup } from '@molecules/skills-group'
import { PageLoader } from '@atoms/page-loader'
import { BulkDeletion, bulkDeletionService } from '@features/bulk-deletion'
import { useSkillMasteryDialog } from '@dialogs/skill-mastery'
import { Actions } from '@templates/actions'
import { useBulkDeletion } from 'hooks/use_bulk_deletion'
import * as Styled from './cv-skills.styles'

const CvSkills = () => {
  const { cvId = '' } = useParams()
  const { t } = useTranslation()
  const { groups, skills, loading } = useCvSkills(cvId)
  const [openSkillMasteryDialog] = useSkillMasteryDialog()
  const ownSkills = skills.map((skills) => skills.name)
  const [addCvSkill] = useCvSkillAdd()
  const [updateCvSkill] = useCvSkillUpdate()
  const [deleteCvSkill] = useCvSkillDelete()
  const { isActive$ } = useBulkDeletion()

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
    <Styled.Skills maxWidth="md">
      {!skills.length && (
        <Button color="secondary" onClick={handleAdd}>
          <Add />
          {t('Add skill')}
        </Button>
      )}
      <BulkDeletion onDelete={handleDelete}>
        {Object.entries(groups).map(([category, skills]) => (
          <SkillsGroup key={category} category={category} skills={skills} onUpdate={handleUpdate} />
        ))}
      </BulkDeletion>
      {!isActive$ && !!skills.length && (
        <Actions>
          <Button color="secondary" onClick={handleAdd}>
            <Add />
            {t('Add skill')}
          </Button>
          <Button onClick={() => bulkDeletionService.startSelection()}>
            <DeleteForever />
            {t('Remove skills')}
          </Button>
        </Actions>
      )}
    </Styled.Skills>
  )
}

export default CvSkills
