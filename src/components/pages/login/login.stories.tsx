import { Meta, StoryObj } from '@storybook/react'
import { MemoryRouter } from 'react-router-dom'
import { Login } from '@pages/login'

const meta: Meta<typeof Login> = {
  title: 'Pages/Auth/Login',
  component: Login,
  tags: ['autodocs'],
  parameters: {},
  decorators: [
    (story) => {
      return <MemoryRouter>{story()}</MemoryRouter>
    }
  ],
  argTypes: {}
}

export default meta
type Story = StoryObj<typeof Login>

export const Default: Story = {
  args: {}
}
