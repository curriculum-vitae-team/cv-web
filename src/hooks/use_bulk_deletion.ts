import { useReactiveVar } from '@apollo/client'
import { bulkDeletionService } from '@features/bulk-deletion'

export const useBulkDeletion = () => {
  const isActive$ = useReactiveVar(bulkDeletionService.isActive$)
  const selectedIds$ = useReactiveVar(bulkDeletionService.selectedIds$)

  return { isActive$, selectedIds$ }
}
