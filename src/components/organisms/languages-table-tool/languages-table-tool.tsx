import { useTranslation } from 'react-i18next'
import { AddButton } from '@atoms/add-button'
import { SearchInput } from '@molecules/search-input'
import { useLanguageDialog } from '@dialogs/language'
import { useAuth } from 'hooks/use-auth.hook'

export const LanguagesTableTool = () => {
  const { isAdmin } = useAuth()
  const { t } = useTranslation()
  const [openLanguageDialog] = useLanguageDialog()

  const handleClick = () => {
    openLanguageDialog()
  }

  return (
    <>
      <SearchInput />
      {isAdmin && <AddButton onClick={handleClick}>{t('Create language')}</AddButton>}
    </>
  )
}
