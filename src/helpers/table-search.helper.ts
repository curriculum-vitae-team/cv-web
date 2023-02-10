import { Path, get } from 'react-hook-form'
import { Item } from '@templates/table/table.types'

export const searchItems = <T extends Item>(keys: Path<T>[], value: string) => (item: T) => {
  return keys.some((key) => {
    const field = get(item, key)
    if (!field) {
      return false
    }
    return field.toLowerCase().includes(value.toLowerCase())
  })
}
