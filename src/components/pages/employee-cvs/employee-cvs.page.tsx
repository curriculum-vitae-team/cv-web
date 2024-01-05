import { memo } from 'react'
import { useParams } from 'react-router-dom'
import { CircularProgress } from '@mui/material'
import { useUserCvs } from 'hooks/use-users.hook'

const EmployeeCvs = () => {
  const { userId = '' } = useParams()
  const { data, loading } = useUserCvs(userId)

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
