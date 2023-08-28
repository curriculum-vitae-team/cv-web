import { DatePickerProps as MuiDatePickerProps } from '@mui/x-date-pickers'
import { ControllerProps } from 'react-hook-form'

export type DatePickerProps = MuiDatePickerProps<string> & {
  name: string
  rules?: ControllerProps['rules']
  label: string
  error?: boolean
  helperText?: string
}
