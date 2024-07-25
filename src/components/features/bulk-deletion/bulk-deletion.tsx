import { Button } from '@mui/material'
import { memo, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Actions } from '@templates/actions'
import { useBulkDeletion } from 'hooks/use_bulk_deletion'
import { bulkDeletionService } from './bulk-deletion.service'
import * as Styled from './bulk-deletion.styles'
import { BulkDeletionProps } from './bulk-deletion.types'

const BulkDeletion = ({ children, onDelete }: BulkDeletionProps) => {
  const { t } = useTranslation()
  const [isLoading, setIsLoading] = useState(false)
  const { isActive$, selectedIds$ } = useBulkDeletion()

  useEffect(() => {
    return () => {
      bulkDeletionService.cancelSelection()
    }
  }, [])

  const handleCancel = () => {
    bulkDeletionService.cancelSelection()
  }

  const handleDelete = () => {
    setIsLoading(true)
    onDelete(selectedIds$).then(() => {
      setIsLoading(false)
      bulkDeletionService.cancelSelection()
    })
  }

  return (
    <>
      {children}
      {isActive$ && (
        <Actions>
          <Button color="secondary" variant="outlined" onClick={handleCancel}>
            {t('Cancel')}
          </Button>
          <Button
            variant="contained"
            disabled={!selectedIds$.length || isLoading}
            onClick={handleDelete}
          >
            {t('Delete')}
            {!!selectedIds$.length && <Styled.Counter>{selectedIds$.length}</Styled.Counter>}
          </Button>
        </Actions>
      )}
    </>
  )
}

export default memo(BulkDeletion)
