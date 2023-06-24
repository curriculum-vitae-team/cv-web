import { DatePickerProps as MuiDatePickerProps } from '@mui/x-date-pickers'

export type DatePickerProps = MuiDatePickerProps<string> & {
  name: string
  label: string
  error?: boolean
  helperText?: string
}
