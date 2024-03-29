import { Position } from 'cv-graphql'
import { createTable } from '@templates/table'
import { PositionsTableRow } from '@organisms/positions-table-row'
import { PositionsTableTool } from '@organisms/positions-table-tool'
import { PositionsTableHead } from '@organisms/positions-table-head'
import { usePositions } from 'hooks/use-positions.hook'

const Table = createTable<Position>()

const Positions = () => {
  const { data, loading } = usePositions()

  return (
    <div>
      <Table
        items={data?.positions || []}
        loading={loading}
        TableToolComponent={PositionsTableTool}
        TableHeadComponent={PositionsTableHead}
        TableRowComponent={PositionsTableRow}
        searchBy={['name']}
        defaultSortBy="name"
      />
    </div>
  )
}

export default Positions
