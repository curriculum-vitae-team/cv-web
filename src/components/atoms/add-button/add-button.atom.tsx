import { FabProps, useMediaQuery, useTheme, Fab } from '@mui/material'
import { Add } from '@mui/icons-material'
import * as Styled from './add-button.styles'

export const AddButton = ({ children, ...props }: FabProps) => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <Fab size="medium" color="primary" variant={isMobile ? 'circular' : 'extended'} {...props}>
      <Add />
      <Styled.Label>{children}</Styled.Label>
    </Fab>
  )
}
