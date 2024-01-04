import { Meta, StoryObj } from '@storybook/react'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import { Login } from '@pages/login'
import { Signup } from '@pages/signup'
import Auth from './auth.page'

const meta: Meta<typeof Auth> = {
  title: 'Pages/Auth',
  component: Auth,
  tags: ['autodocs'],
  parameters: {},
  decorators: [
    (story) => {
      return (
        <MemoryRouter initialEntries={['/auth/login']}>
          <Routes>
            <Route path="auth" element={story()}>
              <Route path="login" element={<Login />} />
              <Route path="signup" element={<Signup />} />
            </Route>
          </Routes>
        </MemoryRouter>
      )
    }
  ],
  argTypes: {}
}

export default meta
type Story = StoryObj<typeof Auth>

export const Default: Story = {
  args: {}
}
