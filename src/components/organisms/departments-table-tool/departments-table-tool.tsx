import { useTranslation } from 'react-i18next'
import { AddButton } from '@atoms/add-button'
import { SearchInput } from '@molecules/search-input'
import { useAuth } from 'hooks/use-auth.hook'

export const DepartmentsTableTool = () => {
  const { isAdmin } = useAuth()
  const { t } = useTranslation()

  const handleClick = () => {}

  return (
    <>
      <SearchInput />
      {isAdmin && (
        <AddButton disabled onClick={handleClick}>
          {t('Create department')}
        </AddButton>
      )}
    </>
  )
}
