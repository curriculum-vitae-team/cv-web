import { memo } from 'react'
import { useParams } from 'react-router-dom'
import { useQuery } from '@apollo/client'
import { Avatar, CircularProgress, Typography } from '@mui/material'
import { USER } from '../../../graphql/users'
import { UserResult } from '../../../graphql/users/users.types'
import * as Styled from './employee-profile.styles'

const EmployeeProfile = () => {
  const { id } = useParams()
  const { data, loading } = useQuery<UserResult>(USER, { variables: { id } })

  if (loading || !data) {
    return <CircularProgress />
  }

  return (
    <Styled.Profile>
      <Avatar src={data.user.profile.avatar} sx={{ width: 60, height: 60 }}>
        {data.user.profile.full_name?.[0] || data.user.email[0]}
      </Avatar>
      <Typography variant="h5">{data.user.profile.full_name}</Typography>
      <Typography>{data.user.email}</Typography>
      <Typography>A member since {new Date(+data.user.created_at).toDateString()}</Typography>
      <Typography>
        {data.user.department_name || 'No Department'} / {data.user.position_name || 'No Position'}
      </Typography>
    </Styled.Profile>
  )
}

export default memo(EmployeeProfile)
