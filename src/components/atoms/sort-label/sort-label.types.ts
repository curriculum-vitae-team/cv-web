import { TableSortLabelProps } from '@mui/material'

export type SortLabelProps<K> = TableSortLabelProps & {
  column: K
  children: string
}
