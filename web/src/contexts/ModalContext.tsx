import React, { createContext } from 'react'

export const defaultModalContextValue = {
  watcher: undefined,
  body: <div />,
  title: <div />,
  handleClose: () => {},
}

export interface IModalContext {
  value: {
    watcher: Promise<any> | undefined
    title: JSX.Element
    body: JSX.Element
    handleClose: (...args: any) => void
  }
  setValue: Function
}

const ModalContext = createContext<IModalContext>({
  value: defaultModalContextValue,
  setValue: () => {},
})

export default ModalContext
