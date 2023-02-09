import { Button } from '@mui/material'
import { SearchInput } from '../../molecules/search-input'
import { useAdminRole } from '../../../hooks/use-admin-role.hook'
import { useCreateLanguageDialog } from '../../dialogs/create-language'

export const LanguagesTableTool = () => {
  const isAdmin = useAdminRole()
  const [openCreateLanguageDialog] = useCreateLanguageDialog()

  const handleClick = () => {
    openCreateLanguageDialog()
  }

  return (
    <>
      <SearchInput />
      {isAdmin && (
        <Button variant="outlined" onClick={handleClick}>
          Create Language
        </Button>
      )}
    </>
  )
}
