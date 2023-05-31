import { memo } from 'react'
import { Controller } from 'react-hook-form'
import { DatePicker as MuiDatePicker } from '@mui/x-date-pickers'
import { DatePickerProps } from './date-picker.types'

const DatePicker = ({ name, label, error, helperText, ...props }: DatePickerProps) => {
  return (
    <Controller
      name={name}
      render={({ field }) => (
        <MuiDatePicker
          {...props}
          {...field}
          label={label}
          slotProps={{
            textField: {
              error,
              helperText
            }
          }}
        />
      )}
    />
  )
}

export default memo(DatePicker)
