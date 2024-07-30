import { memo, Suspense, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { generatePath, NavLink, Outlet, useLocation, useParams } from 'react-router-dom'
import { Tab } from '@mui/material'
import { PersonOutline } from '@mui/icons-material'
import { PageLoader } from '@atoms/page-loader'
import { useBreadcrumbs } from 'hooks/use-breadcrumbs'
import { routes } from 'constants/routes'
import { useUser } from 'hooks/use-users'
import * as Styled from './user.styles'

const User = () => {
  const location = useLocation()
  const { userId = '' } = useParams()
  const { t } = useTranslation()
  const { user } = useUser(userId)
  const profilePath = generatePath(routes.users.profile, { userId })
  const skillsPath = generatePath(routes.users.skills, { userId })
  const languagesPath = generatePath(routes.users.languages, { userId })
  const cvsPath = generatePath(routes.users.cvs, { userId })

  useBreadcrumbs(
    useMemo(
      () => ({
        [profilePath]: {
          text: user?.profile.full_name || user?.email,
          to: profilePath,
          color: 'primary',
          Icon: PersonOutline
        }
      }),
      [profilePath, user]
    )
  )

  return (
    <>
      <Styled.Tabs value={location.pathname} variant="scrollable" allowScrollButtonsMobile>
        <Tab value={profilePath} label={t('Profile')} component={NavLink} to={profilePath} />
        <Tab value={skillsPath} label={t('Skills')} component={NavLink} to={skillsPath} />
        <Tab value={languagesPath} label={t('Languages')} component={NavLink} to={languagesPath} />
        <Tab value={cvsPath} label={t('cvs')} component={NavLink} to={cvsPath} />
      </Styled.Tabs>
      <Suspense fallback={<PageLoader />}>
        <Outlet />
      </Suspense>
    </>
  )
}

export default memo(User)
