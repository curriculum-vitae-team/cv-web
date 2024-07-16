import { useMemo } from 'react'
import { createTable } from '@templates/table'
import { PositionsTableRow } from '@organisms/positions-table-row'
import { PositionsTableTool } from '@organisms/positions-table-tool'
import { PositionsTableHead } from '@organisms/positions-table-head'
import { usePositions } from 'hooks/use-positions.hook'
import { useUsers } from 'hooks/use-users'
import type { PositionWithUsers } from './position.types'

const Table = createTable<PositionWithUsers>()

const Positions = () => {
  const { positions, loading: loadingPositions } = usePositions()
  const { users, loading: loadingUsers } = useUsers()

  const positionsWithUsers = useMemo(() => {
    return positions.map((position) => ({
      ...position,
      users: users.filter((user) => user.position?.id === position.id)
    }))
  }, [positions, users])

  return (
    <div>
      <Table
        items={positionsWithUsers}
        loading={loadingPositions || loadingUsers}
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
