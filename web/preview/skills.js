import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import PropTypes from 'prop-types'
import React from 'react'
import Row from 'react-bootstrap/Row'
import { ResponsiveCol } from 'common'

const Skills = ({ skills }) => (
  <Container fluid>
    {Object.entries(skills).map(([key, value]) => (
      <Row key={key}>
        <ResponsiveCol className='text-right' size={2}>
          <b>{key}</b>
        </ResponsiveCol>
        <Col>{value.join(', ')}</Col>
      </Row>
    ))}
  </Container>
)
Skills.propTypes = {
  skills: PropTypes.object,
}

export { Skills as default }
