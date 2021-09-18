// React libs
import React, { FC, useState } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
// Types
import * as Types from './App.type'
// Components
import Home from './Pages/Home/index'
import GenericModal from './Components/GenericModal'
// Contexts
import ModalContext, { defaultModalContextValue } from '@contexts/ModalContext'
// Common
import { homeRoute } from '@common/routes'

const App: FC<Types.IProps> = () => {
  const [modalProps, updateModalProps] = useState(defaultModalContextValue)

  return (
    <div>
      <ModalContext.Provider
        value={{ value: modalProps, setValue: updateModalProps }}
      >
        <GenericModal />
        <Router>
          <switch>
            <Route path={homeRoute}>
              <Home />
            </Route>
          </switch>
        </Router>
      </ModalContext.Provider>
    </div>
  )
}

export default App
