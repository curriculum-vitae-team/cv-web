import { Suspense } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { PageLoader } from '@atoms/page-loader'
import { routes } from 'constants/routes'
import { Auth } from '@pages/auth'
import { Login } from '@pages/login'
import { Signup } from '@pages/signup'
import { Layout } from '@templates/layout'
import { Users } from '@pages/users'
import { User } from '@pages/user'
import { UserProfile } from '@pages/user-profile'
import { UserSkills } from '@pages/user-skills'
import { UserLanguages } from '@pages/user-languages'
import { UserCvs } from '@pages/user-cvs'
import { Settings } from '@pages/settings'
import { Projects } from '@pages/projects'
import { Cvs } from '@pages/cvs'
import { Cv } from '@pages/cv'
import { CvDetails } from '@pages/cv-details'
import { CvPreview } from '@pages/cv-preview'
import { Departments } from '@pages/departments'
import { Positions } from '@pages/positions'
import { Skills } from '@pages/skills'
import { Languages } from '@pages/languages'
import { CvSkills } from '@pages/cv-skills'

export const Router = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path={routes.auth.root} element={<Auth />}>
            <Route path={routes.auth.login} element={<Login />} />
            <Route path={routes.auth.signup} element={<Signup />} />
          </Route>
          <Route element={<Layout />}>
            {/* <Route path={routes.root} element={<Home />} /> */}
            <Route path={routes.users.root}>
              <Route index element={<Users />} />
              <Route path={routes.users.user} element={<User />}>
                <Route path={routes.users.profile} element={<UserProfile />} />
                <Route path={routes.users.skills} element={<UserSkills />} />
                <Route path={routes.users.languages} element={<UserLanguages />} />
                <Route path={routes.users.cvs} element={<UserCvs />} />
                <Route index path="*" element={<Navigate to="profile" />} />
              </Route>
            </Route>
            <Route path={routes.settings} element={<Settings />} />
            <Route path={routes.projects.root}>
              <Route index element={<Projects />} />
              <Route path={routes.projects.project} element={null} />
            </Route>
            <Route path={routes.cvs.root}>
              <Route index element={<Cvs />} />
              <Route path={routes.cvs.cv} element={<Cv />}>
                <Route path={routes.cvs.details} element={<CvDetails />} />
                <Route path={routes.cvs.skills} element={<CvSkills />} />
                <Route path={routes.cvs.preview} element={<CvPreview />} />
                <Route index path="*" element={<Navigate to="details" />} />
              </Route>
            </Route>
            <Route path={routes.departments} element={<Departments />} />
            <Route path={routes.positions} element={<Positions />} />
            <Route path={routes.skills} element={<Skills />} />
            <Route path={routes.languages} element={<Languages />} />
          </Route>
          <Route path="*" element={<Navigate to={routes.users.root} />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}
