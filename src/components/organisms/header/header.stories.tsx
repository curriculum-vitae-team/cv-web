import { useEffect } from 'react'
import { Meta, StoryObj } from '@storybook/react'
import 'i18n'
import { MemoryRouter } from 'react-router-dom'
import { authService } from 'graphql/auth/auth.service'
import { IUser } from 'interfaces/user.interface'
import { Header } from './header.organism'

const meta: Meta<typeof Header> = {
  title: 'Organisms/Header',
  component: Header,
  tags: ['autodocs'],
  parameters: {},
  decorators: [
    (story) => {
      useEffect(() => {
        authService.user$({
          email: '',
          profile: { first_name: 'FirstName', last_name: 'LastName' }
        } as IUser)
      }, [])

      return (
        <div style={{ height: 70 }}>
          <MemoryRouter>{story()}</MemoryRouter>
        </div>
      )
    }
  ],
  argTypes: {}
}

export default meta
type Story = StoryObj<typeof Header>

export const Default: Story = {
  args: {}
}
