import { ReactNode } from 'react'

export type BulkDeletionProps = {
  children?: ReactNode
  onDelete(selectedIds: string[]): Promise<unknown>
}
