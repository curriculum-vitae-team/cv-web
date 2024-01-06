import { memo } from 'react'
import { useParams } from 'react-router-dom'
import { CircularProgress } from '@mui/material'
import { useUserCvs } from 'hooks/use-users'

const EmployeeCvs = () => {
  const { userId = '' } = useParams()
  const { cvs, loading } = useUserCvs(userId)

  if (loading) {
    return <CircularProgress />
  }

  return (
    <div>
      {cvs.map((cv) => (
        <div>{cv.name}</div>
      ))}
    </div>
  )
}

export default memo(EmployeeCvs)
