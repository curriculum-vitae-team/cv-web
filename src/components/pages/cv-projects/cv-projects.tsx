import { CvProject } from 'cv-graphql'
import { useParams } from 'react-router-dom'
import { Container } from '@mui/material'
import { createTable } from '@templates/table'
import { useCvProjects } from 'hooks/use-cvs'
import { CvProjectsTableTool } from '@organisms/projects-table-tool'
import { ProjectsTableHead } from '@organisms/projects-table-head'
import { CvProjectsTableRow } from '@organisms/projects-table-row'
import { SortOrder } from 'constants/table-sort.constants'

const Table = createTable<CvProject>()

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
        TableRowComponent={CvProjectsTableRow}
        searchBy={['name']}
        defaultSortBy="end_date"
        defaultOrder={SortOrder.Desc}
      />
    </Container>
  )
}

export default CvProjects
