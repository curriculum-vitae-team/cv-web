import { useTranslation } from 'react-i18next'
import { AddButton } from '@atoms/add-button'
import { SearchInput } from '@molecules/search-input'
import { useProjectDialog } from '@dialogs/project'
import { useAuth } from 'hooks/use-auth.hook'

export const ProjectsTableTool = () => {
  const { isAdmin } = useAuth()
  const { t } = useTranslation()
  const [openProjectDialog] = useProjectDialog()

  const handleClick = () => {
    openProjectDialog()
  }

  return (
    <>
      <SearchInput />
      {isAdmin && <AddButton onClick={handleClick}>{t('Create project')}</AddButton>}
    </>
  )
}
