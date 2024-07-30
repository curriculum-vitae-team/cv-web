import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'
import { AddButton } from '@atoms/add-button'
import { SearchInput } from '@molecules/search-input'
import { useCvDialog } from '@dialogs/cv'
import { usePermission } from 'hooks/use_permission'

export const UserCvsTableTool = () => {
  const { userId = '' } = useParams()
  const { canUpdateUser } = usePermission()
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
      {canUpdateUser({ id: userId }) && (
        <AddButton onClick={handleCreate}>{t('Create CV')}</AddButton>
      )}
    </>
  )
}
