import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { Button, DialogActions, DialogContent, DialogTitle } from '@mui/material'
import { ConfirmDialogProps } from './confirm.types'
import { createDialogHook } from '../../../helpers/create-dialog-hook.helper'

const ConfirmDialog: FC<ConfirmDialogProps> = ({
  dialogTitle,
  dialogContent,
  cancelText = 'Cancel',
  confirmText = 'Confirm',
  closeDialog,
  confirmCallback
}) => {
  const { t } = useTranslation()

  const handleConfirm = () => {
    closeDialog()
    confirmCallback()
  }

  return (
    <>
      <DialogTitle>{t(dialogTitle)}</DialogTitle>
      <DialogContent>{dialogContent}</DialogContent>
      <DialogActions>
        <Button variant="outlined" color="secondary" onClick={closeDialog}>
          {t(cancelText)}
        </Button>
        <Button variant="contained" color="primary" onClick={handleConfirm}>
          {t(confirmText)}
        </Button>
      </DialogActions>
    </>
  )
}

export const useConfirmDialog = createDialogHook<ConfirmDialogProps>(
  (props) => () => <ConfirmDialog {...props} />,
  { maxWidth: 'sm', fullWidth: true }
)
