// React libs
import React, { FC } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
// Types
import * as Types from './Router.type'
// Components
import Home from '../Home'
import EditCv from '../EditCv'
// Common
import { homeRoute, editCvRoute } from '@common/routes'

const Router: FC<Types.IProps> = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path={homeRoute}>
        <Home />
      </Route>
      <Route path={editCvRoute}>
        <EditCv />
      </Route>
    </Switch>
  </BrowserRouter>
)

export default Router
