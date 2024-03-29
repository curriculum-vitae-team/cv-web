import { get } from 'react-hook-form'
import { isBefore, parseISO } from 'date-fns'
import { Item } from '@templates/table/table.types'
import { SortOrder } from 'constants/table-sort.constants'

export const sortItems = <T extends Item>(sortBy: string, order: SortOrder) => (a: T, b: T) => {
  const fieldA = get(a, sortBy)
  const fieldB = get(b, sortBy)

  if (!fieldA) {
    return 1
  }
  if (!fieldB) {
    return -1
  }

  if (order === SortOrder.Desc) {
    return fieldA < fieldB ? 1 : -1
  }
  return fieldA > fieldB ? 1 : -1
}

export const sortDates = <T extends Item>(sortBy: string, order: SortOrder) => (a: T, b: T) => {
  const fieldA = get(a, sortBy)
  const fieldB = get(b, sortBy)

  if (!fieldA) {
    return order === SortOrder.Asc ? 1 : -1
  }
  if (!fieldB) {
    return order === SortOrder.Asc ? -1 : 1
  }

  if (isBefore(parseISO(fieldA), parseISO(fieldB))) {
    return order === SortOrder.Asc ? -1 : 1
  }
  return order === SortOrder.Asc ? 1 : -1
}

export const changeOrder = (prevState: SortOrder) => {
  return prevState === SortOrder.Asc ? SortOrder.Desc : SortOrder.Asc
}
