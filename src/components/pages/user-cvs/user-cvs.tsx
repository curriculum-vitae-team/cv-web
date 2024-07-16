import { memo } from 'react'
import { useParams } from 'react-router-dom'
import type { Cv } from 'cv-graphql'
import { useUserCvs } from 'hooks/use-users'
import { createTable } from '@templates/table'
import { UserCvsTableTool } from '@organisms/user-cvs-table-tool'
import { UserCvsTableHead } from '@organisms/user-cvs-table-head'
import { UserCvsTableRow } from '@organisms/user-cvs-table-row'

const Table = createTable<Cv>()

const UserCvs = () => {
  const { userId = '' } = useParams()
  const { cvs, loading } = useUserCvs(userId)

  return (
    <Table
      items={cvs}
      loading={loading}
      TableToolComponent={UserCvsTableTool}
      TableHeadComponent={UserCvsTableHead}
      TableRowComponent={UserCvsTableRow}
      searchBy={['name']}
      defaultSortBy="name"
      stickyTop={44 + 56 + 32}
    />
  )
}

export default memo(UserCvs)
