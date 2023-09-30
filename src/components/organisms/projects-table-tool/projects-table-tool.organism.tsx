import { useTranslation } from 'react-i18next'
import { Button } from '@mui/material'
import { SearchInput } from '@molecules/search-input'
import { useProjectDialog } from '@dialogs/project'
import { useUser } from 'hooks/use-user.hook'

export const ProjectsTableTool = () => {
  const { isAdmin } = useUser()
  const { t } = useTranslation()
  const [openProjectDialog] = useProjectDialog()

  const handleClick = () => {
    openProjectDialog()
  }

  return (
    <>
      <SearchInput />
      {isAdmin && (
        <Button variant="outlined" onClick={handleClick}>
          {t('Create project')}
        </Button>
      )}
    </>
  )
}
