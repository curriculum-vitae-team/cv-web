import { memo, Suspense } from 'react'
import { NavLink, Outlet, useLocation, useParams } from 'react-router-dom'
import { Tab } from '@mui/material'
import { PageLoader } from '../../atoms/page-loader'
import * as Styled from './employee-details.styles'

const EmployeeDetails = () => {
  const location = useLocation()
  const { id } = useParams()
  const path = `/employees/${id}`

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
