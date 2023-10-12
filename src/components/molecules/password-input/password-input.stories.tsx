import { Meta, StoryObj } from '@storybook/react'
import { PasswordInput } from '.'

const meta: Meta<typeof PasswordInput> = {
  title: 'Molecules/PasswordInput',
  component: PasswordInput,
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
      table: { disable: true }
    },
    error: {
      control: { type: 'boolean' }
    },
    helperText: {
      if: { arg: 'error' }
    },
    hiddenLabel: {
      table: { disable: true }
    },
    margin: {
      table: { disable: true }
    },
    ref: {
      table: { disable: true }
    }
  }
}

export default meta
type Story = StoryObj<typeof PasswordInput>

export const Outlined: Story = {
  args: {
    variant: 'outlined',
    label: 'Password',
    disabled: false,
    focused: undefined,
    error: false,
    helperText: 'Error'
  }
}
