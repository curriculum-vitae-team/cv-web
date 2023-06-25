import { memo, useCallback } from 'react'
import { useReactiveVar } from '@apollo/client'
import { Alert } from '@mui/material'
import { notificationsService } from 'graphql/notifications/notifications.service'
import * as Styled from './notifications.styles'

const Notifications = () => {
  const notifications = useReactiveVar(notificationsService.notifications$)

  const handleClose = useCallback((id: number) => {
    return () => notificationsService.closeNotification(id)
  }, [])

  return (
    <Styled.Notifications>
      {notifications.map(({ id, type, message }) => (
        <Alert key={id} severity={type} onClose={handleClose(id)}>
          {message}
        </Alert>
      ))}
    </Styled.Notifications>
  )
}

export default memo(Notifications)
