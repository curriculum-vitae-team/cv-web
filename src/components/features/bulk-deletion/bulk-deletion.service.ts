import { makeVar } from '@apollo/client'

class BulkDeletionService {
  selectedIds$ = makeVar<string[]>([])
  isActive$ = makeVar(false)

  startSelection() {
    this.isActive$(true)
  }

  cancelSelection() {
    this.selectedIds$([])
    this.isActive$(false)
  }

  setEntityId(entityId: string) {
    const entityIds = this.selectedIds$()

    if (entityIds.includes(entityId)) {
      this.selectedIds$(entityIds.filter((id) => id !== entityId))
      return
    }

    this.selectedIds$([...entityIds, entityId])
  }
}

export const bulkDeletionService = new BulkDeletionService()
