import { useTranslation } from 'react-i18next'
import { AddButton } from '@atoms/add-button'
import { SearchInput } from '@molecules/search-input'
import { useUser } from 'hooks/use-user.hook'

export const CVsTableTool = () => {
  const { isAdmin } = useUser()
  const { t } = useTranslation()

  return (
    <>
      <SearchInput />
      {isAdmin && <AddButton>{t('Create CV')}</AddButton>}
    </>
  )
}
