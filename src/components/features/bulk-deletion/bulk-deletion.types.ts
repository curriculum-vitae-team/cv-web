import { ReactNode } from 'react'

export type BulkDeletionProps = {
  children?: ReactNode
  onDelete(entityIds: string[]): Promise<unknown>
}
