import { ChangeEvent, useCallback, useContext } from 'react'
import { Button } from '@mui/material'
import { TableSearchContext } from '../../templates/table/table.context'
import { SearchInput } from '../../molecules/search-input'
import { useAdminRole } from '../../../hooks/use-admin-role.hook'

export const UsersTableTool = () => {
  const { search, setSearch } = useContext(TableSearchContext)
  const isAdmin = useAdminRole()

  const handleSearch = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value)
  }, [])

  return (
    <>
      <SearchInput value={search} onChange={handleSearch} />
      {isAdmin && <Button variant="outlined">Create Employee</Button>}
    </>
  )
}
