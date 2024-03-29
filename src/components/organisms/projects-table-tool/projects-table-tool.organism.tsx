import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'
import { AddButton } from '@atoms/add-button'
import { SearchInput } from '@molecules/search-input'
import { useProjectDialog } from '@dialogs/project'
import { useAuth } from 'hooks/use-auth'
import { useProjectCreate, useProjects } from 'hooks/use-projects'
import { useCvProjectAdd, useCvProjects } from 'hooks/use-cvs'
import { useCvProjectDialog } from '@dialogs/cv-project'

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
              end_date: values.end_date?.toISOString(),
              team_size: Number(values.team_size)
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

export const CvProjectsTableTool = () => {
  const { isAdmin } = useAuth()
  const { cvId = '' } = useParams()
  const { t } = useTranslation()
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
        internal_name,
        domain,
        description,
        start_date,
        end_date,
        team_size,
        roles,
        responsibilities
      }) {
        if (!availableProjects.length) {
          return createProject({
            variables: {
              project: {
                name,
                internal_name,
                domain,
                description,
                start_date: start_date?.toISOString() || '',
                end_date: end_date?.toISOString(),
                team_size: Number(team_size)
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
      {isAdmin && <AddButton onClick={handleClick}>{t('Add project')}</AddButton>}
    </>
  )
}
