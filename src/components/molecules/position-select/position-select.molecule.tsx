import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { Controller } from 'react-hook-form'
import { MenuItem, TextField } from '@mui/material'
import { usePositions } from 'hooks/use-positions.hook'
import { PositionSelectProps } from './position-select.types'

const PositionSelect = ({ name, ...props }: PositionSelectProps) => {
  const { t } = useTranslation()
  const { data, loading } = usePositions()

  return (
    <Controller
      name={name}
      render={({ field }) => (
        <TextField {...props} {...field} select disabled={loading} label={t('Position')}>
          <MenuItem value="">{t('No Position')}</MenuItem>
          {data?.positions.map(({ id, name }) => (
            <MenuItem key={id} value={id}>
              {name}
            </MenuItem>
          ))}
        </TextField>
      )}
    />
  )
}

export default memo(PositionSelect)
