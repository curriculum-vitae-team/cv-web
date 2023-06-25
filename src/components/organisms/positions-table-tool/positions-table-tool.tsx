import { useTranslation } from 'react-i18next'
import { Button } from '@mui/material'
import { SearchInput } from '@molecules/search-input'
import { usePositionDialog } from '@dialogs/position'
import { useUser } from 'hooks/use-user.hook'

export const PositionsTableTool = () => {
  const { isAdmin } = useUser()
  const { t } = useTranslation()
  const [openPositionDialog] = usePositionDialog()

  const handleClick = () => {
    openPositionDialog()
  }

  return (
    <>
      <SearchInput />
      {isAdmin && (
        <Button variant="outlined" onClick={handleClick}>
          {t('Create position')}
        </Button>
      )}
    </>
  )
}
