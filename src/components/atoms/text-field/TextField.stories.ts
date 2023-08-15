import { TextField } from '@mui/material'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof TextField> = {
  title: 'Atoms/TextField',
  component: TextField,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    variant: {
      options: ['outlined'],
      control: { type: 'select' }
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'If `true`, the component is displayed in disabled state.'
    },
    focused: {
      control: { type: 'boolean' },
      description: 'If `true`, the component is displayed in focused state.'
    },
    error: {
      control: { type: 'boolean' }
    },
    helperText: {
      if: { arg: 'error' }
    }
  }
}

export default meta
type Story = StoryObj<typeof TextField>

export const Outlined: Story = {
  args: {
    variant: 'outlined',
    label: 'TextField',
    disabled: false,
    focused: undefined,
    error: false,
    helperText: 'Error'
  }
}
