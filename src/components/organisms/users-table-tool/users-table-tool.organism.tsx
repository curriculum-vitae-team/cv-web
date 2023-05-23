import { Button } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { SearchInput } from '@molecules/search-input'
import { useUser } from '@hooks/use-user.hook'

export const UsersTableTool = () => {
  const { isAdmin } = useUser()
  const { t } = useTranslation()

  return (
    <>
      <SearchInput />
      {isAdmin && <Button variant="outlined">{t('Create User')}</Button>}
    </>
  )
}
