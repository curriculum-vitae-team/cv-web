import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'
import { AddButton } from '@atoms/add-button'
import { useCvProjectDialog } from '@dialogs/cv-project'
import { SearchInput } from '@molecules/search-input'
import { useCv, useCvProjectAdd, useCvProjects } from 'hooks/use-cvs'
import { useProjectCreate, useProjects } from 'hooks/use-projects'
import { usePermission } from 'hooks/use_permission'

export const CvProjectsTableTool = () => {
  const { cvId = '' } = useParams()
  const { t } = useTranslation()
  const { cv } = useCv(cvId)
  const { canUpdateCv } = usePermission()

  const { projects } = useCvProjects(cvId)
  const projectIds = projects.map(({ project }) => project.id)
  const { projects: allProjects } = useProjects()
  const availableProjects = allProjects.filter((project) => !projectIds.includes(project.id))

  const [openCvProjectDialog] = useCvProjectDialog()
  const [createProject] = useProjectCreate()
  const [addCvProject] = useCvProjectAdd()

  const handleClick = () => {
    openCvProjectDialog({
      title: 'Add project',
      confirmText: availableProjects.length ? 'Add' : 'Create & add',
      availableProjects,
      createNewProject: !availableProjects.length,
      onConfirm({
        projectId,
        name,
        domain,
        description,
        start_date,
        end_date,
        roles,
        responsibilities
      }) {
        if (!availableProjects.length) {
          return createProject({
            variables: {
              project: {
                name,
                domain,
                description,
                start_date: start_date?.toISOString() || '',
                end_date: end_date?.toISOString()
              }
            }
          }).then(
            ({ data }) =>
              data &&
              addCvProject({
                variables: {
                  project: {
                    cvId,
                    projectId: data.createProject.id,
                    start_date: data.createProject.start_date,
                    end_date: data.createProject.end_date,
                    roles,
                    responsibilities
                  }
                }
              })
          )
        }

        return addCvProject({
          variables: {
            project: {
              cvId,
              projectId,
              start_date: start_date?.toISOString() || '',
              end_date: end_date?.toISOString(),
              roles,
              responsibilities
            }
          }
        })
      }
    })
  }

  return (
    <>
      <SearchInput />
      {canUpdateCv(cv) && <AddButton onClick={handleClick}>{t('Add project')}</AddButton>}
    </>
  )
}
