// React libs
import React, { FC, useState } from 'react'
// Types
import * as Types from './App.type'
// Components
import GenericModal from './Components/GenericModal'
import Router from './Pages/Router/Router'
// Contexts
import ModalContext, { defaultModalContextValue } from '@contexts/ModalContext'

const App: FC<Types.IProps> = () => {
  const [modalProps, updateModalProps] = useState(defaultModalContextValue)

  return (
    <ModalContext.Provider
      value={{ value: modalProps, setValue: updateModalProps }}
    >
      <GenericModal />
      <Router />
    </ModalContext.Provider>
  )
}

export default App
