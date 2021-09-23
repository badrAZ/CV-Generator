// React libs
import React, { FC } from 'react'
import { Document, Page, Font } from '@react-pdf/renderer'
// Components
import GlobalInfo from './GlobalInfo/index'
// Types
import * as Types from './index.type'
// Styles
import styles from './styles'

Font.register({
  family: 'Helvetica Neue',
  fonts: [
    {
      src: require('@resources/fonts/Helvetica.otf').default,
    },
    {
      src: require('@resources/fonts/HelveticaBold.otf').default,
      fontStyle: 'bold',
    },
    {
      src: require('@resources/fonts/HelveticaOblique.otf').default,
      fontStyle: 'italic',
    },
  ],
})

const Awesome: FC<Types.IProps> = ({ data }) => (
  <Document>
    <Page style={styles.rootPage}>
      <GlobalInfo data={data.global} />
    </Page>
  </Document>
)

export default Awesome
