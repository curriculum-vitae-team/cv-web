import { Suspense } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { PageLoader } from '@atoms/page-loader'
import { Auth } from '@pages/auth'
import { Login } from '@pages/login'
import { Signup } from '@pages/signup'
import { Layout } from '@templates/layout'
import { AuthGuard } from '@features/auth-guard'
import { Employees } from '@pages/employees'
import { EmployeeDetails } from '@pages/employee-details'
import { EmployeeProfile } from '@pages/employee-profile'
import { EmployeeSkills } from '@pages/employee-skills'
import { EmployeeCvs } from '@pages/employee-cvs'
import { Projects } from '@pages/projects'
import { CVsPage } from '@pages/cvs'
import { Positions } from '@pages/positions'
import { Skills } from '@pages/skills'
import { Languages } from '@pages/languages'
import { Departments } from '@pages/departments'

export const Router = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/auth" element={<Auth />}>
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
          </Route>
          <Route element={<Layout />}>
            <Route path="/employees" element={<AuthGuard />}>
              <Route index element={<Employees />} />
              <Route path=":userId" element={<EmployeeDetails />}>
                <Route path="profile" element={<EmployeeProfile />} />
                <Route path="skills" element={<EmployeeSkills />} />
                <Route path="languages" />
                <Route path="cvs" element={<EmployeeCvs />} />
                <Route index path="*" element={<Navigate to="profile" />} />
              </Route>
            </Route>
            <Route path="/projects" element={<AuthGuard />}>
              <Route index element={<Projects />} />
              <Route path=":projectId" element={null} />
            </Route>
            <Route path="/cvs" element={<AuthGuard />}>
              <Route index element={<CVsPage />} />
              <Route path=":cvId" element={null} />
            </Route>
            <Route path="/departments" element={<AuthGuard />}>
              <Route index element={<Departments />} />
            </Route>
            <Route path="/positions" element={<AuthGuard />}>
              <Route index element={<Positions />} />
            </Route>
            <Route path="/skills" element={<AuthGuard />}>
              <Route index element={<Skills />} />
            </Route>
            <Route path="/languages" element={<AuthGuard />}>
              <Route index element={<Languages />} />
            </Route>
          </Route>
          <Route path="*" element={<Navigate to="/auth/login" />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}
