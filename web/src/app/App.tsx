// React libs
import React, { FC, useState } from 'react'
import { Close } from '@material-ui/icons'
import {
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
} from '@material-ui/core'
// Types
import * as Types from './App.type'
// Components
import Header from './Header'
// Contexts
import ModalContext, { defaultModalContextValue } from '@contexts/ModalContext'

const App: FC<Types.IProps> = () => {
  const [modalProps, updateModalProps] = useState(defaultModalContextValue)

  return (
    <div>
      <ModalContext.Provider
        value={{ value: modalProps, setValue: updateModalProps }}
      >
        <Header />
        <Dialog
          fullWidth
          open={modalProps.watcher !== undefined}
          onClose={modalProps.handleClose}
        >
          <DialogTitle>
            <div className='flex justify-between'>
              <div className='flex items-center'>{modalProps.title}</div>
              <IconButton
                edge='end'
                className='justify-self-end'
                onClick={modalProps.handleClose}
              >
                <Close />
              </IconButton>
            </div>
          </DialogTitle>
          <DialogContent dividers>{modalProps.body}</DialogContent>
        </Dialog>
      </ModalContext.Provider>
    </div>
  )
}

export default App
