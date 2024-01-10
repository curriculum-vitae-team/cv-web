import { memo } from 'react'
import { Cv } from 'cv-graphql'
import { createTable } from '@templates/table'
import { CvsTableTool } from '@organisms/cvs-table-tool'
import { CvsTableHead } from '@organisms/cvs-table-head'
import { CvsTableRow } from '@organisms/cvs-table-row'
import { useCvs } from 'hooks/use-cvs'

const Table = createTable<Cv>()

const Cvs = () => {
  const { cvs, loading } = useCvs()

  return (
    <div>
      <Table
        items={cvs}
        loading={loading}
        TableToolComponent={CvsTableTool}
        TableHeadComponent={CvsTableHead}
        TableRowComponent={CvsTableRow}
        searchBy={['name']}
        defaultSortBy="name"
      />
    </div>
  )
}

export default memo(Cvs)
