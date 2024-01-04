import { Meta, StoryObj } from '@storybook/react'
import { MemoryRouter } from 'react-router-dom'
import { Signup } from '@pages/signup'

const meta: Meta<typeof Signup> = {
  title: 'Pages/Auth/Signup',
  component: Signup,
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
type Story = StoryObj<typeof Signup>

export const Default: Story = {
  args: {}
}
