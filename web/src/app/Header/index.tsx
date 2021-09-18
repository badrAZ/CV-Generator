// React libs
import React, { FC } from 'react'
import { Typography, AppBar, Toolbar, Button } from '@material-ui/core'
// Types
import * as Types from './index.type'

const Header: FC<Types.IProps> = () => {
  return (
    <div>
      <AppBar color='primary' position='static'>
        <Toolbar className='flex justify-between'>
          <div>
            <Typography variant='h6'>CV Generator</Typography>
          </div>
          <div />
          <div>
            <Button color='inherit' onClick={() => {}}>
              Login
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Header
