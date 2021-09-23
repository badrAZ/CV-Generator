// React libs
import React, { FC } from 'react'
import { Typography, AppBar, Toolbar, Button } from '@mui/material'
import { Link } from 'react-router-dom'
// Types
import * as Types from './index.type'
// Common
import { homeRoute } from '@common/routes'

const Header: FC<Types.IProps> = () => {
  return (
    <AppBar color='primary' position='static' className='h-full relative'>
      <Toolbar className='flex justify-between'>
        <div>
          <Link to={homeRoute}>
            <Typography variant='h6' className='cursor-pointer'>
              CV Generator
            </Typography>
          </Link>
        </div>
        <div />
        <div>
          <Button color='inherit' onClick={() => {}} className='cursor-pointer'>
            Login
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  )
}

export default Header
