import { memo } from 'react'
import { TextField, TextFieldProps } from '@mui/material'
import { Search } from '@mui/icons-material'

const SearchInput = (props: TextFieldProps) => {
  return (
    <TextField
      placeholder="Search"
      InputProps={{ startAdornment: <Search color="action" /> }}
      inputProps={{ sx: { padding: '6.7px 14px', minWidth: 250 } }}
      {...props}
    />
  )
}

export default memo(SearchInput)
