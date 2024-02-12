import { Project } from 'cv-graphql'
import { useParams } from 'react-router-dom'
import { Container } from '@mui/material'
import { createTable } from '@templates/table'
import { useCvProjects } from 'hooks/use-cvs'
import { CvProjectsTableTool } from '@organisms/projects-table-tool'
import { ProjectsTableHead } from '@organisms/projects-table-head'
import { ProjectsTableRow } from '@organisms/projects-table-row'

const Table = createTable<Project>()

const CvProjects = () => {
  const { cvId = '' } = useParams()
  const { projects, loading } = useCvProjects(cvId)

  return (
    <Container maxWidth="xl">
      <Table
        items={projects}
        loading={loading}
        TableToolComponent={CvProjectsTableTool}
        TableHeadComponent={ProjectsTableHead}
        TableRowComponent={ProjectsTableRow}
        searchBy={['name']}
        defaultSortBy="name"
      />
    </Container>
  )
}

export default CvProjects
