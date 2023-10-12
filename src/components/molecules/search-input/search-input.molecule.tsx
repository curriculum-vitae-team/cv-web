import { ChangeEvent, memo, useCallback, useContext } from 'react'
import { useTranslation } from 'react-i18next'
import { TextFieldProps } from '@mui/material'
import { Search } from '@mui/icons-material'
import { TableSearchContext } from '@templates/table/table.context'
import * as Styled from './search-input.styles'

const SearchInput = (props: TextFieldProps) => {
  const { search, setSearch } = useContext(TableSearchContext)
  const { t } = useTranslation()

  const handleSearch = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value)
  }, [])

  return (
    <Styled.Input
      placeholder={t('Search') || 'Search'}
      InputProps={{ startAdornment: <Search color="action" /> }}
      autoFocus
      {...props}
      value={search}
      onChange={handleSearch}
    />
  )
}

export default memo(SearchInput)
