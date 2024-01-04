import { memo } from 'react'
import { useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Typography } from '@mui/material'
import { AvatarUpload } from '@molecules/avatar-upload'
import { EmployeeProfileForm } from '@organisms/employee-profile-form'
import { useUser } from 'hooks/use-users.hook'
import * as Styled from './employee-profile.styles'

const EmployeeProfile = () => {
  const { userId } = useParams()
  const { t } = useTranslation()
  const { data, loading } = useUser(userId)

  if (loading || !data) {
    // TODO: add loader
    return null
  }

  return (
    <>
      <AvatarUpload user={data.user} />
      <Styled.Profile>
        <Typography variant="h5">{data.user.profile.full_name}</Typography>
        <Typography>{data.user.email}</Typography>
        <Typography>
          {t('A member since')} {new Date(+data.user.created_at).toDateString()}
        </Typography>
      </Styled.Profile>
      <EmployeeProfileForm user={data.user} />
    </>
  )
}

export default memo(EmployeeProfile)
