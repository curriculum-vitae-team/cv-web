import { Button, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { NoResultsProps } from './no_results.types'
import * as Styled from './no_results.styles'

export const NoResults = ({ search, onReset }: NoResultsProps) => {
  const { t } = useTranslation()

  return (
    <Styled.NoResults>
      <Typography variant="h5">{t('No results found')}</Typography>
      {search && (
        <>
          <Typography>
            {t('Try another search, check the spelling or use a broarder term')}
          </Typography>
          <Button variant="text" color="secondary" onClick={onReset}>
            {t('Reset search')}
          </Button>
        </>
      )}
    </Styled.NoResults>
  )
}
