import { createTable } from '@templates/table'
import { UsersTableTool } from '@organisms/users-table-tool'
import { UsersTableHead } from '@organisms/users-table-head'
import { UsersTableRow } from '@organisms/users-table-row'
import { IUser } from 'interfaces/user.interface'
import { useUsers } from 'hooks/use-users.hook'

const Table = createTable<IUser>()

const Employees = () => {
  const [users, loading] = useUsers()

  return (
    <div>
      <Table
        items={users}
        loading={loading}
        TableToolComponent={UsersTableTool}
        TableHeadComponent={UsersTableHead}
        TableRowComponent={UsersTableRow}
        searchBy={['email', 'profile.first_name', 'profile.last_name']}
        defaultSortBy="department_name"
      />
    </div>
  )
}

export default Employees
