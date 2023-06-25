import { useTranslation } from 'react-i18next'
import { Button } from '@mui/material'
import { SearchInput } from '@molecules/search-input'
import { useCreateProjectDialog } from '@dialogs/create-project'
import { useUser } from 'hooks/use-user.hook'

export const ProjectsTableTool = () => {
  const { isAdmin } = useUser()
  const { t } = useTranslation()
  const [openCreateProjectDialog] = useCreateProjectDialog()

  return (
    <>
      <SearchInput />
      {isAdmin && (
        <Button variant="outlined" onClick={openCreateProjectDialog}>
          {t('Create project')}
        </Button>
      )}
    </>
  )
}
