import { FC, memo, useDeferredValue, useMemo, useState } from 'react'
import { Table as MuiTable, TableHead, TableBody, TableFooter, TableRow } from '@mui/material'
import { TableLoader } from '@atoms/table-loader'
import { SortOrder } from 'constants/table-sort.constants'
import { sortItems } from 'helpers/table-sort.helper'
import { searchItems } from 'helpers/table-search.helper'
import { Item, TableProps } from './table.types'
import { TableSearchContext, TableSortContext } from './table.context'
import * as Styled from './table.styles'

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
  const [sortBy, setSortBy] = useState(defaultSortBy as string)
  const _sortBy = useDeferredValue(sortBy)
  const [order, setOrder] = useState(SortOrder.Asc)
  const _order = useDeferredValue(order)

  const tableSearch = useMemo(() => {
    return { search, setSearch }
  }, [search])

  const tableSort = useMemo(() => {
    return { sortBy, order, setSortBy, setOrder }
  }, [sortBy, order])

  const filteredItems = useMemo(() => {
    return items.filter(searchItems(searchBy, _search))
  }, [items, _search])

  const sortedItems = useMemo(() => {
    return filteredItems.sort(sortItems(_sortBy, _order))
  }, [filteredItems, _sortBy, _order])

  return (
    <MuiTable stickyHeader>
      <TableHead>
        <TableSearchContext.Provider value={tableSearch}>
          <TableRow>
            <Styled.ToolBar colSpan={10}>
              <div>
                <TableToolComponent />
              </div>
            </Styled.ToolBar>
          </TableRow>
        </TableSearchContext.Provider>
        <TableSortContext.Provider value={tableSort}>
          <TableHeadComponent />
        </TableSortContext.Provider>
      </TableHead>
      <TableBody>
        {loading && <TableLoader />}
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

const TableComponent = memo(Table)

export const createTable = <T extends Item>() => (TableComponent as unknown) as FC<TableProps<T>>
