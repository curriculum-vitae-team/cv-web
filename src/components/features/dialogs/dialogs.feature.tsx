import { Dialog } from '@mui/material'
import { Close } from '@mui/icons-material'
import { useReactiveVar } from '@apollo/client'
import { dialogsService } from 'graphql/dialogs/dialogs.service'
import * as Styled from './dialogs.styles'

export const Dialogs = () => {
  const dialogs = useReactiveVar(dialogsService.dialogs$)

  return (
    <>
      {dialogs.map(({ id, Component, options }) => {
        const closeModal = () => dialogsService.removeDialog(id)
        return (
          <Dialog key={id} open {...options} onClose={closeModal}>
            <Styled.CloseIcon onClick={closeModal}>
              <Close />
            </Styled.CloseIcon>
            <Component />
          </Dialog>
        )
      })}
    </>
  )
}
