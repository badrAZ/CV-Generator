// React libs
import React, { FC } from 'react'
// Types
import * as Types from './index.type'
// Components
import AppBar from '../AppBar/AppBar'
import Header from '@app/Components/Header'

const AppLayout: FC<Types.IProps> = ({ children }) => (
  <div className='h-full w-full'>
    <div className='h-0.7/10'>
      <Header />
    </div>
    <div className='flex w-full h-9.3/10'>
      <AppBar />
      <div className='p-1 w-full h-full'>{children}</div>
    </div>
  </div>
)

export default AppLayout
