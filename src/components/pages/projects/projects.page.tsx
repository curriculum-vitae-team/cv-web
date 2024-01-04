import { memo } from 'react'
import { useQuery } from '@apollo/client'
import { Project } from 'cv-graphql'
import { createTable } from '@templates/table'
import { ProjectsTableTool } from '@organisms/projects-table-tool'
import { ProjectsTableHead } from '@organisms/projects-table-head'
import { ProjectsTableRow } from '@organisms/projects-table-row'
import { PROJECTS } from 'graphql/projects'
import { ProjectsResult } from 'graphql/projects/projects.types'

const Table = createTable<Project>()

const Projects = () => {
  const { data, loading } = useQuery<ProjectsResult>(PROJECTS)

  return (
    <div>
      <Table
        items={data?.projects || []}
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
