import { Button } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { SearchInput } from '@molecules/search-input'
import { useUser } from '@hooks/use-user.hook'
import { useCreateUserDialog } from '@dialogs/create-user'

export const UsersTableTool = () => {
  const { isAdmin } = useUser()
  const { t } = useTranslation()
  const [openCreateUserDialog] = useCreateUserDialog()

  return (
    <>
      <SearchInput />
      {isAdmin && (
        <Button variant="outlined" onClick={openCreateUserDialog}>
          {t('Create user')}
        </Button>
      )}
    </>
  )
}
