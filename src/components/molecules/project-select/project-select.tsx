import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { useController, useFormContext } from 'react-hook-form'
import { MenuItem, TextField } from '@mui/material'
import { parseISO } from 'date-fns'
import { Project } from 'cv-graphql'
import { useProjects } from 'hooks/use-projects'
import { CvProjectFormValues } from '@dialogs/cv-project/cv-project.types'
import { ProjectSelectProps } from './project-select.types'

const ProjectSelect = ({ availableProjects, disabled, ...props }: ProjectSelectProps) => {
  const { t } = useTranslation()
  const { projects, loading } = useProjects()
  const { setValue, reset } = useFormContext<CvProjectFormValues>()
  const { field } = useController<CvProjectFormValues>({ name: 'projectId' })

  const handleReset = () => {
    reset()
  }

  const handleSelect = ({
    internal_name,
    description,
    domain,
    team_size,
    start_date,
    end_date
  }: Project) => () => {
    setValue('internal_name', internal_name)
    setValue('description', description)
    setValue('domain', domain)
    setValue('team_size', String(team_size || 1))
    setValue('start_date', parseISO(start_date))
    setValue('end_date', end_date ? parseISO(end_date) : null)
  }

  return (
    <TextField {...props} {...field} select disabled={disabled || loading} label={t('Project')}>
      <MenuItem value="" onClick={handleReset}>
        {t('No projects')}
      </MenuItem>
      {(availableProjects || projects).map((project) => (
        <MenuItem key={project.id} value={project.id} onClick={handleSelect(project)}>
          {project.name}
        </MenuItem>
      ))}
    </TextField>
  )
}

export default memo(ProjectSelect)
