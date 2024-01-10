import { LinearProgressProps } from '@mui/material'

const colors: LinearProgressProps['color'][] = [
  'secondary',
  'info',
  'success',
  'warning',
  'primary'
]

export const getSkillColor = (index: number) => {
  return colors[index]
}
