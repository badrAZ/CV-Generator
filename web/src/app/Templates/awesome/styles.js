// React libs
import { StyleSheet } from '@react-pdf/renderer'
// Common
import { awesomeColor, centered, inlined } from '@common/PDFStyles'

const styles = StyleSheet.create({
  rootPage: {
    padding: '2vh',
    fontFamily: 'Helvetica Neue',
  },

  centered,
  inlined,

  // globalInfo
  globalInfoRoot: centered,
  globalInfoFullName: inlined,
  globalInfoFirstName: {
    fontSize: 24,
    marginRight: '2em',
  },
  globalInfoLastName: {
    fontSize: 24,
    fontStyle: 'bold',
  },
  globalInfoPost: {
    fontSize: 11,
    color: awesomeColor,
  },
  globalInfoAddress: {
    fontSize: 11,
    fontStyle: 'italic',
  },
  globalInfoContact: {
    ...inlined,
    fontSize: 11,
  },
  globalInfoContactText: {
    marginRight: '5em',
  },
  globalInfoContactIcon: {
    fontSize: 13,
    marginRight: '3em',
  },
  globalInfoContactLink: {
    textDecoration: 'none',
    color: 'black',
  },
})

export default styles
