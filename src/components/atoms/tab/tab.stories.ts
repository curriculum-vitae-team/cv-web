import { Tab } from '@mui/material'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Tab> = {
  title: 'Atoms/Tab',
  component: Tab,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {}
}

export default meta
type Story = StoryObj<typeof Tab>

const args: Story['args'] = {
  //   color: 'primary',
  label: 'Tab',
  disabled: false
}

export const Default: Story = {
  args: {
    // variant: 'contained',
    ...args
  }
}

// export const Outlined: Story = {
//   args: {
//     variant: 'outlined',
//     ...args
//   }
// }

// export const Text: Story = {
//   args: {
//     variant: 'text',
//     ...args
//   }
// }
