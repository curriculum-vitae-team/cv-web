import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { useController } from 'react-hook-form'
import { MenuItem, TextField } from '@mui/material'
import { usePositions } from 'hooks/use-positions.hook'
import { PositionSelectProps } from './position-select.types'

const PositionSelect = ({ name, ...props }: PositionSelectProps) => {
  const { t } = useTranslation()
  const { positions, loading } = usePositions()
  const { field } = useController({ name })
  const value = positions.length ? field.value : ''

  return (
    <TextField {...props} {...field} value={value} select disabled={loading} label={t('Position')}>
      <MenuItem value="">{t('No position')}</MenuItem>
      {positions.map(({ id, name }) => (
        <MenuItem key={id} value={id}>
          {name}
        </MenuItem>
      ))}
    </TextField>
  )
}

export default memo(PositionSelect)
