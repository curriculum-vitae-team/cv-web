import { cloneElement } from 'react'
import { TableCell, TableRow } from '@mui/material'
import { TableRowDropdownProps } from './table_row_dropdown.types'

const withContentSx = {
  '& > td': {
    borderBottom: 'none'
  }
}

export const TableRowDropdown = ({ children, content }: TableRowDropdownProps) => {
  return (
    <>
      {cloneElement(children, { sx: content ? withContentSx : undefined })}
      {content && (
        <TableRow>
          <TableCell colSpan={10} sx={{ pt: 0 }}>
            {content}
          </TableCell>
        </TableRow>
      )}
    </>
  )
}
