import { ButtonProps } from '@mui/material'
import { Add } from '@mui/icons-material'
import * as Styled from './add-button.styles'

export const AddButton = ({ children, ...props }: ButtonProps) => {
  return (
    <Styled.Button {...props} variant="text">
      <Add />
      <Styled.Label>{children}</Styled.Label>
    </Styled.Button>
  )
}
