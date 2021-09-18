// React libs
import React, { FC } from 'react'
// Types
import * as Types from './index.type'
// Components
import Header from '@app/Components/Header'

const Home: FC<Types.IProps> = () => {
  return (
    <div>
      <Header />
    </div>
  )
}

export default Home
