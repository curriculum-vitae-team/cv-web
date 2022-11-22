import { useQuery } from '@apollo/client'
import { createTable } from '../../templates/table'
import { IUser } from '../../../interfaces/user.interface'
import { UsersResult } from '../../../graphql/users/users.types'
import { USERS } from '../../../graphql/users'
import { UsersTableTool } from '../../organisms/users-table-tool'
import { UsersTableHead } from '../../organisms/users-table-head'
import { UsersTableRow } from '../../organisms/users-table-row'

const Table = createTable<IUser>()

const Employees = () => {
  const { data, loading } = useQuery<UsersResult>(USERS)

  return (
    <div>
      <Table
        items={data?.users || []}
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
