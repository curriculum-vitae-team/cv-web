import { memo } from 'react'
import { useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Container, Tooltip, Typography } from '@mui/material'
import { Verified } from '@mui/icons-material'
import { AvatarUpload } from '@molecules/avatar-upload'
import { EmployeeProfileForm } from '@organisms/employee-profile-form'
import { useUser } from 'hooks/use-users'
import { PageLoader } from '@atoms/page-loader'
import * as Styled from './user-profile.styles'

const UserProfile = () => {
  const { userId } = useParams()
  const { t } = useTranslation()
  const { user, loading } = useUser(userId)

  if (loading || !user) {
    return <PageLoader />
  }

  return (
    <Container maxWidth="md">
      <AvatarUpload user={user} />
      <Styled.Profile>
        <Typography variant="h5">{user.profile.full_name}</Typography>
        <Styled.Email>
          {user.email}
          {user.is_verified && (
            <Tooltip arrow placement="top" title={t('Verified')}>
              <Verified />
            </Tooltip>
          )}
        </Styled.Email>
        <Typography>
          {t('A member since')} {new Date(+user.created_at).toDateString()}
        </Typography>
      </Styled.Profile>
      <EmployeeProfileForm user={user} />
    </Container>
  )
}

export default memo(UserProfile)
