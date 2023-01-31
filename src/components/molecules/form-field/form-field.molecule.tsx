import { TextField } from '@mui/material'
import { Controller } from 'react-hook-form'
import { FormFieldProps } from './form-field.types'

const FormField = ({ name, ...props }: FormFieldProps) => {
  return <Controller name={name} render={({ field }) => <TextField {...props} {...field} />} />
}

export default FormField
