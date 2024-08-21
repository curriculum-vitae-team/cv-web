import { useTranslation } from 'react-i18next'
import { TableCell, TableRow } from '@mui/material'
import { Skill } from 'cv-graphql'
import { createSortLabel } from '@atoms/sort-label'

export const SkillsTableHead = () => {
  const { t } = useTranslation()

  return (
    <TableRow>
      <TableCell>{createSortLabel<Skill>('name', t('Name'))}</TableCell>
      <TableCell>{createSortLabel<Skill>('category_parent_name', t('Type'))}</TableCell>
      <TableCell>{createSortLabel<Skill>('category_name', t('Category'))}</TableCell>
      <TableCell />
    </TableRow>
  )
}
