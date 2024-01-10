import { User } from 'cv-graphql'
import { createTable } from '@templates/table'
import { UsersTableTool } from '@organisms/users-table-tool'
import { UsersTableHead } from '@organisms/users-table-head'
import { UsersTableRow } from '@organisms/users-table-row'
import { useUsers } from 'hooks/use-users'

const Table = createTable<User>()

const Users = () => {
  const { users, loading } = useUsers()

  return (
    <div>
      <Table
        items={users}
        loading={loading}
        TableToolComponent={UsersTableTool}
        TableHeadComponent={UsersTableHead}
        TableRowComponent={UsersTableRow}
        searchBy={['email', 'profile.first_name', 'profile.last_name']}
        defaultSortBy="department.name"
      />
    </div>
  )
}

export default Users
