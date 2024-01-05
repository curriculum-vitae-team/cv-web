import { Suspense } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { PageLoader } from '@atoms/page-loader'
import { routes } from 'constants/routes'
import { Auth } from '@pages/auth'
import { Login } from '@pages/login'
import { Signup } from '@pages/signup'
import { Layout } from '@templates/layout'
import { Settings } from '@pages/settings'
import { Employees } from '@pages/employees'
import { EmployeeDetails } from '@pages/employee-details'
import { EmployeeProfile } from '@pages/employee-profile'
import { EmployeeSkills } from '@pages/employee-skills'
import { EmployeeCvs } from '@pages/employee-cvs'
import { Projects } from '@pages/projects'
import { CVsPage } from '@pages/cvs'
import { Departments } from '@pages/departments'
import { Positions } from '@pages/positions'
import { Skills } from '@pages/skills'
import { Languages } from '@pages/languages'

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
            <Route path={routes.root} element={null} />
            <Route path={routes.users.root}>
              <Route index element={<Employees />} />
              <Route path={routes.users.user} element={<EmployeeDetails />}>
                <Route path={routes.users.profile} element={<EmployeeProfile />} />
                <Route path={routes.users.skills} element={<EmployeeSkills />} />
                <Route path={routes.users.languages} />
                <Route path={routes.users.cvs} element={<EmployeeCvs />} />
                <Route index path="*" element={<Navigate to="profile" />} />
              </Route>
            </Route>
            <Route path={routes.settings} element={<Settings />} />
            <Route path={routes.projects.root}>
              <Route index element={<Projects />} />
              <Route path={routes.projects.project} element={null} />
            </Route>
            <Route path={routes.cvs.root}>
              <Route index element={<CVsPage />} />
              <Route path={routes.cvs.cv} element={null} />
            </Route>
            <Route path={routes.departments} element={<Departments />} />
            <Route path={routes.positions} element={<Positions />} />
            <Route path={routes.skills} element={<Skills />} />
            <Route path={routes.languages} element={<Languages />} />
          </Route>
          <Route path="*" element={<Navigate to={routes.root} />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}
