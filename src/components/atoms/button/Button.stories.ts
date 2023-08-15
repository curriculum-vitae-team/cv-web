import { Button } from '@mui/material'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Button> = {
  title: 'Atoms/Button',
  component: Button,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: ['contained', 'outlined', 'text'],
      control: { type: 'select' }
    },
    color: {
      options: ['primary', 'secondary'],
      control: { type: 'select' }
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'If `true`, the component is displayed in disabled state.'
    }
  }
}

export default meta
type Story = StoryObj<typeof Button>

const args: Story['args'] = {
  color: 'primary',
  children: 'Button',
  disabled: false
}

export const Contained: Story = {
  args: {
    variant: 'contained',
    ...args
  }
}

export const Outlined: Story = {
  args: {
    variant: 'outlined',
    ...args
  }
}

export const Text: Story = {
  args: {
    variant: 'text',
    ...args
  }
}
