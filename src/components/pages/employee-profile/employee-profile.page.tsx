import { memo } from 'react'
import { useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Typography } from '@mui/material'
import { AvatarUpload } from '@molecules/avatar-upload'
import { EmployeeProfileForm } from '@organisms/employee-profile-form'
import { useUser } from 'hooks/use-users'
import * as Styled from './employee-profile.styles'

const EmployeeProfile = () => {
  const { userId } = useParams()
  const { t } = useTranslation()
  const { user, loading } = useUser(userId)

  if (loading || !user) {
    // TODO: add loader
    return null
  }

  return (
    <>
      <AvatarUpload user={user} />
      <Styled.Profile>
        <Typography variant="h5">{user.profile.full_name}</Typography>
        <Typography>{user.email}</Typography>
        <Typography>
          {t('A member since')} {new Date(+user.created_at).toDateString()}
        </Typography>
      </Styled.Profile>
      <EmployeeProfileForm user={user} />
    </>
  )
}

export default memo(EmployeeProfile)
