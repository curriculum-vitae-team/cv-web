import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { useController, useFormContext } from 'react-hook-form'
import { Autocomplete, TextField } from '@mui/material'
import { parseISO } from 'date-fns/esm'
import { Project } from 'cv-graphql'
import { useProjects } from 'hooks/use-projects'
import { CvProjectFormValues } from '@dialogs/cv-project/cv-project.types'
import { ProjectSelectProps } from './project-select.types'

const ProjectSelect = ({ availableProjects, disabled }: ProjectSelectProps) => {
  const { t } = useTranslation()
  const { projects, loading } = useProjects()
  const { setValue, reset } = useFormContext<CvProjectFormValues>()
  const { field } = useController<CvProjectFormValues>({ name: 'projectId' })

  const handleReset = () => {
    reset()
  }

  const handleSelect = ({ id, description, domain, start_date, end_date }: Project) => {
    setValue('projectId', id, { shouldDirty: true })
    setValue('description', description)
    setValue('domain', domain)
    setValue('start_date', parseISO(start_date))
    setValue('end_date', end_date ? parseISO(end_date) : null)
  }

  const options = (availableProjects || projects)
    .map((project) => ({
      ...project,
      firstChar: project.name[0]
    }))
    .sort((a, b) => -b.firstChar.localeCompare(a.firstChar))

  return (
    <Autocomplete
      disablePortal
      autoHighlight
      disabled={disabled || loading}
      {...field}
      value={options.find((option) => option.id === field.value) || null}
      onChange={(_, option) => {
        option ? handleSelect(option) : handleReset()
      }}
      options={options}
      // groupBy={(option) => option.firstChar}
      getOptionLabel={(option) => option.name}
      renderInput={(params) => <TextField {...params} label={t('Project')} />}
    />
  )
}

export default memo(ProjectSelect)
