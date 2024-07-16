import { useMemo } from 'react'
import { createTable } from '@templates/table'
import { useDepartments } from 'hooks/use-departments.hook'
import { DepartmentsTableHead } from '@organisms/departments-table-head'
import { DepartmentsTableRow } from '@organisms/departments-table-row'
import { DepartmentsTableTool } from '@organisms/departments-table-tool'
import { useUsers } from 'hooks/use-users'
import type { DepartmentWithUsers } from './departments.types'

const Table = createTable<DepartmentWithUsers>()

const Departments = () => {
  const { departments, loading: loadingDepartments } = useDepartments()
  const { users, loading: loadingUsers } = useUsers()

  const departmentsWithUsers = useMemo(() => {
    return departments.map((department) => ({
      ...department,
      users: users.filter((user) => user.department?.id === department.id)
    }))
  }, [departments, users])

  return (
    <div>
      <Table
        items={departmentsWithUsers}
        loading={loadingDepartments || loadingUsers}
        TableToolComponent={DepartmentsTableTool}
        TableHeadComponent={DepartmentsTableHead}
        TableRowComponent={DepartmentsTableRow}
        searchBy={['name']}
        defaultSortBy="name"
      />
    </div>
  )
}

export default Departments
