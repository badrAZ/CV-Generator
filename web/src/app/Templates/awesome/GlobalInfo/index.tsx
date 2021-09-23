// React libs
import React, { FC } from 'react'
import { View, Text, Link, Image } from '@react-pdf/renderer'
// Types
import * as Types from './index.type'
// Styles
import styles from '../styles'
// Icons
import telIcon from '@resources/icons/smartphone.png'
import emailIcon from '@resources/icons/email.png'
import githubIcon from '@resources/icons/github.png'

const GlobalInfo: FC<Types.IProps> = ({ data }) => (
  <View style={styles.globalInfoRoot}>
    <View style={styles.globalInfoFullName}>
      <Text style={styles.globalInfoFirstName}>{data.firstName}</Text>
      <Text style={styles.globalInfoLastName}>
        {data.lastName.toUpperCase()}
      </Text>
    </View>

    <Text style={styles.globalInfoPost}>{data.post}</Text>

    <Text style={styles.globalInfoAddress}>{data.address}</Text>

    <View style={styles.globalInfoContact}>
      <Text style={styles.globalInfoContactIcon}>
        <Image src={telIcon} />
      </Text>
      <Text style={styles.globalInfoContactText}>{data.tel}</Text>

      <Text style={styles.globalInfoContactText}>|</Text>

      <Text style={styles.globalInfoContactIcon}>
        <Image src={emailIcon} />
      </Text>
      <Link
        style={{
          ...styles.globalInfoContactLink,
          ...styles.globalInfoContactText,
        }}
        src={`mailto:${data.mail}`}
      >
        {data.mail}
      </Link>

      <Text style={styles.globalInfoContactText}>|</Text>

      <Text style={styles.globalInfoContactIcon}>
        <Image src={githubIcon} />
      </Text>
      <Link
        style={styles.globalInfoContactLink}
        src={`https://github.com/${data.github}`}
      >
        {data.github}
      </Link>
    </View>
  </View>
)

export default GlobalInfo
