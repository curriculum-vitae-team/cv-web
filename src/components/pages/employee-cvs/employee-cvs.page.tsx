import { memo } from 'react'
import { useParams } from 'react-router-dom'
import { useQuery } from '@apollo/client'
import { CircularProgress } from '@mui/material'
import { USER_CVS } from 'graphql/users'
import { UserResult } from 'graphql/users/users.types'

const EmployeeCvs = () => {
  const { userId } = useParams()
  const { data, loading } = useQuery<UserResult>(USER_CVS, { variables: { userId } })

  if (!data || loading) {
    return <CircularProgress />
  }

  return (
    <div>
      {data.user.cvs?.map((cv) => (
        <div>{cv.name}</div>
      ))}
    </div>
  )
}

export default memo(EmployeeCvs)
