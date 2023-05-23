import { useTranslation } from 'react-i18next'
import { Button } from '@mui/material'
import { SearchInput } from '@molecules/search-input'
import { useUser } from '@hooks/use-user.hook'
import { useCreateLanguageDialog } from '@dialogs/create-language'

export const LanguagesTableTool = () => {
  const { isAdmin } = useUser()
  const { t } = useTranslation()
  const [openCreateLanguageDialog] = useCreateLanguageDialog()

  const handleClick = () => {
    openCreateLanguageDialog()
  }

  return (
    <>
      <SearchInput />
      {isAdmin && (
        <Button variant="outlined" onClick={handleClick}>
          {t('Create Language')}
        </Button>
      )}
    </>
  )
}
