import { memo, Suspense } from 'react'
import { useTranslation } from 'react-i18next'
import { NavLink, Outlet, useLocation, useParams } from 'react-router-dom'
import { useQuery } from '@apollo/client'
import { Tab } from '@mui/material'
import { PersonOutline } from '@mui/icons-material'
import { PageLoader } from '@atoms/page-loader'
import { useBreadcrumbs } from '@hooks/use-breadcrumbs.hook'
import { USER_FULL_NAME } from '@graphql/users'
import { UserResult } from '@graphql/users/users.types'
import * as Styled from './employee-details.styles'

const EmployeeDetails = () => {
  const location = useLocation()
  const { id } = useParams()
  const path = `/employees/${id}`
  const { t } = useTranslation()

  const { data } = useQuery<UserResult>(USER_FULL_NAME, { variables: { id } })
  useBreadcrumbs({
    [`employees/${id}`]: {
      text: data?.user.profile.full_name || data?.user.email,
      to: `employees/${id}/profile`,
      color: 'primary',
      Icon: PersonOutline
    }
  })

  return (
    <>
      <Styled.Tabs value={location.pathname}>
        <Tab value={`${path}/profile`} label={t('Profile')} component={NavLink} to="profile" />
        <Tab value={`${path}/skills`} label={t('skills')} component={NavLink} to="skills" />
        <Tab
          value={`${path}/languages`}
          label={t('languages')}
          component={NavLink}
          to="languages"
        />
        <Tab value={`${path}/cvs`} label={t('cvs')} component={NavLink} to="cvs" />
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
