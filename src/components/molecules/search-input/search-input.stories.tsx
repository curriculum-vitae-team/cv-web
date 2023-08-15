import { useState } from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { TableSearchContext } from '@templates/table/table.context'
import { SearchInput } from '.'

const meta: Meta<typeof SearchInput> = {
  title: 'Molecules/SearchInput',
  component: SearchInput,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  },
  decorators: [
    (story) => {
      const [search, setSearch] = useState('')

      return (
        <TableSearchContext.Provider value={{ search, setSearch }}>
          {story()}
        </TableSearchContext.Provider>
      )
    }
  ],
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
type Story = StoryObj<typeof SearchInput>

export const Outlined: Story = {
  args: {
    variant: 'outlined',
    placeholder: 'Search',
    disabled: false,
    focused: undefined
  }
}
