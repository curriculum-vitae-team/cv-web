import { FC, memo, useCallback, useRef } from 'react'
import { dialogsService } from 'graphql/dialogs/dialogs.service'
import { DialogOptions } from 'graphql/dialogs/dialogs.types'

export const createDialogHook = <T>(Component: (props: T) => FC, dialogProps: DialogOptions) => {
  return function useDialog() {
    const idRef = useRef<number>()

    const closeDialog = useCallback(() => {
      if (idRef.current) {
        dialogsService.removeDialog(idRef.current)
      }
    }, [])

    const openDialog = useCallback((props?: Omit<T, 'closeDialog'>) => {
      idRef.current = dialogsService.addDialog(
        memo(Component({ ...props, closeDialog } as T)),
        dialogProps
      )
    }, [])

    return [openDialog, closeDialog]
  }
}
