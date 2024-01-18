import { ReactiveVar } from '@apollo/client'
import { ReactNode } from 'react'

export interface IBulkDeletion {
  entityIds$: ReactiveVar<string[]>
  setEntityId(entityId: string): void
  reset(): void
}

export type BulkDeletionProps = {
  children?: ReactNode
  onDelete(entityIds: string[]): Promise<unknown>
}
