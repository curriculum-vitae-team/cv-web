import { useTranslation } from 'react-i18next'
import { SearchInput } from '@molecules/search-input'
import { useUserDialog } from '@dialogs/user'
import { AddButton } from '@atoms/add-button'
import { usePermission } from 'hooks/use_permission'

export const UsersTableTool = () => {
  const { canCreateUser } = usePermission()
  const { t } = useTranslation()
  const [openUserDialog] = useUserDialog()

  const handleClick = () => {
    openUserDialog()
  }

  return (
    <>
      <SearchInput />
      {canCreateUser() && <AddButton onClick={handleClick}>{t('Create user')}</AddButton>}
    </>
  )
}
