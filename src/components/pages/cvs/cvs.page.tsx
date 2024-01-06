import { memo } from 'react'
import { Cv } from 'cv-graphql'
import { createTable } from '@templates/table'
import { CVsTableTool } from '@organisms/cvs-table-tool'
import { CVsTableHead } from '@organisms/cvs-table-head'
import { CVsTableRow } from '@organisms/cvs-table-row'
import { useCvs } from 'hooks/use-cvs'

const Table = createTable<Cv>()

const CVsPage = () => {
  const { cvs, loading } = useCvs()

  return (
    <div>
      <Table
        items={cvs}
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
