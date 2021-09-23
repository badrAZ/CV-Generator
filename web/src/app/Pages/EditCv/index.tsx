// React libs
import React, { FC } from 'react'
import { PDFViewer } from '@react-pdf/renderer'
// Components
import Awesome from '@app/Templates/awesome'
import AppLayout from '@app/Components/AppLayout'
// Types
import * as Types from './index.type'

const EditCv: FC<Types.IProps> = () => (
  <AppLayout>
    <div className='flex w-full h-full'>
      <div className='w-1/2 h-full'></div>
      <div className='w-1/2 h-full'>
        <PDFViewer width='100%' height='100%'>
          <Awesome data={require('./data.json')} />
        </PDFViewer>
      </div>
    </div>
  </AppLayout>
)

export default EditCv
