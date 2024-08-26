import { Grow, Paper, type PaperProps } from '@mui/material'
import { forwardRef } from 'react'

export const DropdownPaper = forwardRef<HTMLDivElement, PaperProps>((props, ref) => {
  return (
    <Grow in>
      <Paper {...props} ref={ref} />
    </Grow>
  )
})
