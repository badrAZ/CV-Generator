// React libs
import React, { FC, useContext } from 'react'
import { Close } from '@material-ui/icons'
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
} from '@material-ui/core'
// Types
import * as Types from './index.type'
// Contexts
import ModalContext, { IModalContext } from '@contexts/ModalContext'

const GenericModal: FC<Types.IProps> = () => {
  const modalContext: IModalContext = useContext(ModalContext)
  return (
    <Dialog
      fullWidth
      open={modalContext.value.watcher !== undefined}
      onClose={modalContext.value.handleClose}
    >
      <DialogTitle>
        <div className='flex justify-between'>
          <div className='flex items-center'>{modalContext.value.title}</div>
          <IconButton
            edge='end'
            className='justify-self-end'
            onClick={modalContext.value.handleClose}
          >
            <Close />
          </IconButton>
        </div>
      </DialogTitle>
      <DialogContent dividers>{modalContext.value.body}</DialogContent>
      {modalContext.value.footer !== undefined && (
        <DialogActions>{modalContext.value.footer}</DialogActions>
      )}
    </Dialog>
  )
}

export default GenericModal
