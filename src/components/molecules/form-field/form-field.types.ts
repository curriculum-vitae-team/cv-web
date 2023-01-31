import { TextFieldProps } from '@mui/material'
import { ControllerProps } from 'react-hook-form'

export type FormFieldProps = TextFieldProps & Omit<ControllerProps, 'render'>
