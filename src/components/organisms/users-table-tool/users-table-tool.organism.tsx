import { useTranslation } from 'react-i18next'
import { SearchInput } from '@molecules/search-input'
import { useUserDialog } from '@dialogs/user'
import { useUser } from 'hooks/use-user.hook'
import { AddButton } from '@atoms/add-button'

export const UsersTableTool = () => {
  const { isAdmin } = useUser()
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
