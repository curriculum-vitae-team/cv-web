import { useTranslation } from 'react-i18next'
import { AddButton } from '@atoms/add-button'
import { SearchInput } from '@molecules/search-input'
import { useAuth } from 'hooks/use-auth.hook'

export const CVsTableTool = () => {
  const { isAdmin } = useAuth()
  const { t } = useTranslation()

  return (
    <>
      <SearchInput />
      {isAdmin && <AddButton>{t('Create CV')}</AddButton>}
    </>
  )
}
