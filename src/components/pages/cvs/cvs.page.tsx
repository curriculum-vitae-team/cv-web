import { memo } from 'react'
import { useQuery } from '@apollo/client'
import { createTable } from '@templates/table'
import { CVsTableTool } from '@organisms/cvs-table-tool'
import { CVsTableHead } from '@organisms/cvs-table-head'
import { CVsTableRow } from '@organisms/cvs-table-row'
import { CVS } from 'graphql/cvs'
import { CVsResult } from 'graphql/cvs/cvs.types'
import { ICV } from 'interfaces/cv.interface'

const Table = createTable<ICV>()

const CVsPage = () => {
  const { data, loading } = useQuery<CVsResult>(CVS)

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
