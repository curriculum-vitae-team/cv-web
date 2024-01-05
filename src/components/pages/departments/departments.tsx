import { Department } from 'cv-graphql'
import { createTable } from '@templates/table'
import { useDepartments } from 'hooks/use-departments.hook'
import { DepartmentsTableHead } from '@organisms/departments-table-head'
import { DepartmentsTableRow } from '@organisms/departments-table-row'
import { DepartmentsTableTool } from '@organisms/departments-table-tool'

const Table = createTable<Department>()

const Departments = () => {
  const { data, loading } = useDepartments()

  return (
    <div>
      <Table
        items={data?.departments || []}
        loading={loading}
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
