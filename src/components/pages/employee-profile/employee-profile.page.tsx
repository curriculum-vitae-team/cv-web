import { useParams } from 'react-router-dom'
import { useQuery } from '@apollo/client'
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Avatar,
  Chip,
  Typography
} from '@mui/material'
import { ExpandMore } from '@mui/icons-material'
import { USER } from '../../../graphql/users'
import { UserResult } from '../../../graphql/users/users.types'
import * as Styled from './employee-profile.styles'

const EmployeeProfile = () => {
  const { id } = useParams()
  const { data, loading } = useQuery<UserResult>(USER, { variables: { id } })

  return (
    <Styled.Profile>
      {loading ? (
        'loading'
      ) : (
        <>
          <Avatar src={data?.user.profile.avatar} sx={{ width: 60, height: 60 }}>
            {data?.user.profile.full_name?.[0] || data?.user.email[0]}
          </Avatar>
          <Typography variant="h5">{data?.user.profile.full_name}</Typography>
          <Typography>
            {data?.user.email}
          </Typography>
          <Typography>A member since {new Date(+data!.user.created_at).toDateString()}</Typography>
          <Typography>
            {data?.user.department_name || 'No Department'} /{' '}
            {data?.user.position_name || 'No Position'}
          </Typography>
          <div>
            <Accordion defaultExpanded>
              <AccordionSummary expandIcon={<ExpandMore />}>Skills</AccordionSummary>
              <AccordionDetails>
                {data?.user.profile.skills.map(({ skill_name, mastery }) => (
                  <Styled.AccordionItem key={skill_name}>
                    <Typography variant="body1" sx={{ mr: 2 }}>
                      {skill_name}
                    </Typography>
                    <Chip label={mastery} variant="outlined" size="small" />
                  </Styled.AccordionItem>
                ))}
              </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded>
              <AccordionSummary expandIcon={<ExpandMore />}>Languages</AccordionSummary>
              <AccordionDetails>
                {data?.user.profile.languages.map(({ language_name, proficiency }) => (
                  <Styled.AccordionItem key={language_name}>
                    {language_name} {proficiency}
                  </Styled.AccordionItem>
                ))}
              </AccordionDetails>
            </Accordion>
          </div>
        </>
      )}
    </Styled.Profile>
  )
}

export default EmployeeProfile
