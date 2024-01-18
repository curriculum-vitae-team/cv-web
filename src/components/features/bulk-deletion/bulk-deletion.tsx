import { useReactiveVar } from '@apollo/client'
import { Button } from '@mui/material'
import { memo, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { bulkDeletionService } from './bulk-deletion.service'
import * as Styled from './bulk-deletion.styles'
import { BulkDeletionProps } from './bulk-deletion.types'

const BulkDeletion = ({ children, onDelete }: BulkDeletionProps) => {
  const { t } = useTranslation()
  const [isLoading, setIsLoading] = useState(false)
  const entityIds$ = useReactiveVar(bulkDeletionService.entityIds$)

  useEffect(() => {
    return () => {
      bulkDeletionService.reset()
    }
  }, [])

  const handleCancel = () => {
    bulkDeletionService.reset()
  }

  const handleDelete = () => {
    setIsLoading(true)
    onDelete(entityIds$).then(() => {
      setIsLoading(false)
      bulkDeletionService.reset()
    })
  }

  return (
    <>
      {children}
      {!!entityIds$.length && (
        <>
          <Styled.AdditionalScroll />
          <Styled.Footer>
            <Styled.Actions maxWidth="md">
              <Button color="secondary" variant="outlined" onClick={handleCancel}>
                {t('Cancel')}
              </Button>
              <Button variant="contained" disabled={isLoading} onClick={handleDelete}>
                {t('Delete')} <Styled.Counter>{entityIds$.length}</Styled.Counter>
              </Button>
            </Styled.Actions>
          </Styled.Footer>
        </>
      )}
    </>
  )
}

export default memo(BulkDeletion)
