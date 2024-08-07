import { memo } from 'react'
import { useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Tooltip, Typography } from '@mui/material'
import { Verified } from '@mui/icons-material'
import { AvatarUpload } from '@molecules/avatar-upload'
import { UserProfileForm } from '@organisms/user-profile-form'
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
    <Styled.Profile maxWidth="md">
      <AvatarUpload user={user} />
      <Styled.Details>
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
      </Styled.Details>
      <UserProfileForm user={user} />
    </Styled.Profile>
  )
}

export default memo(UserProfile)
