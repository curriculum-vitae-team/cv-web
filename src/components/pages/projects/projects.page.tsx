import { memo } from 'react'
import { Project } from 'cv-graphql'
import { createTable } from '@templates/table'
import { ProjectsTableTool } from '@organisms/projects-table-tool'
import { ProjectsTableHead } from '@organisms/projects-table-head'
import { ProjectsTableRow } from '@organisms/projects-table-row'
import { useProjects } from 'hooks/use-projects'

const Table = createTable<Project>()

const Projects = () => {
  const { projects, loading } = useProjects()

  return (
    <div>
      <Table
        items={projects}
        loading={loading}
        TableToolComponent={ProjectsTableTool}
        TableHeadComponent={ProjectsTableHead}
        TableRowComponent={ProjectsTableRow}
        searchBy={['name', 'internal_name']}
        defaultSortBy="internal_name"
      />
    </div>
  )
}

export default memo(Projects)
