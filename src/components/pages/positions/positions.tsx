import { createTable } from '@templates/table'
import { PositionsTableRow } from '@organisms/positions-table-row'
import { PositionsTableTool } from '@organisms/positions-table-tool'
import { PositionsTableHead } from '@organisms/positions-table-head'
import { usePositions } from 'hooks/use-positions.hook'
import { IPosition } from 'interfaces/position.interface'

const Table = createTable<IPosition>()

const Positions = () => {
  const [positions, loading] = usePositions()

  return (
    <div>
      <Table
        items={positions}
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
