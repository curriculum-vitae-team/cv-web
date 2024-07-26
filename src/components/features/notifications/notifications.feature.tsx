import { memo } from 'react'
import { useReactiveVar } from '@apollo/client'
import { useTranslation } from 'react-i18next'
import { notification$, closeNotification } from 'graphql/notifications'
import * as Styled from './notifications.styles'

const Notifications = () => {
  const { t } = useTranslation()
  const notification = useReactiveVar(notification$)

  return (
    <Styled.Message
      open={!!notification}
      anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
      autoHideDuration={5000}
      className={notification?.type}
      message={t(notification?.message || '')}
      onClose={closeNotification}
    />
  )
}

export default memo(Notifications)
