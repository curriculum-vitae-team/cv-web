import { memo, Suspense, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { generatePath, NavLink, Outlet, useLocation, useParams } from 'react-router-dom'
import { useQuery } from '@apollo/client'
import { Tab } from '@mui/material'
import { PersonOutline } from '@mui/icons-material'
import { PageLoader } from '@atoms/page-loader'
import { useBreadcrumbs } from 'hooks/use-breadcrumbs'
import { USER_FULL_NAME } from 'graphql/users'
import { UserResult } from 'graphql/users/users.types'
import { routes } from 'constants/routes'
import * as Styled from './employee-details.styles'

const EmployeeDetails = () => {
  const location = useLocation()
  const { userId = '' } = useParams()
  const { t } = useTranslation()
  const { data } = useQuery<UserResult>(USER_FULL_NAME, { variables: { userId } })
  const profilePath = generatePath(routes.users.profile, { userId })
  const skillsPath = generatePath(routes.users.skills, { userId })
  const languagesPath = generatePath(routes.users.languages, { userId })
  const cvsPath = generatePath(routes.users.cvs, { userId })

  useBreadcrumbs(
    useMemo(
      () => ({
        [generatePath(routes.users.user, { userId })]: {
          text: data?.user.profile.full_name || data?.user.email,
          to: profilePath,
          color: 'primary',
          Icon: PersonOutline
        }
      }),
      [data]
    )
  )

  return (
    <>
      <Styled.Tabs value={location.pathname}>
        <Tab value={profilePath} label={t('Profile')} component={NavLink} to={profilePath} />
        <Tab value={skillsPath} label={t('skills')} component={NavLink} to={skillsPath} />
        <Tab value={languagesPath} label={t('languages')} component={NavLink} to={languagesPath} />
        <Tab value={cvsPath} label={t('cvs')} component={NavLink} to={cvsPath} />
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
