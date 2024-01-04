import { useTranslation } from 'react-i18next'
import { AddButton } from '@atoms/add-button'
import { SearchInput } from '@molecules/search-input'
import { useSkillDialog } from '@dialogs/skill'
import { useAuth } from 'hooks/use-auth.hook'

export const SkillsTableTool = () => {
  const { isAdmin } = useAuth()
  const { t } = useTranslation()
  const [openSkillDialog] = useSkillDialog()

  const handleClick = () => {
    openSkillDialog()
  }

  return (
    <>
      <SearchInput />
      {isAdmin && <AddButton onClick={handleClick}>{t('Create skill')}</AddButton>}
    </>
  )
}
