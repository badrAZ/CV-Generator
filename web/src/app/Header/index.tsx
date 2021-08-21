// React libs
import React, { FC, useCallback } from 'react'
import { Typography, AppBar, Toolbar, Button } from '@material-ui/core'
// Types
import * as Types from './index.type'
// Hooks
import useModal from '@hooks/useModal'

const Header: FC<Types.IProps> = () => {
  const { openModal: openLoginModal } = useModal()

  const onLogin = useCallback(() => {
    openLoginModal({
      body: <div>jnflkjfkljkdjfk</div>,
      title: <div>test</div>,
    }).then(
      () => {
        console.log('action')
      },
      () => {}
    )
  }, [openLoginModal])

  return (
    <div>
      <AppBar color='primary' position='static'>
        <Toolbar className='flex justify-between'>
          <div>
            <Typography variant='h6'>CV Generator</Typography>
          </div>
          <div />
          <div>
            <Button color='inherit' onClick={onLogin}>
              Login
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Header
