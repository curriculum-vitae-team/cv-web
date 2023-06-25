import { memo } from 'react'
import { useParams } from 'react-router-dom'
import { useQuery } from '@apollo/client'
import { Chip, CircularProgress, Typography } from '@mui/material'
import { USER } from 'graphql/users'
import { UserResult } from 'graphql/users/users.types'
import * as Styled from './employee-skills.styles'

const EmployeeSkills = () => {
  const { id } = useParams()
  const { data, loading } = useQuery<UserResult>(USER, { variables: { id } })

  if (loading || !data) {
    return <CircularProgress />
  }

  return (
    <div>
      {data?.user.profile.skills.map(({ skill_name, mastery }) => (
        <Styled.Skill key={skill_name}>
          <Typography variant="body1" sx={{ mr: 2 }}>
            {skill_name}
          </Typography>
          <Chip label={mastery} variant="outlined" size="small" />
        </Styled.Skill>
      ))}
    </div>
  )
}

export default memo(EmployeeSkills)
