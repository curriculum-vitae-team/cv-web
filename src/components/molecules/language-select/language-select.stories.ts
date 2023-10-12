import { Meta, StoryObj } from '@storybook/react'
import 'i18n'
import { LanguageSelect } from './language-select'

const meta: Meta<typeof LanguageSelect> = {
  title: 'Molecules/LanguageSelect',
  component: LanguageSelect,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark',
      values: [{ name: 'dark', value: '#2e2e2e' }]
    }
  },
  argTypes: {
    disabled: {
      control: { type: 'boolean' }
    },
    focused: {
      table: { disable: true }
    },
    hiddenLabel: {
      table: { disable: true }
    },
    margin: {
      table: { disable: true }
    },
    ref: {
      table: { disable: true }
    },
    component: {
      table: { disable: true }
    }
  }
}

export default meta
type Story = StoryObj<typeof LanguageSelect>

export const Default: Story = {
  args: {
    disabled: false
  }
}
