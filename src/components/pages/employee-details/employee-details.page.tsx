import { memo, Suspense } from 'react'
import { NavLink, Outlet, useLocation, useParams } from 'react-router-dom'
import { useQuery } from '@apollo/client'
import { Tab } from '@mui/material'
import { PageLoader } from '../../atoms/page-loader'
import * as Styled from './employee-details.styles'
import { useBreadcrumbs } from '../../../hooks/use-breadcrumbs.hook'
import { USER_FULL_NAME } from '../../../graphql/users'
import { UserResult } from '../../../graphql/users/users.types'

const EmployeeDetails = () => {
  const location = useLocation()
  const { id } = useParams()
  const path = `/employees/${id}`

  const { data } = useQuery<UserResult>(USER_FULL_NAME, { variables: { id } })
  useBreadcrumbs({
    [`employees/${id}`]: data?.user.profile.full_name || data?.user.email
  })

  return (
    <>
      <Styled.Tabs value={location.pathname}>
        <Tab value={`${path}/profile`} label="Profile" component={NavLink} to="profile" />
        <Tab value={`${path}/skills`} label="Skills" component={NavLink} to="skills" />
        <Tab value={`${path}/languages`} label="Languages" component={NavLink} to="languages" />
        <Tab value={`${path}/cvs`} label="CVs" component={NavLink} to="cvs" />
      </Styled.Tabs>
      <Styled.Details>
        <Suspense fallback={<PageLoader />}>
          <Outlet />
        </Suspense>
      </Styled.Details>
    </>
  )
}

export default memo(EmployeeDetails)
