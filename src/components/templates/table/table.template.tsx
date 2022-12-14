import { FC, memo, useDeferredValue, useMemo, useState } from 'react'
import {
  Table as MuiTable,
  TableHead,
  TableBody,
  TableFooter,
  TableRow,
  TableCell,
  Box
} from '@mui/material'
import { Item, TableProps } from './table.types'
import { SortOrder } from '../../../constants/table-sort.constants'
import { sortItems } from '../../../helpers/table-sort.helper'
import { TableSearchContext, TableSortContext } from './table.context'
import { searchItems } from '../../../helpers/table-search.helper'

const Table = <T extends Item>({
  items,
  loading,
  TableToolComponent,
  TableHeadComponent,
  TableRowComponent,
  TableFooterComponent,
  searchBy,
  defaultSortBy
}: TableProps<T>) => {
  const [search, setSearch] = useState('')
  const _search = useDeferredValue(search)
  const tableSearch = useMemo(() => {
    return { search, setSearch }
  }, [search])
  const filteredItems = useMemo(() => {
    return items.filter(searchItems(searchBy, _search))
  }, [items, _search])

  const [sortBy, setSortBy] = useState(defaultSortBy)
  const _sortBy = useDeferredValue(sortBy)
  const [order, setOrder] = useState(SortOrder.Asc)
  const _order = useDeferredValue(order)
  const tableSort = useMemo(() => {
    return { sortBy, order, setSortBy, setOrder }
  }, [sortBy, order])
  const sortedItems = useMemo(() => {
    return filteredItems.sort(sortItems<T>(_sortBy, _order))
  }, [filteredItems, _sortBy, _order])

  return (
    <MuiTable stickyHeader>
      <TableHead>
        <TableSearchContext.Provider value={tableSearch as never}>
          <TableRow>
            <TableCell
              colSpan={10}
              sx={{ top: 64, height: 80, backgroundColor: '#f5f5f7', borderBottom: 'none' }}
            >
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <TableToolComponent />
              </Box>
            </TableCell>
          </TableRow>
        </TableSearchContext.Provider>
        <TableSortContext.Provider value={tableSort as never}>
          <TableHeadComponent />
        </TableSortContext.Provider>
      </TableHead>
      <TableBody>
        {loading && (
          <TableRow>
            <TableCell colSpan={10}>loading</TableCell>
          </TableRow>
        )}
        {sortedItems.map((item) => (
          <TableRowComponent key={item.id} item={item} />
        ))}
      </TableBody>
      {TableFooterComponent && (
        <TableFooter>
          <TableFooterComponent />
        </TableFooter>
      )}
    </MuiTable>
  )
}

const TableComponent = memo(Table) as never

export const createTable = <T extends Item>(): FC<TableProps<T>> => TableComponent
