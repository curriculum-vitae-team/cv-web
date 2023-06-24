import { useTranslation } from 'react-i18next'
import { Button } from '@mui/material'
import { SearchInput } from '@molecules/search-input'
import { useUser } from '@hooks/use-user.hook'
import { useCreateSkillDialog } from '@dialogs/create-skill'

export const SkillsTableTool = () => {
  const { isAdmin } = useUser()
  const { t } = useTranslation()
  const [openCreateSkillDialog] = useCreateSkillDialog()

  const handleClick = () => {
    openCreateSkillDialog()
  }

  return (
    <>
      <SearchInput />
      {isAdmin && (
        <Button variant="outlined" onClick={handleClick}>
          {t('Create skill')}
        </Button>
      )}
    </>
  )
}
