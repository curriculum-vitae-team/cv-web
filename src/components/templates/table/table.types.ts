import { FC } from 'react'
import { Path } from 'react-hook-form'

export type Item = {
  id: string
}

export type TableRowProps<T> = {
  item: T
}

export type TableProps<T> = {
  items: T[]
  loading: boolean
  TableToolComponent: FC
  TableHeadComponent: FC
  TableRowComponent: FC<TableRowProps<T>>
  TableFooterComponent?: FC
  searchBy: Path<T>[]
  defaultSortBy: Path<T>
}
