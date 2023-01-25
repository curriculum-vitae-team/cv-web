import { Skeleton, TableCell, TableRow } from '@mui/material'

export const TableLoader = () => {
  return (
    <>
      {Array.from({ length: 8 }, (_, index) => (
        <TableRow key={index}>
          <TableCell colSpan={10}>
            <Skeleton variant="rounded" animation="wave" height={40} />
          </TableCell>
        </TableRow>
      ))}
    </>
  )
}
