import { useParams } from 'react-router-dom'
import { LanguageProficiency } from 'cv-graphql'
import {
  useProfileLanguages,
  useProfileLanguageAdd,
  useProfileLanguageUpdate,
  useProfileLanguageDelete
} from 'hooks/use-profile-languages'
import { PageLoader } from '@atoms/page-loader'
import { NewLanguageCard } from '@molecules/new-language-card'
import { LanguageCard } from '@molecules/language-card'
import { useLanguageProficiencyDialog } from '@dialogs/language-proficiency'
import { BulkDeletion } from '@features/bulk-deletion'
import * as Styled from './user-languages.styles'

const UserLanguages = () => {
  const { userId = '' } = useParams()
  const { languages, loading } = useProfileLanguages(userId)
  const [openLanguageProficiencyDialog] = useLanguageProficiencyDialog()
  const ownLanguages = languages.map((language) => language.name)
  const [addProfileLanguage] = useProfileLanguageAdd()
  const [updateProfileLanguage] = useProfileLanguageUpdate()
  const [deleteProfileLanguage] = useProfileLanguageDelete()

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

  const handleUpdate = (languageProficiency: LanguageProficiency) => {
    openLanguageProficiencyDialog({
      title: 'Update language',
      ownLanguages,
      languageProficiency,
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

  const handleDelete = (name: string[]) => {
    return deleteProfileLanguage({
      variables: {
        language: {
          userId,
          name
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
        <NewLanguageCard onClick={handleAdd} />
        <Styled.Languages>
          {languages.map((language) => (
            <LanguageCard key={language.name} language={language} onClick={handleUpdate} />
          ))}
        </Styled.Languages>
      </BulkDeletion>
    </Styled.Page>
  )
}

export default UserLanguages
