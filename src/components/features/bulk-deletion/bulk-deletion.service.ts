import { makeVar } from '@apollo/client'
import { IBulkDeletion } from './bulk-deletion.types'

class BulkDeletionService implements IBulkDeletion {
  entityIds$ = makeVar<string[]>([])

  setEntityId(entityId: string) {
    const entityIds = this.entityIds$()

    if (entityIds.includes(entityId)) {
      this.entityIds$(entityIds.filter((id) => id !== entityId))
      return
    }

    this.entityIds$([...entityIds, entityId])
  }

  reset() {
    this.entityIds$([])
  }
}

export const bulkDeletionService = new BulkDeletionService()
