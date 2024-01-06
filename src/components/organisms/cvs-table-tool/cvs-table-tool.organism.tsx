import { useTranslation } from 'react-i18next'
import { AddButton } from '@atoms/add-button'
import { SearchInput } from '@molecules/search-input'
import { useAuth } from 'hooks/use-auth'
import { useCvDialog } from '@dialogs/cv'

export const CVsTableTool = () => {
  const { userId, isAdmin } = useAuth()
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
      {isAdmin && <AddButton onClick={handleCreate}>{t('Create CV')}</AddButton>}
    </>
  )
}
