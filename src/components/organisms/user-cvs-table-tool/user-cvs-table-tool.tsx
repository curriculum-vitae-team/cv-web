import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'
import { AddButton } from '@atoms/add-button'
import { SearchInput } from '@molecules/search-input'
import { useAuth } from 'hooks/use-auth'
import { useCvDialog } from '@dialogs/cv'

export const UserCvsTableTool = () => {
  const { userId = '' } = useParams()
  const { user$, isAdmin } = useAuth()
  const isOwnCv = userId === user$?.id
  const { t } = useTranslation()
  const [openCvDialog] = useCvDialog()

  const handleCreate = () => {
    openCvDialog({
      userId
    })
  }

  return (
    <>
      <SearchInput />
      {(isOwnCv || isAdmin) && <AddButton onClick={handleCreate}>{t('Create CV')}</AddButton>}
    </>
  )
}
