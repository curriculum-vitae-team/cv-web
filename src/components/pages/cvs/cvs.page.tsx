import { useQuery } from '@apollo/client'
import { memo } from 'react'
import { CVS } from '../../../graphql/cvs'
import { CVsResult } from '../../../graphql/cvs/cvs.types'
import { ICV } from '../../../interfaces/cv.interface'
import { createTable } from '../../templates/table'
import { CVsTableTool } from '../../organisms/cvs-table-tool'
import { CVsTableHead } from '../../organisms/cvs-table-head'
import { CVsTableRow } from '../../organisms/cvs-table-row'
import { useBreadcrumbs } from '../../../hooks/use-breadcrumbs.hook'

const Table = createTable<ICV>()

const CVsPage = () => {
  const { data, loading } = useQuery<CVsResult>(CVS)

  useBreadcrumbs({
    cvs: {
      text: 'CVs'
    }
  })

  return (
    <div>
      <Table
        items={data?.cvs || []}
        loading={loading}
        TableToolComponent={CVsTableTool}
        TableHeadComponent={CVsTableHead}
        TableRowComponent={CVsTableRow}
        searchBy={['name']}
        defaultSortBy="name"
      />
    </div>
  )
}

export default memo(CVsPage)
