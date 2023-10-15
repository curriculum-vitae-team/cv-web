import { useTranslation } from 'react-i18next'
import { AddButton } from '@atoms/add-button'
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
      {isAdmin && <AddButton onClick={handleClick}>{t('Create position')}</AddButton>}
    </>
  )
}
