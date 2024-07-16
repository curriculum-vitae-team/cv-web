import { ChangeEvent, memo, useCallback, useContext } from 'react'
import { useTranslation } from 'react-i18next'
import { IconButton, TextFieldProps } from '@mui/material'
import { Search, Close } from '@mui/icons-material'
import { TableSearchContext } from '@templates/table/table.context'
import * as Styled from './search-input.styles'

const SearchInput = (props: TextFieldProps) => {
  const { search, setSearch } = useContext(TableSearchContext)
  const { t } = useTranslation()

  const handleSearch = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setSearch(event.target.value)
    },
    [setSearch]
  )

  return (
    <Styled.Input
      placeholder={t('Search') || 'Search'}
      InputProps={{
        startAdornment: <Search color="action" />,
        endAdornment: search && (
          <IconButton sx={{ mr: -1 }} onClick={() => setSearch('')}>
            <Close />
          </IconButton>
        )
      }}
      {...props}
      autoComplete="name"
      value={search}
      onChange={handleSearch}
    />
  )
}

export default memo(SearchInput)
