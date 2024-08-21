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
import { usePermission } from 'hooks/use_permission'
import { useSkillsWithCategories } from 'hooks/use-skills'
import * as Styled from './cv-skills.styles'

const CvSkills = () => {
  const { cvId = '' } = useParams()
  const { t } = useTranslation()
  const { canUpdateCv } = usePermission()
  const { cv, skills, loading } = useCvSkills(cvId)
  const { skillCategories } = useSkillsWithCategories(skills)
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
      onConfirm({ name, categoryId, mastery }) {
        return addCvSkill({
          variables: {
            skill: {
              cvId,
              name,
              categoryId,
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
      onConfirm({ name, categoryId, mastery }) {
        return updateCvSkill({
          variables: {
            skill: {
              cvId,
              name,
              categoryId,
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
      {!skills.length && canUpdateCv(cv) && (
        <Button color="secondary" onClick={handleAdd}>
          <Add />
          {t('Add skill')}
        </Button>
      )}
      <BulkDeletion onDelete={handleDelete}>
        {Object.entries(skillCategories).map(([category, skills]) => (
          <SkillsGroup
            key={category}
            category={category}
            skills={skills}
            disabled={!canUpdateCv(cv)}
            onUpdate={handleUpdate}
          />
        ))}
      </BulkDeletion>
      {!isActive$ && !!skills.length && canUpdateCv(cv) && (
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
