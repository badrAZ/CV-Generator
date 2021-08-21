// React libs
import { useCallback, useContext } from 'react'

// Contexts
import ModalContext, { defaultModalContextValue } from '@contexts/ModalContext'

export interface IUseModal {}

const useModal = () => {
  const { value, setValue } = useContext(ModalContext)
  const openModal = useCallback(
    ({
      title,
      body,
      footer,
    }: {
      footer: JSX.Element
      title: JSX.Element
      body: JSX.Element
    }) => {
      if (value.watcher !== undefined) {
        // cannot open two modals
        return Promise.reject()
      }

      let resolve: any
      const watcher = new Promise(res => {
        resolve = res
      })

      setValue({
        footer,
        body,
        title,
        watcher,
        handleClose: () => {
          resolve?.()
          setValue(defaultModalContextValue)
        },
      })

      return watcher
    },
    [setValue, value]
  )

  return { openModal }
}

export default useModal
