import { FC } from 'react'
import { ReactiveVar } from '@apollo/client'
import { DialogProps as MuiDialogProps } from '@mui/material'

export type DialogOptions = Omit<MuiDialogProps, 'open'>

export interface IDialog {
  id: number
  Component: FC
  options: DialogOptions
}

export type DialogProps = {
  closeDialog: () => void
}

export interface IDialogsService {
  dialogs$: ReactiveVar<IDialog[]>
  addDialog(Component: FC<DialogProps>, options: DialogOptions): void
  removeDialog(id: number): void
}
