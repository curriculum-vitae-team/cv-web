import { ChangeEvent, useCallback, useContext } from 'react'
import { useReactiveVar } from '@apollo/client'
import { Button } from '@mui/material'
import { UserRole } from '../../../constants/user-role.constants'
import { authService } from '../../../graphql/auth/auth.service'
import { SearchInput } from '../../molecules/search-input'
import { TableSearchContext } from '../../templates/table/table.context'

export const LanguagesTableTool = () => {
  const { search, setSearch } = useContext(TableSearchContext)
  const user = useReactiveVar(authService.user$)

  const handleSearch = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value)
  }, [])

  return (
    <>
      <SearchInput value={search} onChange={handleSearch} />
      {user?.role === UserRole.Admin && <Button variant="outlined">Create Language</Button>}
    </>
  )
}
