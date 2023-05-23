import { memo } from 'react'
import { useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useQuery } from '@apollo/client'
import { Typography } from '@mui/material'
import { USER } from '@graphql/users'
import { UserResult } from '@graphql/users/users.types'
import { AvatarUpload } from '@molecules/avatar-upload'
import { EmployeeProfileForm } from '@organisms/employee-profile-form'
import { useDepartments } from '@hooks/use-departments.hook'
import { usePositions } from '@hooks/use-positions.hook'
import * as Styled from './employee-profile.styles'

const EmployeeProfile = () => {
  const { id } = useParams()
  const { t } = useTranslation()
  const { data, loading } = useQuery<UserResult>(USER, { variables: { id } })
  const [departments, loadingDepartments] = useDepartments()
  const [positions, loadingPositions] = usePositions()

  if (loading || !data || loadingDepartments || loadingPositions) {
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
      <EmployeeProfileForm user={data.user} departments={departments} positions={positions} />
    </>
  )
}

export default memo(EmployeeProfile)
