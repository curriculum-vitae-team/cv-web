import { useTranslation } from 'react-i18next'
import { AddButton } from '@atoms/add-button'
import { SearchInput } from '@molecules/search-input'
import { usePositionDialog } from '@dialogs/position'
import { useAuth } from 'hooks/use-auth'
import { usePositionCreate } from 'hooks/use-positions.hook'

export const PositionsTableTool = () => {
  const { isAdmin } = useAuth()
  const { t } = useTranslation()
  const [openPositionDialog] = usePositionDialog()
  const [createPosition] = usePositionCreate()

  const handleClick = () => {
    openPositionDialog({
      title: 'Create position',
      confirmText: 'Create',
      onConfirm({ name }) {
        return createPosition({
          variables: {
            position: {
              name
            }
          }
        })
      }
    })
  }

  return (
    <>
      <SearchInput />
      {isAdmin && <AddButton onClick={handleClick}>{t('Create position')}</AddButton>}
    </>
  )
}
