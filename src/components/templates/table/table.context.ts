import { createContext, Dispatch, SetStateAction } from 'react'
import { SortOrder } from 'constants/table-sort.constants'

type TableSearchContextValue = {
  search: string
  setSearch: Dispatch<SetStateAction<string>>
}

export const TableSearchContext = createContext<TableSearchContextValue>({
  search: '',
  setSearch() {}
})

type TableSortContextValue = {
  sortBy: string
  order: SortOrder
  setSortBy: Dispatch<SetStateAction<string>>
  setOrder: Dispatch<SetStateAction<SortOrder>>
}

export const TableSortContext = createContext<TableSortContextValue>({
  sortBy: '',
  order: SortOrder.Asc,
  setSortBy() {},
  setOrder() {}
})
