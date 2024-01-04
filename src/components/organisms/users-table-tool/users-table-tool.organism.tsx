import { useTranslation } from 'react-i18next'
import { SearchInput } from '@molecules/search-input'
import { useUserDialog } from '@dialogs/user'
import { useAuth } from 'hooks/use-auth.hook'
import { AddButton } from '@atoms/add-button'

export const UsersTableTool = () => {
  const { isAdmin } = useAuth()
  const { t } = useTranslation()
  const [openUserDialog] = useUserDialog()

  const handleClick = () => {
    openUserDialog()
  }

  return (
    <>
      <SearchInput />
      {isAdmin && <AddButton onClick={handleClick}>{t('Create user')}</AddButton>}
    </>
  )
}
