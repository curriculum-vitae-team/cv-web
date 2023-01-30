import { FC } from 'react'
import { makeVar } from '@apollo/client'
import { DialogOptions, IDialog, IDialogsService } from './dialogs.types'

class DialogsService implements IDialogsService {
  dialogs$ = makeVar<IDialog[]>([])
  private id = 0

  addDialog(Component: FC, options: DialogOptions) {
    const dialogs = this.dialogs$()
    const id = (this.id += 1)
    this.dialogs$([...dialogs, { id, Component, options }])
    return id
  }

  removeDialog(id: number) {
    const dialogs = this.dialogs$()
    this.dialogs$(dialogs.filter((dialog) => dialog.id !== id))
  }
}

export const dialogsService = new DialogsService()
