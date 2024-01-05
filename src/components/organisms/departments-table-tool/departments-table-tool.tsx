import { useTranslation } from 'react-i18next'
import { AddButton } from '@atoms/add-button'
import { SearchInput } from '@molecules/search-input'
import { useAuth } from 'hooks/use-auth.hook'
import { useDepartmentDialog } from '@dialogs/department'
import { useDepartmentCreate } from 'hooks/use-departments.hook'

export const DepartmentsTableTool = () => {
  const { isAdmin } = useAuth()
  const { t } = useTranslation()
  const [openDepartmentDialog] = useDepartmentDialog()
  const [createDepartment] = useDepartmentCreate()

  const handleClick = () => {
    openDepartmentDialog({
      title: 'Create department',
      confirmText: 'Create',
      onConfirm({ name }) {
        return createDepartment({
          variables: {
            department: { name }
          }
        })
      }
    })
  }

  return (
    <>
      <SearchInput />
      {isAdmin && <AddButton onClick={handleClick}>{t('Create department')}</AddButton>}
    </>
  )
}
