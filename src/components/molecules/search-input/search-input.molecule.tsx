import { ChangeEvent, memo, useCallback, useContext } from 'react'
import { TextField, TextFieldProps } from '@mui/material'
import { Search } from '@mui/icons-material'
import { TableSearchContext } from '@templates/table/table.context'

const SearchInput = (props: TextFieldProps) => {
  const { search, setSearch } = useContext(TableSearchContext)

  const handleSearch = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value)
  }, [])

  return (
    <TextField
      placeholder="Search"
      InputProps={{ startAdornment: <Search color="action" /> }}
      inputProps={{ sx: { padding: '6.7px 14px', minWidth: 250 } }}
      {...props}
      value={search}
      onChange={handleSearch}
    />
  )
}

export default memo(SearchInput)
