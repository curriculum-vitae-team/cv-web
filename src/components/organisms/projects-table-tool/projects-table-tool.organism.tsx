import { useTranslation } from 'react-i18next'
import { AddButton } from '@atoms/add-button'
import { SearchInput } from '@molecules/search-input'
import { useProjectDialog } from '@dialogs/project'
import { useAuth } from 'hooks/use-auth'
import { useProjectCreate } from 'hooks/use-projects'

export const ProjectsTableTool = () => {
  const { isAdmin } = useAuth()
  const { t } = useTranslation()
  const [openProjectDialog] = useProjectDialog()
  const [createProject] = useProjectCreate()

  const handleClick = () => {
    openProjectDialog({
      title: 'Create project',
      confirmText: 'Create',
      onConfirm(values) {
        return createProject({
          variables: {
            project: {
              ...values,
              start_date: values.start_date?.toISOString() || '',
              end_date: values.end_date?.toISOString()
            }
          }
        })
      }
    })
  }

  return (
    <>
      <SearchInput />
      {isAdmin && <AddButton onClick={handleClick}>{t('Create project')}</AddButton>}
    </>
  )
}
