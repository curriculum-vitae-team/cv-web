import { Suspense } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { CircularProgress } from '@mui/material'
import { Auth } from '../pages/auth'
import { Login } from '../pages/login'
import { Signup } from '../pages/signup'
import { Layout } from '../templates/layout'
import { AuthGuard } from '../features/auth-guard'
import { Employees } from '../pages/employees'
import { EmployeeDetails } from '../pages/employee-details'
import { EmployeeProfile } from '../pages/employee-profile'
import { EmployeeSkills } from '../pages/employee-skills'
import { EmployeeCvs } from '../pages/employee-cvs'
import { Projects } from '../pages/projects'
import { CVsPage } from '../pages/cvs'

export const Router = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<CircularProgress />}>
        <Routes>
          <Route path="/auth" element={<Auth />}>
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
          </Route>
          <Route element={<Layout />}>
            <Route path="/employees" element={<AuthGuard />}>
              <Route index element={<Employees />} />
              <Route path=":id" element={<EmployeeDetails />}>
                <Route path="profile" element={<EmployeeProfile />} />
                <Route path="skills" element={<EmployeeSkills />} />
                <Route path="languages" />
                <Route path="cvs" element={<EmployeeCvs />} />
                <Route index path="*" element={<Navigate to="profile" />} />
              </Route>
            </Route>
            <Route path="/projects">
              <Route index element={<Projects />} />
              <Route path=":id" element={null} />
            </Route>
            <Route path="/cvs">
              <Route index element={<CVsPage />} />
              <Route path=":id" element={null} />
            </Route>
            <Route path="/departments" element={null} />
            <Route path="/positions" element={null} />
            <Route path="/skills" element={null} />
            <Route path="/languages" element={null} />
          </Route>
          <Route path="*" element={<Navigate to="/auth/login" />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}
