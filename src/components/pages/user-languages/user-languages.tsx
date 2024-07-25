import { useParams } from 'react-router-dom'
import { LanguageProficiency } from 'cv-graphql'
import { Button } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { Add, DeleteForever } from '@mui/icons-material'
import {
  useProfileLanguages,
  useProfileLanguageAdd,
  useProfileLanguageUpdate,
  useProfileLanguageDelete
} from 'hooks/use-profile-languages'
import { PageLoader } from '@atoms/page-loader'
import { LanguageCard } from '@molecules/language-card'
import { useLanguageProficiencyDialog } from '@dialogs/language-proficiency'
import { BulkDeletion, bulkDeletionService } from '@features/bulk-deletion'
import { Actions } from '@templates/actions'
import { useBulkDeletion } from 'hooks/use_bulk_deletion'
import { usePermission } from 'hooks/use_permission'
import * as Styled from './user-languages.styles'

const UserLanguages = () => {
  const { userId = '' } = useParams()
  const { t } = useTranslation()
  const { canUpdateProfile } = usePermission()
  const { profile, languages, loading } = useProfileLanguages(userId)
  const [openLanguageProficiencyDialog] = useLanguageProficiencyDialog()
  const ownLanguages = languages.map((language) => language.name)
  const [addProfileLanguage] = useProfileLanguageAdd()
  const [updateProfileLanguage] = useProfileLanguageUpdate()
  const [deleteProfileLanguage] = useProfileLanguageDelete()
  const { isActive$ } = useBulkDeletion()

  const handleAdd = () => {
    openLanguageProficiencyDialog({
      title: 'Add language',
      ownLanguages,
      onConfirm({ name, proficiency }) {
        return addProfileLanguage({
          variables: {
            language: {
              userId,
              name,
              proficiency
            }
          }
        })
      }
    })
  }

  const handleUpdate = (language: LanguageProficiency) => {
    openLanguageProficiencyDialog({
      title: 'Update language',
      ownLanguages,
      language,
      disableLanguageSelect: true,
      onConfirm({ name, proficiency }) {
        return updateProfileLanguage({
          variables: {
            language: {
              userId,
              name,
              proficiency
            }
          }
        })
      }
    })
  }

  const handleDelete = (entityIds: string[]) => {
    return deleteProfileLanguage({
      variables: {
        language: {
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
    <Styled.Languages maxWidth="md">
      {!languages.length && canUpdateProfile(profile) && (
        <Button color="secondary" onClick={handleAdd}>
          <Add /> {t('Add language')}
        </Button>
      )}
      <BulkDeletion onDelete={handleDelete}>
        <Styled.Grid>
          {languages.map((language) => (
            <LanguageCard
              key={language.name}
              language={language}
              disabled={!canUpdateProfile(profile)}
              onClick={handleUpdate}
            />
          ))}
        </Styled.Grid>
      </BulkDeletion>
      {!isActive$ && !!languages.length && canUpdateProfile(profile) && (
        <Actions>
          <Button color="secondary" onClick={handleAdd}>
            <Add /> {t('Add language')}
          </Button>
          <Button onClick={() => bulkDeletionService.startSelection()}>
            <DeleteForever /> {t('Remove languages')}
          </Button>
        </Actions>
      )}
    </Styled.Languages>
  )
}

export default UserLanguages
